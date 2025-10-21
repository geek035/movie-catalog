import { Component, computed, input, output } from '@angular/core';
import { environment } from '@environments';
import { CinemaModel } from '@server/models';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cinema-card',
  imports: [CardModule, ImageModule, ChipModule, TagModule, ScrollPanelModule, ButtonModule],
  templateUrl: './cinema-card.html',
  styleUrl: './cinema-card.css',
})
export class CinemaCard {
  public readonly cinema = input.required<CinemaModel>();
  public readonly cinemaPosterSource = computed(
    () => `${environment.api}/images/${this.cinema().image}`,
  );

  public readonly cinemaSelect = output<CinemaModel>();

  handleTitleClick(): void {
    this.cinemaSelect.emit(this.cinema());
  }
}
