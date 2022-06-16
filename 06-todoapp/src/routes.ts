import {Request} from "express";
import {FC} from "react";

export type PageProps = {
    path: string;
    buildPath: (id?: string) => string;
    component: FC;
    getServerSideProps: (req: Request) => unknown;
}

const routes: {[key: string]: PageProps} = {
}

export default routes;