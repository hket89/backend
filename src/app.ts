import { config } from './config';
import { createApp } from './lib/server';
import { router } from './routes';

const app = createApp(router.allowedMethods(), router.routes());

const listener = app.listen(config.port, () => {
  const address = listener.address();

  if (typeof address === 'object' && address) {
    // eslint-disable-next-line no-console
    console.debug(`listening on port ${address.port}`);
  }
});

export default listener;
