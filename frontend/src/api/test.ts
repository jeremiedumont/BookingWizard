import { API } from ".";

export class TestAPI {
  static getHello = async () => {
    const response = await API.get(
      //   "https://booking-wizard-backend.vercel.app/"
      //   "http://localhost:4000/"
      "/"
    );
    return response.data;
  };
}
