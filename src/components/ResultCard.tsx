import React from 'react';
import { TreePine } from 'lucide-react';

interface ResultCardProps {
  crop: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ crop }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 text-center animate-fade-in transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-3 rounded-full animate-bounce">
          <TreePine className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Recommended Crop
      </h2>
      <p className="text-3xl font-bold text-green-600 mb-4">
        {crop}
      </p>
      <p className="text-gray-600">
        Based on your soil conditions and environmental factors, this crop is most likely to thrive in your field.
      </p>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Want to learn more about cultivating {crop}? 
          <a 
            href={`https://en.wikipedia.org/wiki/${crop}_(plant)`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700 ml-1 underline"
          >
            Read more
          </a>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;