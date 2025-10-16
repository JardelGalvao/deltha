// documentation/swagger.ts
import { OpenAPIRegistry, OpenApiGeneratorV3 } from '@asteasolutions/zod-to-openapi';
import { CompanySchema } from '@schema/company.schema';
import { z } from '@utils/zod'

const registry = new OpenAPIRegistry();

registry.register('Company', CompanySchema);

registry.registerPath({
  method: 'get',
  path: '/api/company',
  summary: 'Get all companies',
  tags: ['Companies'],
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: {
            type: 'array',
            items: {
              $ref: '#/components/schemas/Company'
            }
          }
        }
      }
    }
  }
});

// documentation/swagger.ts
registry.registerPath({
  method: 'post',
  path: '/api/company',
  summary: 'Create a company',
  tags: ['Companies'],
  request: {
    body: {
      content: {
        'application/json': {
          // Pick only the 3 required fields
          schema: CompanySchema.omit({tax_id: true})
        }
      }
    }
  },
  responses: {
    201: {
      description: 'Company created',
      content: {
        'application/json': {
          schema: CompanySchema
        }
      }
    }
  }
});

const generator = new OpenApiGeneratorV3(registry.definitions);

export const swaggerSpec = generator.generateDocument({
  openapi: '3.0.0',
  info: {
    title: 'Deltha API Documentation',
    version: '1.0.0'
  }
});