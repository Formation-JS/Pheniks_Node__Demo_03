import { DataSource } from 'typeorm';
import { DB } from './config.json';

export const db = new DataSource({
  type: 'postgres',
  host: DB.HOST,
  port: DB.PORT,
  database: DB.DATABASE,
  username: DB.USERNAME,
  password: DB.PASSWORD,
  entities: [
    "src/models/**/*.ts"
  ],
  logging: 'all'
}); 