import express, {Response, Request} from "express";
import cors from "cors";
import {createConnection, Connection} from "typeorm";
import { todoController } from "./controllers/todoController";
import { Todos } from "./models/todo";

const app = express();
app.use(cors({
    origin: '*'
}))
app.use(express.json());
app.use('/todos', todoController);

const main = async() =>{
    try {
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "12345678",
            database: "todos",
            entities: [Todos],
            synchronize: true
        });
        console.log("database connected")
        app.listen(5000, () => console.log("server running on http://localhost:5000"))
    } catch (error) {
        console.error(error)
    }
}

main()