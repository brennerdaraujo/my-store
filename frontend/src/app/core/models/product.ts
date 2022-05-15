import { Category } from './category';

export interface Product {
  id: string;
  category: Category;
  category_id: string;
  created_at: Date;
  deleted_at: Date;
  description: string;
  img_path: string;
  name: string;
  normal_price: number;
  promotional_price: number;
  status: boolean;
  stock: number;
  updated_at: Date;
}
