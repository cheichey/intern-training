import {Request} from "express";
import {FC} from "react";
import TodoPages from "./client/components/pages/TodoPages";
import {TodoService} from "./server/todo/todo.service";

export type PageProps = {
    path: string;
    buildPath: (id?: string) => string;
    component: FC;
    getServerSideProps: (req: Request, service: any) => unknown;
}

const routes: {[key: string]: PageProps} = {
    "/todo": {
        path: "/todo",
        buildPath: () => '/todo',
        component: TodoPages,
        getServerSideProps: (req: Request, todoService: TodoService) => {return todoService.getAll()}
    }
}

export default routes;