const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

interface Address {
  firstName: string;
  lastName: string;
  streetAddress: string;
  aptNumber?: string;
  state: string;
  zip: string;
}

interface OrderData {
  productName: string;
  price: number;
  shippingAddress: Address;
}

export const createOrder = async (orderData: OrderData) => {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

export const getOrder = async (orderId: string) => {
  try {
    const response = await fetch(`${API_URL}/orders/${orderId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch order');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
}; 