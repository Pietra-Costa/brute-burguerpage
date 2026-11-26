import { CustomerReview } from '@/src/types';

/**
 * Avaliações de demonstração editáveis.
 * Substitua por depoimentos reais de clientes quando publicados em produção.
 */
export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    author: 'Lucas Andrade',
    neighborhood: 'Pinheiros, SP',
    orderedItem: 'Double Trouble + Fritas',
    rating: 5,
    quote:
      'A borda da carne vem crocante de verdade, daquelas rendadas na chapa quente. Chegou pelando aqui em casa e o crispy onion não murchou nada.',
    dateLabel: 'Avaliação demo · Out 2026',
  },
  {
    id: 'rev-2',
    author: 'Mariana Tavares',
    neighborhood: 'Vila Madalena, SP',
    orderedItem: 'Bacon Attack',
    rating: 5,
    quote:
      'Bacon grosso e seco no ponto certo, sem gordura sobrando. A cebola caramelizada com o molho especial fecha um equilíbrio absurdo.',
    dateLabel: 'Avaliação demo · Nov 2026',
  },
  {
    id: 'rev-3',
    author: 'Rafael Costa',
    neighborhood: 'Perdizes, SP',
    orderedItem: 'Pack da Rua (4x)',
    rating: 5,
    quote:
      'Pedimos pra galera depois do rolê. Embalagem segura o calor, pão brioche continua macio e o Brute Classic tem gosto real de chapa.',
    dateLabel: 'Avaliação demo · Nov 2026',
  },
];
