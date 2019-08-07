// catch 404 and forward to error handler
const NOT_FOUND = app => {
  app.use((req, res, next) => {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });
};

// error handler
const errorHandler = app => {
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    let error = { message: err.message, status: err.status, stack: err.stack };
    // render the error page
    res.status(err.status || 500);
    console.log(`${err.message}\n${err.status}`);
    res.json(error);
  });
};

module.exports = { NOT_FOUND, errorHandler };
