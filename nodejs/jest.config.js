/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Use ts-jest for TypeScript files
  preset: 'ts-jest',
  
  // Node environment for testing
  testEnvironment: 'node',
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: "coverage",
  
  // Collect coverage from all TypeScript files in src
  collectCoverageFrom: [
    "src/**/*.ts",         // All .ts files in src and subdirectories
    "!src/**/*.d.ts",      // Exclude declaration files
    "!src/**/*.test.ts"    // Exclude test files
  ],
  
  // Test pattern matching
  testMatch: [
    "**/*.test.ts"         // All test files
  ],
  
  // Module resolution
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  
  // Test environment settings
  verbose: true,
  clearMocks: true,
  
  // Coverage reporting
  coverageReporters: ["text", "lcov", "html"]
};
