import { hostname } from 'os';

import { port } from '../consts';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const swaggerAutogen = require('swagger-autogen')();

const outputFile = 'src/swagger/swagger_output.json';
const endpointsFiles = ['src/routes/index.ts'];
const doc = {
  info: {
    title: 'My Store API',
    description: 'API simples que visa abastecer um sistema de e-commerce.'
  },
  host: `${hostname()}:${port}`,
  schemes: ['http']
};

swaggerAutogen(outputFile, endpointsFiles, doc);
