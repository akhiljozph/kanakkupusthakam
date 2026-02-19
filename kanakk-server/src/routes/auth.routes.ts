import Router from '@koa/router';

const router = new Router();

interface usersInputValidationSchema {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    password: string;
    country: string;
    state: string;
    cityOrDistrict: string;
    locality: string;
    landmark: string;
    pinCode: string;
    apartment: string;
    dateOfBirth: string;
}

router.post('/sign-in', (ctx) => {
    ctx.body = { status: 200, body: {} }
});

router.post('/signup', (ctx) => { 
    ctx.body = { status: 200, body: {} } 
});

export default router;