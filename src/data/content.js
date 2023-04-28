import bannerBackground from "../assets/images/home-banner-background.png";
import bannerImage from "../assets/images/home-banner-image.png";
import aboutBackground from "../assets/images/about-background.png";
import aboutImage from "../assets/images/about-image.png";
import profile1 from "../assets/images/profiles/profile-1.jpg";
import profile2 from "../assets/images/profiles/profile-2.jpg";
import profile3 from "../assets/images/profiles/profile-3.jpg";

export const navData = [
  { name: "HOME", href: "home", offset: -100 },
  { name: "ABOUT", href: "about", offset: -100 },
  { name: "TESTIMONIALS", href: "testimonial", offset: 0 },
  { name: "CONTACT", href: "contact", offset: 0 },
];

export const homeData = {
  title: "Chowvi",
  pretitle: "Your Fried Rice Delivered Hot & Fresh",
  subtitle:
    "You'll love our delicious fried rice. Order now with all your favorite toppings, and we'll deliver it hot and fresh to your door.",
  btnText: "Order Now",
  background: bannerBackground,
  image: bannerImage,
};

export const aboutData = {
  title: "About Us",
  pretitle: "A Complete And Delicious Meal For You",
  subtitle:
    "Our fried rice is made with premium ingredients, and it's the perfect meal for your family. The best part? It comes with a few different options for garnishes that you can add to make it even more delicious.",
  btnText: "Watch Video",
  background: aboutBackground,
  image: aboutImage,
};

const testimonial = [
  {
    image: profile2,
    name: "John Doe",
    testimony:
      "Everyone at the table loved it! The combination of flavors in this fried rice with toppings is just incredible. It's my new favorite comfort food.",
  },
  {
    image: profile1,
    name: "Nikki Lee",
    testimony:
      "This fried rice is absolutely delicious! I love how the flavors of the toppings complement the rice perfectly. This is my new go-to meal. Highly recommend!",
  },
  {
    image: profile3,
    name: "Ellen Smith",
    testimony:
      "I'm usually not a fan of fried rice, but the toppings on this one made it so much better. I'm so impressed! I'll definitely be ordering it again.",
  },
];

export const testimonialData = {
  title: "Our Testimonial",
  pretitle: "What They Are Saying",
  subtitle:
    "We want to satisfy customers with our delicious fried rice, which has a distinct and unique taste.",
  testimonial: testimonial,
};

export const contactData = {
  title: "Contact Us",
  pretitle: "Have Question In Mind? Let Us Help You",
};

export const footerData = {
  text: "Made with high-quality ingredients and cooked to perfection, our fried rice is bursting with flavor and always served hot and fresh.",
  copyright: "Copyright © 2023 Chowvi. All rights reserved.",
  developer: "Developed by Melchor Bendanillo Callos",
};
