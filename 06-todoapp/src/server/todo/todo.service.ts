import {TaskEntity} from "../../entity/task";
import {TodoRepository} from "./todo.repository";

export class TodoService {
    constructor(
        public todoRepository: TodoRepository
    ){}
    getAll(): TaskEntity[] {
        return this.todoRepository.getAll();
    }

    save(newTasks: TaskEntity[]) {
        this.todoRepository.save(newTasks);
    }
}