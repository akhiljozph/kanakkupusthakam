import Button from "../../components/ui/button/Button";
import "./Landing.scss";

const Landing = () => {
    return (
        <section className="landing-container">
            Kanakk | Kanakkupusthakam
            <section className="action-section">
                <Button className="btn-sign-in">Sign In</Button>
                <Button className="btn-sign-up">Sign Up</Button>
            </section>
        </section>
    )
}
export default Landing;