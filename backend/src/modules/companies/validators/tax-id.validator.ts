export const validTaxId = (taxId: string): boolean => {
  const sanitizedTaxId = taxId.replace(/[^\d]/g, '');
  // Detect type by length
  if (![11, 14].includes(sanitizedTaxId.length)) {
    return false;
  }

  // Invalid if all digits are the same
  if (sanitizedTaxId.split('').every(d => d === sanitizedTaxId[0])) {
    return false;
  }

  const digits = sanitizedTaxId.split('').map(Number);

  // CPF validation (11 digits)
  if (sanitizedTaxId.length === 11) {
    const calcCpfDigit = (base: number[], factor: number) => {
      const total = base.reduce((sum, num) => sum + num * factor--, 0);
      const remainder = total % 11;
      return remainder < 2 ? 0 : 11 - remainder;
    };

    const firstDigit = calcCpfDigit(digits.slice(0, 9), 10);
    const secondDigit = calcCpfDigit([...digits.slice(0, 9), firstDigit], 11);

    return firstDigit === digits[9] && secondDigit === digits[10];
  }

  // CNPJ validation (14 digits)
  const calcCnpjDigit = (base: number[], weights: number[]) => {
    const total = base.reduce((sum, num, i) => sum + num * weights[i], 0);
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const secondWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const firstDigit = calcCnpjDigit(digits.slice(0, 12), firstWeights);
  const secondDigit = calcCnpjDigit([...digits.slice(0, 12), firstDigit], secondWeights);
  
  return firstDigit === digits[12] && secondDigit === digits[13];
};
