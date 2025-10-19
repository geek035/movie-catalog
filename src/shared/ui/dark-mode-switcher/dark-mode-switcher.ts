import {
  Component,
  DOCUMENT,
  afterNextRender,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { IS_NIGHT_MODE_KEY } from '@shared/config';

@Component({
  selector: 'app-dark-mode-switcher',
  imports: [ButtonModule],
  templateUrl: './dark-mode-switcher.html',
})
export class DarkModeSwitcher {
  private readonly isNightMode = signal<boolean | null>(null);
  public readonly switcherIcon = computed(() => (this.isNightMode() ? 'pi pi-sun' : 'pi pi-moon'));

  private readonly document = inject(DOCUMENT, { optional: true });

  constructor() {
    afterNextRender(() => {
      const cachedValue = sessionStorage.getItem(IS_NIGHT_MODE_KEY);
      const isNightMode = cachedValue ? JSON.parse(cachedValue) : false;
      this.isNightMode.set(isNightMode);
    });

    effect(() => {
      const isNightMode = this.isNightMode();

      if (isNightMode !== null) {
        sessionStorage.setItem(IS_NIGHT_MODE_KEY, String(isNightMode));
        this.changeMode(isNightMode);
      }
    });
  }

  toggleNightMode(): void {
    this.isNightMode.set(!this.isNightMode());
  }

  private changeMode(isNightMode: boolean): void {
    const html = this.document?.querySelector('html');

    if (!isNightMode) {
      html?.classList.remove('app-dark-mode');
    } else {
      html?.classList.add('app-dark-mode');
    }
  }
}
