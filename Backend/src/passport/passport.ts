const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('local.login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallBack: true
}, async (req: { body: any; }, username: any, pasword: any, done: any) => {
    console.log(req.body);
}));
/*
passport.serializeUser((usr: any, done: any) => {

}):
*/