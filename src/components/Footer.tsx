import { Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Point do Sabor
            </h3>
            <p className="text-muted-foreground mb-4">
              Lanches artesanais de qualidade com ingredientes frescos e muito sabor.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Horários</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Segunda a Sexta: 18h - 23h</li>
              <li>Sábado e Domingo: 18h - 00h</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Av. Principal, 123</li>
              <li>Centro - Cidade/Estado</li>
              <li>(11) 99999-9999</li>
              <li>contato@pointdosabor.com.br</li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-muted-foreground">
          <p>© {currentYear} Point do Sabor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
