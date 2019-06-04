var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');

var app = express();
const router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port',3000);
app.use(cors({origin:'*'}))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//rutas mias
app.use('/usuarios', require('./routes/usuarios.routes'));
app.use('/rols', require('./routes/rols.routes'));
app.use('/unidades', require('./routes/unidades.routes'));
app.use('/asignaciones', require('./routes/asignaciones.routes'));
app.use('/preguntas', require('./routes/preguntas.routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//escuha el puerto
app.listen(app.get('port'), () => {
  console.log('Servidor en el puerto', app.get('port'));
})
module.exports = app;
