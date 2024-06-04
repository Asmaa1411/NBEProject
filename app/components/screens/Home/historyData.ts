export interface HistoryItem {
  id: number;
  image: any; // Replace 'any' with the appropriate type for your image source
  subtitle: string;
  date: string;
  price: string;
}

export const historyData: HistoryItem[] = [
  {
    id: 1,
    image: require('../../assets/carrefour.png'),
    subtitle: 'Carrefour',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 2,
    image: require('../../assets/amazon.png'),
    subtitle: 'Amazon',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 3,
    image: require('../../assets/ikea.png'),
    subtitle: 'Ikea',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 4,
    image: require('../../assets/jumia.png'),
    subtitle: 'Jumia',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 5,
    image: require('../../assets/hala.png'),
    subtitle: 'Hala',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 6,
    image: require('../../assets/carrefour.png'),
    subtitle: 'Carrefour',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 7,
    image: require('../../assets/ikea.png'),
    subtitle: 'Ikea',
    date: '15-12-2021',
    price: '$123.45',
  },
  {
    id: 8,
    image: require('../../assets/carrefour.png'),
    subtitle: 'Carrefour',
    date: '15-12-2021',
    price: '$123.45',
  },
  // Add more history items here
];
