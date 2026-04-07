import React from "react";

type FilterType = "All" | "Active" | "Harvested";
type CropStatus = "Active" | "Harvested";

interface FilterButtonsProps {
  selectedFilter?: FilterType;
  onFilterChange?: (filter: FilterType) => void;
  cropStatus?: CropStatus;
  onToggleStatus?: () => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  selectedFilter,
  onFilterChange,
  cropStatus,
  onToggleStatus,
}) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {selectedFilter && onFilterChange && (
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
      )}

      {cropStatus && onToggleStatus && (
        <button
          type="button"
          onClick={onToggleStatus}
          className={`px-4 py-2 rounded-lg text-sm font-medium text-white shadow-sm transition-all duration-200 ${
            cropStatus === "Active"
              ? "bg-amber-500 hover:bg-amber-600"
              : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {cropStatus === "Active" ? "Mark as Harvested" : "Mark as Active"}
        </button>
      )}
    </div>
  );
};

export default FilterButtons;
