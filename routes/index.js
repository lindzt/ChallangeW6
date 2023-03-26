const router = require("express").Router();
const homeRouter = require("./home.router");
const profileRouter = require("./profile.router");

const apiUserRouter = require("./api/user.router");
const apiProfileRouter = require("./api/profile.router");



// MVC
router.use("/", homeRouter);
router.use("/profile", profileRouter);

// MCR
router.use("/api/user", apiUserRouter);
router.use("/api/profile", apiProfileRouter);




module.exports = router;