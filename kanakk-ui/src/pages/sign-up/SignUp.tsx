import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

const SignUp = () => {
    return (
        <section>
            <form>
                <Input type="text" label="Full Name" placeholder="John Doe" />
                <Input type="email" label="Email Address" placeholder="john.doe@kanakk.com" />
                <Input type="password" minLength={8} maxLength={16} label="Account Password" />
                <Input type="password" minLength={8} maxLength={16} label="Confirm Password" />
                <Button type="submit">Submit</Button>
            </form>
        </section>
    )
}
export default SignUp;