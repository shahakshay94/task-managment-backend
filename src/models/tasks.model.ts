import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { TasksInterface } from '@interfaces/tasks.interface';

export type TaskCreationAttributes = Optional<TasksInterface, 'id' | 'isCompleted'>;
export class TaskModel extends Model<TasksInterface, TaskCreationAttributes> implements TasksInterface {
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public id: string;
  public title: string;
  public description: string;
  public isCompleted: boolean;
}

export default function (sequelize: Sequelize): typeof TaskModel {
  TaskModel.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING(128),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(384),
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: 'tasks',
      sequelize,
    },
  );

  return TaskModel;
}
