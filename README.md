# TypeORM Many to Many Relation

## Create env file

Make a copy of the `.env.example` file and rename it to .env

## Create orm config file

Make a copy of the `.ormconfig.example.js` file and rename it to `.ormconfig.js`

## Create docker containers

Stop the `APP` container and just use the `Postgres` container

```bash
$ docker-compose up -d
```

## Install dependencies

```bash
$ yarn
```

## Run Dev Server

```bash
$ yarn dev
```

## Routes

GET, POST, PUT, DELETE

```json
{
  "id": "auto-generated",
  "name": "Unit",
  "abbreviation": "UN",
  "quantity": 1,
  "is_fractionated": false
}
```

http://localhost:3333/units

http://localhost:3333/units/:id

```json
{
  "id": "auto-generated",
  "name": "Product",
  "price": 10,
  "unit_id": "unit_id"
}
```

http://localhost:3333/products

http://localhost:3333/products/:id

```json
{
  "id": "auto-generated",
  "name": "Price Table",
  "products": [
    {
      "price_table_id": "price-table-id",
      "product_id": "product-id",
      "product_unit_id": "product-unit-id",
      "product_price": 5
    }
  ],
}
```

http://localhost:3333/price_tables

http://localhost:3333/price_tables/:id