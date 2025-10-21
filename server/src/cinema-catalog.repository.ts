import type { CinemaModel } from '@server/models';
import fs from 'fs/promises';
import path from 'path';

export class CinemaCatalogRepository {
  private readonly rootDir = path.join(process.cwd(), 'server');
  private readonly repositoryPath = path.join(this.rootDir, 'database', 'cinema-catalog.json');

  async readCinemaCatalog(): Promise<CinemaModel[]> {
    const data = await fs.readFile(this.repositoryPath, { encoding: 'utf-8' });
    const json = JSON.parse(data) as CinemaModel[];

    return json;
  }
}
