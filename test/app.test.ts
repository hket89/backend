import app from '../src/app';
import supertest from 'supertest';

describe('test api endpoint', () => {
  const request = supertest(app);

  afterAll(() => {
    app.close();
  });

  it('health check', async () => {
    const result = await request.get('/health');

    expect(result.status).toEqual(200);
    expect(result.text).toEqual('ok');
  });

  it('top post - full', async () => {
    const result = await request.get('/posts/top');

    expect(result.status).toEqual(200);
    expect(result.text).toMatchSnapshot();
  });

  it('top post - limit = 5', async () => {
    const result = await request.get('/posts/top?limit=5');

    expect(result.status).toEqual(200);
    expect(result.text).toMatchSnapshot();
  });

  it('top post - error', async () => {
    const result = await request.get('/posts/top?limit=aaa');

    expect(result.status).toEqual(401);
  });

  it('filter comments - full', async () => {
    const result = await request.get('/filter/comments');

    expect(result.status).toEqual(200);
    expect(result.text).toMatchSnapshot();
  });

  it('filter comments - postId = 1w', async () => {
    const result = await request.get('/filter/comments?postId=1');

    expect(result.status).toEqual(200);
    expect(result.text).toMatchSnapshot();
  });

  it('filter comments - email = Eliseo@gardner.biz', async () => {
    const result = await request.get(
      '/filter/comments?email=Eliseo@gardner.biz'
    );

    expect(result.status).toEqual(200);
    expect(result.text).toMatchSnapshot();
  });
});
