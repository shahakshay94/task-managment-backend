import { Service } from 'typedi';
import { DB } from '@database';
import { CreateTasksDto, UpdateTasksDto } from '@dtos/tasks.dto';
import { HttpException } from '@exceptions/httpException';
import { TasksInterface } from '@interfaces/tasks.interface';

@Service()
export class TasksService {
  public async getAllTasks(): Promise<TasksInterface[]> {
    return await DB.Tasks.findAll();
  }

  public async getTaskById(taskID: string): Promise<TasksInterface> {
    const taskFound: TasksInterface = await DB.Tasks.findByPk(taskID);
    if (!taskFound) throw new HttpException(404, 'Task not found');
    return taskFound;
  }

  public async createTask(taskDetail: CreateTasksDto): Promise<TasksInterface> {
    return await DB.Tasks.create({ ...taskDetail });
  }

  public async updateTask(taskId: string, taskInfo: UpdateTasksDto): Promise<TasksInterface> {
    const taskFound: TasksInterface = await DB.Tasks.findByPk(taskId);
    if (!taskFound) throw new HttpException(404, 'Task not found');
    await DB.Tasks.update({ ...taskInfo }, { where: { id: taskId } });
    return await DB.Tasks.findByPk(taskId);
  }

  public async deleteTask(taskId: string): Promise<TasksInterface> {
    const taskFound: TasksInterface = await DB.Tasks.findByPk(taskId);
    if (!taskFound) throw new HttpException(404, 'Task not found');
    await DB.Tasks.destroy({ where: { id: taskId } });
    return taskFound;
  }
}
