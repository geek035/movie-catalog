import { Component, input, model } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-text-search',
  imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './text-search.html',
})
export class TextSearch {
  public label = input<string>('Поиск');
  public textSearch = model<string | null>(null);

  public readonly textController = new FormControl(null);

  constructor() {
    this.textController.valueChanges
      .pipe(takeUntilDestroyed())
      .subscribe(value => this.textSearch.set(value));
  }
}
