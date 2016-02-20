module.exports = function (req,res,next) {
  if(req.user)
  {
    console.log(req.url);
    return next();
  }else{
    console.log('Redirect:'+ +'redirect to login');
      return res.redirect('login');
  }
}
