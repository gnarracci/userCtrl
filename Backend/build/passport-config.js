"use strict";
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}));
