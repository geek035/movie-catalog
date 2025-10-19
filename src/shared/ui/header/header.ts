import { CommonModule } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';

import { LINK_CATALOG } from '@shared/config';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ToolbarModule, ButtonModule, MenuModule],
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
