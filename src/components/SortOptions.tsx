import React from "react";

type SortOptionsProps = {
  sortCriteria: string;
  setSortCriteria: (criteria: string) => void;
};

const SortOptions: React.FC<SortOptionsProps> = ({ sortCriteria, setSortCriteria }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortCriteria(e.target.value);
  };

  return (
    <div>
      <label className="block font-medium">Sort By</label>
      <select
        id="sort"
        value={sortCriteria}
        onChange={handleSortChange}
        className="w-8/12 border rounded px-2 py-1"
      >
        <option value="">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="ratingHighLow">Rating: High to Low</option>
        <option value="ratingLowHigh">Rating: Low to High</option>
        <option value="alphabetical">Alphabetical Order</option>
      </select>
    </div>
  );
};

export default SortOptions;
