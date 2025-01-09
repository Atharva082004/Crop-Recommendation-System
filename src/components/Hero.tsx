import React from 'react';
import { TreePine, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6 animate-bounce">
            <TreePine className="w-16 h-16 text-green-600" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Smart Crop Recommender
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-200">
            Get AI-powered crop recommendations based on your soil conditions and environmental factors
          </p>
          <a 
            href="#recommendation-form"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 animate-fade-in delay-300"
          >
            Get Started
            <ArrowDown className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" fill="currentColor" className="text-green-50"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;