const { user } = require("../models");

module.exports = {
    verifyWebSession: async (req, res, next) => {
        if (req.session.userId) {
            let User = await user.findByPk(req.session.userId);
            if (User) {
                next();
            } else {
                return res.redirect("/login");
            }
        } else {
            return res.redirect("/login");
        }
    },
    redirectIfSigned: async (req, res, next) => {
        if (!req.session.userId) {
            next();
        } else {
            res.redirect("/profile");
        }
    }
};