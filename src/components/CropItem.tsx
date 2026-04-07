import React from 'react';
import type { Crop } from '../types';

interface CropItemProps {
  crop: Crop;
  onEdit: (crop: Crop) => void; 
}

const CropItem: React.FC<CropItemProps> = ({ crop, onEdit }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-green-100 flex flex-col h-full">
      {/* Header Section: Crop Name and Status Badge */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-green-800 tracking-tight">
          {crop.name}
        </h3>
        <span
          className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
            crop.status === 'Active'
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-gray-50 text-gray-600 border-gray-200'
          }`}
        >
          {crop.status}
        </span>
      </div>

      {/* Details Section: Location and Stage */}
      <div className="flex-grow space-y-2 text-sm text-gray-600">
        <p>
          <strong className="text-gray-700 font-medium">Location:</strong> {crop.location}
        </p>
        <p className="flex items-center gap-2">
          <strong className="text-gray-700 font-medium">Stage:</strong>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-50 text-emerald-700">
            {crop.stage}
          </span>
        </p>
        
        {/* Optional Notes */}
        {crop.notes && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic">
              "{crop.notes}"
            </p>
          </div>
        )}
      </div>

      {/* Action Buttons Container - For Future Implementation */}
      <div className="mt-5 flex space-x-2">
        {/* Action buttons will go here */}
        <button
          onClick={() => onEdit(crop)}    // need to pass onEdit prop
          className="px-3 py-1 bg-blue-100 text-blue-700 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default CropItem;
