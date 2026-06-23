# 🌤️ WeatherApp

Aplicativo mobile de previsão do tempo desenvolvido em React Native como projeto integrador do curso de Programador Fullstack — SerraTec / Universidade Veiga de Almeida.

---

## 👥 Time

| Integrante | Responsabilidade |
|---|---|
| Elionardo | Setup & Navegação |
| Caio Vinicius Dias | API & Contexto |
| Gabriel Botelho | Tela Inicial — Parte 1 |
| Bernardo da Silva | Tela Inicial — Parte 2 |
| Marcelo Mayrinck | Tela de Busca |
| Valois | Tela de Favoritos |
| Wallace Ildefonso | Componentes Globais & Integração |

---

## 📱 Sobre o Projeto

O WeatherApp permite consultar condições climáticas em tempo real de qualquer cidade do mundo, salvar cidades favoritas e navegar por previsões horárias e semanais com uma interface moderna e intuitiva.

Os dados meteorológicos são fornecidos pela [OpenWeatherMap API](https://openweathermap.org/api) (plano gratuito — 60 chamadas/minuto), com suporte a descrições em português.

---

## ✨ Funcionalidades

**Tela Inicial**
- Temperatura atual, sensação térmica e condição do céu
- Cards de estatísticas: umidade, vento, índice UV e visibilidade
- Previsão horária (scroll horizontal, mínimo 8 intervalos)
- Previsão dos próximos 7 dias com barras de temperatura
- Chips de cidades rápidas: São Paulo, Rio de Janeiro, Curitiba, Salvador, Manaus

**Tela de Busca**
- Campo de texto com filtragem em tempo real
- Lista de 10 cidades brasileiras populares exibida por padrão
- Feedback de carregamento e mensagem de erro amigável

**Tela de Favoritos**
- Lista de cidades salvas com temperatura e condição atual
- Dados atualizados automaticamente ao abrir a tela
- Adicionar e remover favoritos com persistência local (AsyncStorage)

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18+
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Conta na [OpenWeatherMap](https://openweathermap.org/) para obter a chave de API (gratuita)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/weather-app.git
cd weather-app

# Instale as dependências
npm install
```

### Configuração da chave de API

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```
WEATHER_API_KEY=sua_chave_aqui
```

> ⚠️ **Importante:** nunca commite o arquivo `.env`. Ele já está listado no `.gitignore`.

### Executando

```bash
npx expo start
```

Abra o app no dispositivo físico pelo app **Expo Go** (Android/iOS) ou em um emulador.

---

## 🗂️ Estrutura de Pastas

```
weather-app/
├── src/
│   ├── components/       # Componentes reutilizáveis
│   ├── screens/          # Telas da aplicação
│   ├── context/          # WeatherContext (estado global)
│   ├── services/         # Serviço de requisição à API
│   ├── navigation/       # Configuração de rotas
│   ├── hooks/            # Hooks customizados
│   ├── utils/            # Funções utilitárias
│   └── constants/        # Cores, tamanhos e outras constantes
├── .env                  # Chave de API (não versionar)
├── .env.example          # Modelo do arquivo .env
└── App.js                # Ponto de entrada
```

---

## 🧩 Componentes

| Componente | Responsável | Descrição |
|---|---|---|
| `WeatherHeader` | Gabriel Botelho | Cidade, temperatura, ícone e descrição do clima |
| `WeatherStats` | Gabriel Botelho | Grid 2x2 com cards de umidade, vento, UV e visibilidade |
| `HourlyForecast` | Bernardo da Silva | ScrollView horizontal com previsões horárias |
| `WeeklyForecast` | Bernardo da Silva | Lista de 7 dias com barras de temperatura |
| `QuickCities` | Bernardo da Silva | Chips de cidades rápidas com scroll horizontal |
| `SearchBar` | Marcelo Mayrinck | Input de texto com ícone de busca e botão limpar |
| `CityList` | Marcelo Mayrinck | FlatList com filtragem em tempo real |
| `FavoriteCard` | Valois | Card de favorito com dados climáticos e botão remover |
| `BottomTabBar` | Wallace Ildefonso | Barra de navegação inferior customizada |
| `WeatherIcon` | Wallace Ildefonso | Ícone reutilizável mapeado por condição climática |
| `LoadingSpinner` | Wallace Ildefonso | Indicador de carregamento global |

---

## 🗺️ Navegação

O app usa duas estratégias de navegação com React Navigation v6:

- **Stack Navigator** — transições entre a Tela Inicial e telas de detalhe (animação de deslizamento horizontal)
- **Tab Navigator** — navegação principal entre as três abas: Início, Buscar e Favoritos

---

## 🌐 API

Base URL: `https://api.openweathermap.org/data/2.5`

| Endpoint | Método | Uso |
|---|---|---|
| `/weather` | GET | Dados climáticos atuais |
| `/forecast` | GET | Previsão horária (intervalos de 3h) |
| `/onecall` | GET | Previsão diária dos próximos 7 dias |

Parâmetros comuns: `q` (cidade), `appid` (chave da API), `units=metric`, `lang=pt_br`.

### Tratamento de erros

| Código | Mensagem exibida |
|---|---|
| 401 | Alerta de configuração (chave inválida) |
| 404 | "Cidade não encontrada" |
| Timeout (>10s) | "Sem conexão. Verifique sua internet" |

---

## 📦 Dependências

| Pacote | Versão | Finalidade |
|---|---|---|
| `react-native` | 0.73+ | Framework principal |
| `expo` | 50+ | Toolchain e ambiente de desenvolvimento |
| `@react-navigation/native` | 6.x | Núcleo de navegação |
| `@react-navigation/stack` | 6.x | Stack Navigator |
| `@react-navigation/bottom-tabs` | 6.x | Tab Navigator |
| `axios` | 1.x | Requisições HTTP |
| `@react-native-async-storage/async-storage` | 1.x | Persistência local de favoritos |
| `react-native-dotenv` | 3.x | Variáveis de ambiente |
| `@expo/vector-icons` | 14.x | Ícones de clima e navegação |

---

## 🎨 Design

**Paleta de cores**

| Token | Hex | Uso |
|---|---|---|
| `background-primary` | `#1A1A2E` | Fundo principal |
| `background-card` | `#242444` | Fundo dos cards |
| `accent-blue` | `#4F6EF7` | Destaque, chips selecionados |
| `accent-purple` | `#7B5EF8` | Gradiente do cabeçalho |
| `text-primary` | `#FFFFFF` | Temperatura e títulos |
| `text-secondary` | `#B0B8D1` | Labels e textos de suporte |
| `danger` | `#FF4757` | Botão de remover favorito |

**Tipografia:** fonte padrão do sistema (SF Pro no iOS, Roboto no Android). Temperatura principal em 72px bold.

> Todos os estilos são feitos com `StyleSheet.create()` — sem bibliotecas de UI externas.

---

## ✅ Critérios de Aceitação

| Critério | Como verificar |
|---|---|
| App inicia sem erros | `expo start` e abrir no dispositivo |
| Navegação Stack funciona | Verificar animação ao navegar entre telas |
| Navegação Tab funciona | Tocar em cada aba |
| Dados da API são exibidos | Selecionar cidade e verificar temperatura |
| Contexto compartilha dados entre telas | Mudar cidade na busca e verificar HomeScreen |
| Favoritos persistem após fechar o app | Adicionar favorito, fechar e reabrir |
| CSS puro em todos os componentes | Revisar código e confirmar ausência de libs de UI |
| Componentes são reutilizáveis | `WeatherIcon` e `LoadingSpinner` usados em múltiplas telas |
| Erros de API tratados com mensagem | Buscar cidade inexistente |

---

## 📋 Compatibilidade

- Android 8.0+
- iOS 13+

---

*WeatherApp v1.0 — Junho de 2025*
