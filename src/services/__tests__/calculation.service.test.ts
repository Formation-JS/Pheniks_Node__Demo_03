import calculationService, { TVA } from '../calculation.service';

describe("Calculation Service", () => {

  test("Apply TVA on price", () => {
    // Arrange
    const price = 5;
    const expected = 6.05;

    // Test
    const actual = calculationService.applyTVA(price);

    // Assert
    expect(actual).toBe(expected);
  });

  test.each([
    [0.14, 0.1694],
    [3.42, 4.1382],
    [0.111, 0.1343],
    [51.12, 61.8552],
    [361.114, 436.9479],
  ])("Precision to 4 decimal", (price, expected) => {

    // Test
    const actual = calculationService.applyTVA(price);

    // Assert
    expect(actual).toBe(expected);
  });

  test.each<{ price: number, tva: TVA, expected: number; }>([
    { price: 10.20, tva: 'NORMAL', expected: 12.342 },
    { price: 10.20, tva: 'MIX', expected: 11.424 },
    { price: 10.20, tva: 'FOOD', expected: 10.812 },
  ])("Apply TVA rates $tva", ({ price, tva, expected }) => {

    // Test
    const actual = calculationService.applyTVA(price, tva);

    // Assert
    expect(actual).toBe(expected);
  });

});
