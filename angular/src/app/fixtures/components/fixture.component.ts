import { Component, computed, input } from '@angular/core';
import { Fixture, FixtureWithPrediction } from '../model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'fixture',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="grid gap-2 p-4">
      <div class="grid grid-cols-[1fr,auto,1fr] gap-2 justify-self-center">
        <div class="flex gap-2 justify-self-end">
          <span class="font-bold">{{ fixture().home.label }}</span>
          <div class="relative rounded-full w-10 h-10 overflow-hidden">
            <img
              ngSrc="{{ fixture().home.logo }}"
              fill
              alt="{{ fixture().home.label }} logo"
            />
          </div>
        </div>
        <span>vs</span>
        <div class="flex gap-2">
          <div class="relative rounded-full w-10 h-10 overflow-hidden">
            <img
              ngSrc="{{ fixture().away.logo }}"
              fill
              alt="{{ fixture().away.label }} logo"
            />
          </div>
          <span class="font-bold">{{ fixture().away.label }}</span>
        </div>
      </div>
      <div class="justify-self-center">
        <div class="flex gap-2">
          <span>Predicted:</span>
          <span>{{ prediction() }}</span>
        </div>
      </div>
    </div>
  `,
})
export class FixtureComponent {
  fixture = input.required<FixtureWithPrediction>();
  prediction = computed(() => {
    const f = this.fixture();
    switch (f.prediction) {
      case 'draw':
        return 'Draw';
      case 'home':
        return f.home.label;
      case 'away':
        return f.away.label;
      default:
        return '?';
    }
  });
}
