export const toPrettyEuro = (value: number): string => {
	return value.toLocaleString('it-IT', {
		style: 'currency',
		currency: 'EUR',
		maximumFractionDigits: 2
	});
};
