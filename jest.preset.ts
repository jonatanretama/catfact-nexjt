module.exports = {
  testTimeout: 120000,
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    '**/*.{ts,tsx}': {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};
