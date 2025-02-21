// Método para formatação de datas
export const dateFormatter = new Intl.DateTimeFormat("pt-BR");

// Método para formatação de moeda
export const priceFormatter = (
  locale: string = "en-US",
  currency: string = "USD",
  maximumFractionDigits: number = 2
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    maximumFractionDigits: maximumFractionDigits,
  });
