export async function GET(request) {
  const features = [
    {
      id: 1,
      img: 'assets/images/quality.png',
      title: 'High Quality',
      description: 'crafted from top materials',
    },
    {
      id: 2,
      img: 'assets/images/warranty.png',
      title: 'Warrany Protection',
      description: 'Over 2 years',
    },
    {
      id: 3,
      img: 'assets/images/shipping.png',
      title: 'Free Shipping',
      description: 'Order over 150 $',
    },
    {
      id: 4,
      img: 'assets/images/call.png',
      title: '24 / 7 Support',
      description: 'Dedicated support',
    },
  ];

  return new Response(JSON.stringify(features));
}
