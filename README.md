# 🗞️ News Hub – React + TypeScript

A responsive **News-Hub** frontend that pulls articles from multiple sources, supports keyword search, rich filtering, and personalized feeds, built with React and TypeScript and containerized with Docker for easy setup.

---

## 📌 Prerequisites

#### Before running the project, make sure you have the following ready:

- [Docker](https://www.docker.com/)
- API Keys for news sources:
  - [The Guardian](https://open-platform.theguardian.com/)
  - [The New York Times](https://developer.nytimes.com/)
  - [News API](https://newsapi.org/)

---

## 🖥️ Tech Stack

- ⚛️ React + TypeScript
- 🧭 React Router for navigation
- 🧰 Context for state
- 🎨 Material UI for UI components and styling
- 🪄 Material UI Icons
- 🐳 Docker + docker-compose for containerization

---

**🌐 Data Sources**

---

This application aggregates and normalizes news from multiple sources. Current integrations include:

- NewsAPI – General news aggregation
- The Guardian Content API – News articles from The Guardian
- The New York Times API – Articles and breaking news from NYT

---

## 🌐 Features

- 🧑‍💻 Personalized News Feed – Displays articles based on preferred sources, categories, and authors; preferences are persisted locally.
- 🔍 Search Functionality – Search news by keywords, sources, and categories.
- 📱 Responsive Design – Mobile-first layout with accessible, user-friendly components.
- ⚡ Infinite Scroll & Client-Side Caching – Smooth browsing experience with cached content for faster load times.
- 🛠️ Preferences Page – Users can select preferred sources and categories to tailor their news feed and search results.

---

## 📁 Project Structure

```
NEWS-HUB/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ FeaturedNewsCard/
│  │  ├─ NewsCard/
│  │  ├─ SelectableChip/
│  │  ├─ Sidebar/
│  │  └─ index.ts
│  ├─ config/
│  │  ├─ ApiConfig.ts
│  │  ├─ appConfig.ts
│  │  └─ index.ts
│  ├─ container/
│  │  ├─ News/
│  │  ├─ Preference/
│  │  ├─ Search/
│  │  └─ index.ts
│  ├─ context/
│  │  ├─ NewsContext.tsx
│  │  ├─ NewsProvider.tsx
│  │  └─ index.ts
│  ├─ hooks/
│  │  ├─ useInfiniteScroll/
│  │  ├─ useNewsController/
│  │  └─ index.ts
│  ├─ services/
│  │  ├─ NewsAPI.ts
│  │  ├─ Guardian.ts
│  │  ├─ NYTimes.ts
│  │  ├─ NewsService.ts
│  │  └─ index.ts
│  ├─ types/
│  ├─ utils/
│  │  ├─ colorUtils.ts
│  │  ├─ constants.ts
│  │  ├─ dateUtils.ts
│  │  └─ defaultNews.ts
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ vite-env.d.ts
├─ .env
├─ .env.example
├─ docker-compose.yaml
├─ Dockerfile
├─ eslint.config.js
├─ index.html
├─ README.md
├─ tsconfig.*
├─ package.json
└─ vite.config.ts
```

---

🧪 Development Environment Used

| Tool    | Version      |
| ------- | ------------ |
| Node.js | v20.19.0     |
| Docker  | v28.1.1      |
| OS      | Ubuntu 23.04 |

---

## ⚙️ Environment Variables

Create a .env file at project root

**📡 .env**

```env
# The Guardian API
VITE_GUARDIAN_API_KEY=your_guardian_api_key
VITE_GUARDIAN_API_URL=https://content.guardianapis.com/search

# New York Times API
VITE_NYT_API_KEY=your_nyt_api_key
VITE_NYT_API_URL=https://api.nytimes.com/svc/search/v2/articlesearch.json?

# News API
VITE_NEWS_API_KEY=your_newsapi_key
VITE_NEWS_API_URL=https://newsapi.org/v2/top-headlines?pageSize=10&language=en&


```

---

## 🚀 Run the Application

### Install Dependencies

```bash
npm install
```

### Run with Docker

```bash
docker-compose up --build
```

App will be running at:  
👉 Frontend: `http://localhost:3001`

---

## 📝 Developer Notes

#### ✔ Fetches news from The Guardian, New York Times, and News API

#### ✔ Filtering and Personalization available for The Guardian, NY Times and News API.

#### ✔ .env.example provided for easy setup

## ⚡ Assumptions & Limitations

#### Filtering and personalization are only available for The Guardian and New York Times, due to News API limitations.

#### Currently, category selection allows only one category at a time. Enhancing this to support multiple selections would require parallel Promise.all requests for each category.

## App snapshots

![Dashboard preview](/public/assets/News-hub.png)

## Working APP demo

![Dashboard demo](/public/assets/News-hub.gif)

```

```
