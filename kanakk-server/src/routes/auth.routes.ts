import Router from '@koa/router';


import signUpSchema from '../schemas/input-schemas/sign-up.schema';
import { authController } from '../controllers/auth.controller';

const router = new Router();


router.post('/signin', (ctx) => {

    ctx.body = { status: 200, body: {} }
});

router.post('/signup', async (ctx) => {
    try {

        const parsedBody = signUpSchema.safeParse(ctx.request.body);

        if (!parsedBody.success) {
            ctx.status = 400;
            ctx.body = { status: 400, errors: parsedBody.error.flatten().fieldErrors };
            return;
        }

        const result = await authController.signupController(parsedBody.data);

        if (!result.success) {
            ctx.status = 400;
            ctx.body = { status: 400, message: result.message };
            return;
        }

        ctx.body = { status: 200, body: {} }
    } catch (error) {
        console.error(error);
    } finally {
        console.info('POST /signup — Execution completed successfully!');
    }
});

export default router;