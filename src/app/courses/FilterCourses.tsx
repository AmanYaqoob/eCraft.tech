"use client";

import { useState, useEffect } from "react";

export interface FilterState {
  rating: number;
  price: string[];
  category: string[];
  level: string[];
  sortBy: string;
}

interface FilterProps {
  onFilter: (filters: FilterState) => void;
}

const initialFilters: FilterState = {
  rating: 0,
  price: [],
  category: [],
  level: [],
  sortBy: 'highest-rated',
};

const FilterCourses: React.FC<FilterProps> = ({ onFilter }) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [openSections, setOpenSections] = useState<string[]>(['category', 'rating']);

  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  const handleRatingChange = (value: number) => {
    setFilters(prev => ({ ...prev, rating: prev.rating === value ? 0 : value }));
  };

  const handleCheckboxChange = (field: keyof FilterState, value: string) => {
    setFilters(prev => {
      const currentValues = prev[field] as string[];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      return { ...prev, [field]: newValues };
    });
  };

  const toggleSection = (section: string) => {
    setOpenSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => {
    const isOpen = openSections.includes(title.toLowerCase());
    return (
      <div className="border-b border-stroke pb-4 dark:border-strokedark">
        <button
          onClick={() => toggleSection(title.toLowerCase())}
          className="flex w-full items-center justify-between py-2 text-left font-semibold text-black dark:text-white"
        >
          {title}
          <svg
            className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && <div className="mt-3 space-y-2">{children}</div>}
      </div>
    );
  };

  return (
    <div className="space-y-6 rounded-lg border border-stroke bg-white p-6 dark:border-strokedark dark:bg-gray-dark">
      <div className="flex items-center justify-between border-b border-stroke pb-4 dark:border-strokedark">
        <h3 className="text-lg font-bold text-black dark:text-white">Filters</h3>
        <select
          value={filters.sortBy}
          onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
          className="rounded border border-stroke bg-transparent px-3 py-1 text-sm dark:border-strokedark"
        >
          <option value="highest-rated">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <FilterSection title="Rating">
        {[4.5, 4.0, 3.5, 3.0].map((rate) => (
          <label key={rate} className="flex cursor-pointer items-center gap-2">
            <input
              type="radio"
              name="rating"
              className="accent-primary"
              checked={filters.rating === rate}
              onChange={() => handleRatingChange(rate)}
            />
            <span className="flex items-center gap-1">
              {Array(5).fill(0).map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < rate ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </span>
            <span className="text-sm">{rate.toFixed(1)} & up</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {['Paid', 'Free'].map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="accent-primary"
              checked={filters.price.includes(item)}
              onChange={() => handleCheckboxChange('price', item)}
            />
            <span className="text-sm">{item}</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Category">
        {['E-commerce', 'Marketing', 'Business'].map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="accent-primary"
              checked={filters.category.includes(item)}
              onChange={() => handleCheckboxChange('category', item)}
            />
            <span className="text-sm">{item}</span>
          </label>
        ))}
      </FilterSection>

      <FilterSection title="Level">
        {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              className="accent-primary"
              checked={filters.level.includes(item)}
              onChange={() => handleCheckboxChange('level', item)}
            />
            <span className="text-sm">{item}</span>
          </label>
        ))}
      </FilterSection>
    </div>
  );
};

export default FilterCourses;
