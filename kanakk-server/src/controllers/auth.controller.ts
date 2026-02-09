import authService from '../services/auth.service';

exports.signin = async (req, res) => {
    try {
        const { username, password } = req.body;

        const result = await authService.createSession({ username, password });

    } catch {

    }
}