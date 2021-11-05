module.exports = (req, res, next) => {
    if (req.session.userLog.rol === "admin"  ){
        next()
    } else {
        res.render('users/guestUser')
    }
}