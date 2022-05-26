import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';

export const databaseProvider = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432, // port postgres
        username: 'postgres',
        password: '12345678',
        database: 'todoList',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
