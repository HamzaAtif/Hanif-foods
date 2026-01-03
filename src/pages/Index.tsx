import { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/restaurant/Header';
import CategoryTabs from '@/components/restaurant/CategoryTabs';
import MenuSection from '@/components/restaurant/MenuSection';
import WhatsAppButton from '@/components/restaurant/WhatsAppButton';
import CartSheet from '@/components/restaurant/CartSheet';
import { menuCategories, RESTAURANT_NAME } from '@/data/menuData';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Scroll to category when tab is clicked
  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    const section = document.getElementById(`category-${categoryId}`);
    if (section) {
      const headerOffset = 130; // Account for sticky headers
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const category of menuCategories) {
        const section = document.getElementById(`category-${category.id}`);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{RESTAURANT_NAME} | Authentic Pakistani Cuisine | Order on WhatsApp</title>
        <meta name="description" content="Order delicious Pakistani food from Hanif Foods. Biryani, BBQ, Karahi & more. Fast delivery. Order on WhatsApp." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#b91c1c" />
      </Helmet>

      <div className="min-h-screen bg-background pb-24">
        <Header onCartClick={() => setIsCartOpen(true)} />
        <CategoryTabs 
          activeCategory={activeCategory} 
          onCategoryChange={handleCategoryChange} 
        />
        
        <main>
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </main>

        <WhatsAppButton />
        <CartSheet isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </>
  );
};

export default Index;