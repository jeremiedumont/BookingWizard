import { API } from ".";

export class TestAPI {
  static getHello = async () => {
    const response = await API.get("/");
    return response.data;
  };
}
