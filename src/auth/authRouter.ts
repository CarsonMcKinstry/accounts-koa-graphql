import jwt from 'jsonwebtoken';
import { Context, Middleware } from 'koa';
import Router from 'koa-router';
import authConfig from './config';
import passport from './passport';

const authRouter = new Router({
  prefix: '/auth',
});

const availableStrategies: string[] = Object.keys(authConfig);

const confirmStrategyMiddleware: Middleware = (ctx, next) => {
  const { params: { strategy } } = ctx;
  if (availableStrategies.includes(strategy)) {
    return next();
  }

  return ctx.throw(403, `${strategy} is not a supported OAuth provider`);
};

// handle the intial call to a strategy

const addRedirectCookie: Middleware = (ctx, next) => {
  const { query: { r } } = ctx;
  const encodedRedirectURL = new Buffer(r).toString('base64');
  ctx.cookies.set('r', encodedRedirectURL, {
    maxAge: 60 * 60 * 1000,
  });
  return next();
};

const runInitialAuthStrategy: Middleware = (ctx, next) => {
  const { params: { strategy } } = ctx;
  return passport.authenticate(strategy)(ctx, next);
};

authRouter
  .get('/:strategy', confirmStrategyMiddleware)
  .get('/:strategy', addRedirectCookie)
  .get('/:strategy', runInitialAuthStrategy);

// handle the callback

const checkForErrors: Middleware = (ctx, next) => {
  const { query } = ctx;
  if (query.error) {
    return ctx.throw(500, query.error);
  }
  return next();
};

const strategyCallback = (ctx: Context) => (err: Error | null, profile: any) => {
  const encodedRedirectURL = ctx.cookies.get('r');
  const redirectURL = new Buffer(encodedRedirectURL, 'base64').toString('utf-8');
  if (typeof process.env.SIGNATURE !== 'string') {
    throw new Error('SIGNATURE env variable not given');
  } else {
    const userJwt = jwt.sign(profile, process.env.SIGNATURE);

    ctx.redirect(`${redirectURL}?access_token=${userJwt}`);
  }
};

const runCallbackAuthStrategy: Middleware = (ctx, next) => {
  const { params: { strategy } } = ctx;
  return passport.authenticate(strategy, strategyCallback(ctx))(ctx, next);
};

authRouter
  .get('/:strategy/callback', checkForErrors)
  .get('/:strategy/callback', confirmStrategyMiddleware)
  .get('/:strategy/callback', runCallbackAuthStrategy);

export default authRouter;
