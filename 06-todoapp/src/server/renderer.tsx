import ReactDOMServer from "react-dom/server"
import {StaticRouter} from "react-router-dom/server";
import App from "../client/components/App";
type Props = {
    url: string;
    pageData: unknown;
}

const createHTML = async ({url, pageData}: Props) => {
    const pageElementHTML = ReactDOMServer.renderToString(
        <StaticRouter location={url}>
            <App serverData={pageData} />
        </StaticRouter>
    );

    return `
        <html lang="ja">
            <head>
                <title>TodoApp</title>
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

export default createHTML;