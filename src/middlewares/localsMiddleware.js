const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "JoeyTube";
  res.locals.loggedInUser = req.session.user;
  next();
};

export default localsMiddleware;
