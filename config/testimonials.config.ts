export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Shanta Murthy",
    location: "Kollam, Kerala",
    rating: 5,
    comment: "Great product, service and pricing. I've been dealing with Saroop for last many years. And will be Going for a long time to come. They always keep their customer on priority and help them to get the best product availabe.",
    image: "/images/testimonials/testimonial-1.jpg",
  },
  {
    id: "2",
    name: "Mohd Salem",
    location: "Dubai, UAE",
    rating: 5,
    comment: "I have been a customer of Saroop Industries since they started. Since the beginning, they have shown a consistent high level of customer service, competitive parts pricing and excellent delivery service.",
    image: "/images/testimonials/testimonial-2.jpg",
  },
  {
    id: "3",
    name: "Ashok Sharma",
    location: "New Delhi",
    rating: 5,
    comment: "I get quality parts for a good price and they usually are readily available. Usually if no one else can get me the parts they can. I have seen over the years the ways that they are trying to be the go to shop with the best quality parts.",
    image: "/images/testimonials/testimonial-3.jpg",
  },
];