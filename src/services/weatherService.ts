import axios from 'axios';
import{
    CurrentCity,
    DailyForecastItem,
    HourlyForecastItem,
    TemperatureUnit,
    WeatherCondition,
    WeatherData,
} from '../@types/weather';

const API_KEY = process.env.EXPO_PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = process.env.EXPO_PUBLIC_OPENWEATHER_BASE_URL;

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
});

function mapCondition(rawWeatherArray: any[]): WeatherCondition {
  const raw = rawWeatherArray[0];
  return {
    main: raw.main,
    description: raw.description,
    icon: raw.icon,
  };
}

export async function getCurrentWeather(
  city: string,
  unit: TemperatureUnit = 'metric'
): Promise<{city: CurrentCity; weather: WeatherData}> {
  const response = await api.get('/weather', {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
      lang: 'pt_br',
    },
  });

  const data = response.data;
 
  const cityInfo: CurrentCity = {
    name: data.name,
    country: data.sys.country,
    lat: data.coord.lat,
    lon: data.coord.lon,
  };

  const weather: WeatherData = {
    temperatura: data.main.temp,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    windDirection: data.wind.deg,
    uvIndex: null, 
    visibility: data.visibility / 1000, 
    condition: mapCondition(data.weather),
  };

  return {city: cityInfo, weather}
}

export async function getHourlyForecast(
    city: string,
    unit: TemperatureUnit = 'metric'
): Promise<HourlyForecastItem[]> {
    const response = await api.get('/forecast', {
    params: {
      q: city,
      appid: API_KEY,
      units: unit,
      lang: 'pt_br',
    },
  });

  const list = response.data.list as any[];

  return list.map((item) => ({
    time: item.dt_txt,
    temperature: item.main.temp,
    condition: mapCondition(item.weather),
  }))
}

export async function getWeeklyForecast(
    lat: number,
    lon: number,
    unit: TemperatureUnit = 'metric'
): Promise<DailyForecastItem[]> {
    const response = await api.get('/forecast', {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: unit,
      lang: 'pt_br',
    },
  });

  const list = response.data.list as any[];

  const groupedByDay = new Map<string, any[]>();
  list.forEach((item) => {
    const dateKey = item.dt_txt.split(' ')[0];
    if (!groupedByDay.has(dateKey)) groupedByDay.set(dateKey, []);
    groupedByDay.get(dateKey)!.push(item);
  });

  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const daily: DailyForecastItem[] = Array.from(groupedByDay.entries()).map(
    ([dateKey, items]) => {
      const temps = items.map((i) => i.main.temp);
      const dayOfWeek = new Date(dateKey).getDay();
      const midday =
        items.find((i) => i.dt_txt.includes('12:00:00')) ?? items[0];
 
      return {
        day: dayNames[dayOfWeek],
        tempMin: Math.min(...temps),
        tempMax: Math.max(...temps),
        condition: mapCondition(midday.weather),
      };
    }
  );

  return daily;
}
