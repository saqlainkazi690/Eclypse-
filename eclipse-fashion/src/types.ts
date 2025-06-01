export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  details: string[];
  sizes: string[];
}

export interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  size: string;
  quantity: number;
  image: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Order {
  id: number;
  items: CartItem[];
  shippingAddress: ShippingAddress;
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}
