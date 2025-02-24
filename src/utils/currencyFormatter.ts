interface FormattedPriceParts {
  formatted: string;
}

export const currencyFormatter = (
  locale: string,
  currency: string,
  amount: number
): FormattedPriceParts => {
  const formatted = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount);

  return { formatted };
};
