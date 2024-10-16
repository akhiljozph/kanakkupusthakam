import Router from "koa-router";

import logger from "./common/logger/logger";
import { createUserHandler } from "./controller/user.controller";

const router = new Router({
    prefix: '/api/v1'
});

router.post('/user', ctx => {
    createUserHandler(ctx.request, ctx.response);
});

export default router;