import React, { useState } from 'react';
import VideoBackground from './VideoBackground';
import image1 from '../assets/videos/image1.jpg';
import image2 from '../assets/videos/image2.jpg';
import image3 from '../assets/videos/image3.jpg';
import rabit from '../assets/videos/rabit.jpg';
import tiger from '../assets/videos/tiger.jpg';
import CheckoutModal from './CheckoutModal';

const ProductDetailSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const handleBuyClick = () => {
    setIsCheckoutOpen(true);
  };

  return (
    <div className="flex flex-col">
      {/* Main Product Section */}
      <div className="flex w-full">
        {/* Left Column - Video */}
        <div className="w-1/2 pr-0">
          <h1 className="text-white text-4xl font-light mb-8 pl-12">
            Silhouette No. 1 – Vermillion
          </h1>
          <div className="aspect-[4/5] w-full relative">
            <VideoBackground />
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="w-1/2">
          <div className="bg-white h-full px-12 py-12">
            <p className="text-black text-lg font-light mb-12">
              A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
            </p>

            {/* Product Images */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <img src={image1} alt="Product view 1" className="w-full aspect-square object-cover" />
              <img src={image2} alt="Product view 2" className="w-full aspect-square object-cover" />
              <img src={image3} alt="Product view 3" className="w-full aspect-square object-cover" />
            </div>

            {/* Price */}
            <div className="mb-8">
              <p className="flex items-center gap-2">
                <span className="text-2xl text-black font-bold">₹ 7,999</span>
                <span className="text-sm text-gray-600">MRP incl. of all taxes</span>
              </p>
            </div>

            {/* Size Selection */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-black">Please select a size</span>
                <button className="text-black text-sm underline">Size chart</button>
              </div>
              <div className="flex gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button
                    key={size}
                    className="w-16 py-2 bg-gray-100 text-black text-sm hover:bg-gray-200 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 py-4 border border-black text-black hover:bg-black hover:text-white transition-colors">
                Add to Cart
              </button>
              <button 
                onClick={handleBuyClick}
                className="flex-1 py-4 bg-black text-white hover:bg-[#FF0000] transition-colors"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expandable Sections */}
      <div className="mt-24 border-t border-white/20 mx-12">
        <button 
          onClick={() => toggleSection('size')}
          className="w-full py-6 flex justify-between items-center text-white border-b border-white/20"
        >
          <span className="text-xl font-light">Size & Fit</span>
          <span className={`transform transition-transform ${activeSection === 'size' ? 'rotate-180' : ''}`}>↓</span>
        </button>
        {activeSection === 'size' && (
          <div className="py-6 text-white/80">
            <p>Detailed size and fit information...</p>
          </div>
        )}

        <button 
          onClick={() => toggleSection('delivery')}
          className="w-full py-6 flex justify-between items-center text-white border-b border-white/20"
        >
          <span className="text-xl font-light">Delivery & Returns</span>
          <span className={`transform transition-transform ${activeSection === 'delivery' ? 'rotate-180' : ''}`}>↓</span>
        </button>
        {activeSection === 'delivery' && (
          <div className="py-6 text-white/80">
            <p>Shipping and return policy details...</p>
          </div>
        )}

        <button 
          onClick={() => toggleSection('made')}
          className="w-full py-6 flex justify-between items-center text-white border-b border-white/20"
        >
          <span className="text-xl font-light">How This Was Made</span>
          <span className={`transform transition-transform ${activeSection === 'made' ? 'rotate-180' : ''}`}>↓</span>
        </button>
        {activeSection === 'made' && (
          <div className="py-6 text-white/80">
            <p>Manufacturing and craftsmanship details...</p>
          </div>
        )}
      </div>

      {/* Customer Testimonials */}
      <div className="mt-24 mx-12">
        <p className="text-white/60 uppercase text-sm tracking-wider mb-8">Our Customers</p>
        <div className="flex justify-between items-center">
          <div className="max-w-xl">
            <p className="text-white text-3xl font-light">
              "Understated, but unforgettable. It feels like it was made for me"
            </p>
            <div className="mt-4">
              <p className="text-white/80">Random Woman</p>
              <p className="text-white/60 text-sm">NY, USA</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <img src={rabit} alt="Customer 1" className="w-16 h-16 rounded-full object-cover" />
            </div>
            <div className="relative">
              <img src={tiger} alt="Customer 2" className="w-16 h-16 rounded-full object-cover filter blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </div>
  );
};

export default ProductDetailSection;
