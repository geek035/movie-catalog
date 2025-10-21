import { Component, computed, signal } from '@angular/core';
import { environment } from '@environments';
import { CinemaModel } from '@server/models';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-cinema-dialog',
  imports: [DialogModule, ImageModule, TagModule],
  templateUrl: './cinema-dialog.html',
  styleUrl: './cinema-dialog.css',
})
export class CinemaDialog {
  public readonly cinema = signal<CinemaModel | null>(null);
  public visible = false;

  public readonly cinemaPosterSource = computed(
    () => `${environment.api}/images/${this.cinema()?.image}`,
  );

  public open(cinema: CinemaModel): void {
    this.visible = true;
    this.cinema.set(cinema);
  }
}
