class AuthController {

    signupController(userAccount: any): any {
        try {
            const { email } = userAccount;

            // Db query for checking user exists or not.
            const userExists: boolean = true;

            if (userExists) {
                return { success: false, message: `An account with the email ${email} already exists.` };
            }

            // Db operation for user creation.

            return { success: true };
        } catch (error) {
            throw error;
        }
    }
}

export const authController = new AuthController();