/**
 * Converter o formato da data
 * @param date - Data para ser convertido
 * @returns A data convertida
 */
export const dataFormatted = (date: Date): string => {
  let month = date.toLocaleString('pt-BR', { month: 'short' })
  month = month.replace('.', '') // remove o ponto final
  const day = date.getDate()
  const year = date.getFullYear()

  return `${day} ${month} ${year}`
}
