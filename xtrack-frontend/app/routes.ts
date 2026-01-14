import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("signin", "components/auth-components/sign-in/sign-in.tsx"),
    route("signup", "components/auth-components/sign-up/sign-up.tsx")
] satisfies RouteConfig;
