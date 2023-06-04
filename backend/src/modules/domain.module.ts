import { Module } from '@nestjs/common';
import { TestDomainModule } from './test/domain/test.domain.module';

@Module({
  imports: [TestDomainModule],
})
export class DomainModule {}
