import { Component, inject, OnInit } from '@angular/core';
import { FixturesStore } from './fixtures.store';
import { FixtureListComponent } from './components/fixture-list.component';
import { FixtureWithPrediction } from './model';
import { FixtureDetailComponent } from './components/fixture-detail.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { map } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'fixtures-feature',
  standalone: true,
  template: `
    <h1
      class="text-premier-purple text-center flex gap-4 justify-center align-middle items-center"
    >
      <img
        class="w-16 aspect-auto hidden sm:block"
        src="https://www.premierleague.com/resources/rebrand/v7.149.1/i/elements/pl-main-logo.png"
        alt="Premier League Logo"
      /><span class="font-bold text-4xl sm:text-6xl">Fixture Predictor</span>
    </h1>
    <div class="bg-premier-purple flex justify-center">
      <div class="px-4 py-8 grid sm:grid-cols-[auto,1fr] gap-4 max-w-7xl">
        <fixture-list
          [class.hidden]="isMobile() && store.fixturesEntitySelected()"
          [fixtures]="store.fixturesEntities()"
          [selectedFixture]="store.fixturesEntitySelected()"
          (selectedFixtureChange)="select($event)"
        />

        <div class="grid">
          @if (store.fixturesEntitySelected()) {
            <div class="sm:hidden">
              <button
                class="premier-button  mb-4"
                (click)="store.deselectFixturesEntity()"
              >
                Back
              </button>
            </div>
            <fixture-detail
              [fixture]="store.fixturesEntitySelected()!"
              (predictionChange)="store.predict($event)"
              class="h-full"
            />
          } @else {
            <div
              [class.hidden]="isMobile()"
              class="text-white font-bold text-xl h-full text-center content-center p-8"
            >
              Please select a fixture
            </div>
          }
        </div>
      </div>
    </div>
  `,
  imports: [FixtureListComponent, FixtureDetailComponent, MatProgressSpinner],
})
export class FixturesFeatureComponent {
  store = inject(FixturesStore);
  breakpointObserver = inject(BreakpointObserver);
  isMobile = toSignal(
    this.breakpointObserver
      .observe('(max-width: 640px)')
      .pipe(map((result) => result.matches)),
  );

  select(fixture: FixtureWithPrediction) {
    this.store.selectFixturesEntity(fixture);
    this.store.loadFixtureDetail({ id: fixture.id });
  }
}
