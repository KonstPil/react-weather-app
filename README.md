# react-weather-app

Web приложение для поулчения погоды через api [Openweathermap](https://openweathermap.org/)

## Разворачивание

Установить все зависимости

```sh
cd react-weather-app
npm i
```

Зайти на (https://openweathermap.org/). Зарегестироваться. Получить API_KEY, установить его в `.env`, пример в `.env.example`

```sh
copy .env.example .env
```

В зависимости от задачи, можно или запустить dev версию или build(prod) см ``package.json(scripts)``

```sh
npm run build
```

Зайти в папку `dist` и открыть `index.html` в браузере
