import { Heart, Award, Clock } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nossa História</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nascemos do amor pela boa comida e pelo desejo de trazer lanches de qualidade para nossa comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-slide-up">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Feito com Amor</h3>
            <p className="text-muted-foreground">
              Cada lanche é preparado com carinho e dedicação, usando receitas especiais desenvolvidas ao longo dos anos
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-slide-up [animation-delay:100ms]">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Qualidade Premium</h3>
            <p className="text-muted-foreground">
              Selecionamos os melhores ingredientes frescos para garantir o sabor e a qualidade que você merece
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card hover:shadow-xl transition-all duration-300 animate-slide-up [animation-delay:200ms]">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Entrega Rápida</h3>
            <p className="text-muted-foreground">
              Preparamos seu pedido com agilidade para que você receba sempre fresquinho e quentinho
            </p>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            O <span className="font-semibold text-primary">Point do Sabor</span> começou como um sonho de oferecer lanches artesanais de verdade. 
            Hoje, somos referência na região por nosso compromisso com a qualidade e o sabor incomparável. 
            Cada lanche conta uma história, e estamos felizes em fazer parte da sua!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
