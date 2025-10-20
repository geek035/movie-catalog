import { DOCUMENT, Injectable, afterNextRender, effect, inject, signal } from '@angular/core';

import { IS_NIGHT_MODE_KEY } from '@shared/config';

@Injectable({ providedIn: 'root' })
export class DarkModeSwitcherService {
  public readonly isNightMode = signal<boolean | null>(null);
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
