import { calculateLuckyNumber } from './lucky-number'

test('calculate lucky number', () => {
  expect(calculateLuckyNumber('127893333345678')).toBe('3')
  expect(calculateLuckyNumber('111111111167890')).toBe('1')  
})