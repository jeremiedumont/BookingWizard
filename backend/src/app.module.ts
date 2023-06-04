import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationModule } from './modules/application.module';
import { DomainModule } from './modules/domain.module';
import { ConfigurationUtil } from './utils/configuration.util';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ConfigurationUtil.getCredentials()),
    ApplicationModule,
    DomainModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
