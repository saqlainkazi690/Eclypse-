import React, { useState } from 'react';

const CheckoutForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-light mb-6">Shipping Address</h1>
      
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <input type="checkbox" id="newAddress" className="mr-2" />
          <label htmlFor="newAddress">Add New Address</label>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Street Address</label>
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="w-full p-2 border"
          />
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Apt Number</label>
            <input
              type="text"
              name="aptNumber"
              value={formData.aptNumber}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Zip</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-2 border"
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mb-8">
        <button className="px-6 py-2 border">Cancel</button>
        <button className="px-6 py-2 bg-black text-white">Save This Address</button>
      </div>
      
      <p className="text-xs mb-8">
        By placing your order, you agree to our company Privacy policy and Conditions of use.
      </p>
      
      <div className="border-t pt-6">
        <h2 className="text-lg font-medium mb-4">Order Summary</h2>
        <div className="space-y-2 mb-4">
          <div className="flex justify-between">
            <span>Items - Silhouette No. 1 – Vermilion</span>
            <span>7,999</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping and handling:</span>
            <span>200</span>
          </div>
          <div className="flex justify-between">
            <span>Before tax:</span>
            <span>6,599</span>
          </div>
          <div className="flex justify-between">
            <span>Tax Collected:</span>
            <span>1,400</span>
          </div>
        </div>
        
        <div className="flex justify-between text-lg font-medium border-t pt-4 mb-6">
          <span>Order Total:</span>
          <span>8,199</span>
        </div>
        
        <button className="w-full bg-black text-white py-3">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;