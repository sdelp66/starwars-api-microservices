const {Router} = require("express");
const controllers = require('../controllers');

const router = Router();

router.get("/films", controllers.getFilms);

router.post("/", controllers.createFilm);

module.exports = router;
