import MenuCard from './MenuCard';
import type { MenuCategory } from '@/data/menuData';

interface MenuSectionProps {
  category: MenuCategory;
}

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={`category-${category.id}`} className="py-4">
      <h2 className="text-lg font-bold text-foreground mb-3 px-4 flex items-center gap-2">
        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
          {category.name}
        </span>
        <span className="text-xs text-muted-foreground font-normal">
          ({category.items.length} items)
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
