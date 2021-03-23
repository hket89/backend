import Koa from 'koa';
import compose from 'koa-compose';

export const createApp = <State, Context>(
  ...middleware: Koa.Middleware<State, Context>[]
) => new Koa().use(compose(middleware));
