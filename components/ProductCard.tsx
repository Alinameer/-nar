import React from 'react';

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    price?: string;
  }
  
export default function ProductCard({ image, title, description, price }: ProductCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
        <img className="object-cover h-full w-full" src={image} alt={title} />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
}
