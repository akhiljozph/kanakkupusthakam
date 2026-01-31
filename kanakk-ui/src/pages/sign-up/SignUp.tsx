import Button from "../../components/ui/button/Button";
import Input from "../../components/ui/input/Input";

const SignUp = () => {
    return (
        <section>
            <form>
                <Input type="text" label="Full Name" placeholder="John Doe" />
                <Input type="email" label="Email Address" placeholder="john.doe@kanakk.com" />
                <Input type="password" label="Account Password" />
                <Button type="submit">Submit</Button>
            </form>
        </section>
    )
}
export default SignUp;