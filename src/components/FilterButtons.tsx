import React from "react";

type FilterType = "All" | "Active" | "Harvested";

interface FilterButtonsProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => onFilterChange("All")}
        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 shadow-sm ${
          selectedFilter === "All"
            ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
            : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
        }`}
      >
        All
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("Active")}
        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 shadow-sm ${
          selectedFilter === "Active"
            ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
            : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
        }`}
      >
        Active
      </button>

      <button
        type="button"
        onClick={() => onFilterChange("Harvested")}
        className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200 shadow-sm ${
          selectedFilter === "Harvested"
            ? "bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700"
            : "bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50"
        }`}
      >
        Harvested
      </button>
    </div>
  );
};

export default FilterButtons;
