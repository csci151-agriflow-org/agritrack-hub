import React, { useState, useEffect } from 'react';
import type { Crop } from '../types';

interface CropFormProps {
  onAddCrop?: (crop: Crop) => void;
  onUpdateCrop?: (crop: Crop) => void;
  initialData?: Crop | null;
  isEditing?: boolean;
  onCancel?: () => void;
}

export const CropForm: React.FC<CropFormProps> = ({ 
  onAddCrop, 
  onUpdateCrop, 
  initialData, 
  isEditing = false, 
  onCancel 
}) => {
  // Form state
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [stage, setStage] = useState<'Seedling' | 'Growing' | 'Mature'>('Seedling');
  const [notes, setNotes] = useState('');

  // Load initial data when editing
  useEffect(() => {
    if (initialData && isEditing) {
      setName(initialData.name);
      setLocation(initialData.location);
      setStage(initialData.stage);
      setNotes(initialData.notes || '');
    }
  }, [initialData, isEditing]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !location.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    if (isEditing && initialData && onUpdateCrop) {
      // UPDATE: preserve existing id, createdAt, status, and merge changes
      const updatedCrop: Crop = {
        ...initialData,           // keep id, status, createdAt, etc.
        name: name.trim(),
        location: location.trim(),
        stage: stage,
        notes: notes.trim() || undefined,
      };
      onUpdateCrop(updatedCrop);
    } else if (onAddCrop) {
      // ADD: create new crop
      const newCrop: Crop = {
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        name: name.trim(),
        location: location.trim(),
        stage: stage,
        status: 'Active',
        notes: notes.trim() || undefined,
      };
      onAddCrop(newCrop);
    }

    // Reset form only when adding, not when editing (parent will close form)
    if (!isEditing) {
      setName('');
      setLocation('');
      setStage('Seedling');
      setNotes('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-6 sm:p-8 rounded-xl shadow-md border border-emerald-100 w-full max-w-md mx-auto space-y-5"
    >
      <div className="border-b border-emerald-50 pb-4 mb-4">
        <h2 className="text-2xl font-bold text-emerald-800">
          {isEditing ? '✏️ Edit Crop' : '🌱 New Crop Record'}
        </h2>
        <p className="text-sm text-emerald-600/70 mt-1">
          {isEditing ? 'Update the crop details below.' : 'Enter the details of the new crop planting.'}
        </p>
      </div>

      {/* Crop Name */}
      <div className="space-y-1.5">
        <label htmlFor="cropName" className="block text-sm font-semibold text-emerald-900">
          Crop Name *
        </label>
        <input
          id="cropName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., Sweet Corn"
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Field Location */}
      <div className="space-y-1.5">
        <label htmlFor="fieldLocation" className="block text-sm font-semibold text-emerald-900">
          Field Location *
        </label>
        <input
          id="fieldLocation"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          placeholder="e.g., North Sector A"
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Growth Stage */}
      <div className="space-y-1.5">
        <label htmlFor="growthStage" className="block text-sm font-semibold text-emerald-900">
          Growth Stage
        </label>
        <select
          id="growthStage"
          value={stage}
          onChange={(e) => setStage(e.target.value as 'Seedling' | 'Growing' | 'Mature')}
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
        >
          <option value="Seedling">🌱 Seedling</option>
          <option value="Growing">🌿 Growing</option>
          <option value="Mature">🌾 Mature</option>
        </select>
      </div>

      {/* Notes (optional) */}
      <div className="space-y-1.5">
        <label htmlFor="notes" className="block text-sm font-semibold text-emerald-900">
          Notes (Optional)
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="Any additional observations..."
          className="w-full px-4 py-2.5 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-2">
        {isEditing && onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-lg transition"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className={`flex-1 font-medium py-3 px-4 rounded-lg shadow-sm transition ${
            isEditing 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-emerald-600 hover:bg-emerald-700 text-white'
          }`}
        >
          {isEditing ? '💾 Save Changes' : '➕ Add Crop'}
        </button>
      </div>
    </form>
  );
};

export default CropForm;