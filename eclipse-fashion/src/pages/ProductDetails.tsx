import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: 1,
    name: 'Silhouette No. 1 - Vermillion',
    price: 7999,
    description: 'A tailored composition in motion, this form-structured piece with a sculptural silhouette crafts an elegant statement. The vermillion hue adds a bold touch to this timeless design.',
    images: ['/images/vermillion-suit.jpg', '/images/vermillion-detail.jpg'],
    details: [
      'Tailored fit',
      'Premium wool blend',
      'Fully lined',
      'Made in Italy'
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', { ...product, size: selectedSize });
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {product.images.map((image, index) => (
            <div key={index} className="aspect-[3/4]">
              <img 
                src={image} 
                alt={`${product.name} - View ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="sticky top-24">
          <h1 className="text-3xl mb-4">{product.name}</h1>
          <p className="text-2xl mb-8">₹{product.price.toLocaleString()}</p>
          
          <div className="mb-8">
            <h3 className="text-lg mb-4">Size</h3>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`w-12 h-12 border ${
                    selectedSize === size 
                      ? 'border-white bg-white text-black' 
                      : 'border-gray-600 hover:border-white'
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="w-full bg-white text-black py-4 mb-8 hover:bg-gray-200 transition-colors"
          >
            Add to Cart
          </button>

          <div className="prose prose-invert">
            <p className="mb-8">{product.description}</p>
            
            <h3 className="text-lg mb-4">Details</h3>
            <ul className="list-disc pl-4 space-y-2">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>

          {/* Accordion sections */}
          <div className="mt-12 border-t border-gray-800">
            <button className="w-full py-4 text-left border-b border-gray-800">
              Size & Fit
            </button>
            <button className="w-full py-4 text-left border-b border-gray-800">
              Delivery & Returns
            </button>
            <button className="w-full py-4 text-left border-b border-gray-800">
              How This Was Made
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails; 