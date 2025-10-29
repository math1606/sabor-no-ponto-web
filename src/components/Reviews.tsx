import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Maria Silva",
    rating: 5,
    comment: "Simplesmente os melhores lanches da cidade! O Classic Burger é perfeito, e o atendimento pelo WhatsApp é super rápido.",
    date: "Há 2 dias"
  },
  {
    id: 2,
    name: "João Santos",
    rating: 5,
    comment: "Qualidade excepcional! Ingredientes frescos, pão artesanal delicioso e o molho especial é incrível. Super recomendo!",
    date: "Há 1 semana"
  },
  {
    id: 3,
    name: "Ana Costa",
    rating: 5,
    comment: "Sou vegetariana e fiquei muito feliz com o Veggie Burger. Muito saboroso e bem temperado. Virei cliente fiel!",
    date: "Há 2 semanas"
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    rating: 5,
    comment: "O Bacon Supreme é sensacional! Bacon crocante, queijo derretido... perfeito! E a entrega foi super rápida.",
    date: "Há 3 semanas"
  }
];

const Reviews = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Avaliações</h2>
          <p className="text-xl text-muted-foreground">
            O que nossos clientes dizem sobre nós
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-2xl font-bold">5.0</span>
            <span className="text-muted-foreground">(120+ avaliações)</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
