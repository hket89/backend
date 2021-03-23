import request from 'supertest';

import app from '../src/app';

describe('GET / - a simple api endpoint', () => {
  afterAll(() => {
    app.close();
  });

  it('Health Check', async () => {
    const result = await request(app).get('/health');

    expect(result.status).toEqual(200);
    expect(result.text).toEqual('ok');
  });
});
