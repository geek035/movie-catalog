import { Router } from 'express';

import { CinemaCatalogController } from './cinema-catalog.controller';
import { CinemaCatalogRepository } from './cinema-catalog.repository';
import { CinemaCatalogService } from './cinema-catalog.service';

export const cinemaCatalogRoute = Router();

const repository = new CinemaCatalogRepository();
const service = new CinemaCatalogService(repository);
const controller = new CinemaCatalogController(service);

cinemaCatalogRoute.get('/', controller.getCinemaCatalog.bind(controller));
