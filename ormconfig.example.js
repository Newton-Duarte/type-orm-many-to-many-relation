const path = require('path');

module.exports = {
  type: 'postgres',
  port: 5432,
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'pg_docker',
  migrations: [path.join(__dirname, '/src/shared/database/migrations/*.ts')],
  entities: [path.join(__dirname, '/src/modules/**/entities/*.ts')],
  cli: {
    migrationsDir: path.join(__dirname, '/src/shared/database/migrations'),
  },
  logging: true,
};