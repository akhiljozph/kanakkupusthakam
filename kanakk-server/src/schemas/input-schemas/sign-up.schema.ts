import { z } from 'zod';

const signUpSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    mobileNumber: z.string(),
    password: z.string().min(8),
    country: z.string(),
    state: z.string(),
    cityOrDistrict: z.string(),
    locality: z.string(),
    landmark: z.string(),
    pinCode: z.string(),
    apartment: z.string(),
    dateOfBirth: z.string(),
});

export default signUpSchema;