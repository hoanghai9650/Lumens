import ImagePath from '../utils/ImagePath';

const listData = [
  {
    zoneName: 'Petrol',
    content: [
      {
        image: ImagePath.icon_petrol,
        coins: 15,
        description:
          '50% discount for every $100 top-up on your Shell Petrol Card',
      },
      {
        image: ImagePath.icon_petrol,
        coins: 1000,
        description: '70% discount top-up on your Shell Petrol Card',
      },
    ],
  },
  {
    zoneName: 'Retail Rebate',
    content: [
      {
        image: ImagePath.icon_rental,
        coins: 20,
        description: 'Get $20 Rental rebate',
      },
      {
        image: ImagePath.icon_rental,
        coins: 15,
        description: 'Get $500 Rental rebate',
      },
    ],
  },
  {
    zoneName: 'Food and Beverage',
    content: [
      {
        image: ImagePath.icon_fb,
        coins: 25,
        description: 'NTUC Fairprice $50 Voucher',
      },
      {
        image: ImagePath.icon_fb,
        coins: 5,
        description: 'Free Cold Stone Sundae at any flavour!',
      },
    ],
  },
];

export default listData;
