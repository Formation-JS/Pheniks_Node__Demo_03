import { roundNumber } from '../utils/number.utils';

export type TVA = 'NORMAL' | 'MIX' | 'FOOD';
// 21, 12, 6

const calculationService = {

  /**
   * Application de la TVA
   * @param price Le prix
   * @param tva le taux tva
   * @returns le prix avec la TVA arrondi à 2 décimales.
   */
  applyTVA: (price: number, tva: TVA = 'NORMAL') => {

    const taux = (tva === 'NORMAL') ? 21
      : (tva === 'MIX') ? 12
      : 6;

    const priceWithTva = price + (price * (taux / 100));

    return roundNumber(priceWithTva);
  }

};
export default calculationService;