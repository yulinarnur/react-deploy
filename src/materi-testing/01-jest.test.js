test('1. menjumlahkan nilai', () => {
  expect(1 + 1).toBe(2);
  expect(2 * 3).toBe(6);
});

test('2. menjumlahkan nilai', () => {
  function sum(a, b) {
    return a + b;
  }

  expect(sum(1, 2)).toBe(3);
  expect(sum(-1, 1)).toBe(0);
});
