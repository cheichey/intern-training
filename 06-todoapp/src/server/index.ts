import express from "express";
import routes from "../routes";
import { createHTML } from "./renderer";
import {TaskEntity} from "../entity/task";
import {TodoService} from "./todo/todo.service";
import {TodoRepository} from "./todo/todo.repository";

const app = express();
app.use(express.json());
app.use('/public', express.static('dist/public'));


const todoService = new TodoService(new TodoRepository([
    new TaskEntity(0, "フロントエンド"),
    new TaskEntity(1, "サーバーサイド"),
    new TaskEntity(2, "インフラ")
]));

Object.keys(routes).forEach(
    (key) => {
        const route = routes[key];
        app.get(route.path, async (req, res) => {
            const pageData = await route.getServerSideProps(req, todoService);
            const pageHTML = await createHTML({url: req.url, pageData})
            res.send(pageHTML);
        })
        app.get(`/api${route.path}`, async (req, res) => {
            const pageData = await route.getServerSideProps(req, todoService);
            res.json(pageData);
        })
    }
)

app.post('/todo', (req, _res) => {
    const newTasks = req.body;
    todoService.save(newTasks);
})

app.get('/*', (req, res) => {
    res.send("404 Not Found");
});
app.listen(process.env.PORT || 3000);