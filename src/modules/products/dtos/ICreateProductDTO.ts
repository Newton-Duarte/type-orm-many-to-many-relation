export interface ICreateProductDTO {
  id?: string;
  name: string;
  price: number;
  unit_id: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}