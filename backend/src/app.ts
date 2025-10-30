import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import routes from "@shared/routes/routers";
import errorHandler from '@shared/middleware/error-handler.middleware';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use("/api/v1", routes);
    this.app.use(errorHandler);
  }

  private initializeRoutes(): void {
    this.app.get('/health', (req, res) => {
      res.json({ status: 'ok', message: 'API is running' });
    });
  }
}