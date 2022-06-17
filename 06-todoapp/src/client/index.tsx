import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import StyleContext from "isomorphic-style-loader/StyleContext"
import App from "./App";
const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}

ReactDOM.hydrate(
    <StyleContext.Provider value={{insertCss}}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StyleContext.Provider>,
    document.getElementById("root")
)