import Image2 from './industriesImages/image 6.png';
import Image3 from './industriesImages/smiling-business-persons.png';
import ImageA from './industriesImages/image 173.png';
import ImageL from './industriesImages/image 202.png';
import ImageT from './industriesImages/image 203.png';
import ImageE from './industriesImages/image 194.png';
import ImageEd from './industriesImages/image 203 (1).png';
import ImageTr from './industriesImages/image 159.png';
import bannerImageH from './healthcare/Group 1197132576.png';
import SolutionImage1 from './healthcare/solution.png';
import cardImageH1 from './healthcare/image 160.png'
import cardImageH2 from './healthcare/image 162.png'
import iconImageH1 from './healthcare/icon1.png';
import iconImageH2 from './healthcare/icon2.png';
import iconImageH3 from './healthcare/icon3.png';
import iconImageH4 from './healthcare/icon4.png';
import iconImageH5 from './healthcare/icon5.png';
import SolutionImage2 from './healthcare/image 165.png';
import SolutionImage3 from './healthcare/image 166.png';
// ......accounting.......................
import bannerImageA from './accountingImage/Group 1197132576 (1).png';
import SolutionImageA from './accountingImage/image 170.png';
import cardImageA1 from './accountingImage/image 168.png';
import SolutionImageSA from './accountingImage/image 172.png';
// .............LawFirm..................................
import bannerImageLA from './LawImages/Group 1197132576 (2).png';
import SolutionImageLA from './LawImages/image 179.png';
import cardImageLA1 from './LawImages/image 177.png';
import SolutionImageLA1 from './LawImages/image 176.png';
// .................Telecommunication..................
import bannerImageTA from './telecomImage/Group 1197132576 (3).png';
import SolutionImageTA from './telecomImage/image 183.png';
import cardImageTA1 from './telecomImage/image 184.png';
import SolutionImageTA1 from './telecomImage/image 186.png';
import iconImageH6 from './telecomImage/icon6.png';
// ....................State Agencies..................
import bannerImageSA from './stateImages/banner.png';
import SolutionImageSA1 from './stateImages/solution.png';
import cardImageSA11 from './stateImages/card.png';
import SolutionImageSA11 from './stateImages/image 189.png';
// .....................e-Commerce..................
import bannerImageEA from './ecommerceImages/banner.png'
import SolutionImageEA1 from './ecommerceImages/solution.png';
import cardImageEA11 from './ecommerceImages/card.png';
import SolutionImageEA11 from './ecommerceImages/image 195.png';
// ....................Education.........................
import bannerImageE from './educationImages/banner.png'
import SolutionImageE1 from './educationImages/solution.png';
import cardImageE11 from './educationImages/card.png';
import SolutionImageE11 from './educationImages/image 198.png';
// .......................Travel.........................
import bannerImageTR from './travelImages/banner.png'
import SolutionImageTR from './travelImages/solution.png';
import cardImageTR from './travelImages/card.png';
import SolutionImageTR1 from './travelImages/image 201.png';


