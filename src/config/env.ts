import * as process from "process";

export default () => ({

    PORT: parseInt(process.env.PORT) || 8080,

    MONGO_CONNECTION: process.env.MONGO_CONNECTION || "mongodb://wb_mongo:27017/weblog_backend",
})