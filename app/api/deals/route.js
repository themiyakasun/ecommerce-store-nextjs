export async function GET(request) {
  const deals = [
    { id: 1, img: '/assets/images/carousel_1.png' },
    { id: 2, img: '/assets/images/carousel_2.png' },
    { id: 3, img: '/assets/images/carousel_3.png' },
  ];

  return new Response(JSON.stringify(deals));
}
