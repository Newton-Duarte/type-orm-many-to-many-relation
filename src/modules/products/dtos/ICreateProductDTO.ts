import { ICreateUnitDTO } from "@modules/units/dtos/ICreateUnitDTO";

export interface ICreateProductDTO {
  id?: string;
  name: string;
  price: number;
  unit_id: string;
  units?: ICreateUnitDTO[];
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}