const data = [
  {
    id: 1,
    title: 'Health Care',
    description:
      'Website Design & Development: Create responsive and engaging websites that effectively communicate your tech offerings, showcase product features, and provide valuable resources for users and stakeholders.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image2,
    // ===== Banner Section =====
    banner: [
      {
        heading: 'Empowering Healthcare with Cutting-Edge IT Solutions',
        para1:
          'From clinics to pharmacies, Nexus-Dev delivers innovative solutions to streamline operations and enhance patient care.From clinics to pharmacies, Nexus-Dev delivers innovative solutions to streamline operations and enhance patient care.',
        image: bannerImageH,
      },
    ],
    // ===== Single-Solution Section (already in your code) =====
    solution: [
      {
        image: SolutionImage1,
        title: 'Build an App That Gives Effective Healthcare Solutions',
        description:
          'We are the leading healthcare app development company providing award-winning solutions to healthcare startups and established firms. Right from basic clinic management solutions to complex diagnosis and treatment software, our team of healthcare app developers specialise in helping the healthcare domain with tech-powered digital solutions.',
      },
    ],
    // ===== New: Challenges Section (3 zigzag cards) =====
    challenges: {
      heading: 'Challenges that Healthcare Professionals Face',
      cards: [
        {
          text: [
            {
              title: 'Challenges & Needs for Dentists',
              bulletPoints: [
                'Managing patient appointments efficiently',
                'Secure patient record management',
                'Online consultation services',
              ],
            },
          ],
         
          images: [cardImageH1], 
        },
        {
          text: [
            {
              title: 'Challenges & Needs For Surgeries',
              bulletPoints: [
                'Efficient workflow & patient management',
                'Secure data handling & compliance',
                'Hospital & pharmacy inventory management',
              ],
            },
          ],
          images: [cardImageH2],
        },
        
      ],
    },
    // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
   solutionsForProfessionals : {
      heading: 'Nexus-Dev Solutions for Healthcare Professionals',
      cards: [
        {
          text: [
            {
              title: 'Nexus-Dev Solutions for Dentists:',
              bulletPoints: [
                {
                  title: 'Custom Website Development',
                  description: 'Modern, patient-friendly websites for online bookings.',
                  icon: iconImageH1, 
                },
                {
                  title: 'Mobile App for Patient Management',
                  description: 'Bookings, reminders, and rescheduling.',
                  icon: iconImageH2,
                },
                {
                  title: 'Cloud-Based Patient Data System',
                  description: 'Secure & accessible patient records.',
                  icon: iconImageH3,
                },
                {
                  title: 'SEO & Digital Marketing',
                  description: 'Boost visibility & patient engagement.',
                  icon: iconImageH4,
                },
              ],
            },
          ],
          images: [SolutionImage2], 
        },
        {
          text: [
            {
              title: 'Nexus-Dev Solutions for Surgeons',
              bulletPoints: [
                {
                  title: 'Management System',
                  description: 'Billing, scheduling, and admin tasks.',
                  icon: iconImageH1, 
                },
                {
                  title: 'Telemedicine Platform',
                  description: 'Remote consultations & virtual check-ups.',
                  icon: iconImageH2,
                },
                {
                  title: 'EHR & Compliance Systems',
                  description: 'Secure & HIPAA-compliant data management.',
                  icon: iconImageH3,
                },
                {
                  title: 'Pharmacy & Inventory Management',
                  description: 'Medication stock tracking, Automated alerts for staff.',
                  icon: iconImageH5,
                },
              ],
            },
          ],
          images: [SolutionImage3], 
        },
      ],
    },
    
  
  },
  // ......................Accounting..........................
  {
    id: 2,
    title: 'Accountants',
    description:
      'SEO & Local Search Optimization: Improve your website’s visibility on search engines with targeted SEO strategies, ensuring your listings appear in front of local buyers and sellers actively searching for real estate.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Accounting',
    image: ImageA,
    // ===== Example: Minimal Banner (optional) =====
    banner: [
      {
        heading: 'Streamline Your Accounting Workflow with Nexus-Dev’s Expertise',
        para1:
          'From automated financial systems to secure cloud solutions, we provide tailored IT services to enhance efficiency, accuracy, and security for accounting firms.',
        image: bannerImageA,
      },
    ],
     // ===== Single-Solution Section (already in your code) =====
     solution: [
      {
        image: SolutionImageA,
        title: 'Build a System That Gives Effective Accounting Solutions',
        description:
          'We help accounting firms streamline financial processes with advanced automation, secure data management, and AI-powered analytics. From bookkeeping to tax compliance, our tailored IT solutions ensure accuracy, efficiency, and compliance with financial regulations.',
      },
    ],
    // ===== New: Challenges Section (3 zigzag cards) =====
    challenges: {
      heading: 'Challenges that Accounting Professionals Face',
      cards: [
        {
          text: [
            {
              bulletPoints: [
                'Many firms still rely on spreadsheets and outdated software, leading to inefficiencies.',
                'Handling sensitive financial data comes with cybersecurity threats and compliance challenges.',
                'Difficulty in integrating accounting software with other business systems (CRM, ERP, tax portals)',
                'Frequent changes in tax policies and compliance laws require automated tracking systems.',
              ],
            },
          ],
         
          images: [cardImageA1], 
        },
        
      ],
    },
    // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
   solutionsForProfessionals : {
      heading: 'Nexus-Dev Solutions for Accounting Professionals',
      cards: [
        {
          text: [
            {
              bulletPoints: [
                {
                  title: 'Automation & AI-Powered Accounting Solutions',
                  description: 'Automate invoicing, payroll, tax filing, and financial reports to save time and reduce errors.',
                  icon: iconImageH1, 
                },
                {
                  title: 'Regulatory Updates & Compliance Automation:',
                  description: 'Real-time updates on tax laws, automated compliance checks, and alerts for regulatory changes.',
                  icon: iconImageH2,
                },
                {
                  title: 'Cloud-Based Accounting Platforms',
                  description: 'Provide scalable, remote-accessible cloud solutions for accountants and firms.',
                  icon: iconImageH3,
                },
                {
                  title: 'Seamless Integration with Existing Systems',
                  description: 'Connect accounting software with banking systems, ERP, CRM, and tax platforms for efficiency.',
                  icon: iconImageH4,
                },
              ],
            },
          ],
          images: [SolutionImageSA], 
        },
       
      ],
    },
  },
  // .......................LawFirm..........................
  {
    id: 3,
    title: 'Law Firms',
    description:
      'Telecommunication refers to the transmission of information over distances using technologies like fiber optics, satellites, and wireless networks. It includes voice, data, and video communication systems that connect individuals and businesses globally. ',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: ImageL,
     // ===== Banner Section =====
     banner: [
      {
        heading: 'Future-Proof Your Law Firm with Intelligent IT Solutions',
        para1:
          'Empower your law firm with cutting-edge technology. From AI-driven legal document management to secure case collaboration, Nexus-Dev provides tailored IT solutions to streamline operations, enhance security, and improve client interactions',
        image: bannerImageLA,
      },
    ],
    // ===== Single-Solution Section (already in your code) =====
    solution: [
      {
        image: SolutionImageLA,
        title: 'Empower Your Law Firm with Smart Legal Tech Solutions',
        description:
          'Enhance your legal practice with AI-driven case management, secure document automation, and client communication tools. Our IT solutions help law firms improve efficiency, protect sensitive data, and deliver seamless legal services with technology-powered innovation.',
      },
    ],
    // ===== New: Challenges Section (3 zigzag cards) =====
    challenges: {
      heading: 'Challenges that Law Firms  Face',
      cards: [
        {
          text: [
            {
              bulletPoints: [
                'Handling large volumes of legal documents manually can be inefficient and prone to errors.',
                'Difficulty in syncing case management software with billing, scheduling, and CRM tools.',
                'Managing client interactions, updates, and follow-ups efficiently is a challenge.',
                'Manual processes for billing, case tracking, and contract management increase costs.',
                'Managing case files, legal research, and deadlines manually leads to inefficiencies.',
              ],
            },
          ],
         
          images: [cardImageLA1], 
        },
        
      ],
    },
    // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
   solutionsForProfessionals : {
      heading: 'Nexus-Dev Solutions for Accounting Professionals',
      cards: [
        {
          text: [
            {
              bulletPoints: [
                {
                  title: 'AI-Powered Legal Document Management',
                  description: 'Automate contract creation, document sorting, and secure storage with intelligent search.',
                  icon: iconImageH1, 
                },
                {
                  title: 'Comprehensive Case & Workflow Management System',
                  description: 'Automate case tracking, legal research, and task assignments for improved efficiency.',
                  icon: iconImageH2,
                },
                {
                  title: 'Cloud-Based Secure Access & Collaboration',
                  description: 'Enable remote teams to access case files securely and collaborate in real time.',
                  icon: iconImageH3,
                },
                {
                  title: 'Legal CRM for Client Relationship Management',
                  description: 'Centralized client communication, automated reminders, and easy appointment scheduling.',
                  icon: iconImageH4,
                },
              ],
            },
          ],
          images: [SolutionImageLA1], 
        },
        
      ],
    },
    
  },
  {
    id: 4,
    title: 'Telecommunication',
    description:
      'Telecommunication refers to the transmission of information over distances using technologies like fiber optics, satellites, and wireless networks. It includes voice, data, and video communication systems that connect individuals and businesses globally. ',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: ImageT,
         // ===== Banner Section =====
         banner: [
          {
            heading: 'Optimizing Telecom Operations with Recycle Buyback, Trade-In & ITAD Solutions',
            para1:
              'Maximize value recovery, enhance sustainability, and streamline asset disposition with Nexus-Dev’s cutting-edge IT solutions for the telecom industry. From automated trade-in platforms to secure IT asset disposal, we empower telecom businesses with efficiency and profitability',
            image: bannerImageTA,
          },
        ],
        // ===== Single-Solution Section (already in your code) =====
        solution: [
          {
            image: SolutionImageTA,
            title: 'Optimize Telecom with Smart ITAD & Buyback Solutions',
            description: 'Nexus-Dev provides telecom companies with advanced IT solutions for Recycle Buyback, Trade-In, and IT Asset Disposition (ITAD). From automated device evaluations to secure data wiping and resale management, our technology streamlines the entire lifecycle of telecom assets.',
          },
        ],
        // ===== New: Challenges Section (3 zigzag cards) =====
        challenges: {
          heading: 'Challenges Faced by Telecom Businesses',
          cards: [
            {
              text: [
                {
                  bulletPoints: [
                    'Lack of automation in buyback programs leads to slow processing and lower customer engagement.',
                    'Managing end-of-life devices securely while ensuring compliance with industry regulations is challenging.',
                    'Improper handling of electronic waste can result in data leaks and environmental damage.',
                    'Managing case files, legal research, and deadlines manually leads to inefficiencies.',
                  ],
                },
              ],
             
              images: [cardImageTA1], 
            },
            
          ],
        },
        // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
       solutionsForProfessionals : {
          heading: 'Nexus-Dev Solutions for Accounting Professionals',
          cards: [
            {
              text: [
                {
                  bulletPoints: [
                    {
                      title: 'AI-Powered Recycle Buyback & Trade-In Platforms',
                      description: 'Automate contract creation, document sorting, and secure storage with intelligent search.',
                      icon: iconImageH1, 
                    },
                    {
                      title: 'Secure & Compliant IT Asset Disposition (ITAD) Solutions',
                      description: 'Automate case tracking, legal research, and task assignments for improved efficiency.',
                      icon: iconImageH2,
                    },
                    {
                      title: 'Smart Logistics & Reverse Supply Chain Optimization',
                      description: 'Enable remote teams to access case files securely and collaborate in real time.',
                      icon: iconImageH3,
                    },
                    {
                      title: 'Seamless API Integration for Telecom Providers',
                      description: 'Centralized client communication, automated reminders, and easy appointment scheduling.',
                      icon: iconImageH6,
                    },
                  ],
                },
              ],
              images: [SolutionImageTA1], 
            },
            
          ],
        },
        
  },
  {
    id: 5,
    title: 'State Agencies',
    description:
      'SEO & Local Search Optimization: Improve your website’s visibility on search engines with targeted SEO strategies, ensuring your listings appear in front of local buyers and sellers actively searching for real estate.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: Image3,
             // ===== Banner Section =====
             banner: [
              {
                heading: 'Transforming State Agencies with Smart IT Solutions',
                para1:
                  'Enhance efficiency, security, and digital transformation for state agencies with Nexus-Dev’s tailored IT solutions. From data management to citizen services automation, we empower government bodies with cutting-edge technology.',
                image: bannerImageSA,
              },
            ],
            // ===== Single-Solution Section (already in your code) =====
            solution: [
              {
                image: SolutionImageSA1,
                title: 'Revolutionize Property Management with IT-Driven Solutions',
                description: 'Boost efficiency in real estate with AI-powered property listing, automated contract management, and smart CRM tools. Nexus-Dev helps state agents manage transactions, attract buyers, and optimize property sales with innovative digital solutions.',
              },
            ],
            // ===== New: Challenges Section (3 zigzag cards) =====
            challenges: {
              heading: 'Challenges Faced by State Agencies Businesses',
              cards: [
                {
                  text: [
                    {
                      bulletPoints: [
                        'Many state agencies rely on old software, making modernization and digital services difficult.',
                        'Handling large volumes of sensitive citizen data increases cybersecurity threats and regulatory concerns.',
                        'Manual paperwork and slow approval processes lead to inefficiencies and delays.',
                        'Lack of centralized systems makes interdepartmental communication and data sharing challenging.',
                        'Difficulty in providing seamless online services, appointment scheduling, and real-time support.',
                      ],
                    },
                  ],
                 
                  images: [cardImageSA11], 
                },
                
              ],
            },
            // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
           solutionsForProfessionals : {
              heading: 'Nexus-Dev Solutions for State Agency Professionals',
              cards: [
                {
                  text: [
                    {
                      bulletPoints: [
                        {
                          title: 'Process Automation & AI-Powered Workflows',
                          description: 'Automate contract creation, document sorting, and secure storage with intelligent search.',
                          icon: iconImageH1, 
                        },
                        {
                          title: 'Centralized Data Management & Interagency Integration',
                          description: 'Enable secure data sharing and seamless collaboration between different government departments.',
                          icon: iconImageH2,
                        },
                        {
                          title: 'Cloud-Based Digital Government Solutions',
                          description: 'Modernize legacy systems with scalable cloud infrastructure for better accessibility and performance.',
                          icon: iconImageH3,
                        },
                        {
                          title: 'Citizen-Centric Digital Platforms',
                          description: 'Develop intuitive online portals, chatbots, and self-service tools for efficient public service delivery.',
                          icon: iconImageH5,
                        },
                      ],
                    },
                  ],
                  images: [SolutionImageSA11], 
                },
                
              ],
            },
            
  },
  {
    id: 6,
    title: 'e-Commerce',
    description:
      'From seamless online store management to AI-driven customer experiences, Nexus-Dev provides cutting-edge IT solutions to scale, optimize, and secure your eCommerce business with innovative technologies, data-driven insights, and robust cybersecurity measures.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: ImageE,
      // ===== Banner Section =====
      banner: [
        {
          heading: 'Powering eCommerce Success with Smart IT Solutions',
          para1:
            'Enhance efficiency, security, and digital transformation for state agencies with Nexus-Dev’s tailored IT solutions. From data management to citizen services automation, we empower government bodies with cutting-edge technology.',
          image: bannerImageEA,
        },
      ],
      // ===== Single-Solution Section (already in your code) =====
      solution: [
        {
          image: SolutionImageEA1,
          title: 'Build System That Drives E-commerce Success',
          description: "We design scalable e-commerce platforms that offer seamless shopping experiences. Whether it's multi-vendor marketplaces, secure payment gateways, or AI-powered recommendations, we ensure business growth and user satisfaction.",
        },
      ],
      // ===== New: Challenges Section (3 zigzag cards) =====
      challenges: {
        heading: 'Challenges Faced by eCommerce Businesses',
        cards: [
          {
            text: [
              {
                bulletPoints: [
                  'Poorly optimized websites lead to slow loading times, high bounce rates, and lost sales.',
                  'eCommerce platforms face risks like data breaches, fraudulent transactions, and payment security issues.',
                  'Managing stock levels, tracking orders, and synchronizing inventory across multiple platforms can be challenging.',
                  'Generic user experiences fail to drive conversions due to a lack of AI-driven personalization.',
                  'Unoptimized supply chains result in delayed deliveries and high return processing costs.',
                  ''
                ],
              },
            ],
           
            images: [cardImageEA11], 
          },
          
        ],
      },
      // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
     solutionsForProfessionals : {
        heading: 'Nexus-Dev Solutions for eCommerce Businesses',
        cards: [
          {
            text: [
              {
                bulletPoints: [
                  {
                    title: 'High-Performance & Scalable eCommerce Platforms',
                    description: 'Build fast, secure, and mobile-friendly eCommerce websites optimized for high traffic.',
                    icon: iconImageH1, 
                  },
                  {
                    title: 'Advanced Cybersecurity & Fraud Prevention',
                    description: 'mplement secure payment gateways, encrypted transactions, and AI-based fraud detection.',
                    icon: iconImageH2,
                  },
                  {
                    title: 'Smart Inventory & Order Management Systems',
                    description: 'Modernize legacy systems with scalable cloud infrastructure for better accessibility and performance.',
                    icon: iconImageH3,
                  },
                  {
                    title: 'Seamless Multi-Channel Selling & API Integrations',
                    description: 'Develop intuitive online portals, chatbots, and self-service tools for efficient public service delivery.',
                    icon: iconImageH5,
                  },
                ],
              },
            ],
            images: [SolutionImageEA11], 
          },
          
        ],
      },
     
  },
  // ......................................
  {
    id: 7,
    title: 'Educations',
    description:
      'Enhance learning experiences, streamline administration, and secure data with Nexus-Dev’s tailored IT solutions for educational institutions. From smart LMS platforms to AI-powered student engagement, we help institutions thrive in the digital era.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: ImageEd,
        // ===== Banner Section =====
        banner: [
          {
            heading: 'Empowering Education with Innovative IT Solutions',
            para1:
              'Enhance learning experiences, streamline administration, and secure data with Nexus-Dev’s tailored IT solutions for educational institutions. From smart LMS platforms to AI-powered student engagement, we help institutions thrive in the digital era.',
            image: bannerImageE,
          },
        ],
        // ===== Single-Solution Section (already in your code) =====
        solution: [
          {
            image: SolutionImageE1,
            title: 'Build an App That Revolutionizes Learning',
            description: "We empower educational institutions with innovative e-learning platforms, AI-based tutoring, and virtual classrooms. Our tech-driven education solutions enhance engagement, accessibility, and student performance.",
          },
        ],
        // ===== New: Challenges Section (3 zigzag cards) =====
        challenges: {
          heading: 'Challenges Faced by Educational Businesses',
          cards: [
            {
              text: [
                {
                  bulletPoints: [
                    'Many institutions struggle with inefficient and non-interactive e-learning platforms.',
                    'Protecting sensitive student data from cyber threats and unauthorized access is critical.',
                    'Manual paperwork, slow admissions, and disorganized student records cause inefficiencies.',
                    'Manual paperwork, slow admissions, and disorganized student records cause inefficiencies.',
                    'Managing servers, digital tools, and IT systems increases costs and complexity.',
                    
                  ],
                },
              ],
             
              images: [cardImageE11], 
            },
            
          ],
        },
        // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
       solutionsForProfessionals : {
          heading: 'Nexus-Dev Solutions for Educational Institutions',
          cards: [
            {
              text: [
                {
                  bulletPoints: [
                    {
                      title: 'AI-Powered Learning Management Systems (LMS)',
                      description: 'Develop interactive, cloud-based LMS platforms with smart tracking and reporting.',
                      icon: iconImageH1, 
                    },
                    {
                      title: 'Advanced Cybersecurity & Data Protection',
                      description: 'Secure student records, implement encrypted databases, and ensure compliance with data regulations.',
                      icon: iconImageH2,
                    },
                    {
                      title: 'Automated Admissions & Student Management Systems',
                      description: 'Modernize legacy systems with scalable cloud infrastructure for better accessibility and performance.',
                      icon: iconImageH3,
                    },
                    {
                      title: 'Seamless Integration with EdTech & Third-Party Platforms',
                      description: 'Develop intuitive online portals, chatbots, and self-service tools for efficient public service delivery.',
                      icon: iconImageH5,
                    },
                  ],
                },
              ],
              images: [SolutionImageE11], 
            },
            
          ],
        },
       
  },
  {
    id: 8,
    title: 'Travel',
    description:
      'Enhance bookings, streamline operations, and deliver seamless travel experiences with Nexus-Dev’s advanced IT solutions. From AI-powered booking engines to automated itinerary management, we help travel companies stay ahead in a digital world.',
    core: 'FIGMA, HTML, CSS, JAVA & PHP',
    industry: 'Health Care',
    image: ImageTr,
     // ===== Banner Section =====
     banner: [
      {
        heading: 'Revolutionizing Travel with Smart IT Solutions',
        para1:
          'Enhance bookings, streamline operations, and deliver seamless travel experiences with Nexus-Dev’s advanced IT solutions. From AI-powered booking engines to automated itinerary management, we help travel companies stay ahead in a digital world.',
        image: bannerImageTR,
      },
    ],
    // ===== Single-Solution Section (already in your code) =====
    solution: [
      {
        image: SolutionImageTR,
        title: 'Build an App That Redefines Travel Experiences',
        description: "We craft powerful travel solutions that make trip planning effortless. From online booking systems to AI-powered itinerary planners, our solutions enhance convenience and elevate user experiences.",
      },
    ],
    // ===== New: Challenges Section (3 zigzag cards) =====
    challenges: {
      heading: 'Challenges Faced by Traveling Businesses',
      cards: [
        { 
          text: [
            {
              bulletPoints: [
                'Managing hotel, flight, and tour bookings across multiple platforms is time-consuming.',
                'Lack of personalized experiences and real-time support affects customer satisfaction.',
                'Travel businesses face challenges in handling secure, multi-currency payments.',
                'Last-minute cancellations, reschedules, and logistics coordination can be overwhelming.',
                'Connecting travel agencies, airlines, hotels, and tour operators requires seamless integration.',
                
              ],
            },
          ],
         
          images: [cardImageTR], 
        },
        
      ],
    },
    // ===== New: Nexus-Dev Solutions Section (2 zigzag cards) =====
   solutionsForProfessionals : {
      heading: 'Nexus-Dev Solutions for Educational Institutions',
      cards: [
        {
          text: [
            {
              bulletPoints: [
                {
                  title: 'AI-Powered Booking & Reservation Systems',
                  description: 'Automate hotel, flight, and tour bookings with real-time availability and seamless user experience.',
                  icon: iconImageH1, 
                },
                {
                  title: 'Personalized Travel Experience with AI & Chatbots',
                  description: 'Secure student records, implement encrypted databases, and ensure compliance with data regulations.',
                  icon: iconImageH2,
                },
                {
                  title: 'Secure Multi-Currency Payment Solutions',
                  description: 'Modernize legacy systems with scalable cloud infrastructure for better accessibility and performance.',
                  icon: iconImageH3,
                },
                {
                  title: 'Automated Itinerary & Travel Logistics Management',
                  description: 'Develop intuitive online portals, chatbots, and self-service tools for efficient public service delivery.',
                  icon: iconImageH5,
                },
              ],
            },
          ],
          images: [SolutionImageTR1], 
        },
        
      ],
    },
   
  },
];

export default data;
