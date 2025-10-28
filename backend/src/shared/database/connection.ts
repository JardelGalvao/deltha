import { Pool } from 'pg';
import config from '@shared/database/database.config';

const pool = new Pool(config);

export default pool;