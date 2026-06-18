# Divisão de Tarefas — App de Previsão do Tempo

**Curso:** Programador Fullstack  
**Tecnologia:** React Native  
**Integrantes:** 7

---

## Elionardo — Setup & Navegação

> Estrutura base do projeto

- Criar o projeto React Native e instalar dependências (React Navigation, Axios, AsyncStorage)
- Configurar Stack Navigator entre telas
- Configurar Tab Navigator (Início, Buscar, Favoritos)
- Criar arquivo de rotas e estrutura de pastas do projeto

**Requisitos cobertos:** 2 tipos de navegação

---

## Caio Vinícius Dias — API & Contexto

> Camada de dados e estado global

- Criar serviço de requisição à API de clima (ex: OpenWeatherMap)
- Criar `WeatherContext` com Provider e hook `useWeather`
- Salvar cidade atual e dados do clima no contexto
- Documentar como usar o contexto nas outras telas

**Requisitos cobertos:** Requisição à API · Context API

---

## Gabriel Botelho — Tela Inicial (Parte 1)

> Cabeçalho e dados principais

- Componente `WeatherHeader`: cidade, temperatura, ícone e descrição
- Componente `WeatherStats`: cards de Umidade, Vento, UV e Visibilidade
- Estilizar com CSS puro seguindo o layout do mockup (fundo escuro)
- Conectar ao contexto para exibir dados reais

**Requisitos cobertos:** Componentizar · CSS puro

---

## Bernardo da Silva — Tela Inicial (Parte 2)

> Previsões e cidades rápidas

- Componente `HourlyForecast`: scroll horizontal com hora, ícone e temperatura
- Componente `WeeklyForecast`: lista dos próximos 7 dias com mín/máx e barra
- Componente `QuickCities`: chips clicáveis de cidades rápidas
- Estilizar com CSS puro e integrar ao contexto

**Requisitos cobertos:** Componentizar · CSS puro

---

## Marcelo Mayrinck — Tela de Busca

> Pesquisa de cidades

- Componente `SearchBar`: input de texto com ícone e estilo
- Componente `CityList`: lista de cidades populares e resultados de busca
- Fazer requisição à API ao selecionar uma cidade e atualizar o contexto
- Navegar para a tela inicial ao selecionar uma cidade

**Requisitos cobertos:** Requisição à API · Componentizar

---

## Valois — Tela de Favoritos

> Persistência de cidades favoritas

- Componente `FavoriteCard`: card com cidade, condição e temperatura
- Salvar e ler lista de favoritos no AsyncStorage
- Botão "+ Adicionar" e botão de remover (lixeira) em cada card
- Buscar dados atuais de cada favorito via API ao abrir a tela

**Requisitos cobertos:** AsyncStorage · Requisição à API

---

## Wallace Ildefonso — Componentes Globais & Integração Final

> Partes compartilhadas por todo o app

- Componente `BottomTabBar`: barra de navegação inferior customizada
- Componente `WeatherIcon`: ícone reutilizável que mapeia condições climáticas
- Testar integração de todas as telas e corrigir conflitos de estilo
- Criar README com instruções de instalação e chave da API

**Requisitos cobertos:** Componentizar · CSS puro · Integração geral

---

## Requisitos do trabalho

| Requisito | Responsável |
|---|---|
| CSS puro | Gabriel, Bernardo, Marcelo, Valois, Wallace |
| 2 tipos de navegação | Elionardo |
| Componentizar | Gabriel, Bernardo, Marcelo, Valois, Wallace |
| Requisição à API | Caio, Marcelo, Valois |
| Context API | Caio (cria) · Gabriel, Bernardo, Marcelo (consomem) |
| AsyncStorage | Valois |

---

## Ordem sugerida de desenvolvimento

1. **Elionardo** — setup e navegação (base para todos)
2. **Caio** — API e contexto (dependência das telas)
3. **Gabriel, Bernardo, Marcelo, Valois** — telas em paralelo
4. **Wallace** — integração final e componentes globais


---

