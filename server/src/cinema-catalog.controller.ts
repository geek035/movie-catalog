import { Request, Response } from 'express';

import { CinemaCatalogService } from './cinema-catalog.service';

export class CinemaCatalogController {
  constructor(private readonly service: CinemaCatalogService) {}

  async getCinemaCatalog(req: Request, res: Response) {
    const catalog = await this.service.getCinemaCatalog();

    res.status(200).json(catalog);
  }
}
