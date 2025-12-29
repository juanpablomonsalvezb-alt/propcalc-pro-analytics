
export type Screen = 'dashboard' | 'pricing' | 'competitors' | 'strategy';

export interface PropertyData {
  id: string;
  name: string;
  value: number;
  downPayment: number;
  maintenance: number;
  targetIncome: number;
}

export interface DynamicPricingFactors {
  t: number; // Booking Window
  d: number; // Historical Demand
  o: number; // Occupancy
  basePrice: number;
}

export interface Competitor {
  name: string;
  distance: string;
  status: string;
  price: number;
  occupancy: number;
  image: string;
}
