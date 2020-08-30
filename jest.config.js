const { defaults } = require('jest-config')

module.exports = async () => ({
    verbose: true,
    moduleFileExtensions: defaults.moduleFileExtensions,
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
        '\\.(gif|ttf|eot|svg)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '.(gif|ttf|eot|svg)$': '<rootDir>/tests/jest/fileMock.js',
    },
    setupFiles: ['<rootDir>/tests/jest/setupTests.js'],
})
