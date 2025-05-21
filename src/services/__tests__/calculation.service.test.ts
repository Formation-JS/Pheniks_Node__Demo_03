import calculationService from '../calculation.service';

describe("Calculation Service", () => {

  test("Apply TVA on price", () => {
    // Arrange
    const price = 5;
    const expected = 6.05;

    // Test
    const actual = calculationService.applyTVA(price);

    // Assert
    expect(actual).toBe(expected);
  })


});