
exports.signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // const result = await authService.createSession({ username, password });

    } catch {

    }
}

export const signupController = async (userAccount: any): Promise<{ success?: boolean; message?: string }> => {
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