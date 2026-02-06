import Router from '@koa/router';

const router = new Router();

router.post('/sign-in', (ctx) => {
    ctx.body = { status: 2000, body: {} }
});

export default router;