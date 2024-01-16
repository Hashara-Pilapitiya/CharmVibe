// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  // import images
  import Background from '../src/Assets/background.avif';
  import Feature1 from '../src/Assets/feature1.avif';
  import Feature2 from '../src/Assets/feature2.jpg';
  import Bib from '../src/Assets/bib.jpg';
  import Chain from '../src/Assets/chain.jpg';
  import Charms from '../src/Assets/charms.avif';
  import Choker from '../src/Assets/choker.jpg';
  import Collar from '../src/Assets/collar.avif';
  import Festoon from '../src/Assets/festoon.avif';
  import Lariat from '../src/Assets/lariat.avif';
  import Lavaliere from '../src/Assets/lavaliere.avif'; 
  import Locket from '../src/Assets/locket.avif';
  import Matinee from '../src/Assets/matinee.avif';
  import Neck from '../src/Assets/neck.avif';
  import Negligee from '../src/Assets/negligee.avif';
  import Opera from '../src/Assets/opera.avif';
  import Pendant from '../src/Assets/pendant.avif';
  import Plastron from '../src/Assets/plastron.jpg';
  import Princess from '../src/Assets/prinecess.avif';
  import Riviere from '../src/Assets/riviere.avif';
  import Sautoir from '../src/Assets/sautoir.jpg';
  import Thread from '../src/Assets/thread.avif';
  import Torque from '../src/Assets/torque.avif';
  import Twisted from '../src/Assets/twisted.jpg';
  import Test from '../src/Assets/test.avif';	
  import Man1 from '../src/Assets/man1.avif';
  import Man2 from '../src/Assets/man2.avif';
  import Woman1 from '../src/Assets/woman1.avif';
  import Woman2 from '../src/Assets/woman2.avif';
  import Woman3 from '../src/Assets/woman3.avif';
  
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'features',
      href: 'features',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  export const hero = {
    title: 'Luxury Necklaces for Every Occasion',
    subtitle:
      'Unveiling a Collection of Exquisite Necklaces Crafted to Elevate Your Style.',
    buttonText: 'Shop Now',
  };
  
  export const stats = [
    {
      value: '10',
      text: 'Year Experience',
    },
    {
      value: '3',
      text: 'Opened in the country',
    },
    {
      value: '10k+',
      text: 'Necklace sold',
    },
    {
      value: '230+',
      text: 'Variant Necklace',
    },
  ];
  
  export const features = {
    image: <Feature1 />,
    title: 'Elevate Your Style with Captivating Necklaces',
    subtitle:
      'Our necklaces are designed for versatility, seamlessly transitioning from day to night, making them the perfect accessory for any outfit.',
    buttonText: 'Show Now',
    items: [
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Quality Materials',
        subtitle:
          'Our necklaces are made from high-quality materials, including [specify materials], to guarantee durability and a luxurious feel.',
      },
      {
        icon: <IoIosCheckmarkCircle />,
        title: 'Variety of Styles',
        subtitle:
          "Explore a diverse range of styles, from classic and elegant to trendy and modern, ensuring there's a perfect necklace for every taste and occasion.",
      },
    ],
    feature2: {
      image: <Feature2 />,
      title: 'The Best Furniture Manufacturer of your choice',
      subtitle:
        'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
    },
  };
  
  export const newInStore = {
    title: 'New In Store Now',
    subtitle: 'Get the latest items immediately with promo prices',
    link: 'Check all',
    icon: <IoIosArrowRoundForward />,
    products: [
      {
        name: 'Pendant Necklace',
        image: <Pendant />,
      },
      {
        name: 'Choker',
        image: <Choker />,
      },
      {
        name: 'Collar Necklace',
        image: <Collar />,
      },
      {
        name: 'Charms',
        image: <Charms />,
      },
      {
        name: 'Opera',
        image: <Opera />,
      },
    ],
  };
  
  export const products = {
    title: 'All Products',
    subtitle:
      'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
    pages: [
      {
        productList: [
          {
            image: <Matinee />,
            icon: <IoMdAddCircle />,
            name: 'Matinee',
            price: '$ 75',
            oldPrice: '$ 82',
          },
          {
            image: <Locket />,
            icon: <IoMdAddCircle />,
            name: 'Locket',
            price: '$ 50',
            oldPrice: '$ 70',
          },
          {
            image: <Lariat />,
            icon: <IoMdAddCircle />,
            name: 'Lariat',
            price: '$ 105',
            oldPrice: '$ 120',
          },
          {
            image: <Princess />,
            icon: <IoMdAddCircle />,
            name: 'Princess',
            price: '$ 75',
            oldPrice: '$ 82',
          },
          {
            image: <Chain />,
            icon: <IoMdAddCircle />,
            name: 'Chain',
            price: '$ 200',
            oldPrice: '$ 210',
          },
          {
            image: <Lavaliere />,
            icon: <IoMdAddCircle />,
            name: 'Lavaliere',
            price: '$ 45',
            oldPrice: '$ 50',
          },
          {
            image: <Negligee />,
            icon: <IoMdAddCircle />,
            name: 'Negligee',
            price: '$ 320',
            oldPrice: '$ 325',
          },
          {
            image: <Riviere />,
            icon: <IoMdAddCircle />,
            name: 'Riviere',
            price: '$ 225',
            oldPrice: '$ 240',
          },
          {
            image: <Festoon />,
            icon: <IoMdAddCircle />,
            name: 'Festoon',
            price: '$ 105',
            oldPrice: '$ 120',
          },
          {
            image: <Thread />,
            icon: <IoMdAddCircle />,
            name: 'Thread',
            price: '$ 75',
            oldPrice: '$ 82',
          },
          {
            image: <Bib />,
            icon: <IoMdAddCircle />,
            name: 'Bib',
            price: '$ 65',
            oldPrice: '$ 72',
          },
          {
            image: <Plastron />,
            icon: <IoMdAddCircle />,
            name: 'Plastron',
            price: '$ 70',
            oldPrice: '$ 82',
          },
          {
            image: <Sautoir />,
            icon: <IoMdAddCircle />,
            name: 'Sautoir',
            price: '$ 75',
            oldPrice: '$ 82',
          },
          {
            image: <Torque />,
            icon: <IoMdAddCircle />,
            name: 'Torque',
            price: '$ 70',
            oldPrice: '$ 86',
          },
          {
            image: <Pendant />,
            icon: <IoMdAddCircle />,
            name: 'Pendant Necklace',
            price: '$ 80',
            oldPrice: '$ 90',
          },
          {
            image: <Choker />,
            icon: <IoMdAddCircle />,
            name: 'Choker',
            price: '$ 70',
            oldPrice: '$ 80',
          },
          {
            image: <Collar />,
            icon: <IoMdAddCircle />,
            name: 'Collar Necklace',
            price: '$ 65',
            oldPrice: '$ 72',
          },
          {
            image: <Charms />,
            icon: <IoMdAddCircle />,
            name: 'Charms',
            price: '$ 80',
            oldPrice: '$ 90',
          },
          {
            image: <Opera />,
            icon: <IoMdAddCircle />,
            name: 'Opera',
            price: '$ 70',
            oldPrice: '$ 85',
          },
          {
            image: <Twisted />,
            icon: <IoMdAddCircle />,
            name: 'Twisted',
            price: '$ 80',
            oldPrice: '$ 85',
          },
        ],
      },
      {
        productList: [
            {
                image: <Matinee />,
                icon: <IoMdAddCircle />,
                name: 'Matinee',
                price: '$ 75',
                oldPrice: '$ 82',
              },
              {
                image: <Locket />,
                icon: <IoMdAddCircle />,
                name: 'Locket',
                price: '$ 50',
                oldPrice: '$ 70',
              },
              {
                image: <Lariat />,
                icon: <IoMdAddCircle />,
                name: 'Lariat',
                price: '$ 105',
                oldPrice: '$ 120',
              },
              {
                image: <Princess />,
                icon: <IoMdAddCircle />,
                name: 'Princess',
                price: '$ 75',
                oldPrice: '$ 82',
              },
              {
                image: <Chain />,
                icon: <IoMdAddCircle />,
                name: 'Chain',
                price: '$ 200',
                oldPrice: '$ 210',
              },
              {
                image: <Lavaliere />,
                icon: <IoMdAddCircle />,
                name: 'Lavaliere',
                price: '$ 45',
                oldPrice: '$ 50',
              },
              {
                image: <Negligee />,
                icon: <IoMdAddCircle />,
                name: 'Negligee',
                price: '$ 320',
                oldPrice: '$ 325',
              },
              {
                image: <Riviere />,
                icon: <IoMdAddCircle />,
                name: 'Riviere',
                price: '$ 225',
                oldPrice: '$ 240',
              },
              {
                image: <Festoon />,
                icon: <IoMdAddCircle />,
                name: 'Festoon',
                price: '$ 105',
                oldPrice: '$ 120',
              },
              {
                image: <Thread />,
                icon: <IoMdAddCircle />,
                name: 'Thread',
                price: '$ 75',
                oldPrice: '$ 82',
              },
              {
                image: <Bib />,
                icon: <IoMdAddCircle />,
                name: 'Bib',
                price: '$ 65',
                oldPrice: '$ 72',
              },
              {
                image: <Plastron />,
                icon: <IoMdAddCircle />,
                name: 'Plastron',
                price: '$ 70',
                oldPrice: '$ 82',
              },
              {
                image: <Sautoir />,
                icon: <IoMdAddCircle />,
                name: 'Sautoir',
                price: '$ 75',
                oldPrice: '$ 82',
              },
              {
                image: <Torque />,
                icon: <IoMdAddCircle />,
                name: 'Torque',
                price: '$ 70',
                oldPrice: '$ 86',
              },
              {
                image: <Pendant />,
                icon: <IoMdAddCircle />,
                name: 'Pendant Necklace',
                price: '$ 80',
                oldPrice: '$ 90',
              },
              {
                image: <Choker />,
                icon: <IoMdAddCircle />,
                name: 'Choker',
                price: '$ 70',
                oldPrice: '$ 80',
              },
              {
                image: <Collar />,
                icon: <IoMdAddCircle />,
                name: 'Collar Necklace',
                price: '$ 65',
                oldPrice: '$ 72',
              },
              {
                image: <Charms />,
                icon: <IoMdAddCircle />,
                name: 'Charms',
                price: '$ 80',
                oldPrice: '$ 90',
              },
              {
                image: <Opera />,
                icon: <IoMdAddCircle />,
                name: 'Opera',
                price: '$ 70',
                oldPrice: '$ 85',
              },
              {
                image: <Twisted />,
                icon: <IoMdAddCircle />,
                name: 'Twisted',
                price: '$ 80',
                oldPrice: '$ 85',
              },
        ],
      },
    ],
  };
  
  export const testimonial = {
    title: 'What people are saying about us',
    image: <Test />,
    persons: [
      {
        avatar: <Man1 />,
        name: 'Josh Smith',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
      },
      {
        avatar: <Man2 />,
        name: 'Brandi Johns',
        occupation: 'Fashion Blogger',
        message:
          '“CharmVibe is my go-to destination for statement necklaces! Their unique designs and quality craftsmanship always add the perfect touch to my outfits.”',
      },
      {
        avatar: <Woman1 />,
        name: 'Paula Pfeffer',
        occupation: 'Corporate Professional',
        message:
          '“I love the professionalism that CharmVibe necklaces bring to my work attire. The elegant and sophisticated designs seamlessly blend with my corporate wardrobe, making me feel confident and polished.”',
      },
      {
        avatar: <Woman2 />,
        name: 'Sam Kal',
        occupation: 'Artisan Jewelry Maker',
        message:
          '“As a fellow jewelry artisan, I appreciate the artistry behind CharmVibes creations. The attention to detail and the use of quality materials showcase a commitment to the craft that resonates with me.”',
      },
      {
        avatar: <Woman3 />,
        name: 'Aan Smith',
        occupation: 'Event Planner',
        message:
          '“CharmVibe is my secret weapon for sourcing elegant and eye-catching necklaces for my clients. Their diverse selection allows me to find the perfect piece for any event, from weddings to corporate gatherings.”',
      },
    ],
  };
  
  export const newsletter = {
    title: 'Get more discount Off your order',
    subtitle: 'Join our mailing list',
    placeholder: 'Your email address',
    buttonText: 'Shop Now',
  };
  
  export const footer = {
    social: [
      {
        icon: <IoLogoYoutube />,
        href: '#',
      },
      {
        icon: <IoLogoInstagram />,
        href: '#',
      },
      {
        icon: <IoLogoGithub />,
        href: '#',
      },
      {
        icon: <IoLogoFacebook />,
        href: '#',
      },
    ],
    copyright: 'CharmVibe 2024 - All Rights Reserved.',
  };