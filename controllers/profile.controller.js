const { user_game, user } = require("../models");

module.exports = {
    index : (req, res) => {
		let whereQuery = req.session.isAdmin ? {} : { userId: req.session.userId };

		let orderQuery = [
			['updatedAt', 'desc'],
        	['createdAt', 'desc']
		]

		let includeQuery = [
			{model : user }
		]
            user_game.findAll({
				where : whereQuery,
				order : orderQuery,
				include : includeQuery
            })
            .then(user_games => {
                res.render('profiles/index', {
                    user_games: user_games
                });
            });
        },
		
	create : (req, res) => {
		res.render('profiles/create');
		},

	show : (req, res) => {
		user_game.findByPk(req.params.id,{
		})
		.then(user_games => {
				res.render('profiles/show', {
						user_games : user_games
				});
			});
		},

	edit : (req, res) => {
		user_game.findByPk(req.params.id)
		.then(user_games => {
				res.render('profiles/edit', {
						user_games: user_games
				});
		});
		}

};

    
