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
