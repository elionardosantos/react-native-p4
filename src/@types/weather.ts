// unidade de medida de temperatura do app
export type TemperatureUnit = 'metric' | 'imperial';

//cidade selecionada no app
export interface CurrentCity {
    name: string;
    country: string;
    lat: number;
    lon: number;
}
//condição climática ("clear", "clouds", "rain")
export interface WeatherCondition {
    main: string;
    description: string;
    icon: string;
}

//retorno bruto da api, dados climáticos de uma cidade
export interface WeatherData {
    temperatura: number;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    windDirection: number;
    uvIndex: number | null;
    visibility: number;
    condition: WeatherCondition;
}

export interface HourlyForecastItem {
  time: string;
  temperature: number;
  condition: WeatherCondition;
}
 
// Um item da previsão diária (lista vertical de 7 dias / 5 dias)
export interface DailyForecastItem {
  day: string;
  tempMin: number;
  tempMax: number;
  condition: WeatherCondition;
}
 
export interface WeatherContextData {
  currentCity: CurrentCity | null;
  weatherData: WeatherData | null;
  hourlyForecast: HourlyForecastItem[];
  weeklyForecast: DailyForecastItem[];
  isLoading: boolean;
  error: string | null;
  unit: TemperatureUnit;
  loadWeather: (city: string) => Promise<void>;
  toggleUnit: () => void;
}