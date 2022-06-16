import {FC} from "react";
import {Route, Routes} from "react-router-dom";
import routes from "../routes";
import PageWrapper from "./PageWrapper";

const App: FC<{serverData?: any}> = ({serverData = null})    => {
    return (
        <Routes>
            {Object.keys(routes).map(
                (key) => {
                    const {path, component} = routes[key];
                    return (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <PageWrapper
                                    PageComponent={component}
                                    serverData={serverData}
                                />
                            }
                        >
                        </Route>
                    )
                }
            )}
        </Routes>
    )
}

export default App;