# CONTEXT_GUIDE.md — Como consumir o WeatherContext

Este guia explica como qualquer componente ou tela do WeatherApp deve consumir
os dados de clima, sem precisar conhecer a API da OpenWeatherMap nem a lógica
interna do `weatherService`.

---

## 1. Visão geral

Todo o estado climático do app vive em um único lugar: o `WeatherContext`
(`src/context/WeatherContext.tsx`). Qualquer tela ou componente acessa esses
dados através do hook `useWeather()` — nunca importando o `weatherService`
diretamente.

```tsx
import { useWeather } from '../context/WeatherContext';

function MeuComponente() {
  const { weatherData, isLoading, error } = useWeather();
  // ...
}
```

**Regra de ouro:** se o seu componente está dentro da árvore envolvida pelo
`<WeatherProvider>` (ver seção 2), `useWeather()` sempre funciona. Se você
esquecer de envolver, o hook lança um erro explicativo no console — não falha
silenciosamente.

---

## 2. Onde o Provider precisa estar

O `<WeatherProvider>` precisa envolver toda a árvore de navegação, no
`App.tsx`:

```tsx
<WeatherProvider>
  <NavigationContainer>
    {/* Stack / Tab Navigator aqui */}
  </NavigationContainer>
</WeatherProvider>
```

Isso é responsabilidade conjunta de Elionardo (setup/navegação) e Caio
(contexto) — confirmem juntos que está plugado antes de cada um seguir com
suas telas.

---

## 3. O que `useWeather()` retorna

| Campo | Tipo | Descrição |
|---|---|---|
| `currentCity` | `CurrentCity \| null` | Cidade selecionada (nome, país, lat, lon). `null` até a primeira busca. |
| `weatherData` | `WeatherData \| null` | Clima atual completo. `null` até a primeira busca. |
| `hourlyForecast` | `HourlyForecastItem[]` | Previsão em blocos de 3h (~5 dias). Array vazio até a primeira busca. |
| `weeklyForecast` | `DailyForecastItem[]` | Previsão diária agrupada (ver seção 5 sobre limitação). Array vazio até a primeira busca. |
| `isLoading` | `boolean` | `true` enquanto qualquer requisição está em andamento. |
| `error` | `string \| null` | Mensagem amigável de erro, ou `null` se não há erro. |
| `unit` | `'metric' \| 'imperial'` | Unidade atual (Celsius/Fahrenheit). |
| `loadWeather(city)` | `(city: string) => Promise<void>` | Busca clima + previsões de uma cidade. Ver seção 4. |
| `toggleUnit()` | `() => void` | Alterna Celsius/Fahrenheit e recarrega os dados da cidade atual. |

Todos os tipos (`CurrentCity`, `WeatherData`, etc.) estão em
`src/@types/weather.ts` — sempre importe de lá em vez de recriar interfaces.

---

## 4. Como disparar uma busca (SearchScreen, QuickCities)

```tsx
const { loadWeather } = useWeather();

// formato esperado: "NomeDaCidade,CodigoPais"
await loadWeather('Sao Paulo,BR');
await loadWeather('Curitiba,BR');
```

Depois de chamar, `isLoading` vira `true` automaticamente, e quando a
requisição termina (sucesso ou erro), `weatherData`/`error` são atualizados.
Você não precisa controlar loading manualmente — só ler `isLoading` do
contexto.

**Padrão recomendado de tela:**

```tsx
function SearchScreen() {
  const { loadWeather, isLoading, error } = useWeather();
  const navigation = useNavigation();

  async function handleSelectCity(city: string) {
    await loadWeather(city);
    navigation.navigate('Home');
  }

  // renderiza isLoading e error normalmente
}
```

---

## 5. ⚠️ Limitação importante: "previsão semanal" tem ~5 dias, não 7

O PRD original (seção 3.1.4) pede previsão de 7 dias usando o endpoint
`/onecall`. Esse endpoint hoje faz parte do **"One Call API 3.0"**, que exige
cartão de crédito cadastrado na conta da OpenWeatherMap mesmo no tier
gratuito.

