import dotenv from "dotenv";

dotenv.config();

const config = {
	server: {
		hostname: process.env.SERVER_HOSTNAME || "localhost",
		port: process.env.PORT || 5000,
	},
};

export default config;