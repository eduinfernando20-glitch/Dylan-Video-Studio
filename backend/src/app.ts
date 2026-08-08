import express from 'express';
import cors from 'cors';
import routes from './routes';
import { errorHandler } from './middleware/errorHandler';
import { logger } from './utils/logger';

export function createApp() {
  const app = express();
  app.use(express.json());

  const corsOrigin = process.env.CORS_ORIGIN || process.env.FRONTEND_ORIGIN || '*';
  app.use(cors({ origin: corsOrigin }));

  // request logging
  app.use((req, _res, next) => {
    logger.info({ method: req.method, url: req.url }, 'request');
    next();
  });

  app.get('/api/health', (_req, res) =>
    res.json({ status: 'ok', service: 'Dylan Video Studio API' })
  );

  app.use('/api', routes);
  app.use(errorHandler);
  return app;
}
