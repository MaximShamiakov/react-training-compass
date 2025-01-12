export const API_URL = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://127.0.0.1:8000";
    case "docker":
      return "http://0.0.0.0:8000";
      
    default:
      return "http://192.168.0.119:8000";
  }
})();

export const APP_URL = (() => {
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://localhost:3000";
    case "docker":
      return "http://172.17.0.3:3001";  // Пример URL для Docker контейнера
    default:
      return "http://192.168.0.119:80";
  }
})();
