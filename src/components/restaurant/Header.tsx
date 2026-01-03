import { ShoppingBag, Image, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { RESTAURANT_NAME } from '@/data/menuData';
import { useState } from 'react';

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { totalItems, totalPrice } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="restaurant-header safe-top">
      <div className="container flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          {/* Menu Button */}
          <button
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
          </button>
        </div>

        {/* Logo / Brand */}
        <div className="flex items-center gap-2 flex-1 justify-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <img
              src="/src/assets/food/logo.png"
              alt="Hanif Foods Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div>
            <h1 className="font-bold text-lg text-foreground leading-tight">{RESTAURANT_NAME}</h1>
            <p className="text-xs text-muted-foreground">Authentic Pakistani Cuisine</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Gallery Link */}
          <Link
            to="/gallery"
            className="flex items-center gap-1.5 bg-muted hover:bg-muted/80 px-3 py-2 rounded-full transition-colors"
            aria-label="View gallery"
          >
            <Image className="w-5 h-5 text-foreground" />
          </Link>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className="relative flex items-center gap-2 bg-muted hover:bg-muted/80 px-3 py-2 rounded-full transition-colors"
            aria-label={`View cart with ${totalItems} items`}
          >
            <ShoppingBag className="w-5 h-5 text-foreground" />
            {totalItems > 0 && (
              <>
                <span className="text-sm font-semibold text-foreground">
                  £{totalPrice.toFixed(2)}
                </span>
                <span className="cart-badge animate-bounce-in">
                  {totalItems}
                </span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="container px-4 pb-3">
          <div className="bg-card rounded-xl border border-border shadow-lg overflow-hidden">
            <nav className="flex flex-col py-2">
              <Link
                to="/"
                className={`px-4 py-3 text-left font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className={`px-4 py-3 text-left font-medium transition-colors ${
                  location.pathname === '/gallery'
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:bg-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}