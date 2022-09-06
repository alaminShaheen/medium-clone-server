import express, { Request, Response } from "express";
import config from "./configs/config";
import { LogType } from "./models/enums/LogType";
import { Database } from "./utils/Database";
import { Logger } from "./utils/Logger";

const app = express();
const logger = Logger.getInstance();

app.get("/", (request: Request, response: Response) => {
    response.send("hello world!");
});

async function start() {
    try {
        const database = Database.getInstance();
        await database.init();
        app.listen(config.server.port, () => {
            logger.log(LogType.Info, `Server started successfully at: https://${config.server.hostname}:${config.server.port}.`);
        });
    } catch (error) {
        logger.log(LogType.Error, error);
    }
}
start();
