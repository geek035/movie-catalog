import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

import { LINK_CATALOG } from '@shared/config';
import { DarkModeSwitcher } from '@shared/ui';

import { HeaderMenuItems } from '../header-menu-items/header-menu-items';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    DarkModeSwitcher,
    ToolbarModule,
    ButtonModule,
    HeaderMenuItems,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @ContentChild('headerStart') headerStart!: TemplateRef<HTMLTemplateElement>;
  @ContentChild('headerCenter') headerCenter!: TemplateRef<HTMLTemplateElement>;
  @ContentChild('headerEnd') headerEnd!: TemplateRef<HTMLTemplateElement>;

  public readonly homeLink = `/${LINK_CATALOG}`;

  public readonly items = [];
}
