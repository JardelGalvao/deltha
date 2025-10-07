import { Pool } from 'pg';
import config from '../config/database';

const pool = new Pool(config);

export default pool;