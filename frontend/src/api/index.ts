import { ConfigurationObject } from "@/utils/configuration.object";
import { ConfigurationUtil } from "@/utils/configuration.util";
import axios from "axios";

const EnvironmentEnum = ConfigurationObject.Environment;
const baseURLMappring = {
  [EnvironmentEnum.DEVELOPMENT]: "http://localhost:4000/",
  [EnvironmentEnum.PRODUCTION]: "https://booking-wizard-backend.vercel.app/",
};
const baseURL = baseURLMappring[ConfigurationUtil.getEnvironment()];

export const API = axios.create({
  baseURL,
});
