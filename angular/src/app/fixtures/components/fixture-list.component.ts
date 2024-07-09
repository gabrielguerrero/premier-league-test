import { Component, input, output } from '@angular/core';
import { FixtureWithPrediction } from '../model';
import { FixtureComponent } from './fixture.component';

@Component({
  selector: 'fixture-list',
  standalone: true,
  imports: [FixtureComponent],
  template: `
    <div class="grid bg-white rounded-xl divide-y overflow-hidden border">
      @for (fixture of fixtures(); track fixture.id) {
        <fixture
          [fixture]="fixture"
          class="text-premier-purple"
          [class.selected]="fixture === selectedFixture()"
          (click)="selectedFixtureChange.emit(fixture)"
        />
      }
    </div>
  `,
  styles: `
    .selected {
      background: linear-gradient(
        98.5deg,
        #05f0ff -46.16%,
        #7367ff 42.64%,
        #963cff 70.3%
      );
      @apply text-white;
    }
  `,
})
export class FixtureListComponent {
  fixtures = input.required<FixtureWithPrediction[]>();
  selectedFixture = input<FixtureWithPrediction>();
  selectedFixtureChange = output<FixtureWithPrediction>();
}
