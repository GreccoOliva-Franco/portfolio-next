import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.APP_URL}/api`,
});

export class Api {
  public static getTechnologies() {
    return instance.get("/technologies");
  }

  public static getProjects() {
    return instance.get("/projects");
  }
}
