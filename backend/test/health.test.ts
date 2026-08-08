import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { createApp } from '../src/app';

const app = createApp();

describe('health endpoint', () => {
  it('returns ok and service', async () => {
    const res = await request(app).get('/api/health');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ status: 'ok', service: 'Dylan Video Studio API' });
  });
});
