import { Request, Response, Router } from 'express'
import { ProductsRepository } from '../repositories/ProductsRepository';

const productsRoutes = Router();

productsRoutes.get('/', async (req: Request, res: Response) => {
  const productsRepository = new ProductsRepository();
  const products = await productsRepository.find();

  return res.json(products);
})

productsRoutes.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  const productsRepository = new ProductsRepository();
  const product = await productsRepository.findById(id);

  return res.json(product);
})

productsRoutes.post('/', async (req: Request, res: Response) => {
  const { name, price, unit_id } = req.body;
  const productsRepository = new ProductsRepository();

  const product = await productsRepository.create({ name, price, unit_id });

  return res.json(product);
})

productsRoutes.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, price, unit_id } = req.body;
  const productsRepository = new ProductsRepository();

  const product = await productsRepository.create({ id, name, price, unit_id });

  return res.json(product);
})

productsRoutes.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const productsRepository = new ProductsRepository();

  await productsRepository.delete(id);

  return res.json({ message: 'Product deleted' });
})

export { productsRoutes }