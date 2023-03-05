const express = require("express");
const bodyParser = require("body-parser");

const { user_game,user_game_bio,user_game_history} = require("./models");

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: false });
const port = "3000";

// Views

app.get ("/", (req,res) => {
    res.render('login');
});

app.get("/home", (req, res) => {
    user_game.findAll({
        where: {},
        order: [
            ['updatedAt', 'desc'],
            ['createdAt', 'desc']
        ],
    })
    .then(user_games => {
        res.render('profiles/index', {
            user_games: user_games
        });
    });
});

app.get("/show/:id", (req, res) => {
    user_game.findByPk(req.params.id,{
    })
    .then(user_games => {
        res.render('profiles/show', {
            user_games : user_games
        });
    });
});

app.get("/showhis/:id", (req,res) => {
    user_game_history.findByPk(req.params.id,{  
    })
    .then (user_game_histories => {
        res.render('profiles/showhis', {
            user_game_histories : user_game_histories
        });
    });
});

app.get("/showbio/:id", (req,res) => {
    user_game_bio.findByPk(req.params.id, {
    })
    .then(user_game_bios => {
        res.render('profiles/showbio', {
            user_game_bios : user_game_bios
        })
    })
})

app.get("/create", (req, res) => {
    res.render('profiles/create');
});

app.get("/edit/:id", (req, res) => {
    user_game.findByPk(req.params.id)
    .then(user_games => {
        res.render('profiles/edit', {
            user_games: user_games
        });
    });
});



// API
app.post("/api/profile", urlEncoded, async (req, res) => {
    try {
        let profile = await user_game.create({
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
});


app.post("/api/profile/edit", urlEncoded, async (req, res) => {
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
});

app.get("/api/profile/delete/:id", async (req, res) => {
    try {
        const count = await user_game.destroy({
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

});




app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})