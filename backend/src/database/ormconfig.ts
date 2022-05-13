import { DataSource } from 'typeorm';

import { dbconfig } from '../.dbconfig';

const appDataSource = new DataSource({
  type: 'mysql',
  host: dbconfig.host,
  port: dbconfig.port,
  username: dbconfig.username,
  password: dbconfig.password,
  database: dbconfig.database,
  entities: ['src/entities/*.ts']
});

export default appDataSource;
