import { Router } from 'express';

import { CreateProductService } from '../services/CreateProductService';
import { DeleteProductService } from '../services/DeleteProductService';
import { GetProductsService } from '../services/GetProductsService';
import { UpdateProductService } from '../services/UpdateProductService';

const productsAdminRoutes = Router();

productsAdminRoutes.post('/', async (req, res) => {
  /*
    #swagger.description = 'Adiciona um produto.'
    #swagger.tags = ['Produtos - Administrativo']
  */

  /*
    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      '@schema': {
        required: [name],
        "properties": {
          name: {
            description: 'Nome do produto',
            type: 'string',
            required: true,
            example: 'Tênis Nike Revolution 6 Next Nature Masculino - Preto+Branco'
          },
          base64_img: {
            description: 'Imagem do produto no formato Base64',
            type: 'string',
            required: true,
            example: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          },
          category_id: {
            description: 'ID da categoria',
            type: 'string',
            required: true,
            example: 'd11e0f6d-327e-408a-ae95-ef6344e9cf75',
          },
          description: {
            description: 'Descrição do produto',
            type: 'string',
            required: true,
            example: 'Para caminhadas e corridas leves, treinos de musculação ou até mesmo no dia a dia aposte no conforto e qualidade do Tênis Nike Masculino Revolution 6 Next Nature para completar seu visual. Com cabedal produzido em material macio, o modelo possui calcanhar acolchoado e fecho em cadarço para ajuste personalizado e firme. A entressola em EVA proporciona amortecimento leve e o solado emborrachado garante aderência e tração em diferentes tipos de pisos. Já o visual moderno agrega valor e deixa seu estilo autêntico e despojado. Aproveite!',
          },
          stock: {
            description: 'Quantidade do produto disponível em estoque',
            type: 'integer',
            required: true,
            example: 10,
          },
          status: {
            description: 'Status do produto, se está ativo ou desativado',
            type: 'boolean',
            required: true,
            example: false,
          },
          promotional_price: {
            description: 'Preço promocional do produto. Colocar 0, caso não deseje utilizar promoção.',
            type: 'number',
            required: true,
            example: 0,
          },
          normal_price: {
            description: 'Preço normal do produto',
            type: 'number',
            required: true,
            example: 224.99,
          }
        }
      }
    }
  */

  /*
    #swagger.responses[200] = {
      schema: {
        "id": "2b8eaa04-848e-4ae8-8717-596d77fe537e",
        "category_id": "d11e0f6d-327e-408a-ae95-ef6344e9cf75",
        "name": "Tênis Nike Revolution 6 Next Nature Masculino - Preto+Branco",
        "img_path": "public/images/products/1f023c64-b173-4152-a62f-2bc6d44926cb.jpg",
        "description": "Para caminhadas e corridas leves, treinos de musculação ou até mesmo no dia a dia aposte no conforto e qualidade do Tênis Nike Masculino Revolution 6 Next Nature para completar seu visual. Com cabedal produzido em material macio, o modelo possui calcanhar acolchoado e fecho em cadarço para ajuste personalizado e firme. A entressola em EVA proporciona amortecimento leve e o solado emborrachado garante aderência e tração em diferentes tipos de pisos. Já o visual moderno agrega valor e deixa seu estilo autêntico e despojado. Aproveite!",
        "stock": 10,
        "status": false,
        "normal_price": 224.99,
        "promotional_price": 0,
        "deleted_at": null,
        "created_at": "2022-05-15T20:00:13.000Z",
        "updated_at": "2022-05-15T20:00:13.000Z"
      }
    }
  */

  const {
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price
  } = req.body;

  const createProductService = new CreateProductService();

  const product = await createProductService.execute({
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price
  });

  return res.json(product);
});

productsAdminRoutes.put('/:id', async (req, res) => {
  /*
    #swagger.description = 'Atualizar um produto.'
    #swagger.tags = ['Produtos - Administrativo']
  */

  /*
    #swagger.parameters['id'] = {
      description: 'ID do produto a ser atualizado.',
      type: 'string',
      required: true,
      example: 'ef2ccbd4-572d-4509-a93a-8066e223b215',
      in: 'path'
    }

    #swagger.parameters['body'] = {
      in: 'body',
      required: true,
      '@schema': {
        required: [name],
        "properties": {
          name: {
            description: 'Nome do produto',
            type: 'string',
            required: true,
            example: 'Tênis Nike Revolution 6 Next Nature Masculino - Preto+Branco'
          },
          base64_img: {
            description: 'Imagem do produto no formato Base64',
            type: 'string',
            required: true,
            example: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          },
          category_id: {
            description: 'ID da categoria',
            type: 'string',
            required: true,
            example: 'd11e0f6d-327e-408a-ae95-ef6344e9cf75',
          },
          description: {
            description: 'Descrição do produto',
            type: 'string',
            required: true,
            example: 'Para caminhadas e corridas leves, treinos de musculação ou até mesmo no dia a dia aposte no conforto e qualidade do Tênis Nike Masculino Revolution 6 Next Nature para completar seu visual. Com cabedal produzido em material macio, o modelo possui calcanhar acolchoado e fecho em cadarço para ajuste personalizado e firme. A entressola em EVA proporciona amortecimento leve e o solado emborrachado garante aderência e tração em diferentes tipos de pisos. Já o visual moderno agrega valor e deixa seu estilo autêntico e despojado. Aproveite!',
          },
          stock: {
            description: 'Quantidade do produto disponível em estoque',
            type: 'integer',
            required: true,
            example: 10,
          },
          status: {
            description: 'Status do produto, se está ativo ou desativado',
            type: 'boolean',
            required: true,
            example: false,
          },
          promotional_price: {
            description: 'Preço promocional do produto. Colocar 0, caso não deseje utilizar promoção.',
            type: 'number',
            required: true,
            example: 0,
          },
          normal_price: {
            description: 'Preço normal do produto',
            type: 'number',
            required: true,
            example: 224.99,
          }
        }
      }
    }
  */

  const {
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price
  } = req.body;
  const { id } = req.params;

  const updateProductService = new UpdateProductService();

  await updateProductService.execute({
    name,
    base64_img,
    category_id,
    description,
    stock,
    status,
    promotional_price,
    normal_price,
    id
  });

  return res.send();
});

productsAdminRoutes.delete('/:id', async (req, res) => {
  /*
    #swagger.description = 'Deletar um produto.'
    #swagger.tags = ['Produtos - Administrativo']
  */

  /*
    #swagger.parameters['id'] = {
      description: 'ID do produto a ser deletado.',
      type: 'string',
      required: true,
      example: 'ef2ccbd4-572d-4509-a93a-8066e223b215',
      in: 'path'
    }
  */

  const { id } = req.params;

  const deleteProductService = new DeleteProductService();

  await deleteProductService.execute(id);

  return res.send();
});

productsAdminRoutes.get('/', async (req, res) => {
  /*
    #swagger.description = 'Busca todos os produtos.'
    #swagger.tags = ['Produtos - Administrativo']
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

    #swagger.parameters['filter'] = {
      description: 'Filtro utilizado ao buscar produtos.',
      type: 'string',
      required: false,
      example: 'Tênis',
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
            "status": false,
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

  const { skip, limit, filter } = req.query;

  const getProductsService = new GetProductsService();

  const result = await getProductsService.execute({ skip, limit, filter });

  return res.json(result);
});

export { productsAdminRoutes };
