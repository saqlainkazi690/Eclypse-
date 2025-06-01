import React from 'react';
import { Link } from 'react-router-dom';

// Mock cart data - in a real app, this would come from a state management solution
const cartItems = [
  {
    id: 1,
    name: 'Silhouette No. 1 - Vermillion',
    price: 7999,
    size: 'M',
    quantity: 1,
    image: '/images/vermillion-suit.jpg'
  }
];

const Cart: React.FC = () => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl mb-12">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-8">Your cart is empty</p>
          <Link 
            to="/" 
            className="inline-block px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-8 pb-8 mb-8 border-b border-gray-800">
                <div className="w-32 aspect-[3/4]">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl mb-2">{item.name}</h3>
                  <p className="text-gray-400 mb-4">Size: {item.size}</p>
                  <div className="flex items-center gap-4">
                    <select 
                      value={item.quantity}
                      className="bg-transparent border border-gray-600 px-3 py-2"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button className="text-gray-400 hover:text-white">
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p>₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 p-6">
              <h2 className="text-xl mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (18% GST)</span>
                  <span>₹{tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl pt-4 border-t border-gray-800">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <Link 
                to="/checkout"
                className="block w-full bg-white text-black text-center py-4 hover:bg-gray-200 transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart; 