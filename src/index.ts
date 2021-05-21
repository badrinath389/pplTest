import express, { Response as ExResponse, Request as ExRequest } from "express";
import * as bodyParser from "body-parser";
import { RegisterRoutes } from "./routes/routes";
import swaggerUi from "swagger-ui-express";


import cors from 'cors';

export const app = express();

app.use(cors());

// Use body parser to read sent json payloads
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

const port = 5000;

const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

app.use("/api/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(
        swaggerUi.generateHTML(await import("../build/swagger.json"))
    );
});

RegisterRoutes(app);

app.use(function notFoundHandler(_req, res: ExResponse) {
    res.status(404).send({
        message: "Not Found",
    });
});