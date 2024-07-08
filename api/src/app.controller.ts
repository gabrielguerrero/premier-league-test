import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Fixture } from "./types";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getFixtures(): Fixture[] {
    return this.appService.getFixtures();
  }

  @Get(':id')
  getFixture(@Param('id') id: string): Fixture {
    return this.appService.getFixture(id);
  }
}
