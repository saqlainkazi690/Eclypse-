import React, { useState } from 'react';

const ProductDisplay: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [logoOption, setLogoOption] = useState<string>('Student');

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="aspect-square bg-gray-100 relative overflow-hidden">
            {/* Replace with your actual video */}
            <video 
              autoPlay 
              loop 
              muted 
              className="w-full h-full object-cover"
            >
              <source src="C:\Users\saqla\Downloads\ecart_eclypse_task\eclipse-fashion\src\assets\videos\red_dress.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-2xl font-light mb-2">Silhouette No.1 – Vermilion</h1>
          <p className="text-3xl mb-6">7,799</p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Signed to the Company</label>
            <div className="flex gap-2">
              <button 
                className={`px-4 py-2 border ${logoOption === 'Student' ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => setLogoOption('Student')}
              >
                Student
              </button>
              <button 
                className={`px-4 py-2 border ${logoOption === 'ARTS' ? 'bg-black text-white' : 'bg-white'}`}
                onClick={() => setLogoOption('ARTS')}
              >
                ARTS
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Size & Fit</h2>
            <div className="grid grid-cols-4 gap-2">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button
                  key={size}
                  className={`py-2 border ${selectedSize === size ? 'bg-black text-white' : 'bg-white'}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">Dating: 4 Returns</p>
          </div>
          
          <button className="w-full bg-black text-white py-3 mb-4">
            Add to Cart
          </button>
          
          <p className="italic">"Understated, but unforgettable. It feels like it was made for me"</p>
          <a href="#" className="text-sm underline mt-2 inline-block">Read on Website</a>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;