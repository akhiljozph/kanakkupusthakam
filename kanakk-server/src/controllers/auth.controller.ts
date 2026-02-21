
exports.signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        // const result = await authService.createSession({ username, password });

    } catch {

    }
}

export const signupController = async (req, res) => {
    try {
        const { email } = req;

        // Db query for checking user exists or not.
    } catch (error) {

    }
}