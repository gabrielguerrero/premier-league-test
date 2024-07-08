import { Injectable, NotFoundException } from '@nestjs/common';
import { Fixture } from "./types";
import { FixtureData } from "./data/fixtures";

@Injectable()
export class AppService {
  getFixtures(): Fixture[] {
    return FixtureData;
  }

  getFixture(id: string): Fixture {
    const fixture = FixtureData.filter(fixture => fixture.id === parseInt(id))[0];
    if(!fixture) throw new NotFoundException();
    return fixture;
  }
}
