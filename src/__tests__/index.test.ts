import { normalCaseGenerator } from '../'

/**
 * Testing the capitalize function without options
 */
test('Testing Capitalize', () => {
    expect(normalCaseGenerator('this is a test')).toBe('This is a test')
});

/**
 * Testing the capitalize function with the option of 'all'
 */
test('Testing Capitalize All Text', () => {
    expect(normalCaseGenerator('this is a test', {
        filter: 'all',
    })).toBe('This Is A Test')
});

/**
 * Testing the capitalize function with the option of 'first'
 */
test('Testing Capitalize First Text', () => {
    expect(normalCaseGenerator('this is a test', {
        filter: 'first',
    })).toBe('This is a test')
});

/**
 * Testing the capitalize function to capitalize a single text
 */
test('Testing Capitalize Single Text', () => {
    expect(normalCaseGenerator('this is a test', {
        filter: 'single',
        textToCapitalize: 'test'
    })).toBe('this is a Test')
});

/**
 * Testing the capitalize function to capitalize a single text without passing the textToFind
 */
 test('Testing Capitalize Single Text', () => {
    expect(normalCaseGenerator('this is a test', {
        filter: 'single',
    })).toBe('this is a test')
});