  
// import scripts from '../src/script'
const { notify, validateInput } = require('../src/script')

test('Must be a function', () => {
    expect(typeof notify).toBe('function')
    let result = notify();
    expect(result).not.toBeUndefined()
    expect(typeof result === 'string').toBe(true)
})

describe('Input validation', () => {
    test("validateInput Must be a function", () => {
        expect(typeof validateInput === 'function').toBeTruthy()
    });

    test("validateInput must return true", () => {
        expect(validateInput('Live')).toBeTruthy()
    });
})