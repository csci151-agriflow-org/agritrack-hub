import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import type { Crop } from "./types";
import "./App.css";
import CropForm from "./components/CropForm";
import CropList from "./components/CropList";

function App() {
 
  return (
    <CropForm></CropForm>
  )
}

export default App

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