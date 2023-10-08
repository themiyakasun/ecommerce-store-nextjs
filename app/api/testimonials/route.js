export async function GET(request) {
  const testimonials = [
    {
      id: 1,
      img: 'assets/images/testimonial_1.png',
      name: 'James K.',
      position: 'Traveler',
      comment:
        "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
    },
    {
      id: 2,
      img: 'assets/images/testimonial_2.png',
      name: 'Suzan B.',
      position: 'UI Designer',
      comment:
        "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
    },
    {
      id: 3,
      img: 'assets/images/testimonial_3.png',
      name: 'Megen W.',
      position: 'UI Designer',
      comment:
        'Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.',
    },
  ];

  return new Response(JSON.stringify(testimonials));
}
