import passport from 'passport';
const LocalStrategy = require('passport-local').Strategy;

    passport.use('local', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        reqToCallback: true
    }, (req: any, username: any, password: any, done: any) => {
        console.log(req.body);
    }));