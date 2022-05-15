import { Like, Repository } from 'typeorm';

import appDataSource from '../database/ormconfig';
import { Product } from '../entities/Product';

interface IProduct {
  id?: string;
  name: string;
  img_path: string;
  category_id: string;
  description: string;
  stock: number;
  status: boolean;
  promotional_price: number;
  normal_price: number;
}

interface IGetProducts {
  skip: number;
  limit: number;
  filter: string;
}

class ProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = appDataSource.getRepository(Product);
  }

  async create(data: IProduct): Promise<Product> {
    const product = this.repository.create(data);

    await this.repository.save(product);

    return product;
  }

  async update(data: IProduct): Promise<void> {
    await this.repository.update(
      { id: data.id },
      {
        name: data.name,
        img_path: data.img_path,
        category_id: data.category_id,
        description: data.description,
        stock: data.stock,
        status: data.status,
        promotional_price: data.promotional_price,
        normal_price: data.normal_price
      }
    );
  }

  async delete(id: string): Promise<void> {
    await this.repository.softDelete({ id });
  }

  async findById(id: string): Promise<Product | null> {
    const product = await this.repository.findOneBy({ id });

    return product;
  }

  async getProducts({
    skip,
    limit,
    filter = ''
  }: IGetProducts): Promise<{ products: Product[]; total: number }> {
    const result = await this.repository.findAndCount({
      relations: ['category'],
      skip,
      take: limit,
      where: {
        name: Like(`%${filter}%`)
      }
    });

    return {
      products: result[0],
      total: result[1]
    };
  }

  async getAvailableProducts({
    skip,
    limit
  }: IGetProducts): Promise<{ products: Product[]; total: number }> {
    const result = await this.repository.findAndCount({
      relations: ['category'],
      where: { status: true },
      skip,
      take: limit
    });

    return {
      products: result[0],
      total: result[1]
    };
  }
}

export { ProductRepository };
