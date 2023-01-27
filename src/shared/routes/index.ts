import { priceTablesRoutes } from '@modules/price_tables/routes/price_tables.routes';
import { productsRoutes } from '@modules/products/routes/products.routes';
import { unitsRoutes } from '@modules/units/routes/units.routes';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'hello world '})
});

router.use('/units', unitsRoutes);
router.use('/products', productsRoutes);
router.use('/price_tables', priceTablesRoutes);

export { router };