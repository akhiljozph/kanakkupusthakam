import Router from '@koa/router';

const router = new Router();

router.post('/sign-in', (ctx) => {
    ctx.body = { status: 200, body: {} }
});

router.post('/signup', (ctx) => { ctx.body = { status: 200, body: {} } });

export default router;