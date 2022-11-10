

export const showCurrentRoute = (req, res, next) => {
  if (process.env.DEBUG) {
    console.log(process.env.INIT_CWD);
    next();
  } else {
    next();
  }
  
};
