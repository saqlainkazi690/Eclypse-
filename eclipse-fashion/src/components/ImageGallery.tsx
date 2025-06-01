import React from 'react';
import VideoBackground from './VideoBackground';
import image1 from '../assets/videos/1.jpg';
import image2 from '../assets/videos/2.jpg';
import image3 from '../assets/videos/3.jpg';
import logoImage from '../assets/videos/logo_eclypse.jpg';
import alternateImage from '../assets/videos/alternate.png';

const ImageGallery: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 mt-12">
      {/* First row - 70/30 split */}
      <div className="flex gap-2 w-full">
        <div className="w-[70%] h-[300px] rounded-sm overflow-hidden">
          <VideoBackground />
        </div>
        <div className="w-[30%] h-[300px] relative group">
          <img 
            src={image1} 
            alt="Woman in red dress" 
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-sm">
            <p className="text-white text-2xl font-semibold">
              Premium wool blend in signature vermillion
            </p>
          </div>
        </div>
      </div>

      {/* Second row - three equal columns */}
      <div className="flex gap-2 w-full h-[200px]">
        <div className="w-1/3 relative group">
          <img 
            src={image2} 
            alt="Red fabric detail" 
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-sm">
            <p className="text-white text-2xl font-semibold">
              Discreet side pockets with clean finish
            </p>
          </div>
        </div>
        <div className="w-1/3 relative group">
          <img 
            src={image3} 
            alt="Hand detail" 
            className="w-full h-full object-cover rounded-sm"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 rounded-sm">
            <p className="text-white text-2xl font-semibold">
              Handcrafted with precision
            </p>
          </div>
        </div>
        <div className="w-1/3 bg-black rounded-sm flex items-center justify-center relative group">
          <img 
            src={logoImage} 
            alt="Eclypse Logo" 
            className="w-2/3 h-2/3 object-contain transition-opacity duration-300 group-hover:opacity-0"
          />
          <img 
            src={alternateImage} 
            alt="Eclypse Alternate Logo" 
            className="w-2/3 h-2/3 object-contain absolute inset-0 m-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Product title */}
      <div className="mt-2">
        <p className="text-white text-lg font-light">Silhouette No. 1 — Vermillion</p>
      </div>
    </div>
  );
};

export default ImageGallery; 