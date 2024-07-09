import { Fixture } from './model';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000';
@Injectable({ providedIn: 'root' })
export class FixtureService {
  http = inject(HttpClient);
  getFixtures() {
    return this.http.get<Fixture[]>(baseUrl + '/');
  }

  getFixture(id: number) {
    return this.http.get<Fixture>(baseUrl + `/${id}`);
  }
}
