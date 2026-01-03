import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const menuItems = [
  { id: 1, name: "Chicken Biryani", price: 450, category: "Biryani", image: "/placeholder-biryani.jpg" },
  { id: 2, name: "Mutton Biryani", price: 650, category: "Biryani", image: "/placeholder-biryani.jpg" },
  { id: 3, name: "Chicken Karahi", price: 800, category: "Karahi", image: "/placeholder-karahi.jpg" },
  { id: 4, name: "Mutton Karahi", price: 1200, category: "Karahi", image: "/placeholder-karahi.jpg" },
  { id: 5, name: "Chicken Tikka", price: 350, category: "BBQ", image: "/placeholder-tikka.jpg" },
  { id: 6, name: "Seekh Kebab (4 pcs)", price: 400, category: "BBQ", image: "/placeholder-kebab.jpg" },
  { id: 7, name: "Nihari", price: 550, category: "Special", image: "/placeholder-nihari.jpg" },
  { id: 8, name: "Haleem", price: 500, category: "Special", image: "/placeholder-haleem.jpg" },
  { id: 9, name: "Chicken Handi", price: 750, category: "Curry", image: "/placeholder-handi.jpg" },
  { id: 10, name: "Beef Pulao", price: 600, category: "Rice", image: "/placeholder-pulao.jpg" },
  { id: 11, name: "Chicken Seekh Kebab", price: 300, category: "BBQ", image: "/placeholder-kebab.jpg" },
  { id: 12, name: "Mixed Grill", price: 1500, category: "BBQ", image: "/placeholder-grill.jpg" },
];

export default function Menu() {
  const { items, addToCart, removeFromCart, updateQuantity } = useCart();

  const handleAddToCart = (item: { id: number; name: string; price: number; }) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (id: number) => {
    const cartItem = items.find(item => item.id === id);
    if (cartItem && cartItem.quantity > 1) {
      updateQuantity(id, cartItem.quantity - 1);
    } else {
      removeFromCart(id);
    }
  };

  const getCartItemQuantity = (id: number) => {
    const item = items.find(item => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-orange-900 mb-4">Our Menu</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Authentic Pakistani flavors, made fresh daily</p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x300?text=Food+Image";
                  }}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription className="text-lg">{item.category}</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-between items-center">
                <span className="text-2xl font-bold text-orange-700">Rs. {item.price}</span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveFromCart(item.id)}
                    disabled={getCartItemQuantity(item.id) === 0}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center font-medium">{getCartItemQuantity(item.id)}</span>
                  <Button
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="h-4 w-4" /> Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}