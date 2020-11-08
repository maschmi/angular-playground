require('jest-config');
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/../../jest.base.setup.ts'],
  moduleDirectories: ['node_modules', 'dist'],
  transform: {"^.+\\.tsx?$": "ts-jest"},
  transformIgnorePatterns: ['^.+\\.js$']
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx']
};
