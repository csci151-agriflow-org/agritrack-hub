import React, { useState } from 'react';
import type { Crop } from '../types';

interface CropFormProps {
  /** Callback to pass the newly created crop back to the parent */
  onAddCrop: (crop: Crop) => void;
}

/**
 * CropForm Component
 * Handles the "Crop Record Management" feature for adding new crops.
 */
export const CropForm: React.FC<CropFormProps> = ({ onAddCrop }) => {
  // --- Form State ---
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [stage, setStage] = useState<'Seedling' | 'Growing' | 'Mature'>('Seedling');

  // --- Handlers ---
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default browser page reload on submit
    e.preventDefault();

    // Basic validation to ensure fields aren't just whitespace
    if (!name.trim() || !location.trim()) {
      return;
    }

    // Construct the new crop object
    const newCrop: Crop = {
      // Generate a temporary unique id (fallback to Date.now() if crypto doesn't exist)
      id: typeof crypto !== 'undefined' && crypto.randomUUID 
        ? crypto.randomUUID() 
        : Date.now().toString(),
      name: name.trim(),
      location: location.trim(),
      stage: stage,
      // Hardcoded to Active per requirements
      status: 'Active',
    };

    // Pass the completed crop object to the parent component
    onAddCrop(newCrop);

    // Reset the form fields back to their initial state
    setName('');
    setLocation('');
    setStage('Seedling');
  };

  // --- Render ---
  return (
    <form 
      onSubmit={handleSubmit} 
      // Green-themed agricultural aesthetic with fully responsive layout
      className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-emerald-100 w-full max-w-md mx-auto space-y-5"
    >
      <div className="border-b border-emerald-50 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-emerald-800">New Crop Record</h2>
        <p className="text-sm text-emerald-600/70 mt-1">Enter the details of the new crop planting.</p>
      </div>

      {/* Crop Name Field */}
      <div className="space-y-1.5">
        <label htmlFor="cropName" className="block text-sm font-semibold text-emerald-900">
          Crop Name
        </label>
        <input
          id="cropName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., Sweet Corn"
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30"
        />
      </div>

      {/* Field Location Field */}
      <div className="space-y-1.5">
        <label htmlFor="fieldLocation" className="block text-sm font-semibold text-emerald-900">
          Field Location
        </label>
        <input
          id="fieldLocation"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          placeholder="e.g., North Sector A"
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30"
        />
      </div>

      {/* Growth Stage Field */}
      <div className="space-y-1.5">
        <label htmlFor="growthStage" className="block text-sm font-semibold text-emerald-900">
          Growth Stage
        </label>
        <select
          id="growthStage"
          value={stage}
          onChange={(e) => setStage(e.target.value as 'Seedling' | 'Growing' | 'Mature')}
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-emerald-50/30 appearance-none cursor-pointer"
        >
          <option value="Seedling">Seedling</option>
          <option value="Growing">Growing</option>
          <option value="Mature">Mature</option>
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium py-3 px-4 rounded-lg shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50"
      >
        Add Crop
      </button>
    </form>
  );
};

export default CropForm;