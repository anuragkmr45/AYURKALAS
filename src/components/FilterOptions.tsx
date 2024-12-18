import React, { Dispatch, SetStateAction } from "react";

type FilterOptionsProps = {
    filters: {
        category: string;
        brand: string;
        minPrice: number;
        maxPrice: number;
        minRating: number;
    };
    setFilters: Dispatch<
        SetStateAction<{
            category: string;
            brand: string;
            minPrice: number;
            maxPrice: number;
            minRating: number;
        }>
    >;
};

const FilterOptions: React.FC<FilterOptionsProps> = ({ filters, setFilters }) => {
    const categories = [
        "Herbal Supplements",
        "Digestive Health",
        "Immunity Boosters",
        "Skin & Hair Care",
        "Respiratory Health",
        "Mental Wellness",
        "Vitamin C Boosters",
        "Women’s Health",
        "Pain Relief",
    ];
    const brands = [
        "HerbWellness",
        "NatureVeda",
        "AyurCare",
        "GreenHerb",
        "HerbalDrops",
        "MindHerb",
        "FruitVeda",
        "FemHerb",
        "EaseHerb",
        "HealthRoot",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <aside className="space-y-4">
            <div>
                <label className="block font-medium">Category</label>
                <select
                    name="category"
                    value={filters.category}
                    onChange={handleChange}
                    className="min-w-fit border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block font-medium">Brand</label>
                <select
                    name="brand"
                    value={filters.brand}
                    onChange={handleChange}
                    className="min-w-fit border border-gray-300 rounded px-2 py-1"
                >
                    <option value="">All Brands</option>
                    {brands.map((brand) => (
                        <option key={brand} value={brand}>
                            {brand}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block font-medium ">Price Range</label>
                <div className="flex justify-start space-x-2">
                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min"
                        value={filters.minPrice}
                        onChange={handleChange}
                        className="w-4/12 border border-gray-300 rounded px-2 py-1"
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max"
                        value={filters.maxPrice}
                        onChange={handleChange}
                        className="w-4/12 border border-gray-300 rounded px-2 py-1"
                    />
                </div>
            </div>

            <div>
                <label className="block font-medium">Minimum Rating</label>
                <input
                    type="number"
                    name="minRating"
                    min="0"
                    max="5"
                    step="0.1"
                    value={filters.minRating}
                    onChange={handleChange}
                    className="w-8/12 border border-gray-300 rounded px-2 py-1"
                />
            </div>
        </aside>
    );
};

export default FilterOptions;
