import { App } from '@/app';
import { TasksRoute } from '@routes/tasks.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([new TasksRoute()]);

app.listen();
