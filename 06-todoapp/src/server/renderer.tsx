import ReactDOMServer from "react-dom/server"
import {StaticRouter} from "react-router-dom/server";
import StyleContext from "isomorphic-style-loader/StyleContext"
import App from "../client/App";
type Props = {
    url: string;
    pageData: unknown;
}

export const createHTML = async ({url, pageData}: Props) => {
    const css = new Set();
    const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));
    const pageElementHTML = ReactDOMServer.renderToString(
        <StyleContext.Provider value={{insertCss}}>
            <StaticRouter location={url}>
                <App serverData={pageData} />
            </StaticRouter>
        </StyleContext.Provider>
    );
    return `
        <html lang="ja">
            <head>
                <title>TodoApp</title>
                <style>${[...css].join('')}</style>
            </head>
            <body>
                <div id="root" data-react='${JSON.stringify(pageData)}'>
                    ${pageElementHTML}
                </div>
                <script src="/public/client.js"></script>
            </body>
        </html>
    `
}