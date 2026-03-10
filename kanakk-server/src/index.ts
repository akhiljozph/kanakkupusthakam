import Koa from "koa";
import Router from "koa-router";

import bodyParser from "koa-bodyparser";
import json from "koa-json";
import logger from "koa-logger";

const app = new Koa();
const router = new Router();

router.get("/", async (ctx, next) => {
    ctx.body = { msg: "Hello world!" };

    await next();
});

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log("Koa started at 3000!");
});