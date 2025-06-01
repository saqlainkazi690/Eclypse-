import React from 'react';
import { Link } from 'react-router-dom';
import VideoBackground from '../components/VideoBackground';
import ImageGallery from '../components/ImageGallery';
import ProductDetailSection from '../components/ProductDetailSection';
import heroHeader from '../assets/videos/Hero_header.png';

const products = [
  {
    id: 1,
    name: 'Silhouette No. 1 - Vermillion',
    price: 7999,
    image: '/images/vermillion-suit.jpg',
    description: 'A tailored composition in motion, this form-structured piece with a sculptural silhouette.'
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black p-6">
      <div className="relative w-full h-full min-h-[calc(100vh-3rem)] bg-black/40 rounded-xl p-6">
        {/* Brand Section */}
        <div className="mt-32 ml-[-0.75rem]">
          <img 
            src={heroHeader} 
            alt="Eclypse"
            className="h-[140px] w-auto object-contain"
          />
        </div>

        {/* Copyright */}
        <div className="fixed top-6 right-8">
          <p className="text-white text-sm font-[300] tracking-wide">© 2025</p>
        </div>

        {/* Video Section */}
        <div className="w-full mt-8">
          <div className="relative aspect-[2.5/1] rounded-xl overflow-hidden">
            <VideoBackground />
            <div className="absolute bottom-8 right-8">
              <p className="text-white text-[32px] font-semibold">
                A silhouette worth remembering
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-24 max-w-2xl">
          <p className="text-[32px] text-white font-[300] leading-tight">
            Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
          </p>
          <div className="mt-6">
            <Link 
              to="/about"
              className="text-white hover:text-gray-300 text-sm inline-flex items-center font-[300] border-b border-white pb-1"
            >
              Learn more about Eclypse 
              <span className="ml-2">→</span>
            </Link>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery />

        {/* Product Detail Section */}
        <div className="mt-24">
          <ProductDetailSection />
        </div>
      </div>
    </div>
  );
};

export default Home;