module.exports = (req, res, next) => {
    if (req.session.userLog === undefined){
        next()
    } else {
        res.render('users/users',{usuario: req.session.userLog})
    }
}