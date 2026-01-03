import { menuCategories } from '@/data/menuData';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <nav className="sticky top-[65px] z-30 bg-background py-3 border-b border-border">
      <div className="categories-scroll">
        {menuCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </nav>
  );
}