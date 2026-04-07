import { useState, useEffect } from 'react';
import type { Crop } from './types';
import CropForm from './components/CropForm';
import CropList from './components/CropList';

function App() {
  const [crops, setCrops] = useState<Crop[]>(() => {
    const saved = localStorage.getItem('crops');
    return saved ? JSON.parse(saved) : [];
  });
  const [showForm, setShowForm] = useState(false);
  const [editingCrop, setEditingCrop] = useState<Crop | null>(null);

  useEffect(() => {
    localStorage.setItem('crops', JSON.stringify(crops));
  }, [crops]);

  const handleAddCrop = (newCrop: Crop) => {
    setCrops([newCrop, ...crops]);
    setShowForm(false);
  };

  const handleUpdateCrop = (updatedCrop: Crop) => {
    setCrops(prev => prev.map(c => c.id === updatedCrop.id ? updatedCrop : c));
    setShowForm(false);
    setEditingCrop(null);
  };

  const handleEdit = (crop: Crop) => {
    setEditingCrop(crop);
    setShowForm(true);
  };

  // Delete and status toggle handlers would go here

  return (
    <div className="container mx-auto p-4">
      <button onClick={() => setShowForm(true)}>+ Add Crop</button>
      <CropList crops={crops} onEdit={handleEdit} /* onDelete, onStatusChange */ />

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <CropForm
            onAddCrop={handleAddCrop}
            onUpdateCrop={handleUpdateCrop}
            initialData={editingCrop}
            isEditing={!!editingCrop}
            onCancel={() => {
              setShowForm(false);
              setEditingCrop(null);
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;