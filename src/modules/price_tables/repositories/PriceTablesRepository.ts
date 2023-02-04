import { getRepository, Repository } from "typeorm";
import { ICreatePriceTableDTO } from "../dtos/ICreatePriceTableDTO";
import { PriceTable } from "../entities/PriceTable";

export class PriceTablesRepository {
  private priceTablesRepository: Repository<PriceTable>;

  constructor() {
    this.priceTablesRepository = getRepository(PriceTable);
  }

  async find(): Promise<PriceTable[]> {
    return this.priceTablesRepository.find();
  }

  async findById(id: string): Promise<PriceTable> {
    return this.priceTablesRepository.findOne({ where: { id }, relations: ['price_table_products'] });
  }

  async create({ id, name, products, created_at }: ICreatePriceTableDTO): Promise<PriceTable> {
    const priceTable = this.priceTablesRepository.create({
      id,
      name,
      price_table_products: products,
      created_at: created_at || new Date(),
      updated_at: new Date(),
    });

    await this.priceTablesRepository.save(priceTable);

    return priceTable;
  }

  async delete(id: string): Promise<void> {
    await this.priceTablesRepository.delete(id);
  }
}