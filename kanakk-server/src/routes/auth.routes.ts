import Router from '@koa/router';

import { signupController } from '../controllers/auth.controller';
import signUpSchema from '../schemas/input-schemas/sign-up.schema';

const router = new Router();


router.post('/signin', (ctx) => {

    ctx.body = { status: 200, body: {} }
});

router.post('/signup', (ctx) => {
    const parsedBody = signUpSchema.safeParse(ctx.request.body);

    if (!parsedBody.success) {
        ctx.status = 400;
        ctx.body = { status: 400, errors: parsedBody.error.flatten().fieldErrors };
        return;
    }

    signupController(parsedBody.data, () => { });

    ctx.body = { status: 200, body: {} }
});

export default router;