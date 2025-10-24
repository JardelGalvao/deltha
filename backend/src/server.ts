import dotenv from 'dotenv';
dotenv.config();

import { App } from './app';

const PORT = process.env.PORT || 3000;

const app = new App();

app.app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📚 Environment: ${process.env.NODE_ENV}`);
});