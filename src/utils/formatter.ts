export const priceFormatter = (
  locale: string = "en-US",
  currency: string = "USD",
  maximumFractionDigits: number = 2
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    // Garantir um número dentro dos limites permitidos para maximumFractionDigits
    maximumFractionDigits: Math.min(20, Math.max(0, maximumFractionDigits)),
  });
