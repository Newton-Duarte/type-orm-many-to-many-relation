import { ICreatePriceTableProductDTO } from "./ICreatePriceTableProductDTO";

export interface ICreatePriceTableDTO {
  id?: string;
  name: string;
  products?: ICreatePriceTableProductDTO[] | undefined;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}