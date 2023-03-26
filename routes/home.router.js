const homeController = require("../controllers/home.controller");
const webMiddleware = require("../middlewares/web.middleware");

const router = require("express").Router();

router.get("/", webMiddleware.redirectIfSigned, homeController.home);
router.get("/login", webMiddleware.redirectIfSigned, homeController.login);
router.get("/register",webMiddleware.redirectIfSigned,  homeController.register);

module.exports = router;