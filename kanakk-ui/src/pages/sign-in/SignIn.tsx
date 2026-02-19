import { useEffect, useState } from "react";

import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import axiosInstance from "../../api/axios-instance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "../../modules/auth/AuthSlice";

const SignIn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    useEffect(() => { }, []);

    const handleChange = (fieldName: string, value: string) => {
        setFormData((prev) => ({ ...prev, [fieldName]: value }));
    }

    const handleAuthenticationSuccessful = (response: any) => {
        console.info(response);

        dispatch(saveUserInfo());
    }

    const handleAuthenticationFailure = (response: any) => {
        console.info(response);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(formData);

        try {
            const response: any = axiosInstance.get('/sign-in', {});

            if (response?.status === 200) {
                handleAuthenticationSuccessful(response);
            } else {
                handleAuthenticationFailure(response);
            }

        } catch (error) {
            console.error('Error occurred on your signin attempt!', error);
        }

        navigate('/shell/dashboard');
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