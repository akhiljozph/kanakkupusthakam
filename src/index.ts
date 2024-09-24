import Koa from "koa";
import 'dotenv/config'

import logger from "./common/logger/logger";

const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(async (ctx) => {
    ctx.body = "Hello World";
});

app.listen(PORT, () => {
    logger.info(`ex-tracker is running on port ${PORT}`)
});
