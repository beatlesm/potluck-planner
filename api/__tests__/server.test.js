const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

describe('Sanity & environment testing!', () => {
  it('[1] sanity check', () => {
    expect(true).not.toBe(false)
  })
  it('[2] is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})
