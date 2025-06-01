import React, { useState } from 'react';
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

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 200;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <h1 className="text-3xl mb-8">Checkout</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 px-4 py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 px-4 py-2"
                required
              />
            </div>

            <div>
              <label className="block mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full bg-transparent border border-gray-600 px-4 py-2"
                required
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-gray-600 px-4 py-2"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-4 mt-8 hover:bg-gray-200 transition-colors"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <div className="bg-gray-900 p-6">
            <h2 className="text-xl mb-6">Order Summary</h2>
            
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 mb-4">
                <div className="w-20 aspect-[3/4]">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="text-sm">{item.name}</h3>
                  <p className="text-gray-400 text-sm">Size: {item.size}</p>
                  <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p>₹{item.price.toLocaleString()}</p>
                </div>
              </div>
            ))}

            <div className="space-y-4 mt-8 pt-8 border-t border-gray-800">
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
          </div>

          <p className="mt-6 text-sm text-gray-400">
            By placing your order, you agree to our{' '}
            <Link to="/privacy" className="underline">Privacy policy</Link> and{' '}
            <Link to="/terms" className="underline">Conditions of use</Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;