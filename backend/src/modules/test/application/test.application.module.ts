import { Module } from '@nestjs/common';
import { TestDomainModule } from '../domain/test.domain.module';
import { TestController } from './test.controller';
import { TestService } from './test.service';

@Module({
  imports: [TestDomainModule],
  providers: [TestService],
  controllers: [TestController],
})
export class TestApplicationModule {}
