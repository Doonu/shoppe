import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: './jest.environment.js',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(js|ts)$': 'ts-jest',
    '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$2',
    '^@features/(.*)$': '<rootDir>/src/features/$3',
    '^@pages/(.*)$': '<rootDir>/src/pages/$4',
    '^@shared/(.*)$': '<rootDir>/src/shared/$5',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$6',
  },
};

export default config;
