import React from 'react';
import type { Crop } from '../types';
import CropItem from './CropItem';

interface CropListProps {
  crops: Crop[];
  onEdit: (crop: Crop) => void;
}

const CropList: React.FC<CropListProps> = ({ crops, onEdit }) => {
  // Check if the crops array is empty and display a friendly empty state message
  if (!crops || crops.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl mt-6 text-center">
        <svg 
          className="w-12 h-12 text-gray-400 mb-3" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        <h3 className="text-lg font-medium text-gray-900">No crops found</h3>
        <p className="mt-1 text-sm text-gray-500">Add a crop to get started with AgriTrack Hub.</p>
      </div>
    );
  }

  // Render the collection of crops in a responsive grid
  // 1 column on mobile, 2 columns on medium screens, 3 columns on large screens
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {crops.map((crop) => (
        <CropItem key={crop.id} crop={crop} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default CropList;
