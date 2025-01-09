import { TreePine, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <TreePine className="w-6 h-6 text-green-600" />
            <span className="font-semibold text-gray-800">CropAI</span>
          </div>

        

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in">
            <a href="#home" className="block text-gray-600 hover:text-green-600 transition-colors">Home</a>
            <a href="#features" className="block text-gray-600 hover:text-green-600 transition-colors">Features</a>
            <a href="#about" className="block text-gray-600 hover:text-green-600 transition-colors">About</a>
            <a href="#contact" className="block text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;