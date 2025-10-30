import { MapPin, Clock, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";

const Location = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Onde Estamos</h2>
          <p className="text-xl text-muted-foreground">
            Venha nos visitar ou peça pelo WhatsApp!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                CLN 215 Bloco D <br />
                Asa Norte - Brasília/DF
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Horários</h3>
              <p className="text-muted-foreground">
                Seg a Sab: 11h - 14:30<br />
                Dom: Fechado
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-all">
              <Phone className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Contato</h3>
              <p className="text-muted-foreground">
                (61) 991093281<br />
              </p>
            </Card>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 animate-fade-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.65507514163284!2d-47.888399301635644!3d-15.738655135800869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3984191ca879%3A0x5ff429d3398b35d5!2sPoint%20do%20Sabor%20215norte!5e0!3m2!1spt-BR!2sbr!4v1761792563682!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Point do Sabor"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
