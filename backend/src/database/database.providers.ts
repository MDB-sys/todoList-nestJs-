import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';
// import { hash } from '';

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
      sequelize.addHook('beforeCreate', 'User', (user, options) => {
        console.log('ini dari beforeCreate __________________________________');
        console.log(user);
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];
