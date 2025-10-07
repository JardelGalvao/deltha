require('dotenv').config({ path: '.env.test' });

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@schema/(.*)$': '<rootDir>/src/schema/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@repository/(.*)$': '<rootDir>/src/repository/$1',
    '^@service/(.*)$': '<rootDir>/src/service/$1',
    '^@controller/(.*)$': '<rootDir>/src/controller/$1',
  },
};