const profileController = require("../controllers/profile.controller");
const webMiddleware = require("../middlewares/web.middleware");
const router = require("express").Router();


router.get("/", webMiddleware.verifyWebSession, profileController.index);
router.get("/create", webMiddleware.verifyWebSession, profileController.create);
router.get("/show/:id", webMiddleware.verifyWebSession, profileController.show);
router.get("/edit/:id", webMiddleware.verifyWebSession, profileController.edit);


module.exports = router;