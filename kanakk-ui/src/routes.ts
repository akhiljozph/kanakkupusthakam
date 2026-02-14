import Auth from "./modules/auth/Auth";
import Dashboard from "./modules/dashboard/Dashboard";
import Landing from "./modules/landing/Landing";
import Shell from "./modules/shell/Shell";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import type { IRoutesConfig } from "./routes.types";

export const routes: IRoutesConfig[] = [
    {
        path: '/',
        element: Landing
    },
    {
        path: '/auth',
        element: Auth,
        children: [
            { path: 'sign-in', element: SignIn },
            { path: 'sign-up', element: SignUp }
        ]
    }, {
        path: '/shell',
        element: Shell,
        children: [
            { path: 'dashboard', element: Dashboard }
        ]
    }
]