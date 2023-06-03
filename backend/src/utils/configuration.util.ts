import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class ConfigurationUtil {
  static getPort(): number {
    return process.env.PORT ? parseInt(process.env.PORT) : 4000;
  }

  static isProduction(): boolean {
    return process.env.NODE_ENV === 'production';
  }

  static isDevelopment(): boolean {
    return !process?.env?.NODE_ENV || process.env.NODE_ENV === 'development';
  }

  static getCredentials(): TypeOrmModuleOptions {
    const isProduction = ConfigurationUtil.isProduction();

    const credentials: TypeOrmModuleOptions = {
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 5432,
      username: process.env.DATABASE_USERNAME || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_DATABASE || 'booking-wizard',
      autoLoadEntities: true,
      synchronize: true,
    };

    return credentials;
  }
}
