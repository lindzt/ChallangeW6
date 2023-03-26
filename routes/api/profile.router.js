const router = require("express").Router();
require("express-group-routes");
const bodyParser = require("body-parser");
const profileController = require("../../controllers/api/profile.controller");

const jsonParser = bodyParser.json();
const urlEncoded = bodyParser.urlencoded({ extended: false });

router.post("/create", urlEncoded, profileController.create);
router.post("/edit", urlEncoded, profileController.edit);
router.get("/delete/:id", profileController.delete);

module.exports = router;
