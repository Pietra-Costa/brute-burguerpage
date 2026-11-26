export interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  instagramHandle: string;
  instagramUrl: string;
  address: string;
  neighborhood: string;
  cityState: string;
  hours: string;
  deliveryInfo: string;
  establishedYear: number;
  isDemoData: boolean;
}

export interface BurgerProduct {
  id: string;
  code: string;
  name: string;
  category: string;
  shortDescription: string;
  ingredients: string[];
  price: number;
  weightInfo: string;
  image: string;
  imageAlt: string;
  accentTone: 'yellow' | 'cream' | 'burgundy';
  featured?: boolean;
}

export interface ComboItem {
  id: string;
  code: string;
  name: string;
  subtitle: string;
  includes: string[];
  price: number;
  serves: string;
  stampText: string;
  featured?: boolean;
}

export interface CustomerReview {
  id: string;
  author: string;
  neighborhood: string;
  orderedItem: string;
  rating: number;
  quote: string;
  dateLabel: string;
}

export interface SmashIngredient {
  id: string;
  index: string;
  name: string;
  description: string;
  spec: string;
  /** Vertical alignment (percentage) matching the layer position in the exploded photo */
  anchorTopPercent: number;
  side: 'left' | 'right';
}
