export const formatNumber = (value: number): string => `$ ${value.toFixed(2).replace('.', ',')}`;
