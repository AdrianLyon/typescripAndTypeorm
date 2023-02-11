import { DataSource } from 'typeorm';

import {User} from './entities/User'

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123',
  port: 3306,
  database: 'typeormdb',
  entities: [User],
  logging: true,
  synchronize: true
});
