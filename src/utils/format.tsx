export function localizeCurrency(value:number, currency = 'USD') {
  if (value === null || value === undefined) {
    return ''
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
}