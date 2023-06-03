import axios from "axios";

export class TestAPI {
  static getHello = async () => {
    const response = await axios.get(
      //   "https://booking-wizard-backend.vercel.app/"
      "http://localhost:4000/"
    );
    return response.data;
  };
}
