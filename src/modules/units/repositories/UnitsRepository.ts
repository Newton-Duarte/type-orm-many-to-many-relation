import { getRepository, Repository } from "typeorm";
import { ICreateUnitDTO } from "../dtos/ICreateUnitDTO";
import { Unit } from "../entities/Unit";

export class UnitsRepository {
  private unitsRepository: Repository<Unit>;

  constructor() {
    this.unitsRepository = getRepository(Unit);
  }

  async find(): Promise<Unit[]> {
    return this.unitsRepository.find();
  }

  async findById(id: string): Promise<Unit> {
    return this.unitsRepository.findOne({ where: { id } });
  }

  async create({ id, name, quantity, abbreviation, is_fractionated, created_at }: ICreateUnitDTO): Promise<Unit> {
    const Unit = this.unitsRepository.create({
      id,
      name,
      quantity,
      abbreviation,
      is_fractionated,
      created_at: created_at || new Date(),
      updated_at: new Date(),
    });

    await this.unitsRepository.save(Unit);

    return Unit;
  }

  async delete(id: string): Promise<void> {
    await this.unitsRepository.delete(id);
  }
}