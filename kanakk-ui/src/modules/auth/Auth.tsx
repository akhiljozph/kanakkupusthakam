import { Outlet } from "react-router-dom";

import type { AuthProps } from "./Auth.types";

import "./Auth.scss";

const Auth = (props: AuthProps) => {
    return (
        <main className="auth-container">
            <h1>KANAKK</h1>
            <Outlet />
        </main>
    )
}
export default Auth;