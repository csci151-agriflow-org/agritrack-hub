import React, { useMemo, useState } from "react";
import CropForm from "./components/CropForm";
import CropList from "./components/CropList";
import FilterButtons from "./components/FilterButtons";
import type { Crop } from "./types";

type FilterType = "All" | "Active" | "Harvested";

const App: React.FC = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("All");

  const handleAddCrop = (crop: Crop) => {
    setCrops((prevCrops) => [...prevCrops, crop]);
  };

  const handleToggleStatus = (id: string) => {
    setCrops((prevCrops) =>
      prevCrops.map((crop) =>
        crop.id === id
          ? {
              ...crop,
              status: crop.status === "Active" ? "Harvested" : "Active",
            }
          : crop,
      ),
    );
  };

  const filteredCrops = useMemo(() => {
    if (selectedFilter === "All") {
      return crops;
    }

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

        <CropForm onAddCrop={handleAddCrop} />

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

          <CropList crops={filteredCrops} onToggleStatus={handleToggleStatus} />
        </section>
      </div>
    </main>
  );
};

export default App;
