export class TaskEntity{
    limit: Date;
    createdAt: Date;
    updatedAt: Date
    constructor(
        public id: number,
        public name: string,
    ) {
    }

}