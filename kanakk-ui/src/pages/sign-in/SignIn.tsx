import { useEffect, useState } from "react";

import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import axiosInstance from "../../api/axios-instance";

const SignIn = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => { }, []);

    const handleChange = (fieldName: string, value: string) => {
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        axiosInstance.get('/sign-in', {});
    }

    return (
        <section>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <Input type="text" label="Username" placeholder="johndoe" onChange={(values) => { handleChange('username', values) }} />
                <Input type="text" label="Password" placeholder="johndoe" onChange={(values) => { handleChange('password', values) }} />
                <Button type='submit'>Submit</Button>
            </form>
        </section>
    )
}
export default SignIn;