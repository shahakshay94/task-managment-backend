import { NextFunction, Request, Response } from 'express';
import { Container } from 'typedi';
import { CreateTasksDto, UpdateTasksDto } from '@dtos/tasks.dto';
import { TasksInterface } from '@interfaces/tasks.interface';
import { TasksService } from '@services/tasks.service';

export class TasksController {
  public task = Container.get(TasksService);

  public getTasks = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getAllTasksDetails: TasksInterface[] = await this.task.getAllTasks();

      res.status(200).json({ data: getAllTasksDetails });
    } catch (error) {
      next(error);
    }
  };

  public getTaskById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const getSpecifiedTaskDetail: TasksInterface = await this.task.getTaskById(req.params.id);

      res.status(200).json({ data: getSpecifiedTaskDetail });
    } catch (error) {
      next(error);
    }
  };

  public createTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskData: CreateTasksDto = req.body;
      const createdTaskData: TasksInterface = await this.task.createTask(taskData);

      res.status(201).json({ data: createdTaskData });
    } catch (error) {
      next(error);
    }
  };

  public updateTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const taskData: UpdateTasksDto = req.body;
      const updatedTaskData: TasksInterface = await this.task.updateTask(req.params.id, taskData);

      res.status(200).json({ data: updatedTaskData });
    } catch (error) {
      next(error);
    }
  };

  public deleteTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteTaskData: TasksInterface = await this.task.deleteTask(req.params.id);

      res.status(200).json({ data: deleteTaskData });
    } catch (error) {
      next(error);
    }
  };
}
