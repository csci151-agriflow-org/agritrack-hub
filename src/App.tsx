import { useState } from "react";
import type { Crop } from "./types";
import "./App.css";
import CropForm from "./components/CropForm";
import CropList from "./components/CropList";
import FilterButtons from "./components/FilterButtons";

type FilterType = "All" | "Active" | "Harvested";

function App() {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [editingCrop, setEditingCrop] = useState<Crop | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");

  const filteredCrops = crops.filter((crop) => {
    if (selectedFilter === "All") return true;
    return crop.status === selectedFilter;
  });

  const handleAddCrop = (crop: Crop) => {
    setCrops((prev) => [...prev, crop]);
  };

  const handleDeleteCrop = (id: string) => {
    setCrops((prev) => prev.filter((crop) => crop.id !== id));
  };

  const handleToggleStatus = (id: string) => {
    setCrops((prev) =>
      prev.map((crop) =>
        crop.id === id
          ? { ...crop, status: crop.status === "Active" ? "Harvested" : "Active" }
          : crop
      )
    );
  };

  const handleEdit = (crop: Crop) => {
    setEditingCrop(crop);
  };

  const handleUpdateCrop = (updatedCrop: Crop) => {
    setCrops((prev) =>
      prev.map((crop) => (crop.id === updatedCrop.id ? updatedCrop : crop))
    );
    setEditingCrop(null);
  };

  const handleCancelEdit = () => {
    setEditingCrop(null);
  };

  return (
    <main className="min-h-screen bg-emerald-50 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <CropForm onAddCrop={handleAddCrop} />
        <FilterButtons
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        <CropList
          crops={filteredCrops}
          onToggleStatus={handleToggleStatus}
          onEdit={handleEdit}
          onDelete={handleDeleteCrop}
        />
      </div>

      {editingCrop && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <CropForm
            isEditing
            initialData={editingCrop}
            onUpdateCrop={handleUpdateCrop}
            onCancel={handleCancelEdit}
          />
        </div>
      )}
    </main>
  );
}

export default App;
