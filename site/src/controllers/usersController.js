module.exports={
    login:function(req, res, next) {
        res.render('users/login');
      },
    register:function(req, res, next) {
        res.render('users/register');
      }
}