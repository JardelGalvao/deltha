export const validTaxId = (taxId: string): boolean => {
    const sanitizedTaxId = taxId.replace(/[^\d]/g, '');

    if ( sanitizedTaxId.length !== 14 ){
        return false;
    };

    if( sanitizedTaxId.split('').every(digit => digit === sanitizedTaxId[0]) ){
        return false;
    };

    const taxIdNumber = sanitizedTaxId.split('').map(char => parseInt(char));

    const calculateDigit = (digits: number[], weights: number[]) => {
        const sum = digits.reduce(
            (acc, digit, index) => acc + digit * weights[index], 0
        );

        const remainder = sum % 11;
        return remainder < 2 ? 0 : 11 - remainder;
    }

    const firstDigitWeights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const secondDigitWeights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    const validateCheckDigits = (digits: number[]) : boolean => {
        const baseDigits = digits.slice(0, 12);
        const firstDigit = calculateDigit(baseDigits, firstDigitWeights);

        const digitsWithFirt = [...baseDigits, firstDigit];
        const secondDigit = calculateDigit(digitsWithFirt, secondDigitWeights);

        return digits[12] === firstDigit && digits[13] === secondDigit;
    }
    
    const result = validateCheckDigits(taxIdNumber);
    return result
}
