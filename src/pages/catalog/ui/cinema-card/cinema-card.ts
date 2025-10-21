import { Component, computed, input } from '@angular/core';
import { environment } from '@environments';
import { CinemaModel } from '@server/models';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ImageModule } from 'primeng/image';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cinema-card',
  imports: [CardModule, ImageModule, ChipModule, TagModule, ScrollPanelModule],
  templateUrl: './cinema-card.html',
  styleUrl: './cinema-card.css',
})
export class CinemaCard {
  public readonly cinema = input.required<CinemaModel>();
  public readonly cinemaPosterSource = computed(
    () => `${environment.api}/images/${this.cinema().image}`,
  );
}
