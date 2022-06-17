import {Request} from "express";
import {FC} from "react";
import TodoPages from "./client/components/pages/TodoPages";

export type PageProps = {
    path: string;
    buildPath: (id?: string) => string;
    component: FC;
    getServerSideProps: (req: Request) => unknown;
}

const routes: {[key: string]: PageProps} = {
    "/todo": {
        path: "/todo",
        buildPath: () => '/todo',
        component: TodoPages,
        getServerSideProps: (req: Request) => {return {id: "0", name: "aaa"}}
    }
}

export default routes;