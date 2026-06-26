export type MenuCategory = 'wrapy' | 'pizzy' | 'bowls' | 'kyble' | 'prilohy'

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
  { id: 'wrapy',   label: 'Wrapy',       emoji: '🌯' },
  { id: 'pizzy',   label: 'Pizzy 40 cm', emoji: '🍕' },
  { id: 'bowls',   label: 'Bowls',       emoji: '🥣' },
  { id: 'kyble',   label: 'Kyble',       emoji: '🍗' },
  { id: 'prilohy', label: 'Přílohy',     emoji: '🍟' },
]

export const MENU_ITEMS: MenuItem[] = [
  // WRAPY
  {
    id: 'cheddar-bbq-strips',
    name: 'Cheddar BBQ Strips',
    description: 'Šťavnaté kuřecí stripsy, cheddar plátky, cheddar omáčka, chipotle omáčka, BBQ omáčka, smažená cibulka a ledový salát.',
    price: 189,
    category: 'wrapy',
    image: '/food/cheddar-bbq-strips.jpg',
  },
  {
    id: 'korean-strips',
    name: 'Korean Strips',
    description: 'Kuřecí stripsy v korejské omáčce, sezam, koriandr, červená cibule, klasická majonéza, cheddar plátky a ledový salát.',
    price: 189,
    category: 'wrapy',
    image: '/food/korean-strips.jpg',
  },
  {
    id: 'beef-mango',
    name: 'Beef Mango',
    description: 'Trhané hovězí maso v adobo omáčce, černé fazole, guacamole, chipotle omáčka, cheddar plátky, mango salsa a ledový salát.',
    price: 219,
    category: 'wrapy',
    image: '/food/beef-mango.jpg',
  },
  {
    id: 'veggie-fresh',
    name: 'Veggie Fresh',
    description: 'Cizrna, guacamole, cheddar plátky, čerstvá cibule, klasická majonéza, mango salsa a ledový salát.',
    price: 189,
    category: 'wrapy',
  },
  {
    id: 'golden-cheddar-strips',
    name: 'Golden Cheddar Strips',
    description: 'Křupavé zlaté kuřecí stripsy, cheddar plátky, cheddar omáčka, smažená cibulka a ledový salát.',
    price: 159,
    category: 'wrapy',
    image: '/food/golden-cheddar-strips.jpg',
  },
  {
    id: 'big-mac-kebab',
    name: 'Big Mac Kebab',
    description: 'Kuřecí kebab, cheddar plátky, červená cibule, kyselá okurka, Big Mac majonéza, smažená cibulka a ledový salát.',
    price: 189,
    category: 'wrapy',
    image: '/food/big-mac-kebab.jpg',
  },
  {
    id: 'inferno-beef',
    name: 'Inferno Beef',
    description: 'Trhané hovězí maso, jalapeños, chipotle omáčka, sriracha mayo, červená cibule, smažená cibulka, chilli flakes a ledový salát.',
    price: 219,
    category: 'wrapy',
    image: '/food/inferno-beef.jpg',
    hot: true,
  },
  {
    id: 'loaded-fries-wrap',
    name: 'Loaded Fries Wrap',
    description: 'Kuřecí kebab, hranolky, cheddar omáčka, chipotle omáčka, smažená cibulka, čerstvá cibule, cheddar plátky a ledový salát.',
    price: 189,
    category: 'wrapy',
  },
  // PIZZY
  {
    id: 'bbq-beef-pizza',
    name: 'BBQ Beef Pizza',
    description: 'Sugo, mozzarella, trhané hovězí BBQ, cheddar, červená cibule a BBQ omáčka.',
    price: 239,
    category: 'pizzy',
    star: true,
  },
  {
    id: 'chicken-strips-pizza',
    name: 'Chicken Strips Pizza',
    description: 'Sugo, mozzarella, kuřecí stripsy, cheddar, jarní cibulka a cheddar omáčka.',
    price: 229,
    category: 'pizzy',
    star: true,
  },
  {
    id: 'kebab-pizza',
    name: 'Kebab Pizza',
    description: 'Sugo, mozzarella, kuřecí kebab, červená cibule, jalapeños a česnekový dip po upečení.',
    price: 219,
    category: 'pizzy',
    star: true,
  },
  {
    id: 'spicy-chipotle-pizza',
    name: 'Spicy Chipotle Pizza',
    description: 'Sugo, mozzarella, pikantní salám, jalapeños, cheddar a chipotle omáčka.',
    price: 229,
    category: 'pizzy',
    hot: true,
  },
  // BOWLS
  {
    id: 'classic-fries-bowl',
    name: 'Classic Fries Bowl',
    description: 'Hranolky, kuřecí stripsy, cheddar omáčka, chipotle omáčka, smažená cibulka a ledový salát.',
    price: 225,
    category: 'bowls',
  },
  {
    id: 'bbq-beef-rice-bowl',
    name: 'BBQ Beef Rice Bowl',
    description: 'Jasmínová rýže, trhané hovězí BBQ, černé fazole, červená cibule, cheddar omáčka, BBQ omáčka a jarní cibulka.',
    price: 249,
    category: 'bowls',
  },
  {
    id: 'mango-beef-rice-bowl',
    name: 'Mango Beef Rice Bowl',
    description: 'Jasmínová rýže, trhané hovězí maso, guacamole, mango salsa, černé fazole, chipotle omáčka a čerstvý koriandr.',
    price: 249,
    category: 'bowls',
  },
  // KYBLE
  {
    id: 'kybl-strips',
    name: 'Kybl Strips 9 ks',
    description: '9× kuřecí strips, hranolky, omáčka dle výběru.',
    price: 269,
    category: 'kyble',
  },
  {
    id: 'kybl-kridla',
    name: 'Kybl Křídla 500 g',
    description: 'Kuřecí křídla, hranolky, omáčka dle výběru.',
    price: 269,
    category: 'kyble',
  },
  // PŘÍLOHY
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
    name: 'Cheddar pikant nugety 5 ks',
    description: 'Pikantní cheddar nugety.',
    price: 89,
    category: 'prilohy',
    image: '/food/cheddar-nugety-cerne.jpg',
  },
  {
    id: 'kureci-popcorn',
    name: 'Kuřecí popcorn',
    description: 'Křupavý kuřecí popcorn.',
    price: 65,
    category: 'prilohy',
    image: '/food/kureci-popcorn.jpg',
  },
]
