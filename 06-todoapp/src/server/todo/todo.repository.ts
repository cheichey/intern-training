import {TaskEntity} from "../../entity/task";

export class TodoRepository {
    constructor(
        public tasks: TaskEntity[]
    ) {
    }

    getAll(): TaskEntity[] {
        return this.tasks;
    }

    save(tasks: TaskEntity[]) {
        this.tasks = tasks;
    }
}