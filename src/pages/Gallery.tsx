import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const menuPictures = [
  { id: 1, image: '/src/assets/gallery/gold-menu.png', title: 'Gold Menu' },
  { id: 2, image: '/src/assets/gallery/silver-menu.png', title: 'Silver Menu' },
  { id: 3, image: '/src/assets/gallery/bronze-menu.png', title: 'Bronze Menu' },
  { id: 4, image: '/src/assets/gallery/ice-cream-menu.png', title: 'Ice Cream & Kulfi Menu' },
];

const itemPictures = [
  { id: 1, image: '/src/assets/gallery/chicken-red-handi.png', title: 'Live Chicken Red Handi' },
  { id: 2, image: '/src/assets/gallery/chicken-white-handi.png', title: 'Live Chicken White Handi' },
  { id: 3, image: '/src/assets/gallery/beef-chilly-dry.png', title: 'Beef Chilly Dry' },
  { id: 4, image: '/src/assets/gallery/fish-slice.png', title: 'Fish Slice (Surmai)' },
  { id: 5, image: '/src/assets/gallery/beef-biryani.png', title: 'Beef Biryani' },
];

export default function Gallery() {
  return (
    <>
      <Helmet>
        <title>Gallery | Hanif Foods - Menu & Food Pictures</title>
        <meta name="description" content="Browse our menu cards and delicious food pictures. Hanif Foods offers authentic Pakistani cuisine." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="restaurant-header safe-top">
          <div className="container flex items-center gap-4 py-3 px-4">
            <Link 
              to="/" 
              className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
              aria-label="Back to menu"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </Link>
            <div className="flex items-center gap-2">
              <Image className="w-6 h-6 text-primary" />
              <h1 className="font-bold text-lg text-foreground">Gallery</h1>
            </div>
          </div>
        </header>

        <main className="container px-4 py-6 pb-24 space-y-8">
          {/* Menu Pictures Section */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Menu Pictures
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {menuPictures.map((item) => (
                <div 
                  key={item.id} 
                  className="food-card overflow-hidden rounded-2xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-[3/4] object-cover"
                    loading="lazy"
                  />
                  <div className="p-3 bg-card">
                    <p className="text-sm font-semibold text-foreground text-center">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Item Pictures Section */}
          <section>
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-accent rounded-full"></span>
              Item Pictures
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {itemPictures.map((item) => (
                <div 
                  key={item.id} 
                  className="food-card overflow-hidden rounded-2xl"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 bg-card">
                    <p className="text-base font-bold text-foreground text-center">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
