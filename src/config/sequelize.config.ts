import { Sequelize } from '@sequelize/core';
import { PostgresDialect } from '@sequelize/postgres';

const sequelizeConfig = new Sequelize({
    dialect: PostgresDialect,
    database: 'ex-tracker',
    user: 'ex-user',
    password: 'Ex@01!',
    host: 'localhost',
    port: 5432,
    ssl: false,
    clientMinMessages: 'notice',
});

export default sequelizeConfig;
