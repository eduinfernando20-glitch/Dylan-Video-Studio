# Prisma schema and migration information

This directory contains the Prisma schema used by the backend.

To generate the Prisma client locally (after installing dependencies):

  cd backend
  npx prisma generate

To run migrations (creates dev.db):

  cd backend
  npx prisma migrate dev --name init

Note: Do NOT run these commands in CI via this repo without setting up the environment.
