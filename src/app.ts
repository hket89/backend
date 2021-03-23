import { router } from './routes';
import { createApp } from './lib/server';
import { config } from './config';

const app = createApp(router.allowedMethods(), router.routes());

const listener = app.listen(config.port, () => {
  const address = listener.address();

  if (typeof address === 'object' && address) {
    // eslint-disable-next-line no-console
    console.debug(`listening on port ${address.port}`);
  }
});
