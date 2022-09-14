module.exports = {
    preset: 'ts-jest',
    roots: ['<rootDir>/src'],
    testEnvironment: 'jsdom',
    testRegex: '/__tests__/.*.spec.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'scss', 'css'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    verbose: true,
};
