export async function GET(request) {
  const gallery = [
    {
      id: 1,
      img: 'assets/images/instagram_1.png',
    },
    {
      id: 2,
      img: 'assets/images/instagram_2.png',
    },
    {
      id: 3,
      img: '/assets/images/instagram_3.png',
    },
    {
      id: 4,
      img: 'assets/images/instagram_4.png',
    },
    {
      id: 5,
      img: 'assets/images/instagram_5.png',
    },
    {
      id: 6,
      img: 'assets/images/instagram_6.png',
    },
    {
      id: 7,
      img: 'assets/images/instagram_7.png',
    },
  ];

  return new Response(JSON.stringify(gallery));
}
