import burgerClassic from "@/assets/burger-classic.jpg";
import burgerBacon from "@/assets/burger-bacon.jpg";
import burgerVeggie from "@/assets/burger-veggie.jpg";
import fries from "@/assets/fries.jpg";
import drinks from "@/assets/drinks.jpg";
import heroImage from "@/assets/hero-burger.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Nosso Trailer" },
    { src: burgerClassic, alt: "Classic Burger" },
    { src: burgerBacon, alt: "Bacon Supreme" },
    { src: burgerVeggie, alt: "Veggie Burger" },
    { src: fries, alt: "Batata Frita" },
    { src: drinks, alt: "Bebidas" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Galeria</h2>
          <p className="text-xl text-muted-foreground">
            Confira nossos deliciosos lanches
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-xl font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
