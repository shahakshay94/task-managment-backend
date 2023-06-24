import { Router } from 'express';
import { TasksController } from '@controllers/tasks.controller';
import { CreateTasksDto, UpdateTasksDto } from '@dtos/tasks.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class TasksRoute implements Routes {
  public path = '/tasks';
  public router = Router();
  public task = new TasksController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.task.getTasks);
    this.router.get(`${this.path}/:id`, this.task.getTaskById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreateTasksDto, 'body'), this.task.createTask);
    this.router.patch(`${this.path}/:id`, ValidationMiddleware(UpdateTasksDto, 'body', true), this.task.updateTask);
    this.router.delete(`${this.path}/:id`, this.task.deleteTask);
  }
}
