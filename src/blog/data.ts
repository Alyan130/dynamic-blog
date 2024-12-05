 interface Blog {
    id:number;
    imageSrc: string;
    altText: string;
    title: string;
    description: string;

  }
  
 const blogs: Blog[] = [
    {
      id: 1,
      imageSrc: "/_b881496b-0c5d-4941-a64f-3b9645379d53.jpeg",
      altText: "pic1",
      title: `"Wanderlust Diaries: Exploring Hidden Gems in Europe"`,
      description: "Join us as we traverse the enchanting landscapes of Europe, uncovering hidden gems often overlooked by the average traveler...",
    },
    {
      id: 2,
      imageSrc: "/2.jpeg",
      altText: "pic2",
      title: `"Urban Adventures: 48 Hours in Tokyo"`,
      description: "Tokyo is a city that never sleeps, and neither will you as you embark on a whirlwind 48-hour adventure through Japan's bustling capital...",
    
    },
    {
      id: 3,
      imageSrc: "/3.jpeg",
      altText: "pic3",
      title: `"Trekking the Himalayas: A Journey to the Roof of the World"`,
      description: "Join us as we trek through the breathtaking Himalayas, experiencing the beauty of the world's highest mountain range...",
      
    },
    {
      id: 4,
      imageSrc: "/4.jpeg",
      altText: "pic4",
      title: `"Savoring the World: A Foodie’s Guide to Southeast Asia"`,
      description: "If you believe that the best way to experience a culture is through its food, then this blog is for you. Southeast Asia is a melting pot of flavors...",
      
    },
    {
      id: 5,
      imageSrc: "/5.jpeg",
      altText: "pic5",
      title: `"Island Escapes: Discovering Paradise in the Pacific"`,
      description: "Picture a place where time slows down, the sun shines endlessly, and the only sound you hear is the gentle lapping of waves against pristine shores...",
    
    },
    {
     id: 6,
      imageSrc: "/6.jpeg",
      altText: "pic6", 
      title: `"Road Trippin’ USA: The Ultimate Cross-Country Adventure"`,
      description: "There’s a sense of freedom that only a road trip can bring, and nowhere is this more true than in the vast landscapes of the United States...",
  
    }
  ];
  
  export default blogs;