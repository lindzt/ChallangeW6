const router = require("express").Router();
const bodyParser = require("body-parser");
const userController = require("../../controllers/api/user.controller");
const { verifyJWT } = require("../../middlewares/api.middleware");


router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/logout", userController.logout);

module.exports = router;
