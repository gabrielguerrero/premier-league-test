import { Component } from '@angular/core';
import { FixturesFeatureComponent } from './fixtures/fixtures-feature.component';

@Component({
  selector: 'app-root',
  template: ` <div class="grid grid-rows-[auto,1fr]">
    <header class="h-40">
      <div class=" h-[60px]"></div>
      <div class="bg-premier-purple h-[60px] p-4">
        <span class="text-white font-bold text-xl ml-24 mt-16"
          >Premier League</span
        >
      </div>
      <img
        class="relative pl-header-logo -top-24  w-[88px] aspect-auto"
        src="https://www.premierleague.com/resources/rebrand/v7.149.1/i/elements/pl-main-logo.png"
        alt="Premier League Logo"
      />
    </header>
    <fixtures-feature />
  </div>`,
  standalone: true,
  imports: [FixturesFeatureComponent],
})
export class AppComponent {}
