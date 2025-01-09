import React from 'react';
import { Send } from 'lucide-react';

interface CropFormProps {
  onSubmit: (data: Record<string, number>) => void;
  disabled: boolean;
}

const inputFields = [
  { name: 'nitrogen', label: 'Nitrogen (N)', unit: 'mg/kg' },
  { name: 'phosphorus', label: 'Phosphorus (P)', unit: 'mg/kg' },
  { name: 'calcium', label: 'Calcium (K)', unit: 'mg/kg' },
  { name: 'temperature', label: 'Temperature', unit: '°C' },
  { name: 'humidity', label: 'Humidity', unit: '%' },
  { name: 'ph', label: 'pH Level', unit: 'pH' },
  { name: 'rainfall', label: 'Rainfall', unit: 'mm' },
];

const CropForm: React.FC<CropFormProps> = ({ onSubmit, disabled }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(
      inputFields.map(({ name }) => [name, Number(formData.get(name))])
    );
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {inputFields.map(({ name, label, unit }) => (
          <div key={name} className="space-y-2 group">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
              {label}
            </label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                name={name}
                id={name}
                required
                className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm transition-all duration-200 hover:border-green-400"
                placeholder="Enter value"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 text-sm pointer-events-none">
                {unit}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          disabled={disabled}
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
        >
          <Send className="w-5 h-5 mr-2" />
          Get Recommendation
        </button>
      </div>
    </form>
  );
};

export default CropForm;