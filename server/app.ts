import express from 'express';
import path from 'path';

import { cinemaCatalogRoute } from './src/cinema-catalog.route';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cinema-catalog', cinemaCatalogRoute);
