import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CropForm from './components/CropForm';
import ResultCard from './components/ResultCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (formData: Record<string, number>) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        "/ml/v4/deployments/10009165-fb1f-4d09-abc1-3596d36d6b7b/predictions?version=2021-05-01",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_IBM_API_KEY}`,
          },
          body: JSON.stringify({
            input_data: [
              {
                fields: [
                  "N",
                  "P",
                  "K",
                  "temperature",
                  "humidity",
                  "ph",
                  "rainfall",
                ],
                values: [
                  [
                    formData.nitrogen,
                    formData.phosphorus,
                    formData.calcium,
                    formData.temperature,
                    formData.humidity,
                    formData.ph,
                    formData.rainfall,
                  ],
                ],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          if (errorData?.errors?.[0]?.message) {
            errorMessage = errorData.errors[0].message;
          }
        } catch {
          // If we can't parse the error JSON, stick with the default error message
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      
      if (!data?.predictions?.[0]?.values?.[0]?.[0]) {
        throw new Error('No prediction data received from the server');
      }

      setResult(data.predictions[0].values[0][0]);
      
      // Smooth scroll to result
      document.getElementById('result')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      console.error('API Error:', errorMessage);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <main className="container mx-auto px-4 py-16">
        <section id="recommendation-form" className="max-w-4xl mx-auto scroll-mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <CropForm onSubmit={handleSubmit} disabled={loading} />
          </div>

          {loading && (
            <div className="flex justify-center items-center p-8 animate-fade-in">
              <Loader2 className="w-8 h-8 text-green-600 animate-spin" />
              <span className="ml-2 text-gray-600">Analyzing your data...</span>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 animate-fade-in">
              <p className="text-red-600 font-medium">Error: {error}</p>
              <p className="text-red-500 text-sm mt-2">
                Please try again. If the problem persists, check your internet connection or contact support.
              </p>
            </div>
          )}

          {result && (
            <div id="result" className="scroll-mt-20">
              <ResultCard crop={result} />
            </div>
          )}
        </section>
      </main>

      <footer className="bg-gray-50 py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600 mb-2">Powered by IBM Cloud Machine Learning</p>
            <a 
              href="https://cloud.ibm.com/apidocs/machine-learning"
              className="text-green-600 hover:text-green-700 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              API Documentation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;