import { BurgerProduct } from '@/src/types';

/**
 * Dados do cardápio autoral BRUTE.
 * Preços em reais (BRL) configuráveis para fácil manutenção comercial.
 */
export const MENU_PRODUCTS: BurgerProduct[] = [
  {
    id: 'brute-classic',
    code: '01',
    name: 'BRUTE CLASSIC',
    category: 'Assinatura da Chapa',
    shortDescription:
      'O manifesto em forma de smash. Crosta rendada caramelizada na chapa a 260°C, american cheese derretido na hora e acidez precisa do picles.',
    ingredients: [
      'Smash bovino 100g prensado',
      'American cheese derretido',
      'Picles artesanal crocante',
      'Molho especial BRUTE',
      'Pão brioche selado na manteiga',
    ],
    price: 32.9,
    weightInfo: '100g Blend Bovino',
    image: '/src/assets/images/menu_brute_classic_1795706524545.jpg',
    imageAlt:
      'Brute Classic smash burger com bordas crocantes, queijo derretido, picles e molho especial em papel kraft',
    accentTone: 'yellow',
    featured: true,
  },
  {
    id: 'double-trouble',
    code: '02',
    name: 'DOUBLE TROUBLE',
    category: 'Dupla Pressão',
    shortDescription:
      'Dois discos prensados sem misericórdia, camada dupla de cheddar cremoso e um emaranhado crocante de crispy onion que estala a cada mordida.',
    ingredients: [
      '2x Smash bovino 100g',
      'Duplo cheddar derretido',
      'Crispy onion dourada',
      'Molho defumado da casa',
      'Pão brioche tostado',
    ],
    price: 44.9,
    weightInfo: '200g Duplo Smash',
    image: '/src/assets/images/menu_double_trouble_1795706525062.jpg',
    imageAlt:
      'Double Trouble burger duplo com cheddar derretido e cebola crispy em papel manteiga',
    accentTone: 'cream',
  },
  {
    id: 'bacon-attack',
    code: '03',
    name: 'BACON ATTACK',
    category: 'Defumado & Bruto',
    shortDescription:
      'Tiras grossas de bacon defumado e crocante abraçando o cheddar derretido, equilibradas com cebola caramelizada no ponto exato.',
    ingredients: [
      'Smash bovino 100g prensado',
      'Cheddar derretido',
      'Bacon rústico crocante',
      'Cebola caramelizada lenta',
      'Molho especial BRUTE',
    ],
    price: 41.9,
    weightInfo: '100g + Bacon Extra',
    image: '/src/assets/images/menu_bacon_attack_1795706526385.jpg',
    imageAlt:
      'Bacon Attack smash burger com tiras grossas de bacon crocante, cebola caramelizada e cheddar',
    accentTone: 'burgundy',
  },
];
