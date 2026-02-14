import { Outlet } from "react-router-dom";

import type { ShellProps } from "./Shell.types";

import TopNav from "../../components/layout/top-nav/TopNav";
import SideNav from "../../components/layout/side-nav/SideNav";

import "./Shell.scss";

const Shell = (props: ShellProps) => {
    return (
        <>
            <TopNav />
            <SideNav />

            <Outlet />
        </>
    )
}
export default Shell;