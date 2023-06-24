import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import TaskModel from '@models/tasks.model';
import { logger } from '@utils/logger';

const sequelize = new Sequelize.Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  host: DB_HOST,
  port: +DB_PORT,
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(time + 'ms' + ' ' + query);
  },
  benchmark: true,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
sequelize.authenticate().then(r => logger.info('DB authenticated'));

export const DB = {
  Tasks: TaskModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};
