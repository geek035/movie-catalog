import { RenderMode, ServerRoute } from '@angular/ssr';

import { LINK_CATALOG } from '@shared/config';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: LINK_CATALOG,
    renderMode: RenderMode.Server,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
