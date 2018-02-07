module.exports = {
  coverageDirectory: './__coverage__',
  rootDir: '.',
  roots: ['src'],
  moduleFileExtensions: ['js'],
  collectCoverageFrom: [
    'src/@(components|util)/**/*.{js,jsx}',
    '!src/@(components|util)/**/index.{js,jsx}',
    '!src/@(components|util)/**/*.story.{js,jsx}',
    '!**/node_modules/**'
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': '<rootDir>/jest.transform.js',
    '^.+\\.svg$': '<rootDir>/fileTransformer.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  transformIgnorePatterns: ['node_modules/(?!circuit-ui/)']
};
