import { useSelector } from "react-redux";

import Wrapper from "../../pages/wrapper/Wrapper";

import type { DashboardProps } from "./Dashboard.types";

import './Dashboard.scss';

const Dashboard = (props: DashboardProps) => {

    const user = useSelector((state) => state.auth);
    return (
        <p>Dashboard works!</p>
    )
}
export default Dashboard;