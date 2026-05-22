export type MenuCategory = 'wrapy' | 'bowls' | 'fries' | 'wings'

export type MenuItem = {
  id: string
  name: string
  description: string
  category: MenuCategory
}

export const MENU_CATEGORIES: { id: MenuCategory; label: string }[] = [
  { id: 'wrapy',  label: 'Wrapy'  },
  { id: 'bowls',  label: 'Bowls'  },
  { id: 'fries',  label: 'Fries'  },
  { id: 'wings',  label: 'Wings'  },
]

export const MENU_ITEMS: MenuItem[] = [
  // Wrapy
  {
    id: 'classic-wrapsy',
    name: 'Classic WRAPSY',
    description: 'Kuřecí, římský salát, rajče, cheddar, WRAPSY omáčka',
    category: 'wrapy',
  },
  {
    id: 'spicy-ranch',
    name: 'Spicy Ranch',
    description: 'Kuřecí, jalapeños, červené zelí, ranch',
    category: 'wrapy',
  },
  {
    id: 'bbq-beef',
    name: 'BBQ Beef',
    description: 'Hovězí, karamelizovaná cibulka, pickles, BBQ omáčka',
    category: 'wrapy',
  },
  {
    id: 'veggie',
    name: 'Veggie',
    description: 'Falafel, hummus, grilovaná zelenina, tahini',
    category: 'wrapy',
  },
  // Bowls
  {
    id: 'power-bowl',
    name: 'Power Bowl',
    description: 'Kuřecí, rýže, avokádo, corn, fazole, lime dressing',
    category: 'bowls',
  },
  {
    id: 'spicy-bowl',
    name: 'Spicy Bowl',
    description: 'Hovězí, rýže, jalapeños, sour cream, salsa',
    category: 'bowls',
  },
  {
    id: 'veggie-bowl',
    name: 'Veggie Bowl',
    description: 'Falafel, quinoa, grilovaná zelenina, tahini',
    category: 'bowls',
  },
  {
    id: 'teriyaki-bowl',
    name: 'Teriyaki Bowl',
    description: 'Kuřecí, rýže, teriyaki omáčka, edamame, sezam',
    category: 'bowls',
  },
  // Fries
  {
    id: 'classic-fries',
    name: 'Classic',
    description: 'Křupavé hranolky, sůl',
    category: 'fries',
  },
  {
    id: 'loaded-fries',
    name: 'Loaded',
    description: 'Sýrová omáčka, jalapeños, cibulka',
    category: 'fries',
  },
  {
    id: 'truffle-fries',
    name: 'Truffle',
    description: 'Lanýžový olej, parmazán, pažitka',
    category: 'fries',
  },
  {
    id: 'spicy-fries',
    name: 'Spicy',
    description: 'Chilli koření, sriracha mayo',
    category: 'fries',
  },
  // Wings
  {
    id: 'buffalo-wings',
    name: 'Buffalo',
    description: 'Klasické ostré, blue cheese dip (6 ks)',
    category: 'wings',
  },
  {
    id: 'honey-garlic-wings',
    name: 'Honey Garlic',
    description: 'Sladko-česnekové, sezam (6 ks)',
    category: 'wings',
  },
  {
    id: 'bbq-smoke-wings',
    name: 'BBQ Smoke',
    description: 'Kouřové BBQ, pickles (6 ks)',
    category: 'wings',
  },
  {
    id: 'lemon-pepper-wings',
    name: 'Lemon Pepper',
    description: 'Citronový pepř, máslová glazura (6 ks)',
    category: 'wings',
  },
]
