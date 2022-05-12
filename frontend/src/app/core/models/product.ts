import { Category } from './category';

export interface Product {
  id: string;
  name: string;
  imgPath: string;
  category: Category;
  description: string;
  stock: number;
  status: boolean;
  price: {
    promotional: number;
    normal: number;
  };
}
