import React from 'react';
import type { Crop } from '../types';

interface CropItemProps {
  crop: Crop;
  onToggleStatus: (id: string) => void;
  onEdit: (crop: Crop) => void;
  onDelete: (id: string) => void;
}

const CropItem: React.FC<CropItemProps> = ({ crop, onToggleStatus, onEdit, onDelete }) => {
  // Helper for dynamic stage badge styling
  const getStageBadge = () => {
    const baseClass = "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium";
    switch (crop.stage) {
      case 'Seedling':
        return `${baseClass} bg-green-100 text-green-800`;
      case 'Growing':
        return `${baseClass} bg-blue-100 text-blue-800`;
      case 'Mature':
        return `${baseClass} bg-orange-100 text-orange-800`;
      default:
        return `${baseClass} bg-gray-100 text-gray-800`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-5 border border-green-100 flex flex-col h-full">
      {/* Header: Crop name and status badge */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-green-800 tracking-tight">
          {crop.name}
        </h3>
        <span
          className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
            crop.status === 'Active'
              ? 'bg-green-50 text-green-700 border-green-200'
              : 'bg-purple-50 text-purple-700 border-purple-200'
          }`}
        >
          {crop.status === 'Active' ? '🌱 Active' : '✅ Harvested'}
        </span>
      </div>

      {/* Details: Location and Growth Stage */}
      <div className="flex-grow space-y-2 text-sm text-gray-600">
        <p>
          <strong className="text-gray-700 font-medium">Location:</strong> {crop.location}
        </p>
        <p className="flex items-center gap-2">
          <strong className="text-gray-700 font-medium">Stage:</strong>
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
              crop.stage === 'Seedling'
                ? 'bg-green-100 text-green-800 border-green-300'
                : crop.stage === 'Growing'
                ? 'bg-blue-100 text-blue-800 border-blue-300'
                : crop.stage === 'Mature'
                ? 'bg-orange-100 text-orange-800 border-orange-300'
                : 'bg-gray-100 text-gray-800 border-gray-300'
            }`}
          >
            <span className={`inline-block w-2 h-2 mr-1.5 rounded-full ${
               crop.stage === 'Seedling' ? 'bg-green-500' :
               crop.stage === 'Growing' ? 'bg-blue-500' : 
               crop.stage === 'Mature' ? 'bg-orange-500' : 'bg-gray-500'
            }`}></span>
            {crop.stage}
          </span>
        </p>

        {/* Optional Notes */}
        {crop.notes && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <p className="text-xs text-gray-500 italic">📝 {crop.notes}</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex flex-wrap gap-2">
        {/* Status Toggle Button */}
        <button
          onClick={() => onToggleStatus(crop.id)}
          className={`px-3 py-1.5 text-sm rounded-md transition ${
            crop.status === 'Active'
              ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              : 'bg-green-100 text-green-700 hover:bg-green-200'
          }`}
        >
          {crop.status === 'Active' ? '🌾 Mark Harvested' : '🌱 Mark Growing'}
        </button>

        {/* Edit Button */}
        <button
          onClick={() => onEdit(crop)}
          className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition"
        >
          ✏️ Edit
        </button>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(crop.id)}
          className="px-3 py-1.5 text-sm bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default CropItem;