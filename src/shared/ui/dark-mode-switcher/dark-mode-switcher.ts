import { Component, computed, inject, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { DarkModeSwitcherService } from '@shared/config';

@Component({
  selector: 'app-dark-mode-switcher',
  imports: [ButtonModule],
  templateUrl: './dark-mode-switcher.html',
})
export class DarkModeSwitcher {
  private readonly switcherService = inject(DarkModeSwitcherService);
  private readonly isNightMode = this.switcherService.isNightMode;

  public readonly showLabel = input<boolean>(false);
  public readonly switcherIcon = computed(() => (this.isNightMode() ? 'pi pi-sun' : 'pi pi-moon'));
  public readonly switcherLabel = computed(() =>
    this.showLabel() ? (this.isNightMode() ? 'Дневной режим' : 'Ночной режим') : undefined,
  );

  handleClick(): void {
    this.switcherService.toggleNightMode();
  }
}
