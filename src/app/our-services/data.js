import Image1 from './images/exercise_1096167-127581.png'
import Image2 from './images/-yoga-exercise_1096167-127581 (1).png';
import Image3 from './images/yoga-exercise_1096167-127581 (2).png'
import Image4 from './images/yoga-exercise_1096167-127581 (3).png'
import Image5 from './images/yoga-exercise_1096167-127581 (4).png'
import Image6 from './images/yoga-exercise_1096167-127581 (5).png'
import Image7 from './images/yoga-exercise_1096167-127581 (6).png'
import Image8 from './images/yoga-exercise_1096167-127581 (7).png';
import bannerImage1 from './architectImages/Group 1197132656.png'
import bannerImage2 from './web-development/Group 1197132658.png'
import sectionImage1 from './architectImages/image 135.png'
import sectionImage2 from './web-development/image 97.png'
import sliderImage1 from './architectImages/Frame 1000004282 (5).png'
import sliderImage2 from './architectImages/Frame 1000004282 (4).png'
import sliderImage3 from './architectImages/Frame 1000004282 (3).png'
import sliderImage4 from './architectImages/Frame 1000004282 (2).png'
import sliderImage5 from './architectImages/Frame 1000004282 (6).png'
import sliderImage6 from './architectImages/Frame 1000004282 (1).png'
import sliderImage7 from './architectImages/Frame 1000004282.png'
import processImage1 from './architectImages/Group 1197132447.png'
import processC from './architectImages/Ellipse 20.png'
import maskImage from './architectImages/Mask group.png'
import ProjectSliderImage1 from './architectImages/Frame 1000004279.png'
import ProjectSliderImage2 from './architectImages/Frame 1000004281 (1).png'
// .......
import sliderImage8 from './web-development/Frame 1000004282 (7).png'
import sliderImage9 from './web-development/Frame 1000004282 (8).png'
import sliderImage10 from './web-development/Group 1197132602.png'
import sliderImage11 from './web-development/Frame 1000004282 (9).png'
import sliderImage12 from './web-development/Frame 1000004282 (10).png'
import processImage2 from './web-development/Group 1197132447.png'
import ProjectSliderImage3 from './web-development/image 96.png'
import ProjectSliderImage4 from './web-development/image 95.png'
// ....................................
import bannerImage3 from './mobileApp/Group 1197132400.png'
import  sectionImage3 from './mobileApp/image 85.png'
import sliderImage13 from './mobileApp/image 81.png'
import sliderImage14 from './mobileApp/iPhone 13 Pro-1.png'
import ProjectSliderImage5 from './mobileApp/Frame 1000004276 (1).png'
import ProjectSliderImage6 from './mobileApp/Frame 1000004277 (1).png'
import ProjectSliderImage7 from './mobileApp/Frame 1000004278 (1).png'
// graphic.....................
import bannerImage4 from './graphicDesign/Group 1197132400 (1).png'
import  sectionImage4 from './graphicDesign/Group 1197132625 (1).png'
import sliderImage15 from './graphicDesign/iPhone 13 Pro.png'
import sliderImage16 from './graphicDesign/Brown and Grey Clean Paper Box Mockup Instagram Post 1.png'
import sliderImage17 from './graphicDesign/image 74.png'
import sliderImage18 from './graphicDesign/image 75.png'
import brandSliderT1 from './graphicDesign/Black and Blue Initials Creative Logo 1.png'
import brandSliderT2 from './graphicDesign/Colorful Modern Infinity Technology Free Logo 1.png'
import brandSliderB1 from './graphicDesign/Brown Modern New Brand Fashion Banner (1) 1.png'

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Web Development involves designing, building, and maintaining websites to ensure they are functional, visually appealing, and user-friendly. It encompasses front-end development for user interfaces, back-end development for server-side functionality, and optimization for performance and responsiveness. Web developers use modern tools and technologies to create scalable, secure, and dynamic websites tailored to business needs.",
    image: Image1,
    category: "Web Development",
      banner: [
        {
          heading: 'Web Development',
          para1: "Build Cutting-Edge Websites That Drive Results",
          para2: "At Nexus, we combine creativity and technology to deliver powerful, user-friendly, and scalable websites tailored to your business needs.",
          date: "Latest update on 12 sep, 2024",
          image: bannerImage2
        },
      ],
      section1: [
        {
          heading: 'Web Development',
          para: "Welcome to our Mobile Application Development Services page! We specialize in designing, developing, and delivering high-performance mobile applications that cater to your business goals and user needs. Whether you're looking to develop an iOS or Android app, our team of skilled developers is committed to creating innovative, scalable, and user-friendly mobile solutions. We combine the latest technologies with cutting-edge design principles to help you stay ahead in the competitive mobile landscape.",
          image: sectionImage2
        },
      ],
      // Existing content array (optional):
      work: [
        {
          heading: "Process: How We Work Together in 5 Steps",
          text: "When you engage with Nexus as your Business Analyst, you can expect several positive outcomes",
          description1: "...",
          image: processImage2,
          cards:[
            {
              heading:"Consultation & Discovery",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Planning & Strategy",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Consultation & Discovery",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Support & Maintenance",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Development",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
          ]
          // ...
        },
      ],
      // NEW: cards array for the detail page, each with multiple images:
      cards: [
        {
          heading1: "Services of a Web Development",
          description1: "Here’s a comprehensive guide to designing a webpage for Web Development Services offered by your agency, Nexus. The page will include the services provided, the roles involved, tools used, and the deliverables for your clients.",
        },
        {
          card: [
            {
              text: [
                {
                  title: "Front-End Development",
                  bulletPoints: [
                    "Reinsuring websites adapt seamlessly to all devices and screen sizes for an optimal user experience.",
                    " Implementing best practices to reduce load times and enhance website speed.",
                    "Testing and ensuring functionality across multiple browsers like Chrome, Firefox, Safari, and Edge.",
                    "Establish architecture governance frameworks.",
                  ],
                }
              ],
              images: [sliderImage8, sliderImage9], // or any images you want in the slider
            },
            {
              text:[
                {
                  title: "Solution Architect",
                  bulletPoints: [
                    "Bridge the gap between technical and business teams. ",
                    " Design system components for specific projects or solutions. ",
                    "Address scalability, performance, and integration needs.",
                    "Document and define technical requirements.",
                  ],
  
                }
              ],
              images: [sliderImage9, sliderImage10],
            },
            {
              text:[
                {
                  title: "Technical Architect",
                  bulletPoints: [
                    "Develop technical blueprints for systems and applications.",
                     "Collaborate closely with development teams to ensure execution.",
                      "Optimize software, hardware, and network configurations.",
                       "Troubleshoot and resolve technical issues during implementation. ",
                    
                  ],
  
                }
              ],
              images: [sliderImage10,sliderImage8],
            },
            {
              text:[
                {
                  title: "Infrastructure Architect",
                  bulletPoints: [
                    "Design the backbone infrastructure, including servers, networks, and storage.",
                     "Plan for disaster recovery and high availability." ,
                     "Optimize infrastructure for scalability and performance. ",
                    "Implement virtualization and cloud solutions."
                  ],
  
                }
              ],
              images: [sliderImage11, sliderImage10],
            },
            {
              text:[
                {
                  title: "Artificial Intelligence (AI) Architect",
                  bulletPoints: [
                    "Build scalable AI solutions and frameworks.",
                    " Work with data scientists to deploy AI models. ",
                     "Integrate AI systems with existing applications. ",
                    " Ensure ethical and efficient AI practices."
                  ],
  
                }
              ],
              images: [sliderImage12,sliderImage11],
            },
          ]
        },
  
      ],
      // results
      
       results: [
    {
      id: 1,
      title: "Scalable and Reliable Systems:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 2,
      title: "Optimized Infrastructure:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 3,
      title: "Seamless Integration:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 4,
      title: "Enhanced Security and Compliance:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 5,
      title: "Improved System Performance:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 6,
      title: "Future-Proof Architecture:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 7,
      title: "Cost Efficiency:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 8,
      title: "Smooth Transitions and Upgrades:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
  
  ],
  // slider
  
   ProjectSliderData : [
    {
      image:ProjectSliderImage3,
      image2:ProjectSliderImage4
    },
    {
      image:ProjectSliderImage3,
      image2:ProjectSliderImage4,
    },
    {
      image:ProjectSliderImage3,
      image2:ProjectSliderImage4
    },
  ],
  
  
  },

  // ////////////////////////////////////////////////////

  {
    id: 2,
    title: "Business Analyst",
    description: "A Business Analyst acts as the bridge between stakeholders and technical teams, analyzing business needs, processes, and systems to deliver solutions that drive organizational success. They gather and document requirements, identify areas for improvement, and ensure that proposed solutions align with business objectives. Business Analysts play a crucial role in optimizing workflows, enhancing decision-making, and supporting project execution.",
    image: Image2,
    category: "Business Analyst",
    content: [
      {
        heading: "Start with a Clear Product Understanding",
        text: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration.",
        description1: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image: Image2,
        description: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        heading2: "Start with a Clear Product Understanding",
        text2: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration. ",
        text3: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image2: Image2
      },
    ]
  },
  // ////////////////////////////////////////////
  {
    id: 3,
    title: "Mobile Application Development",
    description: "Mobile Application Development involves designing and building applications for mobile devices, ensuring seamless functionality across iOS and Android platforms. It includes creating intuitive user interfaces, integrating backend systems, and optimizing performance for speed and responsiveness. Developers leverage modern frameworks and tools to deliver secure, scalable, and user-focused mobile solutions tailored to business and user needs.",
    image: Image3,
    category: "Mobile Application Development",
         banner: [
        {
          heading: 'Mobile Application Development',
          para1: "Elevating the Future of Industries with our Services",
          para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "Latest update on 12 sep, 2024",
          image: bannerImage3
        },
      ],
      section1: [
        {
          heading: 'Mobile Application Development',
          para: "Welcome to our Mobile Application Development Services page! We specialize in designing, developing, and delivering high-performance mobile applications that cater to your business goals and user needs. Whether you're looking to develop an iOS or Android app, our team of skilled developers is committed to creating innovative, scalable, and user-friendly mobile solutions. We combine the latest technologies with cutting-edge design principles to help you stay ahead in the competitive mobile landscape.",
          image: sectionImage3
        },
      ],
      // Existing content array (optional):
      work: [
        {
          heading: "Process: How We Work Together in 5 Steps",
          text: "When you engage with Nexus as your Business Analyst, you can expect several positive outcomes",
          description1: "...",
          image: processImage2,
          cards:[
            {
              heading:"Consultation & Discovery",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Planning & Strategy",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Consultation & Discovery",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Support & Maintenance",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Development",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
          ]
          // ...
        },
      ],
      // NEW: cards array for the detail page, each with multiple images:
      cards: [
        {
          heading1: "Services of a Mobile Application Development",
          description1: "Our UI/UX design services are tailored to suit the specific needs of your project, whether it’s for a website, mobile application, or enterprise software. Here are the key services we offer:",
        },
        {
          card: [
            {
              text: [
                {
                  title: "Native App Development",
                  bulletPoints: [
                    "Designing and developing native mobile applications for iOS (Swift) and Android (Kotlin/Java) platforms.",
                    " Ensuring apps are optimized for performance, security, and seamless user experience on each platform.",
                    "Testing and ensuring functionality across multiple browsers like Chrome, Firefox, Safari, and Edge.",
                    "Establish architecture governance frameworks.",
                  ],
                }
              ],
              images: [sliderImage13, sliderImage14], // or any images you want in the slider
            },
            {
              text:[
                {
                  title: "Hybrid Mobile Development",
                  bulletPoints: [
                    "Bridge the gap between technical and business teams. ",
                    " Design system components for specific projects or solutions. ",
                    "Address scalability, performance, and integration needs.",
                    "Document and define technical requirements.",
                  ],
  
                }
              ],
              images: [sliderImage14, sliderImage13],
            },
            {
              text:[
                {
                  title: "Cross-Platform App Development",
                  bulletPoints: [
                    "Develop technical blueprints for systems and applications.",
                     "Collaborate closely with development teams to ensure execution.",
                      "Optimize software, hardware, and network configurations.",
                       "Troubleshoot and resolve technical issues during implementation. ",
                    
                  ],
  
                }
              ],
              images: [sliderImage14,sliderImage13],
            },
            {
              text:[
                {
                  title: "App Integration with Third-Party Services",
                  bulletPoints: [
                    "Design the backbone infrastructure, including servers, networks, and storage.",
                     "Plan for disaster recovery and high availability." ,
                     "Optimize infrastructure for scalability and performance. ",
                    "Implement virtualization and cloud solutions."
                  ],
  
                }
              ],
              images: [sliderImage14, sliderImage13],
            },
            {
              text:[
                {
                  title: "App Deployment & Launch",
                  bulletPoints: [
                    "Build scalable AI solutions and frameworks.",
                    " Work with data scientists to deploy AI models. ",
                     "Integrate AI systems with existing applications. ",
                    " Ensure ethical and efficient AI practices."
                  ],
  
                }
              ],
              images: [sliderImage14,sliderImage13],
            },
          ]
        },
  
      ],
      // results
      
       results: [
    {
      id: 1,
      title: "Scalable and Reliable Systems:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 2,
      title: "Optimized Infrastructure:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 3,
      title: "Seamless Integration:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 4,
      title: "Enhanced Security and Compliance:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 5,
      title: "Improved System Performance:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 6,
      title: "Future-Proof Architecture:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 7,
      title: "Cost Efficiency:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 8,
      title: "Smooth Transitions and Upgrades:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
  
  ],
  // slider
  
  ProjectSliderThreeData : [
    {
      image:ProjectSliderImage5,
      image2:ProjectSliderImage6,
      image3:ProjectSliderImage7
    },
    {
      image:ProjectSliderImage5,
      image2:ProjectSliderImage6,
      image3:ProjectSliderImage7
    },
    {
      image:ProjectSliderImage5,
      image2:ProjectSliderImage6,
      image3:ProjectSliderImage7
    },
  ],
  
  },
  // .........................................
  {
    id: 4,
    title: "System Architect",
    description: "A System Architect designs and defines the overall structure and integration of complex systems, ensuring scalability, security, and efficiency. They bridge business goals with technical implementation, creating blueprints that guide development teams. System Architects ensure all components work seamlessly to deliver robust and reliable solutions.",
    image: Image4,
    category: "System Architect",

    banner: [
      {
        heading: 'System Architect',
        para1: "Empowering Your Vision with Expert System Architecture",
        para2: "At Nexus, we build scalable, efficient, and future-ready systems tailored to your needs.",
        date: "Latest update on 12 sep, 2024",
        image: bannerImage1
      },
    ],
    section1: [
      {
        heading: 'System Architect',
        para: "A System Architect is a professional responsible for designing, planning, and implementing the architecture of complex systems, ensuring that all components work together seamlessly. A System Architect takes a holistic approach to systems design, ensuring that technical, functional, and business requirements are integrated into a cohesive and scalable solution. This includes analyzing existing infrastructure, proposing new technologies, and ensuring that the system architecture aligns with both business needs and technical constraints.",
        image: sectionImage1
      },
    ],
    // Existing content array (optional):
    work: [
      {
        heading: "Process: How We Work Together in 5 Steps",
        text: "When you engage with Nexus as your Business Analyst, you can expect several positive outcomes",
        description1: "...",
        image: processImage1,
        image2: processC,
        cards:[
          {
            heading:"Initial Consultation and Assessment:",
            description:"We begin by discussing your business’s current situation, challenges, and goals."
          },
          {
            heading:"Initial Consultation and Assessment:",
            description:"We begin by discussing your business’s current situation, challenges, and goals."
          },
          {
            heading:"Initial Consultation and Assessment:",
            description:"We begin by discussing your business’s current situation, challenges, and goals."
          },
          {
            heading:"Initial Consultation and Assessment:",
            description:"We begin by discussing your business’s current situation, challenges, and goals."
          },
          {
            heading:"Initial Consultation and Assessment:",
            description:"We begin by discussing your business’s current situation, challenges, and goals."
          },
        ]
        // ...
      },
    ],
    // NEW: cards array for the detail page, each with multiple images:
    cards: [
      {
        heading1: "Services of a System Architect",
        description1: "System Architect oversees the high-level design and structure of IT systems, but their role often branches out into various specialized positions depending on the organization and project needs. Below is a detailed breakdown of roles and responsibilities that come under the umbrella of a System Architect:",
      },
      {
        card: [
          {
            text: [
              {
                title: "Enterprise Architect",
                bulletPoints: [
                  "Define the overall architecture for the enterprise IT environment. ",
                  "Ensure compliance with business and technical requirements.",
                  "Evaluate emerging technologies and recommend adoption.",
                  "Establish architecture governance frameworks.",
                ],
              }
            ],
            images: [sliderImage1, sliderImage2], // or any images you want in the slider
          },
          {
            text:[
              {
                title: "Solution Architect",
                bulletPoints: [
                  "Bridge the gap between technical and business teams. ",
                  " Design system components for specific projects or solutions. ",
                  "Address scalability, performance, and integration needs.",
                  "Document and define technical requirements.",
                ],

              }
            ],
            images: [sliderImage2, sliderImage1],
          },
          {
            text:[
              {
                title: "Technical Architect",
                bulletPoints: [
                  "Develop technical blueprints for systems and applications.",
                   "Collaborate closely with development teams to ensure execution.",
                    "Optimize software, hardware, and network configurations.",
                     "Troubleshoot and resolve technical issues during implementation. ",
                  
                ],

              }
            ],
            images: [sliderImage3,sliderImage2],
          },
          {
            text:[
              {
                title: "Infrastructure Architect",
                bulletPoints: [
                  "Design the backbone infrastructure, including servers, networks, and storage.",
                   "Plan for disaster recovery and high availability." ,
                   "Optimize infrastructure for scalability and performance. ",
                  "Implement virtualization and cloud solutions."
                ],

              }
            ],
            images: [sliderImage4, sliderImage2],
          },
          {
            text:[
              {
                title: "Artificial Intelligence (AI) Architect",
                bulletPoints: [
                  "Build scalable AI solutions and frameworks.",
                  " Work with data scientists to deploy AI models. ",
                   "Integrate AI systems with existing applications. ",
                  " Ensure ethical and efficient AI practices."
                ],

              }
            ],
            images: [sliderImage5,sliderImage2],
          },
          {
              text:[
              {
                title: "Integration Architect",
                bulletPoints: [
                  "Plan and design system integrations.",
                  " Ensure APIs and middleware function correctly. ",
                   "Solve compatibility and communication challenges. ",
                 " Monitor data flow and system interactions."
                ],
              }
            ],
            images: [sliderImage6,sliderImage3],
          },
          {
              text:[
              {
                title: "DevOps Architect",
                bulletPoints: [
                  "Oversee the architecture of application software.",
                   "Ensure integration with other systems.",
                   "Define application scalability and maintainability standards. ",
                 " Guide development teams on architectural decisions.",
                ],
              }
            ],
            images: [sliderImage7,sliderImage1],
          },
        ]
      },

    ],
    // results
    
     results: [
  {
    id: 1,
    title: "Scalable and Reliable Systems:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 2,
    title: "Optimized Infrastructure:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 3,
    title: "Seamless Integration:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 4,
    title: "Enhanced Security and Compliance:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 5,
    title: "Improved System Performance:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 6,
    title: "Future-Proof Architecture:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 7,
    title: "Cost Efficiency:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },
  {
    id: 8,
    title: "Smooth Transitions and Upgrades:",
    description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
    icon: maskImage,
  },

],
// slider

 ProjectSliderData : [
  {
    image:ProjectSliderImage1,
    image2:ProjectSliderImage2
  },
  {
    image:ProjectSliderImage2,
    image2:ProjectSliderImage1,
  },
  {
    image:ProjectSliderImage1,
    image2:ProjectSliderImage2
  },
],
  },
  // ................................................

  {
    id: 5,
    title: "Graphic Designer",
    description: "A Graphic Designer creates visually compelling designs that communicate ideas, inspire audiences, and enhance brand identity. They use tools like Adobe Creative Suite, Figma, and Canva to craft designs for digital and print media, including logos, websites, social media, and marketing materials. Graphic Designers blend creativity and technical expertise to deliver impactful visuals that align with a brand's message and goals.",
    image: Image5,
    category: "Graphic Designer",
     banner: [
        {
          heading: 'Graphic Designer',
          para1: "Elevating the Future of Industries with our Services",
          para2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          date: "Latest update on 12 sep, 2024",
          image: bannerImage4
        },
      ],
      section1: [
        {
          heading: 'Web Development',
          para: "Welcome to our Mobile Application Development Services page! We specialize in designing, developing, and delivering high-performance mobile applications that cater to your business goals and user needs. Whether you're looking to develop an iOS or Android app, our team of skilled developers is committed to creating innovative, scalable, and user-friendly mobile solutions. We combine the latest technologies with cutting-edge design principles to help you stay ahead in the competitive mobile landscape.",
          image: sectionImage4
        },
      ],
      // Existing content array (optional):
      work: [
        {
          heading: "Process: How We Work Together in 5 Steps",
          text: "When you engage with Nexus as your Business Analyst, you can expect several positive outcomes",
          description1: "...",
          image: processImage2,
          cards:[
            {
              heading:"Consultation & Discovery",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Planning & Strategy",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Consultation & Discovery",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Support & Maintenance",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
            {
              heading:"Development",
              description:"We begin by discussing your business’s current situation, challenges, and goals."
            },
          ]
          // ...
        },
      ],
      // NEW: cards array for the detail page, each with multiple images:
      cards: [
        {
          heading1: "Services of a Graphic Designer",
          description1: "We offer a full range of graphic design services, helping businesses and individuals communicate their ideas through compelling visuals. Here are the services we provide:",
        },
        {
          card: [
            {
              text: [
                {
                  title: "UI/UX Design for Websites & Apps",
                  bulletPoints: [
                    "User Interface (UI) Design: Crafting beautiful, functional websites and apps.",
                    " User Experience (UX) Design: Focused on creating seamless, intuitive navigation.",
                    "Wireframing & Prototyping: Laying out the structure and flow of your website or application.",
                    "Establish architecture governance frameworks.",
                  ],
                }
              ],
              images: [sliderImage15, sliderImage16], // or any images you want in the slider
            },
            {
              text:[
                {
                  title: "Packaging Design",
                  bulletPoints: [
                    "Product Packaging: Creating eye-catching designs that make your product stand out.",
                    "Labels & Tags: Custom designs that align with your brand and catch the consumer's eye.",
                    "Address scalability, performance, and integration needs.",
                    "Document and define technical requirements.",
                  ],
  
                }
              ],
              images: [sliderImage16, sliderImage17],
            },
            {
              text:[
                {
                  title: "Illustration & Custom Artwork",
                  bulletPoints: [
                    "Custom Illustrations: Unique, hand-drawn or digital artwork to enhance your brand or message.",
                     "Collaborate closely with development teams to ensure execution.",
                      "Optimize software, hardware, and network configurations.",
                       "Troubleshoot and resolve technical issues during implementation. ",
                    
                  ],
  
                }
              ],
              images: [sliderImage17,sliderImage18],
            },
            {
              text:[
                {
                  title: "Print Design",
                  bulletPoints: [
                    "Design the backbone infrastructure, including servers, networks, and storage.",
                     "Plan for disaster recovery and high availability." ,
                     "Optimize infrastructure for scalability and performance. ",
                    "Implement virtualization and cloud solutions."
                  ],
  
                }
              ],
              images: [sliderImage18, sliderImage17],
            },
          ]
        },
  
      ],
      // results
      
       results: [
    {
      id: 1,
      title: "Scalable and Reliable Systems:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 2,
      title: "Optimized Infrastructure:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 3,
      title: "Seamless Integration:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 4,
      title: "Enhanced Security and Compliance:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 5,
      title: "Improved System Performance:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 6,
      title: "Future-Proof Architecture:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 7,
      title: "Cost Efficiency:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
    {
      id: 8,
      title: "Smooth Transitions and Upgrades:",
      description: "Scalable and Reliable Systems: Well-designed systems that can scale with your business growth, ensuring long-term reliability and performance.",
      icon: maskImage,
    },
  
  ],
  // slider
  
   ProjectSliderData : [
    {
      image:ProjectSliderImage1,
      image2:ProjectSliderImage2
    },
    {
      image:ProjectSliderImage1,
      image2:ProjectSliderImage2,
    },
    {
      image:ProjectSliderImage1,
      image2:ProjectSliderImage2
    },
  ],  
  // .......................................

// Inside your servicesData object for a particular service:
brandIdentityData: {
  topSlider: [
    {
      id: 1,
      title: "Brand Strategy",
      description: "Helping businesses define their brand identity.",
      image:brandSliderT1,
    },
    {
      id: 2,
      title: "Logo Design",
      description: "Crafting unique and memorable logos.",
      image:brandSliderT2,
    },
    {
      id: 3,
      title: "Marketing Materials",
      description: "Creating brochures, business cards, and more.",
      image: brandSliderT1,
    },
    {
      id: 4,
      title: "Social Media Branding",
      description: "Ensuring consistent branding across all platforms.",
      image: brandSliderT2,
    },
    {
      id: 5,
      title: "Website Design",
      description: "Building stunning and effective websites.",
      image:brandSliderT1,
    },
    {
      id: 6,
      title: "Website Design",
      description: "Building stunning and effective websites.",
      image:brandSliderT2,
    },
    {
      id: 7,
      title: "Website Design",
      description: "Building stunning and effective websites.",
      image:brandSliderT1,
    },
    {
      id: 8,
      title: "Website Design",
      description: "Building stunning and effective websites.",
      image:brandSliderT2,
    },
    {
      id: 9,
      title: "Website Design",
      description: "Building stunning and effective websites.",
      image:brandSliderT1,
    },
  ],
  bottomSlider: [
    {
      id: 1,
      title: "Complete Branding Package",
      description: "A comprehensive branding solution for your business.",
      image: brandSliderB1,
    },
    {
      id: 2,
      title: "Rebranding Strategy",
      description: "Revamping your brand for a fresh new look.",
      image: brandSliderB1,
    },
    {
      id: 3,
      title: "Corporate Identity",
      description: "Building a strong corporate identity for your company.",
      image: brandSliderB1,
    },
    {
      id: 4,
      title: "Personal Branding",
      description: "Creating a brand around your personal identity.",
      image: brandSliderB1,
    },
    {
      id: 4,
      title: "Personal Branding",
      description: "Creating a brand around your personal identity.",
      image: brandSliderB1,
    },
  ],
},

  
  },
  {
    id: 6,
    title: "Business Consultant",
    description: "A Business Consultant provides expert advice to help organizations improve operations, overcome challenges, and achieve strategic goals. They analyze business processes, identify inefficiencies, and develop tailored solutions to enhance performance and profitability. By offering insights on market trends, financial management, and growth strategies, they enable businesses to make informed decisions.",
    image: Image6,
    category: "Business Consultant",
    content: [
      {
        heading: "Start with a Clear Product Understanding",
        text: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration.",
        description1: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image: Image1,
        description: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        heading2: "Start with a Clear Product Understanding",
        text2: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration. ",
        text3: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image2: Image2
      },
    ]
  },
  {
    id: 7,
    title: "UI/UX Designer",
    description: "A UI/UX Designer creates user-centered designs that enhance the usability and aesthetic appeal of digital products. They focus on crafting intuitive interfaces (UI) and seamless user experiences (UX) by conducting research, wireframing, prototyping, and testing. By balancing functionality with visual design, they ensure products are both engaging and easy to use.",
    image: Image7,
    category: "UI/UX Designer",
    content: [
      {
        heading: "Start with a Clear Product Understanding",
        text: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration.",
        description1: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image: Image4,
        description: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        heading2: "Start with a Clear Product Understanding",
        text2: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration. ",
        text3: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image2: Image5
      },
    ]
  },
  {
    id: 8,
    title: "Digital Marketing",
    description: "Digital Marketing involves promoting brands, products, or services using online channels like search engines, social media, email, and websites. It includes strategies like SEO, content marketing, PPC, and analytics to drive targeted traffic and maximize ROI. Digital marketers craft campaigns that engage audiences, build brand awareness, and generate measurable results.",
    image: Image8,
    category: "Digital Marketing",
    content: [
      {
        heading: "Start with a Clear Product Understanding",
        text: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration.",
        description1: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image: Image1,
        description: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        heading2: "Start with a Clear Product Understanding",
        text2: "Creating effective designs for tech-savvy audiences, such as data scientists and software engineers, requires a careful balance between visual clarity, functionality, and creativity. While the complexity of the product must be communicated clearly, the interface also needs to feel intuitive and engaging. Success in such projects doesn’t just come from creativity; it’s rooted in strategic collaboration. ",
        text3: "Zerve’s platform—a cloud-based Data Science IDE—allows code-centric data teams to safely collaborate while producing stable code. It’s a powerful tool, essentially doing for data scientists what Figma did for designers and developers. However, Zerve’s existing visual identity didn’t fully capture its innovative spirit or resonate with its highly technical audience, so it was due for a refresh. The challenge Zerve faced was ensuring that its complex functionality was easily understandable and visually appealing to its digital-native audience. This article dives into how the collaboration between BB Agency and Zerve unfolded and what we learned along the way, highlighting key lessons for designers tackling similar projects.",
        image2: Image2
      },
    ]
  },

];

export default servicesData;


