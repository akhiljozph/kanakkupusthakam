import type { DashboardProps } from "./Dashboard.types";

import './Dashboard.scss';
import { useSelector } from "react-redux";

const Dashboard = (props: DashboardProps) => {

    const user = useSelector((state) => state.auth);
    return (
        <>Dashboard works</>
    )
}
export default Dashboard;