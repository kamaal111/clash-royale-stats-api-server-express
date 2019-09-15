// catch 404 and forward to error handler
const notFound = (_req, _res, next) => {
  const err = new Error('File Not Found');
  err.status = 404;

  next(err);
};

// error handler
const errorHandler = (err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  const error = {
    message: err.message,
    status: err.status,
    stack: err.stack,
  };

  res.status(err.status || 500);
  console.log(`${err.message}\n${err.status}`);
  res.json(error);
};

module.exports = { notFound, errorHandler };