Para não travar o projeto nessa exigência, `weeklyForecast` é construído
agrupando os blocos de 3h do endpoint gratuito `/forecast` por dia. Isso
cobre, na prática, **5 dias** (limite do plano gratuito do `/forecast`), não 7.

**Impacto prático:** se o componente `WeeklyForecast` (Bernardo) renderizar
uma lista fixa esperando 7 itens, vai sobrar espaço vazio ou quebrar o layout.
Renderize dinamicamente com `weeklyForecast.map(...)`, sem assumir um número
fixo de dias.

Se o time decidir que os 7 dias são obrigatórios para a nota, a alternativa é
cadastrar um cartão de crédito (sem custo dentro da cota gratuita) na conta da
OpenWeatherMap usada pelo projeto — converse com o professor/coordenador antes
de pedir isso a algum integrante.

---

## 6. Tratamento de erros — o que `error` pode conter

`error` já vem traduzido para mensagens amigáveis (seção 7.3 do PRD). Os
valores possíveis hoje são:

| Situação | Mensagem em `error` |
|---|---|
| API key inválida (HTTP 401) | "Chave de API inválida. Verifique a configuração do app." |
| Cidade não encontrada (HTTP 404) | "Cidade não encontrada." |
| Timeout (>10s sem resposta) | "Sem conexão. Verifique sua internet." |
| Qualquer outro erro | "Ocorreu um erro inesperado. Tente novamente." |

Nenhuma tela precisa interpretar códigos HTTP ou objetos de erro do axios —
só exibir a string de `error` quando ela não for `null`.

---

## 7. Para o Wallace — `WeatherCondition` e o `WeatherIcon`

O componente `WeatherIcon` precisa mapear a condição climática para um ícone
visual. Essa informação chega sempre no mesmo formato, em três lugares:

```typescript
export interface WeatherCondition {
  main: string;        // categoria, ex: "Clear", "Rain"
  description: string; // descrição em português, ex: "Céu Limpo"
  icon: string;         // código de ícone da OpenWeatherMap, ex: "01d"
}
```

- `weatherData.condition` → condição atual
- `hourlyForecast[i].condition` → condição de cada horário
- `weeklyForecast[i].condition` → condição representativa do dia

**Duas estratégias possíveis (decisão do Wallace, alinhar com o time):**

**Opção A — usar `icon` direto com os ícones oficiais da OpenWeatherMap:**
```
https://openweathermap.org/img/wn/{icon}@2x.png
```
Simples e rápido, mas visual não combina com a paleta dark/roxa do app
(seção 8 do PRD).

**Opção B — mapear `main` para ícones do `@expo/vector-icons` (já é
dependência do projeto):**
```typescript
const conditionIconMap: Record<string, string> = {
  Clear: 'sunny-outline',
  Clouds: 'cloud-outline',
  Rain: 'rainy-outline',
  Drizzle: 'rainy-outline',
  Thunderstorm: 'thunderstorm-outline',
  Snow: 'snow-outline',
  Mist: 'cloud-outline',
  Fog: 'cloud-outline',
  Haze: 'cloud-outline',
};
```
Recomendado, porque mantém consistência visual com o resto do app — mas exige
cobrir todas as categorias (`main`) que a OpenWeatherMap pode retornar; a
lista acima cobre os grupos principais documentados pela API.

`WeatherIcon` deve receber a `condition` (ou só `condition.main`) como prop e
devolver o ícone certo, sendo reutilizado em `WeatherHeader`, `HourlyForecast`
e `WeeklyForecast`.

---

## 8. Resumo rápido para quem só quer copiar e colar

```tsx
import { useWeather } from '../context/WeatherContext';

function MinhaTela() {
  const {
    weatherData,
    currentCity,
    hourlyForecast,
    weeklyForecast,
    isLoading,
    error,
    unit,
    loadWeather,
    toggleUnit,
  } = useWeather();

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!weatherData) return null; // ainda não buscou nenhuma cidade

  return (
    // seu JSX usando weatherData, currentCity, etc.
  );
}
```