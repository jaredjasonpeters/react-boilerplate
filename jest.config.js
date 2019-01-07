module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/testSetup.js',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/_tests_/.*|(\\.|/)(test|spec))\\.tsx?',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
