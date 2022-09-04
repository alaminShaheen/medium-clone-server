import config from "configs/config";
import logging from "configs/logging";
import express from "express";

const app = express();

app.listen(config.server.port, () => {
    logging.info(`Server started successfully at: https://${config.server.hostname}:${config.server.port}.`);
});
