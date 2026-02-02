import { useNavigate } from "react-router-dom";

import Button from "../../components/ui/button/Button";
import type { LandingProps } from "./Landing.types";

import "./Landing.scss";

const Landing = (props: LandingProps) => {

    const navigate = useNavigate();

    const handleClick = (routeLink: string) => {
        navigate(`/auth/${routeLink}`);
    }

    return (
        <main className="landing-container">
            <h1>Kanakk | Kanakkupusthakam</h1>
            <nav className="action-section">
                <Button onClick={() => { handleClick('sign-in') }} className="btn-sign-in">Sign In</Button>
                <Button onClick={() => { handleClick('sign-up') }} className="btn-sign-up">Sign Up</Button>
            </nav>
        </main>
    )
}
export default Landing;