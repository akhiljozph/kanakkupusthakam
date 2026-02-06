import Router from '@koa/router';

import authRoutes from './auth.routes';

const router = new Router();

router.use('/api/v1/auth', authRoutes.routes());

export default router;