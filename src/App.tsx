import React, { useMemo, useState, useEffect } from "react";
import CropForm from "./components/CropForm";
import CropList from "./components/CropList";
import FilterButtons from "./components/FilterButtons";
import type { Crop } from "./types";

type FilterType = "All" | "Active" | "Harvested";

const App: React.FC = () => {
  const [crops, setCrops] = useState<Crop[]>(() => {
    const saved = localStorage.getItem("agritrack-crops");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");
  const [showForm, setShowForm] = useState(false);
  const [editingCrop, setEditingCrop] = useState<Crop | null>(null);

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("agritrack-crops", JSON.stringify(crops));
  }, [crops]);

  // Add new crop
  const handleAddCrop = (crop: Crop) => {
    setCrops((prev) => [crop, ...prev]);
    setShowForm(false);
  };

  // Update existing crop
  const handleUpdateCrop = (updatedCrop: Crop) => {
    setCrops((prev) =>
      prev.map((c) => (c.id === updatedCrop.id ? updatedCrop : c))
    );
    setShowForm(false);
    setEditingCrop(null);
  };

  // Toggle status (Active <-> Harvested)
  const handleToggleStatus = (id: string) => {
    setCrops((prev) =>
      prev.map((crop) =>
        crop.id === id
          ? { ...crop, status: crop.status === "Active" ? "Harvested" : "Active" }
          : crop
      )
    );
  };

  // Delete with confirmation
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this crop?")) {
      setCrops((prev) => prev.filter((crop) => crop.id !== id));
    }
  };

  // Open edit modal
  const handleEdit = (crop: Crop) => {
    setEditingCrop(crop);
    setShowForm(true);
  };

  // Filter crops
  const filteredCrops = useMemo(() => {
    if (selectedFilter === "All") return crops;
    return crops.filter((crop) => crop.status === selectedFilter);
  }, [crops, selectedFilter]);

  return (
    <main className="min-h-screen bg-emerald-50/30 px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-emerald-800">AgriTrack Hub</h1>
          <p className="text-emerald-700/80 mt-2">
            Farm crop management for tracking records and harvest progress
          </p>
        </header>

        {/* Add Button */}
        <div className="flex justify-end">
          <button
            onClick={() => {
              setEditingCrop(null);
              setShowForm(true);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg shadow"
          >
            + Add New Crop
          </button>
        </div>

        {/* Filter Section */}
        <section className="space-y-4">
          <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-4">
            <h2 className="text-lg font-semibold text-emerald-800 mb-3">
              Filter Crops
            </h2>
            <FilterButtons
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>

          <CropList
            crops={filteredCrops}
            onToggleStatus={handleToggleStatus}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
      </div>

      {/* Modal Form for Add/Edit */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
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
    </main>
  );
};

export default App;