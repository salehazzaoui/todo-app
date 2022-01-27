import express, { Request, Response } from "express"
import { EntityManager, getConnection, getManager, getRepository } from "typeorm";
import { Todos } from "../models/todo";

const router = express.Router();

router.post('/', async(req: Request, res: Response) => {
    try {
        const entityManager: EntityManager = getManager();
        const {title} = req.body;
        if(title === ''){
            res.status(401).json({
                error : "title must fill."
            })
            return;
        }
        const todo: Todos = new Todos();
        todo.title = title
        await entityManager.save(todo);
        return res.status(200).json({
            message : "todo created."
        })
    } catch (error) {
        console.error(error)
    }
})

router.get('/', async(req: Request, res: Response) => {
    try {
        const todoRepository = getRepository(Todos);
        const todos = await todoRepository.find();
        return res.json({
            todos
        })
    } catch (error) {
        console.error(error)
    }
})

router.get('/:id', async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const todoRepository = getRepository(Todos);
        const todo = await todoRepository.findOne(id);
        return res.json({
            todo
        })
    } catch (error) {
        console.error(error)
    }
})

router.put('/:id', async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const {title} = req.body;
        const todoRepository = getRepository(Todos);
        const todo = await todoRepository.findOne(id);
        todo.title = title;
        await todoRepository.save(todo);
        return res.json({
            todo
        })
    } catch (error) {
        console.error(error)
    }
})

router.delete('/:id', async(req: Request, res: Response) => {
    try {
        const {id} = req.params;
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Todos)
            .where("id = :id", { id: id })
            .execute();
            return res.json({
            message: "todo deleted."
        })
    } catch (error) {
        console.error(error)
    }
})

export {
    router as todoController
}