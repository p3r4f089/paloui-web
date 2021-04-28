import { validateNumber } from './validate-number'

test('validate number', () => {
  expect(validateNumber('1234', 14, 16)).toBe(false)
  expect(validateNumber('1234567891234', 14, 16)).toBe(false)
  expect(validateNumber('12345678912345', 14, 16)).toBe(true)
  expect(validateNumber('123456789123456', 14, 16)).toBe(true)
  expect(validateNumber('1234567891234567', 14, 16)).toBe(true)
  expect(validateNumber('12345678912345678910', 14, 16)).toBe(false)
})
