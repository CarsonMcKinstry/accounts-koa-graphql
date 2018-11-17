import passport from 'koa-passport';
import authConfig from './config';

Object.keys(authConfig).forEach((strategy) => passport.use(authConfig[strategy]));

export default passport;
