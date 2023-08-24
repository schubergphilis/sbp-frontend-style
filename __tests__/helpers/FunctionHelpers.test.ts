import {
	CleanName,
	FirstToUpperCase,
	RemoveExtension,
	ToKebabCase,
	ToSnakeCase
} from '../../src/helpers/FunctionHelpers'

describe('FirstToUpperCase function', () => {
	test('should capitalize the first letter of a word', () => {
		const word = 'hello'
		const expectedOutput = 'Hello'
		expect(FirstToUpperCase(word)).toBe(expectedOutput)
	})

	test('should handle an empty string', () => {
		const word = ''
		const expectedOutput = ''
		expect(FirstToUpperCase(word)).toBe(expectedOutput)
	})

	test('should handle a single letter', () => {
		const word = 'a'
		const expectedOutput = 'A'
		expect(FirstToUpperCase(word)).toBe(expectedOutput)
	})

	test('should handle a string with all uppercase letters', () => {
		const word = 'HELLO'
		const expectedOutput = 'Hello'
		expect(FirstToUpperCase(word)).toBe(expectedOutput)
	})

	test('should handle a string with non-alphabetic characters', () => {
		const word = '!@#$%^'
		const expectedOutput = '!@#$%^'
		expect(FirstToUpperCase(word)).toBe(expectedOutput)
	})
})

describe('ToSnakeCase', () => {
	it('should convert string to snake case', () => {
		const input = 'toSnakeCase'
		const expectedOutput = 'to_snake_case'

		const result = ToSnakeCase(input)

		expect(result).toEqual(expectedOutput)
	})

	it('should handle empty string', () => {
		const input = ''
		const expectedOutput = ''

		const result = ToSnakeCase(input)

		expect(result).toEqual(expectedOutput)
	})

	it('should handle camel case with multiple uppercase letters', () => {
		const input = 'thisIsCamelCase'
		const expectedOutput = 'this_is_camel_case'

		const result = ToSnakeCase(input)

		expect(result).toEqual(expectedOutput)
	})

	it('should handle snake case', () => {
		const input = 'this_is_snake_case'
		const expectedOutput = 'this_is_snake_case'

		const result = ToSnakeCase(input)

		expect(result).toEqual(expectedOutput)
	})
})

describe('ToKebabCase function', () => {
	test('should convert lowercase string to kebab case', () => {
		const text = 'hello world'
		const expectedOutput = 'hello-world'
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})

	test('should convert uppercase string to kebab case', () => {
		const text = 'HELLO WORLD'
		const expectedOutput = 'hello-world'
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})

	test('should convert title case string to kebab case', () => {
		const text = 'Hello World'
		const expectedOutput = 'hello-world'
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})

	test('should convert mixed case string to kebab case', () => {
		const text = 'HeLLo WoRLd'
		const expectedOutput = 'hello-world'
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})

	test('should not modify single word', () => {
		const text = 'foobar'
		const expectedOutput = 'foobar'
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})

	test('should return empty string for empty input', () => {
		const text = ''
		const expectedOutput = ''
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})

	test('should return the same string for numbers', () => {
		const text = '12345'
		const expectedOutput = '12345'
		expect(ToKebabCase(text)).toBe(expectedOutput)
	})
})

describe('RemoveExtension function', () => {
	test('should remove extension from file name', () => {
		const fileName = 'file.txt'
		const expectedOutput = 'file'
		expect(RemoveExtension(fileName)).toBe(expectedOutput)
	})

	test('should remove extension from file name with multiple dots', () => {
		const fileName = 'file.name.txt'
		const expectedOutput = 'file.name'
		expect(RemoveExtension(fileName)).toBe(expectedOutput)
	})

	test('should remove extension from file name with no extension', () => {
		const fileName = 'file'
		const expectedOutput = 'file'
		expect(RemoveExtension(fileName)).toBe(expectedOutput)
	})

	test('should handle corner cases', () => {
		expect(RemoveExtension('')).toBe('')
		expect(RemoveExtension('.hidden')).toBe('')
		expect(RemoveExtension('dir/')).toBe('dir/')
		expect(RemoveExtension('dir/file')).toBe('dir/file')
		expect(RemoveExtension('dir/file.txt')).toBe('dir/file')
		expect(RemoveExtension('dir/.file.txt')).toBe('dir/.file')
	})
})

describe('CleanName function', () => {
	test('should clean the name by removing special characters', () => {
		const name = 'n@#am*e'
		const expectedOutput = 'name'
		expect(CleanName(name)).toBe(expectedOutput)
	})

	test('should clean the name with multiple special characters', () => {
		const name = '!@#$%!name'
		const expectedOutput = 'name'
		expect(CleanName(name)).toBe(expectedOutput)
	})

	test('should handle whitespace in the name', () => {
		const name = 'name with spaces'
		const expectedOutput = 'name with spaces'
		expect(CleanName(name)).toBe(expectedOutput)
	})

	test('should handle name with numbers', () => {
		const name = 'name123'
		const expectedOutput = 'name123'
		expect(CleanName(name)).toBe(expectedOutput)
	})

	test('should handle corner cases', () => {
		expect(CleanName('')).toBe('')
		expect(CleanName('!!!!!')).toBe('')
		expect(CleanName('name.')).toBe('name')
		expect(CleanName('.name')).toBe('name')
	})
})
