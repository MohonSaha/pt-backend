# Backend Starter By Mohon Saha

## How to use this repo:

1. Clone the repo
   ```
   git clone git clone https://github.com/MohonSaha/bs-1.git
   ```
2. Delete .git file from the project
3. Configure the .env file:
   ```
    NODE_ENV=developemnt
    PORT=5000
    DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.grqmol8.mongodb.net/<collectionName>?retryWrites=true&w=majority
   ```
4. Chnage the mongodb username, password and collectionName
5. Delete code details(.md) files.
6. install all the node modules
   ```
   npm i
   ```

## Commands(script) details

1. Run the server in developer mode
   ```
   npm run start:dev
   ```
2. Convert typescript into javascript
   ```
   npm run build
   ```
3. Run the server in production after conver into js
   ```
   start:prod
   ```
4. Manually check code formet, find error and code quaity check
   ```
   npm run lint
   ```
5. Auto fix through Eslint
   ```
   npm run lint:fix
   ```
6. Manually formet through prettier
   ```
   npm run prettier
   ```
7. Auto formet through prettier
   ```
   npm run prettier:fix
   ```

## How I have made it:

1. Install node modules
   ```
   npm init -y
   ```
2. Install express js
   ```
   npm i express
   ```
3. Install mongoose for data modeling
   ```
   npm i mongoose --save
   ```
4. Install typescript in developer mode
   ```
   npm i typescript --save-dev
   ```
5. Install cors to maintain Cross-Origin Resource Sharing
   ```
   npm i cors
   ```
6. Install dotenv to access enviremnet variable
   ```
   npm i dotenv
   ```
7. Initialize a json file for typescript
   ```
   tsc -init
   ```
8. Config tsconfig.json file
   ```
   "rootDir": "./src",
   "outDir": "./dist",
   ```
9. Create a folder in root: src —> then create a file in src named app.ts
   ```
   node_modules
   package.json
   src
       app.ts
       server.ts (contain all server connections and connectivity)
   .env
   ```
10. create a .env file to store sensitive information
    ```
    PORT=5000
    DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.grqmol8.mongodb.net/?retryWrites=true&w=majority
    ```
11. Create a file to manage environment variables

    1. File Strucutre
       ```
       src
           app
               config
                   index.ts
       ```
    2. index.ts

       ```
        import dotenv from "dotenv";
        import path from "path";
        dotenv.config({ path: path.join((process.cwd(), ".env")) });
        export default {
            port: process.env.PORT,
            database_url: process.env.DATABASE_URL,
            };
       ```

12. Connect mongoose in the server (server.ts file)

    ```
    import app from "./app";
    import config from "./app/config";
    import mongoose from "mongoose";

    async function main() {
         try {
            await mongoose.connect(config.database_url as string);

            app.listen(config.port, () => {
            console.log(`Example app listening on port ${config.port}`);
        });
        } catch (err) {
             console.log(err);
        }
    }
    main();
    ```

13. Manage server response and request (app.ts file)

    ```
    import express, { Application, Request, Response } from "express";
    import cors from "cors";
    const app: Application = express();
    // parser
    app.use(express.json());
    app.use(cors());
    app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
    });
    export default app;
    ```

14. Install EsLint for code formet, find error and code quaity check

    ```
    npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev

    // inatialize a eslist:
    npx eslint --init
    ```

15. Config tsconfig.json and follow : https://blog.logrocket.com/linting-typescript-eslint-prettier/
    ```
    "include": ["src"], // which files to compile
    "exclude": ["node_modules"], // which files to skip
    ```
16. Install prettier for code formeting and follow: https://blog.logrocket.com/linting-typescript-eslint-prettier/
    ```
    npm install --save-dev prettier
    ```
17. Install eslint-config-prettier and config to prevent conflict
    ```
    npm install --save-dev eslint-config-prettier
    ```
18. Install ts-node-dev to automatically run the server in development mode
    ```
    npm i ts-node-dev --save-dev
    ```

## Explain version-1.1 Codes

### Next()

1. We can see that we have to handle err every time from catch block in every controller file in the project. We can handle this error very easily through the express mechanims named next()
2. If we give anything into next() in express application it treated as error. And next() pass it to global error handler.
3. Global error handler is a error handling middleware. And is have 4 parameters named: req, res, err, next.
4. Controller catch block => next() => global error handler

### Not Found (middleware)

1. If we give a wrong api then express gives us a html template formate error. We use this middleware to convert that html formet into json formet. It takes 3 parameters like a normal middleware.

### sendResponse utility function

1. We have to use response from the try catch block in controller.ts file. That's why our code repeatation increases gradually. So we can easily create a common reuseable function for that called utility function. And we can call it from the controller.ts file and send out required data.

### Index Route

1. This just a refactoring of application routes. This refactoring will help us to manage multiple routes and clean code in app.ts. Actually it will also help us to manage the route in modular pattern.

## Explain version-1.2 Codes

### Higher Order Function

1. A function that takes a function as a parameter, do some tasks and retuen a function.

### catchAsync utility Higher Order function

1. We use try-catch block many times in the controller.ts file. It increase out code repeatation. So that's why we will use this function.
2. catchAsync receives a asynchronous code. And we know that asynchronous code will return a promise. We will call that asynchronous function from catchAsync and keep that asynchronous code into Promise.resolve so that that asynchronous code can resolve easily.
3. For any reason that code unable to resolve we use .catch() and pass the error through next(). next() will take the error from global error handler. Because we know that we can pass error to global erorr handler through next()

### RequestHandler

1. It's a express type that help us to declare request handling function in express application. If we use this we do not import Request, Response and NextFunction every time from express.

### validateRequest

1. It is a middleware and also a higher order fucntion. It takes zod validation schema as a parameter. Check data type before going to controller.
2. For checking data asynchronously it use zod parseAsync mechanism. If all ckecking is okay it calls next(). If there is any mistake for checking the type it goes to catch block and call next(err).

## Explain version-1.2 Codes
