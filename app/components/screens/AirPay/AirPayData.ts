export type creditCard = {
  id: string;
  balance: string;
  number: string;
  holder: string;
  expires: string;
  cvv: string;
};

export const creditCards: creditCard[] = [
  {
    id: '1',
    balance: '$125,381.15',
    number: '**** **** **** 6506',
    holder: 'ASMAA SAAD',
    expires: '08/25',
    cvv: '352',
  },
  {
    id: '2',
    balance: '$8,432.21',
    number: '**** **** **** 1234',
    holder: 'JOHN DOE',
    expires: '12/24',
    cvv: '123',
  },
  // Add more cards as needed
];
