import dotenv from "dotenv";

dotenv.config();

const config = {
    server: {
        hostname: process.env.SERVER_HOSTNAME || "localhost",
        port: process.env.PORT || 5000,
    },
    database: {
        host: process.env.SERVER_HOSTNAME,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    },
};

export default config;
