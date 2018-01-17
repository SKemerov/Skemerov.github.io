var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Avengers home page' });
});

module.exports = router;

/* Страница Тони Старка */
router.get('/Tony', function(req, res, next) {
    res.render('hero', {
        title: "Тони Старк",
        picture: "images/stark.jpg",
        desc: "Мозговой центр мстителей. Более известен миру как Железный человек"
    });
});


/* Страница Капитана */
router.get('/Captain', function(req, res, next) {
    res.render('hero', {
        title: "Стив Роджерс",
        picture: "images/cap.jpg",
        desc: "Глава команды. Более известный миру как Капитан Америка"
    });
});

/* Страница Брюса Бэннера */
router.get('/Banner', function(req, res, next) {
    res.render('hero', {
        title: "Брюс Бэннер",
        picture: "images/hulk.jpg",
        desc: "Грубая сила команды. Более известен миру как Халк"
    });
});

/* Страница Тора */
router.get('/thor', function(req, res, next) {
    res.render('hero', {
        title: "Тор",
        picture: "images/thor.jpg",
        desc: "Полубог из Асгарда,сын Одина.Известен миру как Тор"

    });
});

/* Страница Мстителей */
router.get('/avengers', function(req, res, next) {
    res.render('hero', {
        title: "*Общий сбор*",
        picture: "images/Avengers.jpg",
        desc: "Семейное фото"
    });
});

