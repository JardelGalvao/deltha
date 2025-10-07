import dotenv from "dotenv"
dotenv.config()

export interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max?: number;
  idleTimeoutMillis?: number;
}

const config: Record<string, DatabaseConfig> = {
  development: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    database: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    max: 20,
    idleTimeoutMillis: 30000,
  },
  test: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!),
    database: process.env.DB_TEST_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    max: 5,
    idleTimeoutMillis: 30000,
  },
  production: {
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT || '5432'),
    database: process.env.DB_NAME!,
    user: process.env.DB_USER!,
    password: process.env.DB_PASS!,
    max: 20,
    idleTimeoutMillis: 30000,
  },
};


const environment = process.env.NODE_ENV || 'development';

export default config[environment];