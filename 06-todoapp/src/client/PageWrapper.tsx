import axios from "axios";
import React, { useEffect, useState, FC } from "react";
import { useLocation } from "react-router-dom";

type Props = {
    serverData?: any;
    PageComponent: FC<{ data?: any; isLoading: boolean }>;
};
const PageWrapper: FC<Props> = ({ serverData, PageComponent }) => {
    const [data, setData] = useState(() => {
        if (typeof document !== "undefined") {
            const dataPool = (document.getElementById("root") as HTMLElement).dataset
                .react;
            const initialData = dataPool ? JSON.parse(dataPool) : null;
            (document.getElementById("root") as HTMLElement).dataset.react = "";
            return initialData;
        } else {
            return serverData;
        }
    });
    const isDataExist = !!data;

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(!isDataExist);

    const { pathname } = useLocation();

    useEffect(() => {
        if (isDataExist) return;
        const f = async () => {
            setIsLoading(true);
            const result = await axios
                .get(`/api${pathname}`)
                .then((data) => data.data)
                .catch((error) => {
                    console.warn(error);
                    setIsError(true);
                    return null;
                });
            setData(result);
            setIsLoading(false);
        };
        f();
    }, [pathname, isDataExist]);
    if (isError) return <p>エラーが発生しました。</p>;
    return <PageComponent data={data} isLoading={isLoading} />;
};

export default PageWrapper;