const { user_game } = require ("../../models");

module.exports = {
    create : async (req, res) => {
        try {
            let user_game = await user_game.create({
                userId : req.session.userId,
                username: req.body.username,
                password: req.body.password,
                // place_of_birth : req.body.place_of_birth,
                // date_of_birth : req.body.date_of_birth,
                hobby : req.body.hobby,
                // score : req.body.score,
                // last_played : new date(),
    
            });
            res.redirect('/');
        } catch (error) {
            res.render('profiles/create', {
                error: error
            });
        }
    },

    edit :  async (req, res) => {
        try {
            let profile = await user_game.findByPk(req.body.id);
            profile.username = req.body.username ? req.body.username : profile.username;
            await profile.save();
    
            res.redirect('/');
        } catch (error) {
            res.render('profiles/edit', {
                error: error
            });
        }
    },

    delete : async (req, res) => {
        try {
            const count = await User.destroy({
                where: { id: req.params.id }
            });
    
            if (count > 0) {
                return res.redirect('/');
            } else {
                return res.redirect('/');
            }
        } catch (err) {
            return res.redirect('/');
        }
    }
}