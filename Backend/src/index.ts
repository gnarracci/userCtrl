import express, { Application } from 'express'
import morgan from 'morgan';
import cors from 'cors';
const session = require('express-session');
const MySQLStore = require('express-mysql-session') (session);

const { database } = require('./keys');

import indexRoutes from './routes/indexRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import registerRoutes from './routes/registerRoutes';

const sessionStore = new MySQLStore(database);

class Server {

    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(session({
            key: 'user_session_stored',
            secret: 'user_session_secret',
            store: sessionStore,
            resave: false,
            saveUninitialized: false
        }));
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/', indexRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/auth/login', authRoutes);
        this.app.use('/api/auth/register', registerRoutes);
    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();