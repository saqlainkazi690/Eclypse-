import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl mb-12">About Eclypse°</h1>
        
        <div className="prose prose-invert">
          <p className="text-xl mb-8">
            Rooted in a philosophy of quiet luxury, our garments are designed to speak softly in cut, in movement, in presence.
          </p>

          <div className="aspect-video mb-12">
            <img 
              src="/images/about-hero.jpg" 
              alt="Eclypse Design Studio"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-2xl mb-6">Our Philosophy</h2>
          <p className="mb-8">
            At Eclypse, we believe in the power of understated elegance. Our designs are a testament to the belief that true luxury doesn't need to announce itself—it's felt in the quality of the fabric, the precision of the cut, and the thoughtfulness of the design.
          </p>

          <h2 className="text-2xl mb-6">Craftsmanship</h2>
          <p className="mb-8">
            Each piece is crafted with meticulous attention to detail, using the finest materials sourced from around the world. Our artisans bring decades of experience to their craft, ensuring that every garment meets our exacting standards of quality and design.
          </p>

          <h2 className="text-2xl mb-6">Sustainability</h2>
          <p className="mb-8">
            We are committed to responsible fashion. This means not only creating garments that last but also ensuring our production processes respect both the environment and the people involved in making them. We believe that luxury and responsibility can—and should—coexist.
          </p>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="aspect-[3/4]">
              <img 
                src="/images/craftsmanship-1.jpg" 
                alt="Craftsmanship Detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4]">
              <img 
                src="/images/craftsmanship-2.jpg" 
                alt="Craftsmanship Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-2xl mb-6">Our Promise</h2>
          <p>
            Every Eclypse garment is a promise—a promise of quality, of thoughtful design, of lasting value. We create pieces that become part of your story, that move with you through life's moments, both grand and intimate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 