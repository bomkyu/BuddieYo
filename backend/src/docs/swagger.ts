import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BuddieYo API Docs',
      version: '1.0.0',
      description: 'API documentation for BuddieYo backend',
    },
  },
  apis: ['./src/routes/*.ts'], // 라우트 위치에 맞게 조정
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
