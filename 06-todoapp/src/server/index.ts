import express from "express";
import routes from "../routes";
import { createHTML } from "./renderer";

const app = express();

app.use('/public', express.static('dist/public'));

Object.keys(routes).forEach(
    (key) => {
        const route = routes[key];
        app.get(route.path, async (req, res) => {
            const pageData = await route.getServerSideProps(req);
            const pageHTML = await createHTML({url: req.url, pageData})
            res.send(pageHTML);
        })
        app.get(`/api${route.path}`, async (req, res) => {
            const pageData = await route.getServerSideProps(req);
            res.json(pageData);
        })
    }
)

app.get('/*', (req, res) => {
    res.send("404 Not Found");
});
app.listen(process.env.PORT || 3000);