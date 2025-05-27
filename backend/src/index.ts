import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { setupSwagger } from './docs/swagger';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

setupSwagger(app);

app.get('/', (req, res) => {
  res.send('Hello from TypeScript + Express!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📚 Swagger docs at http://localhost:${PORT}/api-docs`);
});
