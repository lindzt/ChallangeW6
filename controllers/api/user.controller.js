const { user  } = require("../../models");

module.exports = {
    login: async (req, res) => {
        let message = {
            type: 'error',
            message: 'Login failed, username/password does not match'
        };

        try {
            let test = await user.findOne({
                where: { username: req.body.username }
            });

            // Password not valid
            if (!test.validPassword(req.body.password)) {
                return res.render("login", {
                    message: message
                })
            }

            // If valid, store to session
            req.session.userId = user.id;
            req.session.username = user.username;
            req.session.isAdmin = user.isAdmin == true;

            res.redirect("/profile");
        } catch (error) {
            return res.render("login", {
                message: message
            })
        }
    },
    register: async (req, res) => {
        try {
            let user = await user.create({
                username: req.body.username,
                password: req.body.password,
            });

            res.redirect("/login");
        } catch (error) {
            res.render("register", {
                message: {
                    type: 'error',
                    message: error
                }
            })
        }
    },
    logout: async (req, res) => {
        if (req.session.userId) {
            req.session.destroy();
            res.redirect("/");
        }
    }
};