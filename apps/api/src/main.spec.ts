import * as request from 'supertest';
import { app } from './app';

describe('GET /api', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('responds with message', (done) => {
    request(app).get('/api').set('Accept', 'application/json').expect(
      200,
      {
        message: 'Welcome to api!',
      },
      done
    );
  });
});
