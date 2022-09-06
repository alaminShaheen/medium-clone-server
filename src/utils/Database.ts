import { DataSource } from "typeorm";

import config from "../configs/config";
import { Article } from "../models/Article";
import { LogType } from "../models/enums/LogType";
import { User } from "../models/User";
import { Logger } from "./Logger";

export class Database {
    private static instance: Database;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }

    public async init() {
        const { host, password, port, username } = config.database;
        const logger = Logger.getInstance();

        const appDataSource = new DataSource({
            type: "postgres",
            host,
            port: Number(port),
            username,
            password,
            database: "medium_clone_db",
            synchronize: true,
            logging: true,
            logger: "advanced-console",
            entities: [User, Article],
        });

        try {
            await appDataSource.initialize();
            logger.log(LogType.Info, "Database initialized.");
        } catch (error) {
            logger.log(LogType.Error, error);
        }
    }
}
