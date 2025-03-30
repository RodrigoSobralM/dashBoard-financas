/**
 * Converter o formato da moeda BRL
 * @param value - Numero para ser convertido
 * @returns O valor convertido em BRL
 */
export const currecyConverter = (value: number): string => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value).replace(/\s/g, '');
}
