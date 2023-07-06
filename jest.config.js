/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  coverageThreshold: {
    global: {
      branches: 80,
      lines: 91,
    },
  },
};
