import {Request} from "express";
import {FC} from "react";
import Home from "./client/components/Home";

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
        component: Home,
        getServerSideProps: (req: Request) => {return {id: "0", name: "aaa"}}
    }
}

export default routes;