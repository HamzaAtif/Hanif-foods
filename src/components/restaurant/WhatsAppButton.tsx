import { MessageCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { WHATSAPP_NUMBER, RESTAURANT_NAME } from '@/data/menuData';

export default function WhatsAppButton() {
  const { items, totalPrice, totalItems } = useCart();

  const generateWhatsAppMessage = () => {
    if (items.length === 0) {
      return `Hi ${RESTAURANT_NAME}! I'd like to place an order.`;
    }

    let message = `🍽️ *New Order from ${RESTAURANT_NAME} App*\n\n`;
    message += `*Order Details:*\n`;
    message += `─────────────────\n`;

    items.forEach((item) => {
      const itemTotal = (item.price * item.quantity).toFixed(2);
      message += `• ${item.name}\n`;
      message += `  Qty: ${item.quantity} × £${item.price.toFixed(2)} = £${itemTotal}\n`;
    });

    message += `─────────────────\n`;
    message += `*Total Items:* ${totalItems}\n`;
    message += `*Total Amount:* £${totalPrice.toFixed(2)}\n\n`;
    message += `📍 Please confirm delivery/pickup details.`;

    return message;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-btn"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span>
        {totalItems > 0 
          ? `Order on WhatsApp • £${totalPrice.toFixed(2)}`
          : 'Order on WhatsApp'
        }
      </span>
    </button>
  );
}