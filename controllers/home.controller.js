module.exports = {

    home: async (req, res) => {
            res.render("home", {
                session : req.ression
            });
    },
    login: async (req, res) => {
        res.render("login", {
            session: req.session
        });
    },
    register: async (req, res) => {
        res.render("register", {
            session: req.session
        });
    }
};
