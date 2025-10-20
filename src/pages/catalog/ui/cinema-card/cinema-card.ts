import { Component, input } from '@angular/core';
import { CinemaModel } from '@server/models';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-cinema-card',
  imports: [CardModule],
  templateUrl: './cinema-card.html',
})
export class CinemaCard {
  public readonly cinema = input.required<CinemaModel>();
}
