import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919999318867", "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-float"
      title="Chat on WhatsApp"
      data-testid="button-whatsapp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
}
