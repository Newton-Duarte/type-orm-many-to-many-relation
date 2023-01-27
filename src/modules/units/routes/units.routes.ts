import { Request, Response, Router } from 'express'
import { UnitsRepository } from '../repositories/UnitsRepository';

const unitsRoutes = Router();

unitsRoutes.get('/', async (req: Request, res: Response) => {
  const unitsRepository = new UnitsRepository();
  const units = await unitsRepository.find();

  return res.json(units);
})

unitsRoutes.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const unitsRepository = new UnitsRepository();
  const unit = await unitsRepository.findById(id);

  return res.json(unit);
})

unitsRoutes.post('/', async (req: Request, res: Response) => {
  const { name, abbreviation, quantity, is_fractionated } = req.body;
  const unitsRepository = new UnitsRepository();

  const unit = await unitsRepository.create({ name, abbreviation, quantity, is_fractionated });

  return res.json(unit);
})

unitsRoutes.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, abbreviation, quantity, is_fractionated } = req.body;
  const unitsRepository = new UnitsRepository();

  const unit = await unitsRepository.create({ id, name, abbreviation, quantity, is_fractionated });

  return res.json(unit);
})

unitsRoutes.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const unitsRepository = new UnitsRepository();

  await unitsRepository.delete(id);

  return res.json({ message: 'Unit deleted' });
})

export { unitsRoutes }