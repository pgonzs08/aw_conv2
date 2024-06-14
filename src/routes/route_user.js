const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const logger = require("../middlewares/logger");
//const session = require("../middlewares/session");

router.use(logger);

router.get('/login', userController.getLogin);
router.post('/login', userController.checkCredentials);
router.get('/register', userController.getRegister);

router.route("/").all(
    (req, res, next) => {
        next();
    })
    .get((req, res) => res.redirect("/"))
    .post(userController.createUser);

router.route("/:username").all(
    (req, res, next) => {
        next()
    })
    .get(userController.getUserProfilePage)
    .put(userController.updateUserProfilePage);

module.exports = router;