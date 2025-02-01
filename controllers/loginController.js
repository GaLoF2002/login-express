const users = [{ username: 'admin', password: '1234' }]; // Usuarios en memoria

exports.renderLogin = (req, res) => {
    res.render('login', { error: null });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        req.session.user = user;
        return res.redirect('/dashboard');
    }
    res.render('login', { error: 'Usuario o contraseña incorrectos' });
};

exports.dashboard = (req, res) => {
    if (!req.session.user) return res.redirect('/');
    res.render('dashboard', { user: req.session.user });
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};