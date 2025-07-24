import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // TODO: use environment values
});

instance.interceptors.request.use((config) => {
  const isDevelopment = true; // TODO: use environment values
  if (!isDevelopment) {
    return config;
  }

  return new Promise((resolve) => setTimeout(() => resolve(config), 400));
});

export class Api {
  public static getTechnologies() {
    return instance.get("/technologies");
  }

  public static getProjects() {
    return instance.get("/projects");
  }
}
