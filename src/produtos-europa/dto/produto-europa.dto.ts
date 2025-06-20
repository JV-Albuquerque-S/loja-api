export interface ProdutoEuropa {
  id: string;
  name: string;
  description: string;
  price: number;
  hasDiscount: boolean;
  discountValue: number;
  gallery: string[];
  details: {
    adjective: string;
    material: string;
  };
}
