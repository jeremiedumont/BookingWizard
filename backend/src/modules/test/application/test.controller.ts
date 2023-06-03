import { Controller, Get, Post } from '@nestjs/common';
import { Test } from '../domain/test.entity';
import { TestService } from './test.service';

@Controller('tests')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/all')
  findAll(): Promise<Test[]> {
    return this.testService.findAll();
  }

  @Get()
  getHello(): string {
    return this.testService.getHello();
  }

  @Post()
  createOne(): Promise<Test> {
    return this.testService.createOne();
  }
}
