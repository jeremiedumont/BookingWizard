import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from 'src/modules/test/domain/test.entity';
import { TestManager } from './test.manager';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  providers: [TestManager],
  exports: [TestManager],
})
export class TestDomainModule {}
