import Router from "koa-router";

const authRoutes = new Router();

authRoutes.post('/registration', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

authRoutes.post('/create/password', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

authRoutes.post('/create/password', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

authRoutes.get('/login', async(ctx) => {
    ctx.body = { message: "Hello from authRoutes."}
});

export default authRoutes;