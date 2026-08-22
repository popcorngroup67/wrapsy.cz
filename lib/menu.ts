export type MenuCategory =
  | 'wrapy'
  | 'pizzy-classic'
  | 'pizzy-special'
  | 'bowls'
  | 'kyble'
  | 'detske'
  | 'prilohy'
  | 'omacky'

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  category: MenuCategory
  image?: string
  hot?: boolean
  star?: boolean
}

export const MENU_CATEGORIES: { id: MenuCategory; label: string; emoji: string }[] = [
  { id: 'wrapy',         label: 'Wrapy',          emoji: '🌯' },
  { id: 'pizzy-classic', label: 'Pizza Classic',  emoji: '🍕' },
  { id: 'pizzy-special', label: 'Pizza Speciál',  emoji: '⭐' },
  { id: 'bowls',         label: 'Bowls',          emoji: '🥣' },
  { id: 'kyble',         label: 'Buckety',        emoji: '🍗' },
  { id: 'detske',        label: 'Dětské',         emoji: '🧒' },
  { id: 'prilohy',       label: 'Přílohy',        emoji: '🍟' },
  { id: 'omacky',        label: 'Omáčky',         emoji: '🥫' },
]

export const MENU_ITEMS: MenuItem[] = [
  // WRAPY
  {
    id: 'cheddar-bbq-strips',
    name: 'Cheddar BBQ Strips',
    description: 'Šťavnaté kuřecí stripsy, dvojitá porce cheddaru, chipotle omáčka, BBQ omáčka, smažená cibulka a salát.',
    price: 169,
    category: 'wrapy',
    image: '/food/cheddar-bbq-strips.jpg',
  },
  {
    id: 'korean-strips',
    name: 'Korean Strips',
    description: 'Kuřecí stripsy v korejské omáčce, sezam, červená cibule, BBQ omáčka, cheddar a salát.',
    price: 179,
    category: 'wrapy',
    image: '/food/korean-strips.jpg',
  },
  {
    id: 'beef',
    name: 'Beef',
    description: 'Trhané hovězí maso v adobo omáčce, černé fazole, guacamole, chipotle omáčka, cheddar, švestková chilli omáčka a salát.',
    price: 179,
    category: 'wrapy',
    image: '/food/beef-mango.jpg',
  },
  {
    id: 'kebab-yogurt',
    name: 'Kebab Yogurt',
    description: 'Kuřecí kebab, jogurt, cheddar, červená cibule a salát.',
    price: 169,
    category: 'wrapy',
  },
  {
    id: 'big-mac-kebab',
    name: 'Big Mac Kebab',
    description: 'Kuřecí kebab, červená cibule, kyselá okurka, Big Mac majonéza, smažená cibulka a salát.',
    price: 169,
    category: 'wrapy',
    image: '/food/big-mac-kebab.jpg',
  },
  {
    id: 'inferno-beef',
    name: 'Inferno Beef',
    description: 'Trhané hovězí maso, jalapeños, chipotle omáčka, sriracha mayo, červená cibule, smažená cibulka, chilli flakes a salát.',
    price: 169,
    category: 'wrapy',
    image: '/food/inferno-beef.jpg',
    hot: true,
  },
  {
    id: 'loaded-fries-wrap',
    name: 'Loaded Fries Wrap',
    description: 'Kuřecí kebab, hranolky, cheddar omáčka, chipotle omáčka, smažená cibulka, čerstvá cibule, cheddar a salát.',
    price: 169,
    category: 'wrapy',
    image: '/food/loaded-fries-wrap.jpg',
  },
  {
    id: 'golden-cheddar-strips',
    name: 'Golden Cheddar Strips',
    description: 'Křupavé zlaté kuřecí stripsy, hranolky a cheddar.',
    price: 179,
    category: 'wrapy',
    image: '/food/golden-cheddar-strips.jpg',
  },
  {
    id: 'durum-classic',
    name: 'Durum Classic',
    description: 'Kuřecí maso, salát a dresing.',
    price: 150,
    category: 'wrapy',
  },
  {
    id: 'durum-special',
    name: 'Durum Speciál',
    description: 'Kuřecí maso, cheddar a dresing.',
    price: 189,
    category: 'wrapy',
  },

  // PIZZA CLASSIC 40 CM
  {
    id: 'sunkova-pizza',
    name: 'Šunková',
    description: 'Sugo, mozzarella a šunka.',
    price: 160,
    category: 'pizzy-classic',
    image: '/food/pizza-ham.jpg',
  },
  {
    id: 'slaninova-pizza',
    name: 'Slaninová',
    description: 'Sugo, mozzarella a slanina.',
    price: 160,
    category: 'pizzy-classic',
  },
  {
    id: 'syrova-pizza',
    name: 'Sýrová',
    description: 'Smetanový základ, mozzarella, niva a camembert.',
    price: 160,
    category: 'pizzy-classic',
    image: '/food/pizza-cheddar-melt.jpg',
  },
  {
    id: 'pepperoni-pizza',
    name: 'Pepperoni',
    description: 'Sugo, mozzarella a pikantní salám.',
    price: 160,
    category: 'pizzy-classic',
  },
  {
    id: 'capricciosa-pizza',
    name: 'Capricciosa',
    description: 'Sugo, mozzarella, šunka a žampiony.',
    price: 160,
    category: 'pizzy-classic',
  },
  {
    id: 'hawaii-pizza',
    name: 'Hawaii',
    description: 'Sugo, mozzarella, hromada ananasu a šunka.',
    price: 160,
    category: 'pizzy-classic',
  },
  {
    id: 'brusinkova-pizza',
    name: 'Brusinková',
    description: 'Smetanový základ, mozzarella, šunka, camembert a brusinky.',
    price: 160,
    category: 'pizzy-classic',
  },

  // PIZZA SPECIÁL 40 CM
  {
    id: 'mexicka-pizza',
    name: 'Mexická',
    description: 'Sugo, mozzarella, pikantní salám, jalapeños, uzený sýr a kukuřice.',
    price: 235,
    category: 'pizzy-special',
    hot: true,
  },
  {
    id: 'kebab-special-pizza',
    name: 'Kebab Speciál',
    description: 'Sugo, mozzarella, kuřecí kebab, chipotle omáčka a BBQ omáčka.',
    price: 235,
    category: 'pizzy-special',
  },
  {
    id: 'strips-deluxe-pizza',
    name: 'Strips Deluxe',
    description: 'Sugo, mozzarella, chicken strips, BBQ omáčka, křupavá cibulka a kukuřice.',
    price: 235,
    category: 'pizzy-special',
  },
  {
    id: 'inferno-pizza',
    name: 'Inferno',
    description: 'Sugo, mozzarella, trhané maso, červená cibulka, jalapeños, BBQ omáčka a kukuřice.',
    price: 235,
    category: 'pizzy-special',
    hot: true,
  },
  {
    id: 'bbq-beef-deluxe-pizza',
    name: 'BBQ Beef Deluxe',
    description: 'BBQ základ, mozzarella, cheddar, trhané hovězí maso, nakládaná okurka, smažená cibulka a chipotle mayo.',
    price: 245,
    category: 'pizzy-special',
    star: true,
  },
  {
    id: 'bbq-chicken-bacon-pizza',
    name: 'BBQ Chicken Bacon',
    description: 'Sugo, mozzarella, cibule, anglická slanina, kuřecí maso, kukuřice a BBQ omáčka.',
    price: 245,
    category: 'pizzy-special',
    star: true,
  },

  // BOWLS
  {
    id: 'bowl-strips',
    name: 'Bowl Strips',
    description: 'Rýže na kari, kuřecí stripsy, BBQ omáčka, cheddar omáčka, jarní cibulka a smažená cibulka.',
    price: 219,
    category: 'bowls',
  },
  {
    id: 'bowl-kebab',
    name: 'Bowl Kebab',
    description: 'Rýže na kari, kuřecí maso, BBQ omáčka, chipotle mayo a sezam.',
    price: 219,
    category: 'bowls',
  },
  {
    id: 'bowl-beef',
    name: 'Bowl Beef',
    description: 'Rýže na kari, trhané hovězí maso v adobo omáčce, rajče, okurka, černé fazole, chipotle mayo, BBQ omáčka, jarní cibulka a sezam.',
    price: 239,
    category: 'bowls',
  },
  {
    id: 'bowl-falafel',
    name: 'Bowl Falafel',
    description: 'Rýže na kari, falafel, salát, rajče, okurka, bylinková omáčka, jarní cibulka a sezam.',
    price: 219,
    category: 'bowls',
  },

  // BUCKETY
  {
    id: 'golden-strips-bucket',
    name: 'Golden Strips Bucket',
    description: '5 ks kuřecí strips, hranolky a 2× omáčka dle výběru.',
    price: 236,
    category: 'kyble',
  },
  {
    id: 'loaded-strips-bucket',
    name: 'Loaded Strips Bucket',
    description: '3 ks kuřecí strips, hranolky, salát, cheddar omáčka, chipotle omáčka a smažená cibulka.',
    price: 226,
    category: 'kyble',
  },
  {
    id: 'korean-bucket',
    name: 'Korean Bucket',
    description: '3 ks strips, salát, hranolky, sladkokyselá chilli omáčka, BBQ omáčka, červená cibule a sezam.',
    price: 186,
    category: 'kyble',
  },
  {
    id: 'cheddar-bbq-bucket',
    name: 'Cheddar BBQ Bucket',
    description: '3 ks strips, salát, hranolky, cheddar, BBQ omáčka, chipotle mayo a smažená cibulka.',
    price: 186,
    category: 'kyble',
  },
  {
    id: 'vegetarian-bucket',
    name: 'Vegetarián Bucket',
    description: '3 ks falafel, hranolky, salát, rajče, okurka, bylinková omáčka a jarní cibulka.',
    price: 186,
    category: 'kyble',
  },
  {
    id: 'inferno-bucket',
    name: 'Inferno Bucket',
    description: 'Hranolky, trhané hovězí maso v adobo omáčce, jalapeños, salát, chipotle mayo, sriracha omáčka a chilli koření.',
    price: 226,
    category: 'kyble',
    hot: true,
  },

  // DĚTSKÉ
  {
    id: 'golden-chicken-box',
    name: 'Golden Chicken Box',
    description: 'Strips, hranolky a cheddar.',
    price: 86,
    category: 'detske',
  },
  {
    id: 'chicken-grill-box',
    name: 'Chicken Grill Box',
    description: 'Kuřecí maso, hranolky a Big Mac omáčka.',
    price: 86,
    category: 'detske',
  },

  // PŘÍLOHY
  {
    id: 'strips-1ks',
    name: 'Strips 1 ks',
    description: 'Jeden kus kuřecího strips.',
    price: 30,
    category: 'prilohy',
  },
  {
    id: 'hranolky',
    name: 'Hranolky',
    description: 'Klasické křupavé hranolky.',
    price: 59,
    category: 'prilohy',
  },
  {
    id: 'hranolky-cheddar',
    name: 'Hranolky s cheddar omáčkou',
    description: 'Hranolky zalité cheddar omáčkou.',
    price: 76,
    category: 'prilohy',
  },
  {
    id: 'jalapenos',
    name: 'Jalapeños',
    description: 'Pikantní jalapeños.',
    price: 26,
    category: 'prilohy',
  },
  {
    id: 'cibulove-krouzky',
    name: 'Cibulové kroužky 5 ks',
    description: 'Křupavé cibulové kroužky.',
    price: 65,
    category: 'prilohy',
    image: '/food/cibulove-krouzky.jpg',
  },
  {
    id: 'mozzarella-stick',
    name: 'Mozzarella Stick 5 ks',
    description: 'Smažené mozzarella tyčinky.',
    price: 69,
    category: 'prilohy',
    image: '/food/mozzarella-stick.jpg',
  },
  {
    id: 'cheddar-nugety',
    name: 'Cheddar pikant nugety černé 5 ks',
    description: 'Pikantní cheddar nugety.',
    price: 89,
    category: 'prilohy',
    image: '/food/cheddar-nugety-cerne.jpg',
  },

  // OMÁČKY
  {
    id: 'omacka-chipotle',
    name: 'Chipotle omáčka',
    description: 'Krémová chipotle omáčka.',
    price: 19,
    category: 'omacky',
    image: '/food/omacka-chipotle.jpg',
  },
  {
    id: 'omacka-mayo',
    name: 'Majonéza',
    description: 'Klasická majonéza.',
    price: 19,
    category: 'omacky',
    image: '/food/omacka-mayo.jpg',
  },
  {
    id: 'omacka-brusinky',
    name: 'Brusinková omáčka',
    description: 'Sladko-kyselá brusinková omáčka.',
    price: 19,
    category: 'omacky',
    image: '/food/omacka-brusinky.jpg',
  },
  {
    id: 'omacka-bbq',
    name: 'BBQ omáčka',
    description: 'Kouřová BBQ omáčka.',
    price: 19,
    category: 'omacky',
    image: '/food/omacka-bbq.jpg',
  },
  {
    id: 'omacka-cesnekova',
    name: 'Česneková omáčka',
    description: 'Krémová česneková omáčka.',
    price: 19,
    category: 'omacky',
    image: '/food/omacka-cesnekova.jpg',
  },
]
