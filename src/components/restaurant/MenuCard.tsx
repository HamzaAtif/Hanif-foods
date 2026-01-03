import { Plus, Minus, Star, Scale } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import type { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addItem, removeItem, getItemQuantity } = useCart();
  const quantity = getItemQuantity(item.id);

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.pricePerKg,
      image: item.image || '',
    });
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-4 hover:shadow-lg transition-shadow">
      {/* Image Section */}
      {item.image && (
        <div className="mb-3 rounded-lg overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-32 object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-sm text-foreground leading-tight flex-1">
          {item.name}
        </h3>
        {item.popular && (
          <div className="flex items-center gap-1 bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-[10px] font-semibold shrink-0">
            <Star className="w-3 h-3 fill-current" />
            Popular
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
        <Scale className="w-3 h-3" />
        <span>Min: {item.minOrder}kg</span>
      </div>

      {item.description && (
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {item.description}
        </p>
      )}

      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-lg text-primary">
            Rs {item.pricePerKg.toLocaleString()}
          </span>
          <span className="text-[10px] text-muted-foreground">per kg</span>
        </div>

        {/* Quantity Controls */}
        <div className="flex items-center gap-2">
          {quantity > 0 ? (
            <div className="flex items-center gap-2 bg-muted rounded-full px-1">
              <button
                onClick={handleRemove}
                className="qty-btn bg-background text-foreground shadow-sm"
                aria-label={`Remove one ${item.name}`}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="font-bold text-sm min-w-[2rem] text-center">
                {quantity}kg
              </span>
              <button
                onClick={handleAdd}
                className="qty-btn bg-primary text-primary-foreground"
                aria-label={`Add one more kg of ${item.name}`}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAdd}
              className="qty-btn bg-primary text-primary-foreground shadow-button"
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
