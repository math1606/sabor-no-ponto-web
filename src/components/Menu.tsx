import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import burgerClassic from "@/assets/burger-classic.jpg";
import burgerBacon from "@/assets/burger-bacon.jpg";
import burgerVeggie from "@/assets/burger-veggie.jpg";
import fries from "@/assets/fries.jpg";
import drinks from "@/assets/drinks.jpg";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Hamburger artesanal, queijo, alface, tomate e molho especial",
    price: "R$ 25,00",
    image: burgerClassic,
    category: "Lanches",
    popular: true
  },
  {
    id: 2,
    name: "Bacon Supreme",
    description: "Duplo hamburger, bacon crocante, queijo cheddar e cebola caramelizada",
    price: "R$ 32,00",
    image: burgerBacon,
    category: "Lanches",
    popular: true
  },
  {
    id: 3,
    name: "Veggie Burger",
    description: "Hamburger de grão-de-bico, queijo, legumes grelhados e molho especial",
    price: "R$ 28,00",
    image: burgerVeggie,
    category: "Lanches"
  },
  {
    id: 4,
    name: "Batata Frita",
    description: "Porção generosa de batatas crocantes com molhos especiais",
    price: "R$ 15,00",
    image: fries,
    category: "Acompanhamentos"
  },
  {
    id: 5,
    name: "Bebidas",
    description: "Refrigerantes, sucos naturais e milkshakes artesanais",
    price: "A partir de R$ 8,00",
    image: drinks,
    category: "Bebidas"
  }
];

const Menu = () => {
  const handleOrder = (item: MenuItem) => {
    const message = `Olá! Gostaria de pedir: ${item.name} - ${item.price}`;
    window.open(`https://wa.me/5561991093281?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="cardapio" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nosso Cardápio</h2>
          <p className="text-xl text-muted-foreground">
            Explore nossos deliciosos lanches artesanais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 animate-scale-in border-2 hover:border-primary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                {item.popular && (
                  <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge variant="outline" className="mb-3">{item.category}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <p className="text-2xl font-bold text-primary">{item.price}</p>
                </div>
                <Button 
                  className="w-full gap-2"
                  onClick={() => handleOrder(item)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Pedir Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
