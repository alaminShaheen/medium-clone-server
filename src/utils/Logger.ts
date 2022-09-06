import { LogType } from "../models/enums/LogType";

export class Logger {
    private static instance: Logger;

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(logLevel: LogType, message?: any, namespace = "Server") {
        const date = Logger.getDate();

        if (typeof message === "string") {
            console.log(`[${date}] [${namespace}] [${logLevel}] ${message}`);
        } else {
            console.log(`[${date}] [${namespace}] [${logLevel}]`, message);
        }
    }

    private static getDate = () => {
        return new Date().toISOString();
    };
}
