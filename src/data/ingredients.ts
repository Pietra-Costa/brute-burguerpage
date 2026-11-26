import { SmashIngredient } from '@/src/types';

export const HERO_BURGER_IMAGE = '/src/assets/images/hero_smash_burger_1795706523401.jpg';
export const ANATOMY_EXPLODED_IMAGE =
  '/src/assets/images/anatomy_exploded_smash_1795708012008.jpg';
export const ANATOMY_PRESSED_IMAGE =
  '/src/assets/images/anatomy_pressed_smash_1795708012373.jpg';

export const SMASH_INGREDIENTS: SmashIngredient[] = [
  {
    id: 'brioche',
    index: '01',
    name: 'BRIOCHE TORRADO',
    description: 'Coroa macia, amanteigada e levemente tostada.',
    spec: 'SELAGEM NA CHAPA',
    anchorTopPercent: 16,
    side: 'right',
  },
  {
    id: 'cheddar',
    index: '02',
    name: 'CHEDDAR DERRETIDO',
    description: 'Queijo cremoso, derretido diretamente sobre a carne.',
    spec: 'VAPOR QUENTE',
    anchorTopPercent: 28,
    side: 'left',
  },
  {
    id: 'tomato',
    index: '03',
    name: 'TOMATE FRESCO',
    description: 'Fatias frescas que equilibram a intensidade da chapa.',
    spec: 'CORTE DO DIA',
    anchorTopPercent: 39,
    side: 'right',
  },
  {
    id: 'onion',
    index: '04',
    name: 'CEBOLA ROXA',
    description: 'Corte preciso, textura e crocância.',
    spec: 'ANÉIS FINOS',
    anchorTopPercent: 49,
    side: 'left',
  },
  {
    id: 'bacon',
    index: '05',
    name: 'BACON CROCANTE',
    description: 'Tiras defumadas e douradas.',
    spec: 'DEFUMADO RÚSTICO',
    anchorTopPercent: 58,
    side: 'right',
  },
  {
    id: 'smash-patty',
    index: '06',
    name: 'SMASH NA CHAPA',
    description:
      'Carne prensada em alta temperatura para formar uma crosta caramelizada.',
    spec: 'MAILLARD 260°C',
    anchorTopPercent: 69,
    side: 'left',
  },
];
