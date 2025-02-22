/**
 * Função para analisar um preço em um número com partes de moeda e seus decimais.
 *
 * @param price - o preço a ser analisado em um formato numérico
 * @returns um objeto com os componentes de valor monetário
 */
export const parsePrice = (price: number) => {
  return {
    amount: Math.floor(price),
    decimals: Math.round((price % 1) * 100),
  };
};
