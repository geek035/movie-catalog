import { Component, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-text-search',
  imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './text-search.html',
})
export class TextSearch {
  public label = input<string>('Поиск');
  public textSearch = output<string | null>();

  public readonly textController = new FormControl(null);

  constructor() {
    this.textController.valueChanges
      .pipe(debounceTime(300), takeUntilDestroyed())
      .subscribe(value => this.textSearch.emit(value));
  }
}
