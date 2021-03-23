import app from '../src/app';
import request from 'supertest';

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
