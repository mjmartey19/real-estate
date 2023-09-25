import {
  logo,
  profile1,
  profile2,
  profile3,
  airbnb,
  cisco,
  ebay,
  microsoft,
  uber,
  menu,
  close,
  home,
  user,
  hand,
  box,
  search,
  payment_method,
  star_filled,
  star_unfilled,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  h8,
  h9,
  h10,
} from "../assets";

const icon = "../assets/icons/user.svg";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const Hero = [
  {
    icon: user,
    title: "Want to sell a home in Besnik",
    description: "Call the broker for a quote!",
  },
  {
    icon: home,
    title: "What is the value of your home?",
    description: "Calculate the estimated value!",
  },
];

export const works = [
  {
    color: "bg-violet-500",
    icon: search,
    title: "Research Suburbs",
    description:
      "Get started swiftly & easily by importing a  demo of your choice in a single click.",
  },
  {
    color: "bg-cyan-300",
    icon: hand,
    title: "Instant Valuation",
    description:
      "Over 30 high quality profession designed re-built website concepts to choose from.",
  },
  {
    color: "bg-fuchsia-300",
    icon: box,
    title: "Track Property",
    description:
      "Build your website using fully visual interface, using our revolutionary page builder.",
  },
];

export const countries = [
  {
    id: 1,
    name: "United States",
    images: [h2, h3, h4, h5, h6, h7],
  },
  {
    id: 2,
    name: "Canada",
    images: [h1, h6, h3, h2, h4, h5],
  },
  {
    id: 3,
    name: "United Kingdom",
    images: [h4, h2, h5, h6, h7, h1],
  },
  {
    id: 4,
    name: "Mexico",
    images: [h3, h2, h1, h5, h6, h7],
  },
];

export const testimonials = [
  {
    testimonial:
      "Vast Conference is second to none. Lorem ipsum dolor sit amet, vnbvbv consectetur adipiscing elit. Congue pharetra non.",
    name: "Divine Akwasi",
    position: "CTO @Stacksy",
    image: profile1,
  },
  {
    testimonial:
      "Vast Conference is second to none. Lorem ipsum dolor sit amet, vnbvbv consectetur adipiscing elit. Congue pharetra non.",
    name: "Natalie Hernandez",
    position: "CEO @Stacksy",
    image: profile2,
  },
  {
    testimonial:
      "Vast Conference is second to none. Lorem ipsum dolor sit amet, vnbvbv consectetur adipiscing elit. Congue pharetra non.",
    name: "Natalie Hernandez",
    position: "Manager @Stacksy",
    image: profile3,
  },
];

export const properties = [
  {
    name: "Residential Property",
    images:[
              {
                house: h7,
                featured: true,
                threeD: true,
              },
              {
                house: h8,
                featured: true,
                threeD: true,
              },
              {
                house: h9,
                featured: true,
                threeD: false,
              },
            
            ],
  },
  {
    name: "Commercial Property",
    images:[
              {
                house: h6,
                featured: true,
                threeD: true,
              },
              {
                house: h10,
                featured: true,
                threeD: false,
              },
              {
                house: h5,
                featured: true,
                threeD: true,
              },
            
            ],
  },
  {
    name: "Agriculture Property",
    images: [
      {
        house: h9,
        featured: true,
        threeD: true,
      },
      {
        house: h5,
        featured: true,
        threeD: false,
      },
      {
        house: h4,
        featured: true,
        threeD: false,
      },
    
    ],
  },
  {
    name: "Industrial Property",
    images: [
              {
                house: h9,
                featured: true,
                threeD: false,
              },
              {
                house: h10,
                featured: true,
                threeD: true,
              },
              {
                house: h7,
                featured: true,
                threeD: true,
              },
            
            ],
  },
];

export const company = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
  {
    id: "about",
    title: "About",
  },
];

export const connects = [
  {
    connect: "Our Community",
  },
  {
    connect: "Facebook",
  },
  {
    connect: "Blog",
  },
  {
    connect: "Contact Us",
  },
];

export const experts = [
  {
    expert: "Apply as an Expert",
  },
  {
    expert: "Vetting Guidelines",
  },
  {
    expert: "Expert Sign In",
  },
];
