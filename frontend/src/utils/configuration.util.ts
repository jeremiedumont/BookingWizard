import { ConfigurationObject } from "./configuration.object";

export class ConfigurationUtil {
  static getPort(): number {
    return process.env.PORT ? parseInt(process.env.PORT) : 5000;
  }

  static getEnvironment(): ConfigurationObject.Environment {
    return (
      (process.env.NODE_ENV as ConfigurationObject.Environment) ||
      ConfigurationObject.Environment.DEVELOPMENT
    );
  }

  static isProduction(): boolean {
    return process.env.NODE_ENV === ConfigurationObject.Environment.PRODUCTION;
  }

  static isDevelopment(): boolean {
    return (
      !process?.env?.NODE_ENV ||
      process.env.NODE_ENV === ConfigurationObject.Environment.DEVELOPMENT
    );
  }
}
