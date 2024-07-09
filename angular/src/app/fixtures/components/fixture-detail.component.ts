import { Component, input, output } from '@angular/core';
import { FixtureWithPrediction, Prediction } from '../model';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'fixture-detail',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe, MatIcon],
  host: { class: 'h-full block' },
  template: `
    <div class="rounded-xl bg-white border text-premier-purple h-full">
      <div class="grid gap-4 max-w-7xl">
        <div class="m-2 sm:m-8 grid grid-rows-[auto,1fr]">
          <div
            class="grid sm:flex gap-4 justify-self-center border rounded-t-xl p-2"
          >
            <div class="text-center flex gap-2">
              <mat-icon>calendar_month</mat-icon>
              <span>{{ fixture().time | date: 'fullDate' }}</span>
            </div>
            <div class="hidden text-center sm:flex gap-2">
              <mat-icon>schedule</mat-icon>
              <span>{{ fixture().time | date: 'shortTime' }}</span>
            </div>
            <div class="text-center flex gap-2">
              <mat-icon>stadium</mat-icon>
              <span>{{ fixture().location }}</span>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-[1fr,auto,1fr]">
              <div class="relative ">
                <div
                  class="bg-gradient-to-r from-blue-950 to-blue-500 flex h-12 sm:h-20 ml-8 sm:ml-16 pl-12 sm:pl-24 pr-2 sm:pr-4"
                >
                  <span
                    class="font-bold text-white text-xs sm:text-base my-auto"
                    >{{ fixture().home.label }}</span
                  >
                </div>
                <div
                  class="absolute -top-2 left-0 rounded-full w-16 h-16 sm:w-32 sm:h-32 overflow-hidden border-4 border-white"
                >
                  <img
                    ngSrc="{{ fixture().home.logo }}"
                    fill
                    alt="{{ fixture().home.label }} logo"
                  />
                </div>
              </div>
              <div
                class="text-xl sm:text-4xl border p-4 sm:py-8 px-2 sm:px-4 rounded-b-2xl"
              >
                {{ fixture().time | date: 'HH:mm' }}
              </div>
              <div class="relative ">
                <div
                  class="absolute -top-2 right-0 rounded-full w-16 h-16 sm:w-32 sm:h-32 overflow-hidden border-4 border-white"
                >
                  <img
                    ngSrc="{{ fixture().away.logo }}"
                    fill
                    alt="{{ fixture().away.label }} logo"
                  />
                </div>
                <div
                  class="mr-8 sm:mr-16 bg-gradient-to-r from-blue-500 to-blue-800  h-12 sm:h-20 pr-12 sm:pr-24 pl-2 sm:pl-4 flex flex-row-reverse"
                >
                  <span
                    class="text-white font-bold text-xs sm:text-base my-auto"
                    >{{ fixture().away.label }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="justify-self-center">
          <div class="grid sm:flex gap-4 mb-8">
            <button
              class="premier-button"
              [class.selected]="fixture().prediction === 'home'"
              (click)="predictionChange.emit('home')"
            >
              {{ fixture().home.label }}
            </button>
            <button
              class="premier-button"
              [class.selected]="fixture().prediction === 'draw'"
              (click)="predictionChange.emit('draw')"
            >
              Draw
            </button>
            <button
              class="premier-button"
              [class.selected]="fixture().prediction === 'away'"
              (click)="predictionChange.emit('away')"
            >
              {{ fixture().away.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class FixtureDetailComponent {
  fixture = input.required<FixtureWithPrediction>();
  predictionChange = output<Prediction>();
}
