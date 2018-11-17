import dotenv from 'dotenv';
import Koa from 'koa';
import authRouter from './auth';

dotenv.config();

const port = process.env.PORT || 4000;

const app = new Koa();

app.use(authRouter.routes());

app.listen(port, () => {
  console.log(`Now listening on ${port}`);
});
