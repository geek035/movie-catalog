import { CinemaModel } from '@server/models';

import { CinemaCatalogRepository } from './cinema-catalog.repository';

export class CinemaCatalogService {
  constructor(private readonly repository: CinemaCatalogRepository) {}

  async getCinemaCatalog(): Promise<CinemaModel[]> {
    return await this.repository.readCinemaCatalog();
  }
}
