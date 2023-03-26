const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const Sequelize = require("sequelize");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    dialect: config.dialect
});

const router = require("./routes");
const app = express();


app.use(session({
    secret: "secret",
    store: new SequelizeStore({
        db: sequelize
    }),
    saveUninitialized:false,
    resave: false
}));



sequelize.sync();

app.use(cookieParser());

// app.get("/showhis/:id", (req,res) => {
//     user_game_history.findByPk(req.params.id,{  
//     })
//     .then (user_game_histories => {
//         res.render('profiles/showhis', {
//             user_game_histories : user_game_histories
//         });
//     });
// });

// app.get("/showbio/:id", (req,res) => {
//     user_game_bio.findByPk(req.params.id, {
//     })
//     .then(user_game_bios => {
//         res.render('profiles/showbio', {
//             user_game_bios : user_game_bios
//         })
//     })
// })

app.set('view engine', 'ejs');
const port = "3000";

app.use(router);


app.listen(port, () => {
    console.log(`App listening on port: ${port}`);
})