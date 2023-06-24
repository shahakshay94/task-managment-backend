# TypeScript Express.js Project with Sequelize

This is a README file for a TypeScript project built with Express.js and Sequelize. The project is designed to create a RESTful API using Express.js and interact with a database using Sequelize as an ORM (Object-Relational Mapping) tool.

## Project Structure

The project structure typically consists of the following directories and files:

```
- src/
  - controllers/    // Contains the route handlers
  - models/         // Contains the Sequelize models
  - routes/         // Contains the API routes
  - config/         // Contains configuration files for injecting .env files
  - server.ts       // Main entry point for the application
  - database/
    - migrations/       // Contains database migration files
    - seeders/          // Contains database seed files
    - index.ts     // Contains database configurations
- .env.xxxx.local             // Environment variables
- .gitignore       // Git ignore file
- package.json     // Project dependencies and scripts
- tsconfig.json    // TypeScript configuration file
```

## Prerequisites

Before running the project, make sure you have the following dependencies installed:

- Node.js (v14 or above)
- npm (Node Package Manager)
- PostgreSQL or any other supported database (with appropriate credentials)
- TypeScript (optional but recommended)

## Getting Started

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal or command prompt.
3. Install the dependencies by running the following command:

   ```
   npm install
   ```

4. Set up the database by creating a PostgreSQL database. Configure the database credentials along with some other configurations in the `.env.development.local` file. Here's an example of the `.env.development.local` file:

   ```
   # PORT
   PORT=3535

   #DATABASE
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=mydatabase
   DB_USERNAME=myusername
   DB_PASSWORD=mypassword

   # TOKEN
   SECRET_KEY=secretKey

   # LOG
   LOG_FORMAT=dev
   LOG_DIR=../logs

   # CORS
   ORIGIN=*
   CREDENTIALS=true
   ```

5. Run the database migrations to create the necessary tables by executing the following command:

   ```
   npx sequelize-cli db:migrate
   ```

6. (Optional) If you have seed data, you can run the seeders to populate the database with initial data:

   ```
   npx sequelize-cli db:seed:all
   ```

7. Start the development server by running the following command:

   ```
   npm run dev
   ```

   This command will compile the TypeScript code and start the server using `nodemon` for automatic restarts on file changes.

8. Access the API endpoints using the provided base URL (e.g., `http://localhost:3535`) or the specific routes defined in the project.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server with automatic restarts using `nodemon`.
- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm start`: Starts the production server (after building the project).

## Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Sequelize Documentation](https://sequelize.org/)
- [Sequelize CLI Documentation](https://sequelize.org/master/manual/migrations.html#the-cli)
