import * as process from "process";

export default () => ({

    PORT: parseInt(process.env.PORT) || 8080,
})