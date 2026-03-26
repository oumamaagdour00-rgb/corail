
import { Service, Stat, NewsItem } from './types';

interface TranslationData {
  nav: { [key: string]: string };
  hero: { title: string; subtitle: string; button: string };
  home: {
    introTitle: string;
    introSubtitle: string;
    introText: string;
    introList: string[];
    introButton: string;
    growthTitle: string;
    growthSubtitle: string;
    growthList: string[];
    growthFooter: string;
    figuresTitle: string;
    brandsTitle: string;
    newsTitle: string;
    newsSubtitle: string;
    newsButton: string;
    presidentTitle: string;
    presidentText: string[];
    presidentName: string;
    presidentRole: string;
  };
  about: {
    title: string;
    subtitle: string;
    profileTitle: string;
    profileText: string[];
    approachTitle: string;
    approachText: string[];
    engagementTitle: string;
    engagementText: string[];
    servicesButton: string;
  };
  services: {
    title: string;
    subtitle: string;
    whyChooseTitle: string;
    whyChooseSubtitle: string;
    metrics: { label: string; value: string }[];
    keyCapabilities: string;
    brandsButton: string;
  };
  partners: {
    title: string;
    subtitle: string;

    // Key Retail Partners Section
    keyPartnersTitle: string;
    keyPartnersSubtitle: string;
    keyPartnersList: { title: string; text: string }[];
    keyPartnersFooter: string;

    // National Coverage Section
    coverageTitle: string;
    coverageSubtitle: string;
    coverageList: { title: string; text: string }[];
    coverageFooter: string;

    // Legacy stats for map visual
    mapStats: { label: string; value: string }[];
  };
  brandsPage: {
    title: string;
    subtitle: string;
    introTitle: string;
    introText: string;
    brands: {
      [key: string]: {
        description: string;
        category: string;
      }
    };
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  catalog: {
    title: string;
    subtitle: string;
    filters: string;
    results: string;
    search: string;
    searchPlaceholder: string;
    brands: string;
    categories: string;
    reset: string;
    allProducts: string;
    itemsFound: string;
    viewDetails: string;
    noProducts: string;
    noProductsText: string;
    clearFilters: string;
  };
  contact: {
    title: string;
    headquarters: string;
    phone: string;
    email: string;
    hours: string;
    hoursText: string[];
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formButton: string;
    subjects: string[];
  };
  footer: {
    description: string;
    navigation: string;
    contact: string;
    brands: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  seo: {
    [key: string]: {
      title: string;
      description: string;
    }
  };
  data: {
    stats: Stat[];
    figures: Stat[];
    news: NewsItem[];
    services: Service[];
  };
}

export const translations: { [key: string]: TranslationData } = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      partners: 'Partners',
      brands: 'Our brands',
      contact: 'Contact',
      services: 'Our services',
      catalog: 'Catalog',
      partnerCta: 'Become a partner'
    },
    hero: {
      title: "Connecting markets to the brands that shape everyday life",
      subtitle: "With over 15 years of experience, Corail L’Océan is a key player in FMCG distribution in Morocco. We operate across the entire distributive value chain: from go-to-market to field execution, including logistical mastery, deep understanding of local dynamics, and commercial performance management. Our mission is clear: to transform distribution into a structural lever for sustainable value creation.",
      button: "Learn more"
    },
    home: {
      introTitle: "Corail",
      introSubtitle: "Corail is an FMCG distribution platform specializing in the development of brand portfolios.",
      introText: "With over 15 years of experience, Corail L’Océan is a key player in FMCG distribution in Morocco. We operate across the entire distributive value chain: from go-to-market to field execution, including logistical mastery, deep understanding of local dynamics, and commercial performance management. Our mission is clear: to transform distribution into a structural lever for sustainable value creation.",
      introList: ['Strategic Go-to-Market', 'Field Execution', 'Logistical Mastery', 'Commercial Performance'],
      introButton: "More about us",
      growthTitle: "A platform for growth, beyond distribution",
      growthSubtitle: "At Corail, distribution is not limited to product movement. We build sustainable bridges between brands, networks, and consumers through:",
      growthList: [
        'Route-to-market optimization',
        'Strategic SKU selection',
        'Logistics flow management',
        'Commercial execution based on field KPIs, driven by data',
        'Structured merchandising'
      ],
      growthFooter: "Corail also acts as a full-service provider, supporting its partners through integrated solutions covering commercial, logistical, and operational dimensions. Our approach aims to secure sell-in while supporting sell-out, through disciplined execution and intervention schemes adapted to market realities. Our commercial setups combine pre-sale and conventional sale models, deployed according to the needs and specificities of each product.",
      figuresTitle: "Key figures",
      brandsTitle: "Brands we distribute",
      newsTitle: "News",
      newsSubtitle: "Latest updates",
      newsButton: "Read article",
      presidentTitle: "Message from the president",
      presidentText: [
        "The creation of Corail is part of a clear vision: to structure a distribution platform founded on rigor and integrity.",
        "In an FMCG environment characterized by speed and intense competition, we have chosen development guided by operational exigence, commercial precision, and a long-term logic.",
        "Our ambition goes beyond simple product distribution. We are committed to accompanying the growth of our partners and the development of their brands.",
        "This requirement rests above all on our human capital — the driver of our performance."
      ],
      presidentName: "Mohammed Bouzoubaa",
      presidentRole: "President"
    },
    about: {
      title: "About Corail L’Océan",
      subtitle: "Specialized FMCG distributor in Morocco since 2010.",
      profileTitle: "About Corail L’Océan",
      profileText: [
        "Corail L’Océan SARL is a distribution company based in Casablanca, created in 2010. We are a key player in the FMCG sector, with over 10,000 m³ of warehousing facilities and a robust fleet ensuring efficient logistics and nationwide coverage.",
        "Corail also operates as a full-service provider, with an approach aimed at optimizing sell-in and sell-out performance through commercial setups integrating both pre-sale and conventional sale models, calibrated according to the specificities of each product.",
        "Our mission is to provide quality products, accompanied by reliable service, to our partners throughout the Kingdom."
      ],
      approachTitle: "Our approach",
      approachText: [
        "We operate with a structured approach, guided by Route-to-Market optimization, commercial execution discipline, mastery of multi-channel dynamics, and continuous performance management.",
        "Through the integration of advanced analytical tools, flow management systems, and intelligent tools for inventory and operations management, Corail strengthens the efficiency of its distributive architectures, optimizes operational productivity, and secures execution reliability.",
        "This systemic approach promotes end-to-end process fluidity, operational risk control, and sustainable value creation for all partners.",
        "Our role is to transform distribution into a measurable, predictable system that generates sustainable growth for the brands we accompany."
      ],
      engagementTitle: "Our engagement",
      engagementText: [
        "At Corail, we consider distribution as a strategic infrastructure for value creation. Our vision is based on a simple conviction: brand performance depends not only on their quality, but on the precision with which they are deployed in their markets.",
        "Corail accompanies brands in the structuring, deployment, and optimization of their market presence. Our mission consists of building distributive architectures adapted to field realities, optimizing sell-in and sell-out performance, and ensuring maximum market visibility while simplifying operational and logistical complexity.",
        "We intervene as a performance platform, combining commercial expertise, operational rigor, and data-driven management.",
        "Our commitment is clear: to create sustainable and measurable growth environments for our partners."
      ],
      servicesButton: "Learn more about our services"
    },
    services: {
      title: "Our services",
      subtitle: "",
      whyChooseTitle: "Why choose Corail?",
      whyChooseSubtitle: "Performance indicators that speak for themselves.",
      metrics: [
        { label: "Delivery success", value: "98%" },
        { label: "Customer satisfaction", value: "100%" },
        { label: "Active vehicles", value: "45+" }
      ],
      keyCapabilities: "Key capabilities",
      brandsButton: "Learn more about our brands"
    },
    partners: {
      title: "Network & partners",
      subtitle: "Connecting brands to every corner of the Kingdom.",

      keyPartnersTitle: "Key retail partners",
      keyPartnersSubtitle: "Trusted relationships across major wholesalers and regional sub distributors",
      keyPartnersList: [
        { title: "Wholesale partners:", text: "Key distributors in Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Meknès and more." },
        { title: "Traditional trade network:", text: "Wholesalers and retailers supplying local shops and supermarkets across Morocco" }
      ],
      keyPartnersFooter: "Corail L’Océan has built long-term partnerships with leading wholesalers, ensuring wide product availability and brand presence across the country.",

      coverageTitle: "National coverage",
      coverageSubtitle: "Nationwide reach through established distribution network",
      coverageList: [
        { title: "Cities covered:", text: "Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Meknès, Oujda, Nador, Ouarzazate and others" },
        { title: "Trade channels:", text: "Wholesale and traditional trade" },
        { title: "Logistics & infrastructure:", text: "Central warehouse located in Casablanca & Nationwide deliveries operated through our transport fleet (+40 mixed-size vehicles) and local distribution partners." }
      ],
      coverageFooter: "Our Casablanca hub enables efficient delivery and product availability throughout Morocco.",

      mapStats: [
        { label: "Major cities", value: "12+" },
        { label: "Points of sale", value: "5000+" },
        { label: "Delivery time", value: "48h" }
      ]
    },
    brandsPage: {
      title: "Distributed brands",
      subtitle: "Proudly distributing world-class portfolios across Morocco.",
      introTitle: "Official distribution partner",
      introText: "We serve as the exclusive distributor for major international brands, acting as the bridge between global manufacturers and Moroccan households.",
      brands: {
        Colgate: { description: "Global leader in oral care products, offering protection and healthy smiles for the whole family.", category: "Oral care" },
        Esemmat: { description: "Quality household products for everyday needs.", category: "Household" },
        Joyful: { description: "Advanced baby care solutions designed to provide maximum comfort and protection for infants.", category: "Baby care" },
        Soupline: { description: "France’s #1 fabric softener brand, bringing irresistible softness and long-lasting fragrance to your laundry.", category: "Laundry care" },
        Ajax: { description: "Powerful household cleaning products that ensure a sparkling clean and fresh home environment.", category: "Home care" },
        Cadum: { description: "Heritage brand specializing in gentle personal care products, respecting the natural balance of sensitive skin.", category: "Personal care" },
        Tahiti: { description: "Exotic shower gels that transport you to paradise with their tropical scents and moisturizing formulas.", category: "Personal care" },
        Holder: { description: "Reliable and eco-friendly paper solutions for everyday household needs.", category: "Paper products" },
        Joyful_Solo: { description: "Mouthwash solutions for complete oral hygiene and fresh breath confidence.", category: "Oral care" }
      },
      ctaTitle: "Partner with us",
      ctaSubtitle: "Looking for a reliable distribution partner for your brand in Morocco?",
      ctaButton: "Contact our team"
    },
    catalog: {
      title: "Product catalog",
      subtitle: "Explore our wide range of products.",
      filters: "Filters",
      results: "Results",
      search: "Search",
      searchPlaceholder: "Search products...",
      brands: "Brands",
      categories: "Categories",
      reset: "Reset filters",
      allProducts: "All products",
      itemsFound: "Items found",
      viewDetails: "View details",
      noProducts: "No products found",
      noProductsText: "Try adjusting your search or filters to find what you’re looking for.",
      clearFilters: "Clear all filters"
    },
    contact: {
      title: "Contact us",
      headquarters: "Address",
      phone: "Phone",
      email: "Email",
      hours: "Working hours",
      hoursText: ["Monday – Friday: 09:00 – 17:00"],
      formTitle: "Send us a message",
      formName: "Name",
      formEmail: "Email address",
      formSubject: "Subject",
      formMessage: "Message",
      formButton: "Send message",
      subjects: ["Partnership proposal", "General inquiry", "Career opportunity"]
    },
    footer: {
      description: "Specialized FMCG distributor in Morocco since 2010.",
      navigation: "Navigation",
      contact: "Contact",
      brands: "Top brands",
      rights: "Corail. All rights reserved.",
      privacy: "Privacy policy",
      terms: "Terms of service"
    },
    seo: {
      home: { title: "Corail | Performance-Driven Distribution", description: "Corail is an FMCG distribution platform specializing in the development of brand portfolios in Morocco." },
      about: { title: "About Us | Corail", description: "Learn more about Corail’s mission, vision, and strategic approach to distribution." },
      services: { title: "Our Services | Corail", description: "Multi-channel distribution, brand development, logistical mastery, and commercial management." },
      partners: { title: "Network & Partners | Corail", description: "Connecting brands to every corner of the Kingdom through a robust distribution network." },
      brands: { title: "Distributed Brands | Corail", description: "Official distribution partner for world-class brands like Colgate, Selpak, Joyful, and more." },
      catalog: { title: "Product Catalog | Corail", description: "Explore our extensive catalog of hygiene, baby care, and home care products." },
      contact: { title: "Contact Us | Corail", description: "Get in touch with our team for partnerships, careers, or general inquiries in Casablanca." }
    },
    data: {
      stats: [
        { value: "7 M +", label: "de foyers servis", subLabel: "quotidiennement", iconName: 'Users' },
        { value: "+15 Years", label: "Continuous growth", iconName: 'Package' },
        { value: "3,500 +", label: "Capital humain", iconName: 'DollarSign' },
      ],
      figures: [
        {
          value: "+15 Years",
          label: "Experience",
          description: "Over 15 years of operational excellence and expertise in FMCG distribution since 2010.",
          iconName: "Award"
        },

        {
          value: "10,000 M³",
          label: "Warehousing",
          description: "With over 10,000 m³ of storage capacity, our facilities are designed to support large-scale distribution.",
          iconName: "Warehouse"
        },
        {
          value: "+5,000",
          label: "Presence",
          description: "A strong presence with over 5,000 active retail touchpoints in Casablanca and beyond.",
          iconName: "Truck"
        },
      ],
      news: [
        {
          id: '1',
          date: 'January 20, 2026',
          title: 'Corail Group accompanies a historic advance',
          excerpt: 'Through its Healthcare division, Corail Group accompanies a major step in distribution...',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2',
          date: 'December 15, 2025',
          title: 'Corail Group celebrates its annual partners',
          excerpt: 'Through the Foundation, Corail celebrates the excellence and commitment of its collaborators...',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3',
          date: 'October 04, 2025',
          title: 'New strategic partnership signed',
          excerpt: 'Placed under the sign of innovation, this new alliance strengthens our presence...',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      services: [
        {
          id: '1',
          title: 'Multi-channel distribution',
          iconName: 'Truck',
          blocks: [
            { type: 'text', content: 'Channels are evolving and purchasing behaviors are fragmenting. Corail deploys a Route-to-Market architecture tailored to each channel:' },
            {
              type: 'list',
              content: [
                'Modern trade (Hypermarkets & Supermarkets)',
                'Traditional trade (Grocery & Proximity)',
                'Semi-wholesale & Structured Wholesalers',
                'Specialized circuits',
                'Emerging & Digital channels'
              ]
            },
            { type: 'text', content: 'We analyze each channel\'s dynamics to optimize:' },
            {
              type: 'list',
              content: [
                'Coverage',
                'Visit frequency',
                'Success rate',
                'Assortment depth (Average items per invoice)',
                'Stock rotation'
              ]
            },
            { type: 'footer-text', content: 'Our commercial setups integrate both conventional and pre-sale models, allowing for fine-tuned performance optimization based on needs and product type.' },
            { type: 'footer-emphasis', content: ['Our goal:', 'To ensure a consistent, profitable, and sustainable presence.'] }
          ]
        },
        {
          id: '3',
          title: 'Commercial management & field execution',
          iconName: 'Megaphone',
          blocks: [
            { type: 'text', content: 'FMCG performance relies on execution discipline.' },
            { type: 'text', content: 'Corail ensures:' },
            {
              type: 'list',
              content: [
                'Structuring of the coverage plan',
                'Sales force management',
                'Data-driven tracking of KPIs by channel',
                'Merchandising and in-store activation'
              ]
            },
            { type: 'text', content: 'Our teams operate on a data-driven logic with analytical reporting.' },
            { type: 'footer-text', content: 'Corail also acts as a full service provider, structuring integrated setups adapted to the commercial, logistical, and operational challenges of its partners.' },
            { type: 'footer-emphasis', content: ['Our goal:', 'Optimize commercial performance through disciplined execution.'] }
          ]
        },
        {
          id: '4',
          title: 'Logistical & operational mastery',
          iconName: 'Warehouse',
          blocks: [
            { type: 'text', content: 'Efficient distribution requires a robust supply chain. We coordinate:' },
            {
              type: 'list',
              content: [
                'Supply planning',
                'Management of warehousing operations',
                'Order / delivery flow synchronization',
                'Optimization of stock levels'
              ]
            },
            { type: 'emphasis', content: ['Our goal:', 'Fluidity, reliability, and risk management.'] }
          ]
        },
        {
          id: '2',
          title: 'Brand development',
          iconName: 'Handshake',
          blocks: [
            { type: 'text', content: 'We intervene upstream and downstream of launch:' },
            {
              type: 'list',
              content: [
                'Structuring of range architecture and product mix',
                'Definition of pricing and elasticity',
                'Market implementation study and entry strategy',
                'Identification of development and growth axes'
              ]
            },
            { type: 'text', content: 'We act as a development partner, moving beyond a simple distribution link.' },
            { type: 'emphasis', content: ['Our goal:', 'Structure strong brands capable of establishing themselves sustainably.'] }
          ]
        },
        {
          id: '5',
          title: 'International trade & regulatory support',
          iconName: 'CheckCircle2',
          blocks: [
            { type: 'text', content: 'Each market presents its constraints. We support our partners on:' },
            {
              type: 'list',
              content: [
                'Marketing authorization procedures (AMM)',
                'Customs clearance handling in partnership with qualified freight forwarders',
                'Assistance in product compliance with market regulatory requirements',
                'Monitoring of files in case of regulatory changes'
              ]
            },
            { type: 'emphasis', content: ['Our goal:', 'To ensure compliant, controlled, and sustainable market entry.'] }
          ]
        }
      ]
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      partners: 'Partenaires',
      brands: 'Nos marques',
      contact: 'Contact',
      services: 'Nos services',
      catalog: 'Catalogue',
      partnerCta: 'Devenez partenaire'
    },
    hero: {
      title: "Connecter les marchés aux marques qui façonnent le quotidien",
      subtitle: "Fort de plus de 15 ans d’expérience, Corail L’Océan est un acteur clé de la distribution FMCG au Maroc. Nous opérons sur l’ensemble de la chaîne de valeur distributive : du go-to-market à l’exécution terrain. Notre mission est claire : transformer la distribution en un levier structurant de création de valeur durable.",
      button: "En savoir plus"
    },
    home: {
      introTitle: "Corail",
      introSubtitle: "Corail est une plateforme de distribution FMCG spécialisée dans le développement de portefeuilles de marques.",
      introText: "Fort de plus de 15 ans d’expérience, Corail L’Océan est un acteur clé de la distribution FMCG au Maroc. Nous opérons sur l’ensemble de la chaîne de valeur distributive : du go-to-market à l’exécution terrain. Notre mission est claire : transformer la distribution en un levier structurant de création de valeur durable.",
      introList: ['Go-to-Market Stratégique', 'Exécution Terrain', 'Maîtrise Logistique', 'Pilotage de la Performance'],
      introButton: "En savoir plus",
      growthTitle: "Une plateforme de croissance, au-delà de la distribution",
      growthSubtitle: "Chez Corail, la distribution ne se limite pas à la circulation des produits. Nous construisons des passerelles durables entre marques, réseaux et consommateurs grâce à :",
      growthList: [
        'Une optimisation du Route-to-Market',
        'Une sélection stratégique des SKUs',
        'Une maîtrise des flux logistiques',
        'Une exécution commerciale basée sur des KPI terrain, portée par un pilotage data-driven',
        'Un merchandising structuré'
      ],
      growthFooter: "Corail agit également en tant que full service provider, accompagnant ses partenaires à travers des dispositifs intégrés couvrant les dimensions commerciales, logistiques et opérationnelles. Notre approche vise à sécuriser le sell-in tout en soutenant le sell-out, grâce à une exécution disciplinée. Nos dispositifs commerciaux combinent des modèles de pré-vente et de vente conventionnelle, déployés en fonction des besoins et des spécificités propres à chaque produit.",
      figuresTitle: "Chiffres clés",
      brandsTitle: "Marques distribuées",
      newsTitle: "Actualités",
      newsSubtitle: "Dernières mises à jour",
      newsButton: "Lire l’article",
      presidentTitle: "Mot du président",
      presidentText: [
        "La création de Corail s’inscrit dans une vision claire : structurer une plateforme de distribution fondée sur la rigueur et l’intégrité.",
        "Dans un environnement FMCG caractérisé par la rapidité et l’intensité concurrentielle, nous avons fait le choix d’un développement guidé par l’exigence opérationnelle, la précision commerciale et une logique de long terme.",
        "Notre ambition dépasse la simple distribution de produits. Nous nous attachons à accompagner la croissance de nos partenaires et le développement de leurs marques.",
        "Cette exigence repose avant tout sur notre capital humain — moteur de notre performance."
      ],
      presidentName: "Mohammed Bouzoubaa",
      presidentRole: "Président"
    },
    about: {
      title: "À propos de Corail L’Océan",
      subtitle: "Distributeur spécialisé en FMCG au Maroc depuis 2010",
      profileTitle: "À propos de Corail L’Océan",
      profileText: [
        "Corail L’Océan SARL est une société de distribution basée à Casablanca, créée en 2010. Nous sommes un acteur clé du secteur FMCG, avec plus de 10 000 m³ d’installations de stockage et une flotte robuste assurant une logistique efficace et une couverture nationale.",
        "Corail opère également en tant que full service provider, avec une approche visant à optimiser la performance du sell-in et du sell-out grâce à des dispositifs commerciaux intégrant aussi bien des modèles de pré-vente que de vente conventionnelle, calibrés selon les spécificités de chaque produit.",
        "Notre mission est de fournir des produits de qualité, accompagnés d’un service fiable, à nos partenaires à travers l’ensemble du Royaume."
      ],
      approachTitle: "Notre approche",
      approachText: [
        "Nous opérons avec une approche structurée, guidée par l’optimisation du Route-to-Market, la discipline d’exécution commerciale, la maîtrise des dynamiques multi-canales et le pilotage continu de la performance.",
        "À travers l’intégration de dispositifs analytiques avancés, de systèmes de pilotage des flux et d’outils intelligents de gestion des stocks et des opérations, Corail renforce l’efficacité de ses architectures distributives, optimise la productivité opérationnelle et sécurise la fiabilité de l’exécution.",
        "Cette approche systémique favorise la fluidité des processus end-to-end, la maîtrise des risques opérationnels et la création de valeur durable pour l’ensemble des partenaires.",
        "Notre rôle est de transformer la distribution en un système mesurable, prévisible et générateur de croissance durable pour les marques que nous accompagnons."
      ],
      engagementTitle: "Notre engagement",
      engagementText: [
        "Chez Corail, nous considérons la distribution comme une infrastructure stratégique de création de valeur. Notre vision repose sur une conviction simple : la performance des marques ne dépend pas uniquement de leur qualité, mais de la précision avec laquelle elles sont déployées sur leurs marchés.",
        "Corail accompagne les marques dans la structuration, le déploiement et l’optimisation de leur présence marché. Notre mission consiste à construire des architectures distributives adaptées aux réalités terrain, à optimiser la performance du sell-in et du sell-out et à assurer un maximum de visibilité marché tout en simplifiant la complexité opérationnelle et logistique.",
        "Nous intervenons comme une plateforme de performance, combinant expertise commerciale, rigueur opérationnelle et pilotage data-driven.",
        "Notre engagement est clair : créer des environnements de croissance durables et mesurables pour nos partenaires."
      ],
      servicesButton: "En savoir plus sur nos services"
    },
    services: {
      title: "Nos services",
      subtitle: "",
      whyChooseTitle: "Pourquoi choisir Corail ?",
      whyChooseSubtitle: "Des indicateurs de performance qui parlent d’eux-mêmes.",
      metrics: [
        { label: "Réussite de livraison", value: "98%" },
        { label: "Satisfaction client", value: "100%" },
        { label: "Véhicules actifs", value: "45+" }
      ],
      keyCapabilities: "Capacités clés",
      brandsButton: "En savoir plus sur nos marques"
    },
    partners: {
      title: "Réseau & partenaires",
      subtitle: "Connecter les marques à chaque coin du Royaume.",

      keyPartnersTitle: "Partenaires clés",
      keyPartnersSubtitle: "Relations de confiance avec les principaux grossistes et sous-distributeurs régionaux",
      keyPartnersList: [
        { title: "Partenaires grossistes :", text: "Distributeurs clés à Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Meknès et plus." },
        { title: "Réseau traditionnel :", text: "Grossistes et détaillants approvisionnant les locaux et supermarchés à travers le Maroc" }
      ],
      keyPartnersFooter: "Corail L’Océan a établi des partenariats à long terme avec les principaux grossistes, assurant une large disponibilité des produits et une présence de marque à travers le pays.",

      coverageTitle: "Couverture nationale",
      coverageSubtitle: "Portée nationale grâce à un réseau de distribution établi",
      coverageList: [
        { title: "Villes couvertes :", text: "Casablanca, Rabat, Marrakech, Agadir, Fès, Tanger, Meknès, Oujda, Nador, Ouarzazate et autres" },
        { title: "Canaux commerciaux :", text: "Gros et commerce traditionnel" },
        { title: "Logistique & infrastructure :", text: "Entrepôt central situé à Casablanca & livraisons nationales opérées via notre flotte (+40 véhicules) et partenaires locaux." }
      ],
      coverageFooter: "Notre hub de Casablanca permet une livraison efficace et une disponibilité des produits partout au Maroc.",

      mapStats: [
        { label: "Grandes villes", value: "12+" },
        { label: "Points de vente", value: "5000+" },
        { label: "Délai de livraison", value: "48h" }
      ]
    },
    brandsPage: {
      title: "Marques distribuées",
      subtitle: "Distribution de portefeuilles de classe mondiale à travers le Maroc.",
      introTitle: "Partenaire de distribution officiel",
      introText: "Nous servons de distributeur exclusif pour de grandes marques internationales, servant de pont entre les fabricants mondiaux et les foyers marocains.",
      brands: {
        Colgate: { description: "Leader mondial des produits d’hygiène bucco-dentaire, offrant protection et sourires sains pour toute la famille.", category: "Hygiène bucco-dentaire" },
        Palmolive: { description: "Marque de soins personnels de confiance offrant des gels douche doux et des produits de soin de la peau.", category: "Soins personnels" },        Esemmat: { description: "Produits ménagers de qualité pour les besoins quotidiens.", category: "Maison" },
        Joyful: { description: "Solutions de soins pour bébés avancées conçues pour offrir un confort et une protection maximaux aux nourrissons.", category: "Soins bébé" },
        Soupline: { description: "Marque n°1 d’adoucissant en France, apportant une douceur irrésistible et un parfum durable à votre linge.", category: "Soin du linge" },
        Ajax: { description: "Produits de nettoyage ménager puissants qui assurent un environnement domestique étincelant de propreté et de fraîcheur.", category: "Entretien maison" },
        Cadum: { description: "Marque patrimoniale spécialisée dans les produits de soins personnels doux, respectant l'équilibre naturel des peaux sensibles.", category: "Soins personnels" },
        Tahiti: { description: "Gels douche exotiques qui vous transportent au paradis avec leurs parfums tropicaux et formules hydratantes.", category: "Soins personnels" },
        Holder: { description: "Solutions papier fiables et écologiques pour les besoins quotidiens de la maison.", category: "Produits papier" },
        Joyful_Solo: { description: "Solutions de bain de bouche pour une higiene bucco-dentaire complète et une confiance en son haleine.", category: "Hygiène bucco-dentaire" }
      },
      ctaTitle: "Devenez partenaire",
      ctaSubtitle: "Vous cherchez un partenaire de distribution fiable pour votre marque au Maroc ?",
      ctaButton: "Contactez notre équipe"
    },
    catalog: {
      title: "Catalogue produits",
      subtitle: "Explorez notre large gamme de produits.",
      filters: "Filtres",
      results: "Résultats",
      search: "Recherche",
      searchPlaceholder: "Rechercher des produits...",
      brands: "Marques",
      categories: "Catégories",
      reset: "Réinitialiser",
      allProducts: "Tous les produits",
      itemsFound: "Articles trouvés",
      viewDetails: "Voir détails",
      noProducts: "Aucun produit trouvé",
      noProductsText: "Essayez d’ajuster votre recherche ou vos filtres pour trouver ce que vous cherchez.",
      clearFilters: "Effacer tous les filtres"
    },
    contact: {
      title: "Contactez-nous",
      headquarters: "Adresse",
      phone: "Téléphone",
      email: "Email",
      hours: "Heures d’ouverture",
      hoursText: ["Lundi – Vendredi : 09:00 – 17:00"],
      formTitle: "Envoyez-nous un message",
      formName: "Nom",
      formEmail: "Adresse de messagerie",
      formSubject: "Sujet",
      formMessage: "Message",
      formButton: "Envoyer le message",
      subjects: ["Proposition de partenariat", "Demande générale", "Opportunité de carrière"]
    },
    footer: {
      description: "Distributeur spécialisé en FMCG au Maroc depuis 2010.",
      navigation: "Navigation",
      contact: "Contact",
      brands: "Top marques",
      rights: "Corail. Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation"
    },
    seo: {
      home: { title: "Corail | Performance-Driven Distribution", description: "Corail est une plateforme de distribution FMCG spécialisée dans le développement de portefeuilles de marques au Maroc." },
      about: { title: "À Propos | Corail", description: "Découvrez la mission, la vision et l’approche stratégique de Corail, distributeur leader au Maroc." },
      services: { title: "Nos Services | Corail", description: "Distribution multi-canale, développement de marques, maîtrise logistique et pilotage commercial." },
      partners: { title: "Réseau & Partenaires | Corail", description: "Connecter les marques à chaque coin du Royaume grâce à un réseau de distribution robuste." },
      brands: { title: "Marques Distribuées | Corail", description: "Partenaire de distribution officiel de marques mondiales comme Colgate, Selpak, Joyful, etc." },
      catalog: { title: "Catalogue Produits | Corail", description: "Explorez notre vaste catalogue de produits d’hygiène, de soins pour bébés et d’entretien." },
      contact: { title: "Contactez-Nous | Corail", description: "Contactez notre équipe pour des partenariats, des carrières ou des demandes générales à Casablanca." }
    },
    data: {
      stats: [
        { value: "7 M +", label: "de foyers servis", subLabel: "quotidiennement", iconName: 'Users' },
        { value: "15+ Ans", label: "de croissance continue", iconName: 'Package' },
        { value: "3,500 +", label: "Capital humain", iconName: 'DollarSign' },
      ],
      figures: [
        {
          value: "+15 Ans",
          label: "D’expérience",
          description: "Plus de 15 ans d’excellence opérationnelle et d’expertise dans la distribution FMCG depuis 2010.",
          iconName: "Award"
        },

        {
          value: "10 000 m³",
          label: "Stockage",
          description: "Avec plus de 10 000 m³ de capacité de stockage, nos installations sont conçues pour soutenir une distribution à grande échelle.",
          iconName: "Warehouse"
        },
        {
          value: "+5 000",
          label: "Présence multi-canal",
          description: "Une forte présence avec plus de 5 000 points de vente actifs à Casablanca et au-delà.",
          iconName: "Truck"
        },
      ],
      news: [
        {
          id: '1',
          date: 'Janvier 20, 2026',
          title: 'Corail Group accompagne une avancée historique',
          excerpt: 'À travers son pôle Healthcare, Corail Group accompagne une étape majeure dans la distribution...',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2',
          date: 'Décembre 15, 2025',
          title: 'Corail Group célèbre ses partenaires annuels',
          excerpt: 'À travers la Fondation, Corail célèbre l\'excellence et l\'engagement de ses collaborateurs...',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3',
          date: 'Octobre 04, 2025',
          title: 'Nouveau partenariat stratégique signé',
          excerpt: 'Placée sous le signe de l\'innovation, cette nouvelle alliance renforce notre présence...',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      services: [
        {
          id: '1',
          title: 'Distribution multi-canale',
          iconName: 'Truck',
          blocks: [
            { type: 'text', content: 'Les circuits évoluent et les comportements d’achat se fragmentent. Corail déploie une architecture Route-to-Market adaptée à chaque canal :' },
            {
              type: 'list',
              content: [
                'Grandes et moyennes surfaces',
                'Commerce traditionnel (épiceries, proximité)',
                'Demi-gros & grossistes structurés',
                'Circuits spécialisés',
                'Canaux émergents et digitaux'
              ]
            },
            { type: 'text', content: 'Nous analysons les dynamiques de chaque canal afin d optimiser :' },
            {
              type: 'list',
              content: [
                'La couverture',
                'La fréquence de visite',
                'Le taux de succès',
                'La profondeur d\'assortiment (nombre de lignes moyen par facture)',
                'La rotation des stocks'
              ]
            },
            { type: 'footer-text', content: 'Nos dispositifs commerciaux intègrent aussi bien des modèles de vente conventionnelle que de pré-vente, permettant une optimisation fine de la couverture et de la performance terrain en fonction des besoins et du type de produit.' },
            { type: 'footer-emphasis', content: ['Notre objectif :', 'Garantir une présence cohérente, rentable et durable.'] }
          ]
        },
        {
          id: '3',
          title: 'Gestion commerciale & exécution terrain',
          iconName: 'Megaphone',
          blocks: [
            { type: 'text', content: 'La performance FMCG repose sur la discipline d\'exécution.' },
            { type: 'text', content: 'Corail assure :' },
            {
              type: 'list',
              content: [
                'Structuration du plan de couverture',
                'Pilotage des forces de vente',
                'Suivi data-driven des KPIs par canal',
                'Merchandising et activation en magasin'
              ]
            },
            { type: 'text', content: 'Nos équipes opèrent selon une logique data-driven intégrant un reporting analytique.' },
            { type: 'footer-text', content: 'Corail intervient également comme full service provider, en structurant des dispositifs intégrés adaptés aux enjeux commerciaux, logistiques et opérationnels de ses partenaires.' },
            { type: 'footer-emphasis', content: ['Notre objectif :', 'Optimiser la performance commerciale par une exécution disciplinée.'] }
          ]
        },
        {
          id: '4',
          title: 'Maîtrise logistique & opérationnelle',
          iconName: 'Warehouse',
          blocks: [
            { type: 'text', content: 'Une distribution performante nécessite une supply chain robuste. Nous coordonnons :' },
            {
              type: 'list',
              content: [
                'Planification des approvisionnements',
                'Pilotage des opérations d\'entreposage',
                'Synchronisation des flux commandes / livraisons',
                'Optimisation des niveaux de stock'
              ]
            },
            { type: 'emphasis', content: ['Notre objectif :', 'Disponibilité, réactivité et maîtrise du risque.'] }
          ]
        },
        {
          id: '2',
          title: 'Développement de marques',
          iconName: 'Handshake',
          blocks: [
            { type: 'text', content: 'Nous intervenons en amont et en aval du lancement :' },
            {
              type: 'list',
              content: [
                'Structuration de l\'architecture de gamme et du mix produit',
                'Définition du pricing et de l\'élasticité',
                'Étude d\'implantation et stratégie d\'entrée marché',
                'Identification des axes de développement et de croissance'
              ]
            },
            { type: 'text', content: 'Nous agissons comme un partenaire de développement, au-delà du simple relais distributif.' },
            { type: 'emphasis', content: ['Notre objectif :', 'Structurer des marques solides capables de s\'imposer durablement.'] }
          ]
        },
        {
          id: '5',
          title: 'Commerce international et accompagnement réglementaire',
          iconName: 'CheckCircle2',
          blocks: [
            { type: 'text', content: 'Chaque marché présente ses contraintes. Nous accompagnons nos partenaires sur :' },
            {
              type: 'list',
              content: [
                'Procédures d\'obtention d\'autorisation de mise sur le marché (AMM)',
                'Prise en charge du dédouanement en partenariat avec des transitaires qualifiés',
                'Aide à la mise en conformité des produits avec les exigences réglementaires du marché',
                'Suivi des dossiers en cas d\'évolution réglementaire'
              ]
            },
            { type: 'emphasis', content: ['Notre objectif :', 'Garantir une mise en marché conforme, maîtrisée et durable.'] }
          ]
        }
      ]
    }
  },
  ar: {
  nav: {
    home: 'الرئيسية',
    about: 'من نحن',
    partners: 'الشركاء',
    brands: 'علاماتنا التجارية',
    contact: 'اتصل بنا',
    services: 'خدماتنا',
    catalog: 'الكتالوج',
    partnerCta: 'كن شريكاً'
  },
  hero: {
    title: "ربط الأسواق بالعلامات التجارية التي تشكّل تفاصيل الحياة اليومية",
    subtitle: "بخبرة تتجاوز 15 عاماً، تُعدّ كوراي لوسيان فاعلاً رئيسياً في مجال توزيع السلع الاستهلاكية سريعة التداول في المغرب. نعمل على مختلف مراحل سلسلة القيمة في التوزيع: من استراتيجيات الدخول إلى السوق وتنفيذ العمليات ميدانياً، مروراً بإدارة لوجستية متقنة وفهم عميق لديناميكيات الأسواق المحلية، وصولاً إلى قيادة الأداء التجاري بكفاءة. مهمتنا واضحة: تحويل التوزيع إلى رافعة استراتيجية لخلق قيمة مستدامة.",
    button: "اكتشف المزيد"
  },
  home: {
    introTitle: "كوراي",
    introSubtitle: "كوراي منصة متخصصة في توزيع السلع الاستهلاكية سريعة التداول، تركز على تطوير محافظ العلامات التجارية.",
    introText: "بخبرة تمتد لأكثر من 15 عاماً، تُعدّ كوراي لوسيان فاعلاً محورياً في قطاع توزيع السلع الاستهلاكية سريعة التداول في المغرب. نعمل عبر مختلف مراحل سلسلة القيمة في التوزيع: من استراتيجيات الدخول إلى السوق وتنفيذ العمليات على أرض الواقع، مروراً بإدارة لوجستية فعّالة وفهم دقيق لديناميكيات الأسواق المحلية، وصولاً إلى قيادة الأداء التجاري بكفاءة عالية. رسالتنا واضحة: تحويل التوزيع إلى ركيزة أساسية لخلق قيمة مستدامة.",
    introList: ['استراتيجية دخول السوق', 'التنفيذ الميداني', 'إدارة لوجستية متقنة', 'قيادة الأداء'],
    introButton: "اكتشف المزيد",
    growthTitle: "منصة للنمو تتجاوز مفهوم التوزيع",
    growthSubtitle: "في كوراي، لا يقتصر التوزيع على مجرد نقل المنتجات، بل نعمل على بناء جسور مستدامة بين العلامات التجارية وشبكات التوزيع والمستهلكين من خلال:",
    growthList: [
      'تحسين استراتيجية الوصول إلى السوق',
      'اختيار استراتيجي دقيق للمنتجات (SKU)',
      'إدارة محكمة للتدفقات اللوجستية',
      'تنفيذ تجاري قائم على مؤشرات أداء ميدانية مع قيادة تعتمد على تحليل البيانات',
      'عرض وتسويق منظم داخل نقاط البيع'
    ],
      growthFooter: "تعمل كوراي أيضًا كمزوّد خدمات متكامل، حيث ترافق شركاءها عبر منظومات متكاملة تشمل الجوانب التجارية واللوجستية والتشغيلية. ويهدف نهجنا إلى تأمين عمليات البيع للموزعين (Sell-in) مع دعم المبيعات لدى المستهلك النهائي (Sell-out)، من خلال تنفيذ منضبط وفعّال. كما تجمع منظوماتنا التجارية بين نماذج البيع المسبق والبيع التقليدي، ويتم اعتمادها وفقًا لاحتياجات وخصوصيات كل منتج.",
      figuresTitle: "الأرقام الرئيسية",
      brandsTitle: "العلامات التجارية الموزعة",
      newsTitle: "الأخبار",
      newsSubtitle: "آخر المستجدات",
      newsButton: "اقرأ المقال",
      presidentTitle: "كلمة الرئيس",
      presidentText: [
        "جاء تأسيس كوراي انطلاقًا من رؤية واضحة تتمثل في بناء منصة توزيع قائمة على الانضباط والنزاهة.",
        "وفي بيئة السلع الاستهلاكية سريعة التداول التي تتسم بالسرعة وحدّة المنافسة، اخترنا مسار نمو يقوم على التميّز التشغيلي والدقة التجارية ورؤية استراتيجية بعيدة المدى.",
        "طموحنا يتجاوز مجرد توزيع المنتجات؛ إذ نحرص على دعم نمو شركائنا وتعزيز حضور علاماتهم التجارية.",
        "ويستند هذا الالتزام قبل كل شيء إلى رأس مالنا البشري، الذي يشكّل المحرك الأساسي لأدائنا."
      ],
      presidentName: "محمد بوزوبع",
      presidentRole: "الرئيس"
    },
    about: {
    title: "حول كوراي لوسيان",
    subtitle: "موزّع متخصص في السلع الاستهلاكية سريعة التداول في المغرب منذ عام 2010",
    profileTitle: "حول كوراي لوسيان",
    profileText: [
      "كوراي لوسيان ش.ذ.م.م هي شركة توزيع مقرها الدار البيضاء، تأسست سنة 2010. وتُعد اليوم فاعلاً رئيسياً في قطاع السلع الاستهلاكية سريعة التداول، بفضل بنية لوجستية متطورة تضم أكثر من 10,000 متر مكعب من مرافق التخزين، إلى جانب أسطول نقل متكامل يضمن كفاءة العمليات اللوجستية وتغطية على المستوى الوطني.",
      "كما تعمل كوراي كمزوّد خدمات متكامل، من خلال مقاربة تهدف إلى تحسين أداء عمليات البيع للموزعين (Sell-in) ودعم المبيعات لدى المستهلك النهائي (Sell-out)، عبر منظومات تجارية تجمع بين نماذج البيع المسبق والبيع التقليدي، ويتم تكييفها وفق خصوصيات كل منتج.",
      "تتمثل مهمتنا في توفير منتجات عالية الجودة مصحوبة بخدمة موثوقة لشركائنا عبر مختلف جهات المملكة."
    ],
    approachTitle: "مقاربتنا",
    approachText: [
      "نعتمد مقاربة منظمة تقوم على تحسين استراتيجية الوصول إلى السوق (Route-to-Market)، والانضباط في التنفيذ التجاري، وإتقان إدارة القنوات المتعددة، إلى جانب المتابعة المستمرة للأداء.",
      "ومن خلال دمج أدوات تحليل متقدمة، وأنظمة متطورة لإدارة تدفقات العمليات، وحلول ذكية لإدارة المخزون والأنشطة التشغيلية، تعمل كوراي على تعزيز كفاءة بنياتها التوزيعية، وتحسين الإنتاجية التشغيلية، وضمان موثوقية التنفيذ.",
      "تسهم هذه المقاربة المنهجية في تحقيق انسيابية العمليات من البداية إلى النهاية، والحد من المخاطر التشغيلية، وخلق قيمة مستدامة لجميع الشركاء.",
      "ويتمثل دورنا في تحويل التوزيع إلى منظومة قابلة للقياس والتوقع، وقادرة على توليد نمو مستدام للعلامات التجارية التي نواكبها."
    ],
    engagementTitle: "التزامنا",
    engagementText: [
      "في كوراي، نعتبر التوزيع بنية استراتيجية أساسية لخلق القيمة. وترتكز رؤيتنا على قناعة واضحة مفادها أن أداء العلامات التجارية لا يعتمد فقط على جودة منتجاتها، بل أيضاً على دقة انتشارها وتنفيذها داخل الأسواق.",
      "تواكب كوراي العلامات التجارية في هيكلة حضورها في السوق ونشره وتحسينه. وتتمثل مهمتنا في بناء منظومات توزيع تتلاءم مع واقع الميدان، وتحسين أداء عمليات البيع للموزعين (Sell-in) ودعم المبيعات لدى المستهلك النهائي (Sell-out)، مع ضمان أقصى درجات الحضور في السوق وتبسيط التعقيد التشغيلي واللوجستي.",
      "نحن نعمل كمنصة أداء تجمع بين الخبرة التجارية والانضباط التشغيلي والقيادة المعتمدة على تحليل البيانات.",
      "التزامنا واضح: خلق بيئات نمو مستدامة وقابلة للقياس لشركائنا."
    ],
    servicesButton: "تعرف أكثر على خدماتنا"
  },
    services: {
      title: "خدماتنا",
      subtitle: "",
      whyChooseTitle: "لماذا اختيار كوراي؟",
      whyChooseSubtitle: "مؤشرات أداء تعكس كفاءتنا بوضوح.",
      metrics: [
        { label: "نسبة نجاح التسليم", value: "98%" },
        { label: "رضا العملاء", value: "100%" },
        { label: "المركبات النشطة", value: "45+" }
      ],
      keyCapabilities: "القدرات الرئيسية",
      brandsButton: "تعرف أكثر على علاماتنا التجارية"
    },
    partners: {
      title: "الشبكة والشركاء",
      subtitle: "ربط العلامات التجارية بكل أنحاء المملكة.",
      keyPartnersTitle: "الشركاء الرئيسيون",
      keyPartnersSubtitle: "علاقات قائمة على الثقة مع أبرز تجار الجملة والموزعين الفرعيين على المستوى الجهوي",
      keyPartnersList: [
        { title: "شركاء الجملة:", text: "موزعون رئيسيون في الدار البيضاء، الرباط، مراكش، أكادير، فاس، طنجة، مكناس وغيرها." },
        { title: "الشبكة التقليدية:", text: "تجار الجملة وتجار التجزئة الذين يزوّدون المتاجر والأسواق المحلية في مختلف أنحاء المغرب." }
      ],
      keyPartnersFooter: "قامت كوراي لوسيان ببناء شراكات طويلة الأمد مع أبرز تجار الجملة.",
      coverageTitle: "تغطية وطنية",
      coverageSubtitle: "انتشار وطني بفضل شبكة توزيع راسخة",
      coverageList: [
        { title: "المدن المشمولة:", text: "الدار البيضاء، الرباط، مراكش، أكادير، فاس، طنجة، مكناس، وجدة، الناظور، ورزازات وغيرها." },
        { title: "القنوات التجارية:", text: "تجارة الجملة والتجارة التقليدية." },
        { title: "اللوجستيك والبنية التحتية:", text: "مستودع مركزي في الدار البيضاء مع خدمات توصيل على الصعيد الوطني." }
      ],
      coverageFooter: "يتيح مركزنا اللوجستي في الدار البيضاء عمليات تسليم فعّالة وتوفّر المنتجات في مختلف أنحاء المغرب.",
      mapStats: [
        { label: "المدن الرئيسية", value: "12+" },
        { label: "نقاط البيع", value: "5000+" },
        { label: "مدة التسليم", value: "48h" }
      ]
    },
    brandsPage: {
      title: "العلامات التجارية الموزعة",
      subtitle: "نفخر بتوزيع محافظ من العلامات التجارية العالمية عبر مختلف أنحاء المغرب.",
      introTitle: "شريك التوزيع الرسمي",
      introText: "نؤدي دور الموزع الحصري لعدد من أبرز العلامات التجارية الدولية.",
      brands: {
        Colgate: { description: "رائد عالمي في منتجات العناية بصحة الفم.", category: "العناية بالفم والأسنان" },
        Esemmat: { description: "منتجات منزلية عالية الجودة.", category: "المنزل" },
        Joyful: { description: "حلول متقدمة للعناية بالأطفال الرضع.", category: "العناية بالرضع" },
        Soupline: { description: "العلامة الأولى في فرنسا في مجال منعمات الأقمشة.", category: "العناية بالغسيل" },
        Ajax: { description: "منتجات فعّالة لتنظيف المنزل.", category: "العناية بالمنزل" },
        Cadum: { description: "علامة عريقة متخصصة في منتجات العناية الشخصية اللطيفة.", category: "العناية الشخصية" },
        Tahiti: { description: "جل استحمام بروائح استوائية منعشة.", category: "العناية الشخصية" },
        Holder: { description: "حلول ورقية موثوقة وصديقة للبيئة.", category: "المنتجات الورقية" },
        Joyful_Solo: { description: "محاليل غسول الفم لضمان نظافة فموية متكاملة.", category: "العناية بالفم والأسنان" }
      },
      ctaTitle: "كن شريكًا لنا",
      ctaSubtitle: "هل تبحث عن شريك توزيع موثوق لعلامتك التجارية في المغرب؟",
      ctaButton: "تواصل مع فريقنا"
    },
    catalog: {
      title: "كتالوج المنتجات",
      subtitle: "استكشف مجموعتنا الواسعة من المنتجات.",
      filters: "الفلاتر",
      results: "النتائج",
      search: "بحث",
      searchPlaceholder: "ابحث عن المنتجات...",
      brands: "العلامات التجارية",
      categories: "الفئات",
      reset: "إعادة التعيين",
      allProducts: "جميع المنتجات",
      itemsFound: "عدد المنتجات",
      viewDetails: "عرض التفاصيل",
      noProducts: "لم يتم العثور على أي منتجات",
      noProductsText: "حاول تعديل البحث أو الفلاتر للعثور على ما تبحث عنه.",
      clearFilters: "مسح جميع الفلاتر"
    },
    contact: {
      title: "اتصل بنا",
      headquarters: "العنوان",
      phone: "الهاتف",
      email: "البريد الإلكتروني",
      hours: "ساعات العمل",
      hoursText: ["الاثنين – الجمعة : 09:00 – 17:00"],
      formTitle: "أرسل لنا رسالة",
      formName: "الاسم",
      formEmail: "عنوان البريد الإلكتروني",
      formSubject: "الموضوع",
      formMessage: "الرسالة",
      formButton: "إرسال الرسالة",
      subjects: ["اقتراح شراكة", "استفسار عام", "فرصة عمل"]
    },
    footer: {
    description: "موزّع متخصص في السلع الاستهلاكية سريعة التداول في المغرب منذ عام 2010",
    navigation: "التنقل",
    contact: "اتصل بنا",
    brands: "أبرز العلامات التجارية",
    rights: "كوراي. جميع الحقوق محفوظة.",
    privacy: "سياسة الخصوصية",
    terms: "شروط الاستخدام"
  },
    seo: {
      home: { 
        title: "كوراي | التوزيع القائم على الأداء", 
        description: "كوراي منصة توزيع للسلع الاستهلاكية سريعة التداول متخصصة في تطوير محافظ العلامات التجارية في المغرب." 
      },
      about: { 
        title: "من نحن | كوراي", 
        description: "اكتشف رسالة كوراي ورؤيتها ومقاربتها الاستراتيجية كشركة توزيع رائدة في المغرب." 
      },
      services: { 
        title: "خدماتنا | كوراي", 
        description: "توزيع متعدد القنوات، تطوير العلامات التجارية، إدارة لوجستية متقدمة وقيادة الأداء التجاري." 
      },
      partners: { 
        title: "الشبكة والشركاء | كوراي", 
        description: "ربط العلامات التجارية بمختلف أنحاء المملكة عبر شبكة توزيع قوية وموثوقة." 
      },
      brands: { 
        title: "العلامات التجارية الموزعة | كوراي", 
        description: "شريك التوزيع الرسمي لعلامات عالمية مثل كولغيت، سيلباك، جويفل وغيرها." 
      },
      catalog: { 
        title: "كتالوج المنتجات | كوراي", 
        description: "استكشف مجموعتنا الواسعة من منتجات النظافة والعناية بالرضع والعناية المنزلية." 
      },
      contact: { 
        title: "اتصل بنا | كوراي", 
        description: "تواصل مع فريقنا في الدار البيضاء بخصوص الشراكات أو فرص العمل أو الاستفسارات العامة." 
      }
    },
    data: {
    stats: [
        { value: "+7 M", label: "من الأسر التي يتم خدمتها", subLabel: "يوميًا", iconName: 'Users' },
        { value: "+15 عامًا", label: "نمو متواصل", iconName: 'Package' },
        { value: "+3,500", label: "رأس المال البشري", iconName: 'DollarSign' },
      ],
    figures: [
      {
        value: "+15 عامًا",
        label: "الخبرة",
        description: "أكثر من 15 عامًا من التميز التشغيلي والخبرة في مجال توزيع السلع الاستهلاكية سريعة التداول منذ عام 2010.",
        iconName: "Award"
      },
      {
        value: "10,000 م³",
        label: "التخزين",
        description: "بقدرة تخزين تتجاوز 10,000 متر مكعب، صُمِّمت منشآتنا لدعم عمليات توزيع واسعة النطاق.",
        iconName: "Warehouse"
      },
      {
        value: "+5,000",
        label: "الحضور في السوق",
        description: "حضور قوي من خلال أكثر من 5,000 نقطة بيع نشطة في الدار البيضاء وما بعدها.",
        iconName: "Truck"
      },
      ],
      news: [
        {
          id: '1',
          date: '20 يناير 2026',
          title: 'مجموعة كوراي تواكب إنجازًا تاريخيًا',
          excerpt: 'من خلال قطب الرعاية الصحية، تواكب مجموعة كوراي خطوة بارزة في مجال التوزيع...',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '2',
          date: '15 ديسمبر 2025',
          title: 'مجموعة كوراي تحتفي بشركائها السنويين',
          excerpt: 'من خلال مؤسستها، تحتفي كوراي بالتميز وروح الالتزام لدى شركائها ومتعاونيها...',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
          id: '3',
          date: '04 أكتوبر 2025',
          title: 'توقيع شراكة استراتيجية جديدة',
          excerpt: 'تحت شعار الابتكار، يعزز هذا التحالف الجديد حضورنا في السوق...',
          image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
      ],
      services: [
        {
          id: '1',
          title: 'التوزيع متعدد القنوات',
          iconName: 'Truck',
          blocks: [
            { type: 'text', content: 'تشهد قنوات التوزيع تطورًا مستمرًا، كما تتزايد تجزئة سلوكيات الشراء لدى المستهلكين. تعتمد كوراي بنية Route-to-Market مصممة خصيصًا لكل قناة توزيع:' },
            {
              type: 'list',
              content: [
                'التجارة الحديثة (الهايبرماركت والسوبرماركت)',
                'التجارة التقليدية (البقالات ومتاجر القرب)',
                'شبه الجملة وتجار الجملة المنظمون',
                'القنوات المتخصصة',
                'القنوات الناشئة والرقمية'
              ]
            },
            { type: 'text', content: 'نقوم بتحليل ديناميكيات كل قناة بهدف تحسين:' },
            {
              type: 'list',
              content: [
                'نطاق التغطية',
                'وتيرة الزيارات',
                'نسبة النجاح',
                'عمق التشكيلة (متوسط عدد المنتجات في الفاتورة)',
                'معدل دوران المخزون'
              ]
            },
            { type: 'footer-text', content: 'تعتمد منظوماتنا التجارية على نماذج البيع التقليدي والبيع المسبق، بما يتيح تحسين الأداء بدقة وفق احتياجات كل منتج وطبيعة السوق.' },
            { type: 'footer-emphasis', content: ['هدفنا:', 'ضمان حضور متماسك ومربح ومستدام في السوق.'] }
          ]
        },
        {
          id: '3',
          title: 'الإدارة التجارية والتنفيذ الميداني',
          iconName: 'Megaphone',
          blocks: [
            { type: 'text', content: 'تعتمد كفاءة قطاع السلع الاستهلاكية سريعة التداول على الانضباط في التنفيذ.' },
            { type: 'text', content: 'تتولى كوراي ضمان ما يلي:' },
            {
              type: 'list',
              content: [
                'هيكلة خطة التغطية السوقية',
                'إدارة فرق المبيعات',
                'متابعة مؤشرات الأداء الرئيسية (KPI) لكل قناة اعتمادًا على تحليل البيانات',
                'تنفيذ أنشطة العرض والترويج داخل نقاط البيع'
              ]
            },
            { type: 'text', content: 'تعمل فرقنا وفق منهجية قائمة على تحليل البيانات، مدعومة بتقارير تحليلية دقيقة.' },
            { type: 'footer-text', content: 'كما تعمل كوراي كمزوّد خدمات متكامل، من خلال تصميم منظومات متكاملة تستجيب للتحديات التجارية واللوجستية والتشغيلية لشركائها.' },
            { type: 'footer-emphasis', content: ['هدفنا:', 'تحسين الأداء التجاري من خلال تنفيذ منضبط.'] }
          ]
        },
        {
          id: '4',
          title: 'إدارة لوجستية وتشغيلية متقنة',
          iconName: 'Warehouse',
          blocks: [
            { type: 'text', content: 'يتطلب التوزيع الفعّال سلسلة إمداد قوية ومتكاملة.' },
            { type: 'text', content: 'نقوم بتنسيق ما يلي:' },
            {
              type: 'list',
              content: [
                'تخطيط عمليات التوريد',
                'إدارة عمليات التخزين',
                'مزامنة تدفقات الطلبات وعمليات التسليم',
                'تحسين مستويات المخزون'
              ]
            },
            { type: 'emphasis', content: ['أولويتنا:', 'ضمان الانسيابية والموثوقية وإدارة المخاطر بكفاءة.'] }
          ]
        },
        {
          id: '2',
          title: 'تطوير العلامات التجارية',
          iconName: 'Handshake',
          blocks: [
            { type: 'text', content: 'نتدخل في مراحل ما قبل الإطلاق وما بعده:' },
            {
              type: 'list',
              content: [
                'هيكلة بنية التشكيلة ومزيج المنتجات',
                'تحديد استراتيجية التسعير وتحليل مرونة الطلب',
                'دراسة دخول السوق واستراتيجية الإطلاق',
                'تحديد محاور التطوير وفرص النمو'
              ]
            },
            { type: 'text', content: 'نؤدي دور شريك في تطوير العلامات التجارية، وليس مجرد حلقة ضمن سلسلة التوزيع.' },
            { type: 'emphasis', content: ['هدفنا:', 'بناء علامات تجارية قوية قادرة على فرض حضورها بشكل مستدام.'] }
          ]
        },
        {
          id: '5',
          title: 'التجارة الدولية والمواكبة التنظيمية',
          iconName: 'CheckCircle2',
          blocks: [
            { type: 'text', content: 'لكل سوق متطلباته وقيوده الخاصة.' },
            { type: 'text', content: 'نواكب شركاءنا في:' },
            {
              type: 'list',
              content: [
                'إجراءات الحصول على تراخيص تسويق المنتجات (AMM)',
                'إدارة عمليات التخليص الجمركي بالتعاون مع وكلاء عبور مؤهلين',
                'المساعدة في ضمان مطابقة المنتجات للمتطلبات التنظيمية في السوق',
                'متابعة الملفات في حال حدوث تغييرات تنظيمية'
              ]
            },
            { type: 'emphasis', content: ['هدفنا:', 'ضمان دخول منظم وآمن ومستدام إلى السوق.'] }
          ]
        }
      ]
    }
  }
};
