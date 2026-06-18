import React,{
    createContext,
    ReactNode,
    useContext,
    useState,
} from "react";

import {
    getCurrentWeather,
    getHourlyForecast,
    getWeeklyForecast
} from '../services/weatherService';

import {
    CurrentCity,
    DailyForecastItem,
    HourlyForecastItem,
    TemperatureUnit,
    WeatherContextData,
    WeatherData,
} from '../@types/weather';

const WeatherContext = createContext<WeatherContextData | undefined>(
    undefined
);

interface WeatherProviderProps {
    children: ReactNode;
}

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [currentCity, setCurrentCity] = useState<CurrentCity | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecastItem[]>(
    []
  );
  const [weeklyForecast, setWeeklyForecast] = useState<DailyForecastItem[]>(
    []
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unit, setUnit] = useState<TemperatureUnit>('metric');

  async function loadWeather (city: string){
    setIsLoading(true);
    setError(null);

    try{
        const { city: cityInfo, weather } = await getCurrentWeather(
        city,
        unit
      );
      const hourly = await getHourlyForecast(city, unit);
      const weekly = await getWeeklyForecast(
        cityInfo.lat,
        cityInfo.lon,
        unit
      );
 
      setCurrentCity(cityInfo);
      setWeatherData(weather);
      setHourlyForecast(hourly);
      setWeeklyForecast(weekly);
    } catch (err: any) {
      setError(mapErrorMessage(err));
    } finally {
      setIsLoading(false);
    }
}

function toggleUnit() {
    const nextUnit: TemperatureUnit =
    unit === 'metric' ? 'imperial' : 'metric';
    setUnit(nextUnit);

    if (currentCity) {
        const cityQuery = `${currentCity.name},${currentCity.country}`;
        setIsLoading(true);
        setError(null);

        Promise.all([
            getCurrentWeather(cityQuery, nextUnit),
            getHourlyForecast(cityQuery, nextUnit),
        ]).then(async ([currentResult, hourly]) => {
          const weekly = await getWeeklyForecast(
            currentResult.city.lat,
            currentResult.city.lon,
            nextUnit
          );
            setCurrentCity(currentResult.city);
            setWeatherData(currentResult.weather);
            setHourlyForecast(hourly);
            setWeeklyForecast(weekly);
        })
        .catch((err) => setError(mapErrorMessage(err)))
        .finally(() => setIsLoading(false));
    }
}

    return (
    <WeatherContext.Provider
      value={{
        currentCity,
        weatherData,
        hourlyForecast,
        weeklyForecast,
        isLoading,
        error,
        unit,
        loadWeather,
        toggleUnit,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}


export function useWeather(): WeatherContextData {
  const context = useContext(WeatherContext);
 
  if (context === undefined) {
    throw new Error(
      'useWeather() deve ser usado dentro de um <WeatherProvider>. ' +
        'Confira se o componente está envolvido pelo Provider no App.tsx.'
    );
  }
  return context;
}

function mapErrorMessage(err: any): string {
  if (err.response?.status === 401) {
    return 'Chave de API inválida. Verifique a configuração do app.';
  }
  if (err.response?.status === 404) {
    return 'Cidade não encontrada.';
  }
  if (err.code === 'ECONNABORTED') {
    return 'Sem conexão. Verifique sua internet.';
  }
  return 'Ocorreu um erro inesperado. Tente novamente.';
}
    