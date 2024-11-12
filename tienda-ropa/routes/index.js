var express = require('express');
var router = express.Router();

const items = [
  { nombre: 'Camiseta', image: '/images/camiseta.jpg', precio: "20€" },
  { nombre: 'Pantalones', image: '/images/pantalones.jpg', precio: "40€" },
  { nombre: 'Chaqueta', image: '/images/chaqueta.jpg', precio: "60€" },
  { nombre: 'Zapatos', image: '/images/zapatos.jpg', precio: "50€" }
];

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Iniciar Sesión' });
});

router.post('/login', function(req, res, next) {
  req.session.loggedIn = true;
  res.redirect('/tienda');
});

router.get('/tienda', function(req, res, next) {
  if (!req.session.loggedIn) {
    return res.redirect('/');
  }
  res.render('tienda', { title: 'Tienda de Ropa', items: items });
});

router.get('/restringida', function(req, res, next) {
  if (!req.session.loggedIn) {
    return res.redirect('/');
  }
  res.render('restringida', { title: 'Página Restringida' });
});

module.exports = router;
