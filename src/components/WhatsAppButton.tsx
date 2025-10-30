import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/5561991093281?text=Olá! Gostaria de fazer um pedido!', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl hover:shadow-primary/50 z-50 animate-scale-in"
      size="icon"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};

export default WhatsAppButton;
