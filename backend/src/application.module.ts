import { Module } from '@nestjs/common';
import { TestApplicationModule } from './modules/test/application/test.application.module';

@Module({
  imports: [TestApplicationModule],
})
export class ApplicationModule {}
