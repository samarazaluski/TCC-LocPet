const User = require('../models/user');

// Creating a new user
exports.createUser = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const userExists = await User.findOne({ where: { email } })

        if (userExists) {
            return res.status(400).json({ error: 'Este e-mail já está em uso.' });
        }

        const newUser = await User.create({
            email, senha
        });

        const { id } = newUser;

        return res.status(201).json({ id, email });

    } catch (err) {
        return res.status(400).json({ error: 'Erro: ' + err });
    }
};

// Login
exports.userLogin = async (req, res) => {
    try {
        const { email, senha } = req.body;

        const user = await User.findOne({ where: { email, senha } });

        if (!user) {
            return res.status(400).json({ error: 'Nenhum usuário encontrado.' });
        }
        const comparePassw = await bcrypt.compare(senha, user.senha);

        // Como há quem diga que não é legal passar a mensagem de que somente a senha está incorreta..
        // Por isso a mesma mensagem no erro abaixo.
        if (!comparePassw) {
            return res.status(400).json({ error: 'Nenhum usuário encontrado.' });
        }

        return res.json({
            token: generateToken(user)
        });
    } catch (error) {
        return res.status(400).json({ error: 'Dados Inválidos ' + error })
    }
};