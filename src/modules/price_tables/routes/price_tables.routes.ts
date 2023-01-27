import { Request, Response, Router } from 'express'
import { PriceTablesRepository } from '../repositories/PriceTablesRepository';

const priceTablesRoutes = Router();

priceTablesRoutes.get('/', async (req: Request, res: Response) => {
  const priceTablesRepository = new PriceTablesRepository();
  const priceTables = await priceTablesRepository.find();

  return res.json(priceTables);
})

priceTablesRoutes.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const priceTablesRepository = new PriceTablesRepository();
  const priceTable = await priceTablesRepository.findById(id);

  return res.json(priceTable);
})

priceTablesRoutes.post('/', async (req: Request, res: Response) => {
  const { name, products } = req.body;
  const priceTablesRepository = new PriceTablesRepository();

  const priceTable = await priceTablesRepository.create({ name, products });

  return res.json(priceTable);
})

priceTablesRoutes.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, products } = req.body;
  const priceTablesRepository = new PriceTablesRepository();

  const priceTable = await priceTablesRepository.create({ id, name, products });

  return res.json(priceTable);
})

priceTablesRoutes.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const priceTablesRepository = new PriceTablesRepository();

  await priceTablesRepository.delete(id);

  return res.json({ message: 'Price Table deleted' });
})

export { priceTablesRoutes }