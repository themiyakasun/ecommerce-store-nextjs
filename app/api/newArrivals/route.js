export async function GET(request) {
  const newArrivals = [
    {
      id: 1,
      img: 'assets/images/product_1.png',
      title: 'Shiny Dress',
      brand: 'Al Karam',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
    },
    {
      id: 2,
      img: 'assets/images/product_2.png',
      title: 'Long Dress',
      brand: 'Al Karam',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
    },
    {
      id: 3,
      img: 'assets/images/product_3.png',
      title: 'Full Sweater',
      brand: 'Al Karam',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
    },
    {
      id: 4,
      img: 'assets/images/product_4.png',
      title: 'White Dress',
      brand: 'Al Karam',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
    },
    {
      id: 5,
      img: 'assets/images/product_5.png',
      title: 'Colorful Dress',
      brand: 'Al Karam',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
    },
    {
      id: 6,
      img: 'assets/images/product_6.png',
      title: 'White Shirt',
      brand: 'Al Karam',
      reviews: '(4.1k) Customer Reviews',
      price: '$95.50',
    },
  ];

  return new Response(JSON.stringify(newArrivals));
}
