import { Injectable } from '@nestjs/common';
import { TestManager } from '../domain/test.manager';

@Injectable()
export class TestService {
  constructor(private testManager: TestManager) {}

  findAll() {
    return this.testManager.findAll();
  }

  getHello(): string {
    return 'Hello World!';
  }

  createOne() {
    return this.testManager.createOne();
  }
}
