import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
  const { items, removeFromCart, clearCart, total, updateQuantity } = useCart();

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderText = items
      .map((item) => `${item.name} - Rs. ${item.price} x ${item.quantity}`)
      .join("%0A");
    const totalText = `%0ATotal: Rs. ${total}`;
    const message = `Hello! I'd like to place an order:%0A%0A${orderText}${totalText}%0A%0AThank you!`;

    window.open(`https://wa.me/923242524303?text=${message}`, "_blank");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Card className="max-w-md w-full">
          <CardContent className="pt-10 text-center">
            <p className="text-2xl text-gray-600">Your cart is empty</p>
            <Button asChild className="mt-6">
              <a href="/menu">Browse Menu</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-orange-900 mb-8">Your Cart</h1>

        <div className="space-y-4">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex justify-between items-center py-4">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-600">Rs. {item.price} each</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="rounded-r-none"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center font-medium">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="rounded-l-none"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Total: Rs. {total}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 bg-green-600 hover:bg-green-700"
              onClick={handleWhatsAppOrder}
            >
              Checkout on WhatsApp
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}