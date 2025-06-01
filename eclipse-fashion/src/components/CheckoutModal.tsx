import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/videos/logo_eclypse.jpg';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-6xl rounded-lg overflow-hidden">
        {/* Header */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-12">
            <Link to="/">
              <img src={logo} alt="Eclypse" className="w-12 h-12" />
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/about" className="text-gray-600">About Us</Link>
              <Link to="/waitlist" className="text-gray-600">Waitlist</Link>
              <Link to="/cart" className="text-black border-b border-black">Cart</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={onClose} className="text-black">←</button>
            <h2 className="text-xl text-black font-light">Shipping Address</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 p-8">
          {/* Left Column - Address Form */}
          <div className="border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-4 h-4 rounded-full border-2 border-red-500 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
              </div>
              <span className="text-lg text-black">Add New Address</span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="First Name"
                    className="w-full border rounded p-3"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Last Name"
                    className="w-full border rounded p-3"
                  />
                </div>
              </div>

              <div>
                <input 
                  type="text" 
                  placeholder="Street Address"
                  className="w-full border rounded p-3"
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Apt Number"
                    className="w-full border rounded p-3"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="State"
                    className="w-full border rounded p-3"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Zip"
                    className="w-full border rounded p-3"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button 
                  onClick={onClose}
                  className="flex-1 py-3 border border-black text-black hover:bg-black hover:text-white transition-colors rounded"
                >
                  cancel
                </button>
                <button 
                  className="flex-1 py-3 bg-black text-white hover:bg-[#FF0000] transition-colors rounded"
                >
                  Save This Address
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="text-black text-sm mb-6">
              By placing your order, you agree to our company{' '}
              <Link to="/privacy" className="underline">Privacy policy</Link> and{' '}
              <Link to="/terms" className="underline">Conditions of use</Link>.
            </div>

            <h3 className="text-black text-xl mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-black">
                <span>Items - Silhouette No. 1 – Vermillion</span>
                <span>7,999</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Shipping and handling:</span>
                <span>200</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Before tax:</span>
                <span>6,599</span>
              </div>
              <div className="flex justify-between text-black">
                <span>Tax Collected:</span>
                <span>1,400</span>
              </div>

              <div className="pt-4 border-t flex justify-between font-medium text-base text-black">
                <span>Order Total:</span>
                <span>8,199</span>
              </div>
            </div>

            <button 
              className="w-full py-3 bg-black text-white hover:bg-[#FF0000] transition-colors mt-6 rounded"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;