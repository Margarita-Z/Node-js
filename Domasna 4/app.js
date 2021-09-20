//App js прикажува креирање и експортирање на објект во апликацијата

var createError = require('http-errors'); // имплементирање на библиотеката http-errors
var express = require('express'); // имплементирање на библиотеката express
var path = require('path'); // патека која е основна библиотека во Node за анализирање на патеките
var cookieParser = require('cookie-parser'); //имплементирање на библиотеката cookie-parser
var logger = require('morgan'); //имплементирање на библиотеката morgan

var indexRouter = require('./routes/index'); // модул за ракување со одредени групи поврзани со рути односно URL патеки
var usersRouter = require('./routes/users'); //модул за ракување со одредени групи поврзани со рути односно URL патеки

var app = express(); // креирање app објект користејќи го еxpress модулот за да се постави шаблон (терк) за приказ

// view engine setup
//арр set функции
app.set('views', path.join(__dirname, 'views')); //поставена е вредност views која се сместува во фолдерот /views
app.set('view engine', 'jade'); // и вредноста view engine за да се одреди библиотеката во случајот jade

// арр use функции за додавање на посредничките библиотеки
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// во следниот дел се методи за управување со грешки и HTTP одговори

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

module.exports = app; // тоа е она што може да се имплементира од bin/www
