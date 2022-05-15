import { Router } from 'express';

import { GetAvailableProductsService } from '../services/GetAvailableProductsService';

const productsRoutes = Router();

productsRoutes.get('/', async (req, res) => {
  /*
    #swagger.description = 'Busca todos os produtos ativos.'
    #swagger.tags = ['Produtos']
  */

  /*
    #swagger.parameters['skip'] = {
      description: 'Índice que será usado como valor inicial para filtrar os produtos.',
      type: 'integer',
      required: false,
      example: 0,
    }

    #swagger.parameters['limit'] = {
      description: 'Índice que indica o limite de produtos a ser buscado.',
      type: 'integer',
      required: false,
      example: 10,
    }
  */

  /*
    #swagger.responses[200] = {
      schema: {
        products: [
          {
            "id": "2b8eaa04-848e-4ae8-8717-596d77fe537e",
            "category_id": "d11e0f6d-327e-408a-ae95-ef6344e9cf75",
            "name": "Tênis Nike Revolution 6 Next Nature Masculino - Preto+Branco",
            "img_path": "public/images/products/1f023c64-b173-4152-a62f-2bc6d44926cb.jpg",
            "description": "Para caminhadas e corridas leves, treinos de musculação ou até mesmo no dia a dia aposte no conforto e qualidade do Tênis Nike Masculino Revolution 6 Next Nature para completar seu visual. Com cabedal produzido em material macio, o modelo possui calcanhar acolchoado e fecho em cadarço para ajuste personalizado e firme. A entressola em EVA proporciona amortecimento leve e o solado emborrachado garante aderência e tração em diferentes tipos de pisos. Já o visual moderno agrega valor e deixa seu estilo autêntico e despojado. Aproveite!",
            "stock": 10,
            "status": true,
            "normal_price": 224.99,
            "promotional_price": 0,
            "created_at": "2022-05-15T20:00:13.000Z",
            "updated_at": "2022-05-15T20:00:13.000Z",
            "deleted_at": null,
            "category": {
              "id": "d11e0f6d-327e-408a-ae95-ef6344e9cf75",
              "name": "Camisetas",
              "created_at": "2022-05-15T16:58:23.000Z",
              "updated_at": "2022-05-15T16:58:23.000Z",
              "deleted_at": null
            }
          }
        ],
        total: 1
      }
    }
  */

  const { skip, limit } = req.query;

  const getAvailableProductsService = new GetAvailableProductsService();

  const result = await getAvailableProductsService.execute({ skip, limit });

  return res.json(result);
});

export { productsRoutes };
