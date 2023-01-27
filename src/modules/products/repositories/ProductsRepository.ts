import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../entities/Product";

export class ProductsRepository {
  private productsRepository: Repository<Product>;

  constructor() {
    this.productsRepository = getRepository(Product);
  }

  async find(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findById(id: string): Promise<Product> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async create({ id, name, price, unit_id, created_at }: ICreateProductDTO): Promise<Product> {
    const Product = this.productsRepository.create({
      id,
      name,
      price,
      unit_id,
      created_at: created_at || new Date(),
      updated_at: new Date(),
    });

    await this.productsRepository.save(Product);

    return Product;
  }

  async delete(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }
}