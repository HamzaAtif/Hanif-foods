export interface MenuItem {
  id: string;
  name: string;
  pricePerKg: number;
  minOrder: number; // in kg
  description?: string;
  popular?: boolean;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'bbq',
    name: 'Bar B Q Menu',
    items: [
      { id: 'bbq1', name: 'Bihari Tikka', pricePerKg: 2800, minOrder: 3, popular: true, image: '/images/Bihari_Tikka.txt' },
      { id: 'bbq2', name: 'Malai Tikka', pricePerKg: 2600, minOrder: 3, image: '/images/Malai_Tikka.txt' },
      { id: 'bbq3', name: 'Balochi Tikka', pricePerKg: 2800, minOrder: 3, image: '/images/Balochi_Tikka.txt' },
      { id: 'bbq4', name: 'Labneese Boti/Girll', pricePerKg: 2700, minOrder: 3, image: '/images/Labneese_Boti_Girll.txt' },
      { id: 'bbq5', name: 'Beef Bihari Boti', pricePerKg: 2400, minOrder: 3, image: '/images/Beef_Bihari_Boti.txt' },
      { id: 'bbq6', name: 'Afghani Boti', pricePerKg: 2500, minOrder: 3, image: '/images/Afghani_Boti.txt' },
      { id: 'bbq7', name: 'Chatakh Boti', pricePerKg: 2600, minOrder: 3, popular: true, image: '/images/Chatakh_Boti.txt' },
      { id: 'bbq8', name: 'Shashlik Boti', pricePerKg: 2700, minOrder: 3, image: '/images/Shashlik_Boti.txt' },
      { id: 'bbq9', name: 'Morican Boti', pricePerKg: 2600, minOrder: 3, image: '/images/Morican_Boti.txt' },
      { id: 'bbq10', name: 'Dhaga Kabab', pricePerKg: 2500, minOrder: 3, image: '/images/Dhaga_Kabab.txt' },
      { id: 'bbq11', name: 'Seekh Kabab', pricePerKg: 2200, minOrder: 3, popular: true, image: '/images/Seekh_Kabab.txt' },
      { id: 'bbq12', name: 'Turkish Kabab', pricePerKg: 2400, minOrder: 3, image: '/images/Turkish_Kabab.txt' },
      { id: 'bbq13', name: 'Hunzai Kabab', pricePerKg: 2500, minOrder: 3, image: '/images/Hunzai_Kabab.txt' },
      { id: 'bbq14', name: 'Angara Kabab', pricePerKg: 2600, minOrder: 3, image: '/images/Angara_Kabab.txt' },
      { id: 'bbq15', name: 'Nalki Kabab', pricePerKg: 2700, minOrder: 3, image: '/images/Nalki_Kabab.txt' },
      { id: 'bbq16', name: 'Chaska Kabab', pricePerKg: 2500, minOrder: 3, image: '/images/Chaska_Kabab.txt' },
      { id: 'bbq17', name: 'Chicken Cheese Kabab', pricePerKg: 2600, minOrder: 3, image: '/images/Chicken_Cheese_Kabab.txt' },
      { id: 'bbq18', name: 'Mutton Chanp Grill', pricePerKg: 3200, minOrder: 3, image: '/images/Mutton_Chanp_Grill.txt' },
      { id: 'bbq19', name: 'Prawns BBQ', pricePerKg: 3500, minOrder: 3, image: '/images/Prawns_BBQ.txt' },
      { id: 'bbq20', name: 'Grilled Fish', pricePerKg: 2800, minOrder: 3, image: '/images/Grilled_Fish.txt' },
      { id: 'bbq21', name: 'Chicken Steam', pricePerKg: 2200, minOrder: 3, image: '/images/Chicken_Steam.txt' },
      { id: 'bbq22', name: 'Mutton Steam', pricePerKg: 3000, minOrder: 3, image: '/images/Mutton_Steam.txt' },
    ],
  },
  {
    id: 'curries',
    name: 'Curries Menu',
    items: [
      { id: 'cur1', name: 'Qorma / Badami Qorma', pricePerKg: 2400, minOrder: 3, popular: true, image: '/images/Qorma___Badami_Qorma.txt' },
      { id: 'cur2', name: 'White Qorma', pricePerKg: 2500, minOrder: 3, image: '/images/White_Qorma.txt' },
      { id: 'cur3', name: 'Kunna Paya', pricePerKg: 2600, minOrder: 3, image: '/images/Kunna_Paya.txt' },
      { id: 'cur4', name: 'Achar Gosht', pricePerKg: 2400, minOrder: 3, image: '/images/Achar_Gosht.txt' },
      { id: 'cur5', name: 'Green Stew', pricePerKg: 2300, minOrder: 3, image: '/images/Green_Stew.txt' },
      { id: 'cur6', name: 'Hari Mirch Qeema', pricePerKg: 2200, minOrder: 3, image: '/images/Hari_Mirch_Qeema.txt' },
      { id: 'cur7', name: 'Dum Qeema', pricePerKg: 2200, minOrder: 3, image: '/images/Dum_Qeema.txt' },
      { id: 'cur8', name: 'Palak Paneer', pricePerKg: 1800, minOrder: 3, image: '/images/Palak_Paneer.txt' },
      { id: 'cur9', name: 'Koftay', pricePerKg: 2300, minOrder: 3, image: '/images/Koftay.txt' },
      { id: 'cur10', name: 'Shab Daig', pricePerKg: 2800, minOrder: 3, image: '/images/Shab_Daig.txt' },
      { id: 'cur11', name: 'Karahi', pricePerKg: 2600, minOrder: 3, popular: true, image: '/images/Karahi.txt' },
      { id: 'cur12', name: 'Green Karahi', pricePerKg: 2700, minOrder: 3, image: '/images/Green_Karahi.txt' },
      { id: 'cur13', name: 'White Karahi', pricePerKg: 2700, minOrder: 3, image: '/images/White_Karahi.txt' },
      { id: 'cur14', name: 'Butter Karahi', pricePerKg: 2800, minOrder: 3, image: '/images/Butter_Karahi.txt' },
      { id: 'cur15', name: 'Tikka Karahi', pricePerKg: 2900, minOrder: 3, popular: true, image: '/images/Tikka_Karahi.txt' },
      { id: 'cur16', name: 'Balochi Karahi', pricePerKg: 2800, minOrder: 3, image: '/images/Balochi_Karahi.txt' },
      { id: 'cur17', name: 'Chicken Makhni Handi', pricePerKg: 2600, minOrder: 3, image: '/images/Chicken_Makhni_Handi.txt' },
      { id: 'cur18', name: 'Chicken White Handi', pricePerKg: 2500, minOrder: 3, image: '/images/Chicken_White_Handi.txt' },
      { id: 'cur19', name: 'Haleem Beef & Chicken', pricePerKg: 2000, minOrder: 3, description: 'With Green & Red Spices', image: '/images/Haleem_Beef_&_Chicken.txt' },
    ],
  },
  {
    id: 'fry',
    name: 'Fry Cuisine Menu',
    items: [
      { id: 'fry1', name: 'Broast', pricePerKg: 2200, minOrder: 3, popular: true, image: '/images/Broast.txt' },
      { id: 'fry2', name: 'Chargha Broast', pricePerKg: 2400, minOrder: 3, image: '/images/Chargha_Broast.txt' },
      { id: 'fry3', name: 'Chicken Ala Kiev', pricePerKg: 2600, minOrder: 3, image: '/images/Chicken_Ala_Kiev.txt' },
      { id: 'fry4', name: 'Chicken Cordon Bleu', pricePerKg: 2800, minOrder: 3, image: '/images/Chicken_Cordon_Bleu.txt' },
      { id: 'fry5', name: 'Fish Biscuit', pricePerKg: 2500, minOrder: 3, image: '/images/Fish_Biscuit.txt' },
      { id: 'fry6', name: 'Fish Lahori', pricePerKg: 2600, minOrder: 3, image: '/images/Fish_Lahori.txt' },
      { id: 'fry7', name: 'Prawn Tempura', pricePerKg: 3200, minOrder: 3, image: '/images/Prawn_Tempura.txt' },
      { id: 'fry8', name: 'Arabian Puff', pricePerKg: 2000, minOrder: 3, image: '/images/Arabian_Puff.txt' },
      { id: 'fry9', name: 'Chicken Cheese Strips', pricePerKg: 2400, minOrder: 3, image: '/images/Chicken_Cheese_Strips.txt' },
      { id: 'fry10', name: 'Toffe Kabab', pricePerKg: 2200, minOrder: 3, image: '/images/Toffe_Kabab.txt' },
      { id: 'fry11', name: 'Chapli Kabab', pricePerKg: 2200, minOrder: 3, image: '/images/Chapli_Kabab.txt' },
      { id: 'fry12', name: 'Chicken Cheese Cone', pricePerKg: 2400, minOrder: 5, popular: true, image: '/images/Chicken_Cheese_Cone.txt' },
      { id: 'fry13', name: 'Peri Bite', pricePerKg: 2200, minOrder: 3, image: '/images/Peri_Bite.txt' },
      { id: 'fry14', name: 'Mint Roll', pricePerKg: 2000, minOrder: 3, image: '/images/Mint_Roll.txt' },
      { id: 'fry15', name: 'Wonton', pricePerKg: 1800, minOrder: 3, image: '/images/Wonton.txt' },
      { id: 'fry16', name: 'Chicken/Beef Samosa', pricePerKg: 1600, minOrder: 3, image: '/images/Chicken_Beef_Samosa.txt' },
      { id: 'fry17', name: 'Spring Roll', pricePerKg: 1800, minOrder: 3, image: '/images/Spring_Roll.txt' },
      { id: 'fry18', name: 'Chicky Micky', pricePerKg: 2000, minOrder: 3, image: '/images/Chicky_Micky.txt' },
      { id: 'fry19', name: 'Chicken Dynamite', pricePerKg: 2400, minOrder: 3, image: '/images/Chicken_Dynamite.txt' },
      { id: 'fry20', name: 'Chicken Pocket', pricePerKg: 2200, minOrder: 3, image: '/images/Chicken_Pocket.txt' },
      { id: 'fry21', name: 'Chicken Jalapeno', pricePerKg: 2400, minOrder: 3, image: '/images/Chicken_Jalapeno.txt' },
    ],
  },
  {
    id: 'chinese',
    name: 'Chinese Cuisine Menu',
    items: [
      { id: 'chi1', name: 'Chicken Chilli', pricePerKg: 2200, minOrder: 3, popular: true, image: '/images/Chicken_Chilli.txt' },
      { id: 'chi2', name: 'Chicken / Beef Dry', pricePerKg: 2400, minOrder: 3, image: '/images/Chicken___Beef_Dry.txt' },
      { id: 'chi3', name: 'Chicken Jalfrezi', pricePerKg: 2300, minOrder: 3, image: '/images/Chicken_Jalfrezi.txt' },
      { id: 'chi4', name: 'Chicken Manchurian', pricePerKg: 2200, minOrder: 3, popular: true, image: '/images/Chicken_Manchurian.txt' },
      { id: 'chi5', name: 'Szehwan Chicken', pricePerKg: 2400, minOrder: 3, image: '/images/Szehwan_Chicken.txt' },
      { id: 'chi6', name: 'Lemon Chicken', pricePerKg: 2300, minOrder: 3, image: '/images/Lemon_Chicken.txt' },
      { id: 'chi7', name: 'Kung Pao Chicken', pricePerKg: 2400, minOrder: 3, image: '/images/Kung_Pao_Chicken.txt' },
    ],
  },
  {
    id: 'live',
    name: 'Live Cuisine Menu',
    items: [
      { id: 'liv1', name: 'Koyla Karahi', pricePerKg: 3000, minOrder: 3, popular: true, image: '/images/Koyla_Karahi.txt' },
      { id: 'liv2', name: 'Kashmiri Karahi', pricePerKg: 2900, minOrder: 3, image: '/images/Kashmiri_Karahi.txt' },
      { id: 'liv3', name: 'Shinwari Karahi', pricePerKg: 2800, minOrder: 3, popular: true, image: '/images/Shinwari_Karahi.txt' },
      { id: 'liv4', name: 'Mughlai Karahi', pricePerKg: 2900, minOrder: 3, image: '/images/Mughlai_Karahi.txt' },
      { id: 'liv5', name: 'Chicken White Handi', pricePerKg: 2600, minOrder: 3, image: '/images/Chicken_White_Handi.txt' },
      { id: 'liv6', name: 'Chicken Paneer Reshmi Handi', pricePerKg: 2700, minOrder: 3, image: '/images/Chicken_Paneer_Reshmi_Handi.txt' },
      { id: 'liv7', name: 'Singapori Rice', pricePerKg: 1800, minOrder: 3, image: '/images/Singapori_Rice.txt' },
      { id: 'liv8', name: 'Tawa Fish', pricePerKg: 2800, minOrder: 3, image: '/images/Tawa_Fish.txt' },
      { id: 'liv9', name: 'Karakat', pricePerKg: 2600, minOrder: 3, image: '/images/Karakat.txt' },
    ],
  },
  {
    id: 'desserts',
    name: 'Dessert Menu',
    items: [
      { id: 'des1', name: 'Zarda (Special)', pricePerKg: 1200, minOrder: 3, popular: true, image: '/images/Zarda_(Special).txt' },
      { id: 'des2', name: 'Rabri Kheer / Pista Rabri Kheer', pricePerKg: 1400, minOrder: 3, image: '/images/Rabri_Kheer___Pista_Rabri_Kheer.txt' },
      { id: 'des3', name: 'Lab-e-Shireen', pricePerKg: 1500, minOrder: 3, image: '/images/Lab-e-Shireen.txt' },
      { id: 'des4', name: 'Cream Cocktail (Vanilla & Mango)', pricePerKg: 1200, minOrder: 3, image: '/images/Cream_Cocktail_(Vanilla_&_Mango).txt' },
      { id: 'des5', name: 'Ice Cocktail', pricePerKg: 1000, minOrder: 3, image: '/images/Ice_Cocktail.txt' },
      { id: 'des6', name: 'Cherry Crunch Cocktail', pricePerKg: 1300, minOrder: 3, popular: true, image: '/images/Cherry_Crunch_Cocktail.txt' },
      { id: 'des7', name: 'Doodh Dulari', pricePerKg: 1200, minOrder: 3, image: '/images/Doodh_Dulari.txt' },
      { id: 'des8', name: 'Alaska (Vanilla & Mango)', pricePerKg: 1400, minOrder: 3, image: '/images/Alaska_(Vanilla_&_Mango).txt' },
      { id: 'des9', name: 'Fruit Trifle', pricePerKg: 1500, minOrder: 3, popular: true, image: '/images/Fruit_Trifle.txt' },
      { id: 'des10', name: 'Mango Delight', pricePerKg: 1400, minOrder: 3, image: '/images/Mango_Delight.txt' },
      { id: 'des11', name: 'Shahi Tukra', pricePerKg: 1600, minOrder: 3, image: '/images/Shahi_Tukra.txt' },
      { id: 'des12', name: 'Dessert Bar (Continental)', pricePerKg: 1800, minOrder: 3, image: '/images/Dessert_Bar_(Continental).txt' },
      { id: 'des13', name: 'Pineapple Rassgulla', pricePerKg: 1400, minOrder: 3, image: '/images/Pineapple_Rassgulla.txt' },
      { id: 'des14', name: 'Gajar Halwa', pricePerKg: 1200, minOrder: 3, popular: true, image: '/images/Gajar_Halwa.txt' },
      { id: 'des15', name: 'Loki Halwa', pricePerKg: 1000, minOrder: 3, image: '/images/Loki_Halwa.txt' },
      { id: 'des16', name: 'Dry Fruit Halwa', pricePerKg: 1600, minOrder: 3, image: '/images/Dry_Fruit_Halwa.txt' },
      { id: 'des17', name: 'Rasmalai (Small)', pricePerKg: 1500, minOrder: 3, image: '/images/Rasmalai_(Small).txt' },
      { id: 'des18', name: 'Gulab Jamun', pricePerKg: 1200, minOrder: 3, image: '/images/Gulab_Jamun.txt' },
      { id: 'des19', name: 'Special Suji Halwa', pricePerKg: 1000, minOrder: 3, image: '/images/Special_Suji_Halwa.txt' },
    ],
  },
  {
    id: 'icecream',
    name: 'Ice Cream / Ice Cake / Kulfi Menu',
    items: [
      { id: 'ice1', name: 'Roasted Almond Ice Cream', pricePerKg: 1600, minOrder: 3, popular: true, image: '/src/assets/food/roasted-almond-ice-cream.jpg' },
      { id: 'ice2', name: 'Cisilion Ice Cream', pricePerKg: 1500, minOrder: 3, image: '/src/assets/food/cisilion-ice-cream.jpg' },
      { id: 'ice3', name: 'Strawberry Cheese Cake', pricePerKg: 1800, minOrder: 3, image: '/src/assets/food/strawberry-cheese-cake.jpg' },
      { id: 'ice4', name: 'Mango Ice Cream', pricePerKg: 1400, minOrder: 3, popular: true, image: '/src/assets/food/mango-ice-cream.jpg' },
      { id: 'ice5', name: 'Badam Zafran Ice Cream', pricePerKg: 1700, minOrder: 3, image: '/src/assets/food/badam-zafran-ice-cream.jpg' },
      { id: 'ice6', name: 'Rose Malai Ice Cream', pricePerKg: 1600, minOrder: 3, image: '/src/assets/food/rose-malai-ice-cream.jpg' },
      { id: 'ice7', name: 'Gateau Cake Ice Cream', pricePerKg: 1800, minOrder: 3, image: '/src/assets/food/gateau-cake-ice-cream.jpg' },
      { id: 'ice8', name: 'Cream Casata (Ice Cake)', pricePerKg: 2000, minOrder: 3, image: '/src/assets/food/cream-casata-ice-cake.jpg' },
      { id: 'ice9', name: 'Mango Delight (Ice Cake)', pricePerKg: 1800, minOrder: 3, image: '/src/assets/food/mango-delight-ice-cake.jpg' },
      { id: 'ice10', name: 'Oreo Delight (Ice Cake)', pricePerKg: 2000, minOrder: 3, popular: true, image: '/src/assets/food/oreo-delight-ice-cake.jpg' },
      { id: 'ice11', name: 'Temptation (Ice Cake)', pricePerKg: 2200, minOrder: 3, image: '/src/assets/food/temptation-ice-cake.jpg' },
      { id: 'ice12', name: 'Fruit Alaska (Ice Cake)', pricePerKg: 2000, minOrder: 3, image: '/src/assets/food/fruit-alaska-ice-cake.jpg' },
      { id: 'ice13', name: 'Baked Alaska (Ice Cake)', pricePerKg: 2200, minOrder: 3, image: '/src/assets/food/baked-alaska-ice-cake.jpg' },
      { id: 'ice14', name: 'Crunch Kulfi', pricePerKg: 1400, minOrder: 3, image: '/src/assets/food/crunch-kulfi.jpg' },
      { id: 'ice15', name: 'Mango Kulfi', pricePerKg: 1400, minOrder: 3, image: '/src/assets/food/mango-kulfi.jpg' },
      { id: 'ice16', name: 'Badam Zafran Kulfi', pricePerKg: 1600, minOrder: 3, image: '/src/assets/food/badam-zafran-kulfi.jpg' },
      { id: 'ice17', name: 'Khoya Kulfi', pricePerKg: 1500, minOrder: 3, image: '/src/assets/food/khoya-kulfi.jpg' },
    ],
  },
  {
    id: 'bars',
    name: 'Fruit & Salad Bar Menu',
    items: [
      { id: 'bar1', name: 'Fruit Bar', pricePerKg: 2000, minOrder: 3, popular: true, image: '/src/assets/food/fruit-bar.jpg' },
      { id: 'bar2', name: 'Salad Bar (12 & 16 Bowls)', pricePerKg: 1800, minOrder: 3, image: '/src/assets/food/salad-bar-12-16-bowls.jpg' },
      { id: 'bar3', name: 'Salad Bar (Ice Box Stainless Steel)', pricePerKg: 2200, minOrder: 3, image: '/src/assets/food/salad-bar-ice-box.jpg' },
      { id: 'bar4', name: 'Italian Bar', pricePerKg: 2400, minOrder: 3, image: '/src/assets/food/italian-bar.jpg' },
    ],
  },
  {
    id: 'dessertbar',
    name: 'Dessert Bar Menu',
    items: [
      { id: 'db1', name: 'Dessert Bar (8 Items)', pricePerKg: 2500, minOrder: 3, popular: true, image: '/src/assets/food/dessert-bar-8-items.jpg' },
      { id: 'db2', name: 'Diamond Dessert Bar with Chocolate Fountain', pricePerKg: 3500, minOrder: 3, popular: true, image: '/src/assets/food/diamond-dessert-bar.jpg' },
      { id: 'db3', name: 'SP Dessert Bar with Waffle Ice Cream (Live)', pricePerKg: 4000, minOrder: 3, image: '/src/assets/food/sp-dessert-bar.jpg' },
    ],
  },
  {
    id: 'refreshments',
    name: 'Live Refreshments Stall Menu',
    items: [
      { id: 'ref1', name: 'Chana Chat with SP Spices', pricePerKg: 1200, minOrder: 3, popular: true, image: '/src/assets/food/chana-chat.jpg' },
      { id: 'ref2', name: 'Dahi Baray with Crackers', pricePerKg: 1400, minOrder: 3, image: '/src/assets/food/dahi-baray.jpg' },
      { id: 'ref3', name: 'SP Gol Gappay', pricePerKg: 1000, minOrder: 3, popular: true, image: '/src/assets/food/gol-gappay.jpg' },
      { id: 'ref4', name: 'Fresh Juices & Moctail', pricePerKg: 1500, minOrder: 3, image: '/src/assets/food/fresh-juices.jpg' },
      { id: 'ref5', name: 'SP Limca Stall (Many Flavours)', pricePerKg: 1200, minOrder: 3, image: '/src/assets/food/limca-stall.jpg' },
      { id: 'ref6', name: 'Tea, Green Tea & Dood Patti Chai', pricePerKg: 800, minOrder: 3, image: '/src/assets/food/tea-chai.jpg' },
      { id: 'ref7', name: 'Coffee / Cappuccino & Many More', pricePerKg: 1000, minOrder: 3, image: '/src/assets/food/coffee-cappuccino.jpg' },
      { id: 'ref8', name: 'Pan Stall', pricePerKg: 600, minOrder: 3, image: '/src/assets/food/pan-stall.jpg' },
    ],
  },
];

// WhatsApp configuration
export const WHATSAPP_NUMBER = '923332187562';
export const RESTAURANT_NAME = 'Hanif Foods & Caterers';
