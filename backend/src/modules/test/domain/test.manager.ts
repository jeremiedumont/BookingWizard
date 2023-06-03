import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './test.entity';

@Injectable()
export class TestManager {
  constructor(
    @InjectRepository(Test)
    private repository: Repository<Test>,
  ) {}

  findAll() {
    return this.repository.find();
  }

  createOne(): Promise<Test> {
    const test: Partial<Test> = {
      name: 'Test',
      description: 'Test',
    };

    return this.repository.save(test);
  }
}
