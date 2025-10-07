import pool from '../src/config/connection';

// Close the connection after the test
afterAll(async () => {
  await pool.end();
});

// Cleaner the database
afterEach(async () => {
  await pool.query('DELETE FROM DELTHA.COMPANIES');
});