import { ComboItem } from '@/src/types';

export const COMBOS_IMAGE = '/src/assets/images/combos_feast_pack_1795706527272.jpg';
export const COMBOS_IMAGE_ALT =
  'Dois smash burgers embrulhados em papel kraft, batatas fritas douradas e latas geladas sobre mesa amarela e preta';

export const COMBOS_DATA: ComboItem[] = [
  {
    id: 'combo-solo-bruto',
    code: 'C01',
    name: 'COMBO SOLO BRUTO',
    subtitle: 'Burger + Fritas',
    includes: [
      '1 Brute Classic (100g smash)',
      '1 Batata rústica crocante com sal de páprica',
      '1 Molho especial extra no potinho',
    ],
    price: 42.9,
    serves: '1 Pessoa',
    stampText: 'ESSENCIAL',
  },
  {
    id: 'combo-double-impact',
    code: 'C02',
    name: 'COMBO DOUBLE IMPACT',
    subtitle: 'Duplo + Fritas + Bebida',
    includes: [
      '1 Double Trouble (200g duplo smash)',
      '1 Batata rústica tamanho grande',
      '1 Refrigerante ou soda artesanal 350ml',
    ],
    price: 59.9,
    serves: '1 Fome Gigante',
    stampText: 'MAIS PEDIDO',
    featured: true,
  },
  {
    id: 'combo-tropa-brute',
    code: 'C03',
    name: 'PACK DA RUA (4X)',
    subtitle: 'Combo para Galera',
    includes: [
      '2 Brute Classic + 1 Double Trouble + 1 Bacon Attack',
      '2 Porções grandes de batata rústica',
      '4 Bebidas geladas 350ml',
    ],
    price: 158.9,
    serves: '4 Pessoas',
    stampText: 'PRA GALERA',
  },
];
