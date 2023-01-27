export interface ICreateUnitDTO {
  id?: string;
  name: string;
  abbreviation: string;
  quantity: number;
  is_fractionated?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}