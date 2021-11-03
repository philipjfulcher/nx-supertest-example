import * as request from 'supertest';
import { app } from './app';

describe('GET /api', () => {
  it('responds with json', async () => {
    const res = await request(app)
      .get('/api')
      .set('Accept', 'application/json');

    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.statusCode).toBe(200);
  });

  it('responds with message', async () => {
    const res = await request(app)
      .get('/api')
      .set('Accept', 'application/json');

    expect(res.body).toEqual({
      message: 'Welcome to api!',
    });
  });
});
