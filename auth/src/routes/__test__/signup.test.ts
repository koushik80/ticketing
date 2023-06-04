import request from 'supertest';
import { app } from '../../app';

it('returns a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
        email: 'rajon@gmail.com',
        password: '123456',
    })
    .expect(201);
});

it('returns a 400 with an invalid email', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
        email: 'abcdcom',
        password: '123456',
    })
    .expect(400);
});

it('returns a 400 with an invalid password', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
        email: 'abcdcom',
        password: '1',
    })
    .expect(400);
});

it('returns a 400 with missing email and password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
      email: 'rajon@gmail.com'
    })
    .expect(400);

  await request(app)
    .post('/api/users/signup')
    .send({
      password: '123456'
    })
    .expect(400)
});

it('disallow duplicate emails', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({
        email: 'rajon@gmail.com',
        password: '123456',
    })
    .expect(201);

  await request(app)
    .post('/api/users/signup')
    .send({
        email: 'rajon@gmail.com',
        password: '123456',
    })
    .expect(400);
});