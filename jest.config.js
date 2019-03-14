module.exports = {
  preset: 'ts-jest',
  testMatch: null, // required by ts-jest
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  }
};
