
import { Service, Stat, NewsItem } from './types';

interface TranslationData {
  nav: { [key: string]: string };
  hero: { title: string; subtitle: string[]; button: string };
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
    formFirstName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formPhone: string;
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
    address: string;
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
      title: "Connecting markets with brands that shape everyday life",
      subtitle: [
          "With over 15 years of experience, Corail is a key player",
          "in FMCG distribution in Morocco. We operate across the entire distribution",
          "value chain: from route-to-market to field execution. Our mission is to",
          "position distribution as a structural lever for sustainable value creation.",
      ],
      button: "Learn more"
    },
    home: {
      introTitle: "Corail",
      introSubtitle: "Corail is an FMCG distribution platform specializing in the development of brand portfolios.",
      introText: "With over 15 years of experience, Corail is a key player in FMCG distribution in Morocco. We operate across the entire distribution value chain: from route-to-market to field execution. Our mission is clear: to position distribution as a structural lever for sustainable value creation.",      introList: ['Strategic Go-to-Market', 'Field Execution', 'Logistical Mastery', 'Performance Management'],
      introButton: "More about us",
      growthTitle: "A platform for growth, beyond distribution",
      growthSubtitle: "At Corail, distribution goes beyond product movement. We build sustainable connections between brands, distribution networks, and consumers.",
      growthList: [
        'Route-to-Market optimization',
        'Logistics and flow management',
        'Data-driven operations',
        'Structured merchandising'
      ],
      growthFooter: "Corail also acts as a full-service provider, supporting its partners through disciplined execution across both logistical and commercial dimensions. We implement tailored commercial setups, combining pre-sale and conventional sale models, deployed according to different distribution channels and the specificities of each product.",
      figuresTitle: "Key figures",
      brandsTitle: "Brands we distribute",
      newsTitle: "News",
      newsSubtitle: "Latest updates",
      newsButton: "Read article",
      presidentTitle: "Message from the president",
      presidentText: [
        "We have built the development of Corail around a clear vision: to structure a distribution platform founded on rigor and inscribed for the long term.",
        "In a demanding FMCG environment, we have chosen a development guided by operational mastery and commercial execution discipline.",
        "At Corail, we consider distribution as a direct lever for value creation, serving the growth of our partners and the development of their brands.",
        "This value creation rests above all on our human capital — the driver of our performance."
      ],
      presidentName: "Mohammed Bouzoubaa",
      presidentRole: "President"
    },
    about: {
      title: "About Corail L’Océan",
      subtitle: "Specialized FMCG distributor in Morocco since 2010.",
      profileTitle: "About Corail L’Océan",
      profileText: [
        "Corail is a Casablanca-based distribution company, established in 2010. We support the growth of FMCG brands in Morocco, leveraging over 10,000 m³ of warehousing capacity and a dedicated fleet to ensure reliable logistics execution and nationwide coverage.",
        "Corail also operates as a full-service provider, with an end-to-end approach spanning the entire value chain—from route-to-market strategy to field execution. Our commercial setups combine pre-sales and direct sales models, tailored to the specificities of each category, in order to secure sell-in and drive sell-out.",
        "Our priority is to deliver controlled, disciplined distribution aligned with our partners’ objectives."
      ],
      approachTitle: "Our approach",
      approachText: [
        "Corail operates through a structured approach around Route-to-Market and disciplined commercial execution.",
        "Through the integration of advanced analytics and operational flow management systems, we enhance the efficiency of our distribution architectures and ensure consistent product availability in the field.",
        "This organization enables seamless end-to-end operations with a high level of execution control.",
        "Our role is to transform distribution into a system that generates sustainable growth for the brands we support."
      ],
      engagementTitle: "Our commitment",
      engagementText: [
        "At Corail, we view distribution as a strategic infrastructure for value creation. Our vision is built on a simple conviction: brand performance depends not only on product quality, but also on the precision with which products are deployed in their markets.",
        "By combining commercial expertise, operational discipline, and data-driven management, we enable our partners to design distribution architectures aligned with field realities, optimize sell-in and sell-out performance, and maximize market visibility while reducing operational and logistical complexity.",
        "Our commitment is clear: to create sustainable and measurable growth for our partners."
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
      subtitle: "Distribution of established brands",
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
      ctaTitle: "Contact us",
      ctaSubtitle: "Looking for a reliable distribution partner for your brand in Morocco?",
      ctaButton: "Contact us"
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
      formName: "Last Name",
      formFirstName: "First Name",
      formEmail: "Email address",
      formSubject: "Subject",
      formMessage: "Message",
      formPhone: "Phone Number",
      formButton: "Submit",
      subjects: ["Partnership proposal", "General inquiry", "Career opportunity"]
    },
    footer: {
      description: "FMCG Distribution company in Morocco since 2010",
      navigation: "Navigation",
      contact: "Contact",
      brands: "Top brands",
      rights: "Corail L'Océan © Copyright 2026 - All rights reserved",
      privacy: "Privacy policy",
      terms: "Terms of service",
      address: "Parc Industriel Sapino, Nouaceur 20100, Casablanca, Maroc"
    },
    seo: {
      home: { title: "FMCG Distribution Company in Morocco", description: "Corail is a nationwide FMCG distributor in Morocco, combining logistics, warehousing, route-to-market execution, and sales coverage for leading consumer brands." },
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
          value: "+15 years",
          label: "Experience",
          description: "Over 15 years of operational expertise in FMCG distribution.",
          iconName: "Award"
        },

        {
          value: "10,000 M³",
          label: "Warehousing",
          description: "With over 10,000 m³ of storage capacity, our facilities are designed to support structured distribution.",
          iconName: "Warehouse"
        },
        {
          value: "+20,000",
          label: "Presence",
          description: "A strong presence with over 20,000 active retail touchpoints in Casablanca and beyond.",
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
          title: 'MULTICHANNEL DISTRIBUTION',
          iconName: 'Truck',
          imageAlt: 'FMCG warehouse loading operations in Morocco',
          blocks: [
            { type: 'text', content: 'Channels are evolving and purchasing behaviors are becoming increasingly fragmented. Corail deploys Route-to-Market architectures tailored to each distribution channel:' },
            {
              type: 'list',
              content: [
                'Modern trade (hypermarkets & supermarkets)',
                'Semi-wholesale & wholesale',
                'Emerging and digital channels',
                'Traditional trade (grocery & proximity retail)',
                'Specialized channels'
              ]
            },
            { type: 'text', content: 'We analyze the dynamics of each channel to optimize:' },
            {
              type: 'list',
              content: [
                'Coverage',
                'Hit rate',
                'Stock rotation',
                'Visit frequency',
                'Assortment depth (number of SKUs per invoice)'
              ]
            },
            { type: 'text', content: 'Our commercial setups integrate both pre-sale and conventional sales models, enabling precise optimization of coverage and field performance based on product characteristics and channel requirements.' },
            { type: 'emphasis', content: ['Objective:', 'Ensure a consistent, profitable, and sustainable market presence.'] }
          ]
        },
        {
          id: '3',
          title: 'COMMERCIAL MANAGEMENT & DATA-DRIVEN EXECUTION',
          imageAlt: 'FMCG sales and operations meeting in Morocco',
          iconName: 'Megaphone',
          blocks: [
            { type: 'text', content: 'Effective distribution relies on a set of key operational levers:' },
            {
              type: 'list',
              content: [
                'Structured coverage planning',
                'Sales force management',
                'KPI tracking by channel',
                'Merchandising and in-store activation'
              ]
            },
            { type: 'text', content: 'Corail also acts as a full-service provider, designing setups tailored to the commercial, logistical, and operational challenges of its partners.' },
            { type: 'emphasis', content: ['Objective:', 'Drive commercial performance through disciplined execution.'] }
          ]
        },
        {
          id: '4',
          title: 'LOGISTICS & OPERATIONAL EXCELLENCE',
          iconName: 'Warehouse',
          imageAlt: 'FMCG warehouse logistics operations in Morocco',
          blocks: [
            { type: 'text', content: 'Efficient distribution requires a robust and well-coordinated supply chain. We manage:' },
            {
              type: 'list',
              content: [
                'Supply planning',
                'Order and delivery flow synchronization',
                'Warehousing operations',
                'Stock level optimization'
              ]
            },
            { type: 'text', content: 'This organization ensures secure flows and a high level of operational reliability.' },
            { type: 'emphasis', content: ['Objective:', 'Ensure availability, responsiveness, and risk control.'] }
          ]
        },
        {
          id: '2',
          title: 'BRAND DEVELOPMENT',
          iconName: 'Handshake',
          imageAlt: 'FMCG brand development and route-to-market planning in Morocco',
          blocks: [
            { type: 'text', content: 'We support brands both upstream and downstream of market entry:' },
            {
              type: 'list',
              content: [
                'Portfolio structuring and product mix definition',
                'Market entry strategy and implementation planning',
                'Pricing strategy and elasticity analysis',
                'Identification of growth drivers'
              ]
            },
            { type: 'text', content: 'We act as a development partner, combining strategic insight with execution excellence.' },
            { type: 'emphasis', content: ['Objectif:', 'Build strong brands capable of achieving sustainable market traction.'] }
          ]
        },
        {
          id: '5',
          title: 'INTERNATIONAL TRADE & REGULATORY SUPPORT',
          iconName: 'CheckCircle2',
          imageAlt: 'Market access and import logistics operations in Morocco',
          blocks: [
            { type: 'text', content: 'Each market comes with its own regulatory framework. We support our partners at every stage to ensure smooth market access:' },
            {
              type: 'list',
              content: [
                'Marketing authorization procedures (AMM)',
                'Regulatory compliance support',
                'Customs clearance in coordination with qualified freight forwarders',
                'Monitoring of regulatory developments'
              ]
            },
            { type: 'text', content: 'We ensure close coordination between all stakeholders — suppliers, authorities, and logistics partners — to streamline processes and reduce time-to-market.' },
            { type: 'emphasis', content: ['Objective:', 'Ensure compliant, controlled, and sustainable market entry.'] }
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
      subtitle: [ 
        "Fort de plus de 15 ans d'expérience, Corail est un acteur clé",
        "de la distribution FMCG au Maroc. Nous opérons sur l'ensemble",
        "de la chaîne de valeur distributive : du route-to-market à",
        "l'exécution terrain. Notre mission : transformer la distribution",
        "en un levier structurant de création de valeur durable.",
      ],
      button: "En savoir plus"
    },
    home: {
      introTitle: "Corail",
      introSubtitle: "Corail est une plateforme de distribution FMCG spécialisée dans le développement de portefeuilles de marques.",
      introText: "Fort de plus de 15 ans d’expérience, Corail L’Océan est un acteur clé de la distribution FMCG au Maroc. Nous opérons sur l’ensemble de la chaîne de valeur distributive : du go-to-market à l’exécution terrain. Notre mission est claire : transformer la distribution en un levier structurant de création de valeur durable.",
      introList: ['Go-to-Market Stratégique', 'Exécution Terrain', 'Maîtrise Logistique', 'Pilotage de la Performance'],
      introButton: "En savoir plus",
      growthTitle: "Une plateforme de croissance, au-delà de la distribution",
      growthSubtitle: "Chez Corail, la distribution ne se limite pas à la circulation des produits. Nous construisons des passerelles durables entre marques, réseaux et consommateurs.",
      growthList: [
        'Optimisation du Route-to-Market',
        'Maîtrise des flux logistiques',
        'Pilotage data-driven',
        'Merchandising structuré'
      ],
      growthFooter: "Corail agit également en tant que full service provider, accompagnant ses partenaires grâce à une exécution disciplinée couvrant les dimensions logistiques et commerciales. Nous mettons en place des dispositifs commerciaux adaptés, combinant des modèles de pré-vente et de vente conventionnelle, déployés en fonction des différents canaux de distribution et des spécificités propres à chaque produit.",
      figuresTitle: "Chiffres clés",
      brandsTitle: "Marques distribuées",
      newsTitle: "Actualités",
      newsSubtitle: "Dernières mises à jour",
      newsButton: "Lire l’article",
      presidentTitle: "Mot du président",
      presidentText: [
        "Nous avons b\u00e2ti le d\u00e9veloppement de Corail autour d\u2019une vision claire : structurer une plateforme de distribution fond\u00e9e sur la rigueur et inscrite sur le long terme.",
        "Dans un environnement FMCG exigeant, nous avons fait le choix d\u2019un d\u00e9veloppement guid\u00e9 par la ma\u00eetrise op\u00e9rationnelle et la discipline d\u2019ex\u00e9cution commerciale.",
        "Chez Corail, nous consid\u00e9rons la distribution comme un levier direct de cr\u00e9ation de valeur, au service de la croissance de nos partenaires et du d\u00e9veloppement de leurs marques.",
        "Cette cr\u00e9ation de valeur repose avant tout sur notre capital humain \u2014 moteur de notre performance."
      ],
      presidentName: "Mohammed Bouzoubaa",
      presidentRole: "Président"
    },
    about: {
      title: "À propos de Corail L’Océan",
      subtitle: "Distributeur spécialisé en FMCG au Maroc depuis 2010",
      profileTitle: "À propos de Corail L’Océan",
      profileText: [
        "Corail est une soci\u00e9t\u00e9 de distribution bas\u00e9e \u00e0 Maroc, cr\u00e9\u00e9e en 2010. Nous accompagnons le d\u00e9veloppement de marques FMCG au Maroc, avec plus de 10 000 m\u00b3 de capacit\u00e9 de stockage et une flotte d\u00e9di\u00e9e assurant une ex\u00e9cution logistique fiable et une couverture nationale.",
        "Corail op\u00e8re \u00e9galement en tant que full service provider, avec une approche end-to-end couvrant l\u2019ensemble de la cha\u00eene de valeur : de la strat\u00e9gie de mise en march\u00e9 \u00e0 l\u2019ex\u00e9cution terrain. Nos dispositifs combinent pr\u00e9-vente et vente directe, adapt\u00e9s aux sp\u00e9cificit\u00e9s de chaque cat\u00e9gorie, afin de s\u00e9curiser le sell-in et soutenir le sell-out.",
        "Notre priorit\u00e9 est d\u2019assurer une distribution ma\u00eetris\u00e9e et align\u00e9e avec les objectifs de nos partenaires."
      ],
      approachTitle: "Notre approche",
      approachText: [
        "Corail op\u00e8re \u00e0 travers une approche structur\u00e9e autour du Route-to-Market et d\u2019une ex\u00e9cution commerciale disciplin\u00e9e.",
        "\u00c0 travers l\u2019int\u00e9gration de dispositifs analytiques avanc\u00e9s et de syst\u00e8mes de gestion de stock et des flux op\u00e9rationnels, Corail renforce l\u2019efficacit\u00e9 de ses architectures distributives et assure une disponibilit\u00e9 produit constante sur le terrain.",
        "Cette organisation favorise une gestion fluide de la cha\u00eene end-to-end, avec un niveau de contr\u00f4le \u00e9lev\u00e9 sur les op\u00e9rations.",
        "Notre r\u00f4le est de transformer la distribution en un syst\u00e8me g\u00e9n\u00e9rateur de croissance durable pour les marques que nous accompagnons."
      ],
      engagementTitle: "Notre engagement",
      engagementText: [
        "Chez Corail, nous considérons la distribution comme une infrastructure stratégique de création de valeur. Notre vision repose sur une conviction simple : la performance des marques ne dépend pas uniquement de leur qualité, mais de la précision avec laquelle elles sont déployées sur leurs marchés.",
        "En combinant expertise commerciale, rigueur op\u00e9rationnelle et pilotage data-driven, nous permettons \u00e0 nos partenaires de construire des architectures distributives adapt\u00e9es aux r\u00e9alit\u00e9s terrain, \u00e0 optimiser la performance du sell-in et du sell-out et \u00e0 assurer un maximum de visibilit\u00e9 sur le march\u00e9 tout en simplifiant la complexit\u00e9 op\u00e9rationnelle et logistique.",
        "Notre engagement est clair : cr\u00e9er des environnements de croissance durables et mesurables pour nos partenaires."
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
      subtitle: "Distribution de marques reconnues",
      introTitle: "Partenaire de distribution officiel",
      introText: "Nous servons de distributeur exclusif pour de grandes marques internationales, servant de pont entre les fabricants mondiaux et les foyers marocains.",
      brands: {
        Colgate: { description: "Leader mondial des produits d’hygiène bucco-dentaire, offrant protection et sourires sains pour toute la famille.", category: "Hygiène bucco-dentaire" },
        Joyful: { description: "Solutions de soins pour bébés avancées conçues pour offrir un confort et une protection maximaux aux nourrissons.", category: "Soins bébé" },
        Soupline: { description: "Marque n°1 d’adoucissant en France, apportant une douceur irrésistible et un parfum durable à votre linge.", category: "Soin du linge" },
        Ajax: { description: "Produits de nettoyage ménager puissants qui assurent un environnement domestique étincelant de propreté et de fraîcheur.", category: "Entretien maison" },
        Cadum: { description: "Marque patrimoniale spécialisée dans les produits de soins personnels doux, respectant l'équilibre naturel des peaux sensibles.", category: "Soins personnels" },
        Tahiti: { description: "Gels douche exotiques qui vous transportent au paradis avec leurs parfums tropicaux et formules hydratantes.", category: "Soins personnels" },
        Holder: { description: "Solutions papier fiables et écologiques pour les besoins quotidiens de la maison.", category: "Produits papier" },
        Joyful_Solo: { description: "Solutions de bain de bouche pour une higiene bucco-dentaire complète et une confiance en son haleine.", category: "Hygiène bucco-dentaire" }
      },
      ctaTitle: "Nous contacter",
      ctaSubtitle: "Vous cherchez un partenaire de distribution fiable pour votre marque au Maroc ?",
      ctaButton: "Nous contacter"
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
      formFirstName: "Prénom",
      formEmail: "Adresse de messagerie",
      formSubject: "Objet",
      formMessage: "Message",
      formPhone: "Téléphone",
      formButton: "Envoyer le message",
      subjects: ["Proposition de partenariat", "Demande générale", "Opportunité de carrière"]
    },
    footer: {
      description: "Distributeur spécialisé en FMCG au Maroc depuis 2010.",
      navigation: "Navigation",
      contact: "Contact",
      brands: "Top marques",
      rights: "Corail L'Océan © Copyright 2026 - Tous droits réservés",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      address: "Parc Industriel Sapino, Nouaceur 20100, Casablanca, Maroc"
    },
    seo: {
      home: { title: "Entreprise de Distribution FMCG au Maroc", description: "Corail est un distributeur FMCG national au Maroc, combinant logistique, entreposage, exécution route-to-market et couverture commerciale pour les grandes marques de consommation." },
      about: { title: "À Propos | Corail", description: "Découvrez la mission, la vision et l’approche stratégique de Corail, distributeur leader au Maroc." },
      services: { title: "Nos Services | Corail", description: "Distribution multicanale, développement de marques, maîtrise logistique et pilotage commercial." },
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
          value: "+15 ans",
          label: "D’expérience",
          description: "Plus de 15 ans d’excellence opérationnelle et d’expertise.",
          iconName: "Award"
        },

        {
          value: "10 000 m³",
          label: "Stockage",
          description: "Avec plus de 10 000 m³ de capacité de stockage, nos installations sont conçues pour soutenir une distribution structurée.",
          iconName: "Warehouse"
        },
        {
          value: "+20 000",
          label: "Présence multi-canal",
          description: "Une forte présence avec plus de 20 000 points de vente actifs à Casablanca et au-delà.",
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
          title: 'Distribution multicanale',
          iconName: 'Truck',
          imageAlt: 'Opérations de chargement d\'entrepôt FMCG au Maroc',
          blocks: [
            { type: 'text', content: 'Les circuits évoluent et les comportements d’achat se fragmentent. Corail déploie une architecture Route-to-Market adaptée à chaque canal :' },
            {
              type: 'list',
              content: [
                'Grandes et moyennes surfaces',
                'Commerce traditionnel (épiceries, proximité)',
                'Demi-gros & grossistes',
                'Circuits spécialisés',
                'Canaux émergents et digitaux'
              ]
            },
            { type: 'text', content: 'Nous analysons les dynamiques de chaque canal afin d\'optimiser :' },
            {
              type: 'list',
              content: [
                'La couverture',
                'La fréquence de visite',
                'Le taux de succès',
                'La profondeur d\'assortiment (nombre de lignes par facture)',
                'La rotation des stocks'
              ]
            },
            { type: 'text', content: 'Nos dispositifs commerciaux intègrent aussi bien des modèles de vente conventionnelle que de pré-vente, permettant une optimisation fine de la couverture et de la performance terrain en fonction des besoins et du type de produit.' },
            { type: 'emphasis', content: ['Objectif :', 'Garantir une présence cohérente, rentable et durable.'] }
          ]
        },
        {
          id: '3',
          title: 'Gestion commerciale & pilotage data-driven',
          iconName: 'Megaphone',
          imageAlt: 'Réunion commerciale et opérationnelle FMCG au Maroc',
          blocks: [
            { type: 'text', content: 'Une distribution maîtrisée repose sur plusieurs leviers :' },
            {
              type: 'list',
              content: [
                'Structuration du plan de couverture',
                'Suivi des KPIs par canal',
                'Pilotage des équipes commerciales',
                'Merchandising & activation en point de vente'
              ]
            },
            { type: 'text', content: 'Corail intervient également comme full service provider, en structurant des dispositifs adaptés aux enjeux commerciaux, logistiques et opérationnels de ses partenaires.' },
            { type: 'emphasis', content: ['Objectif :', 'Optimiser la performance commerciale par une exécution disciplinée.'] }
          ]
        },
        {
          id: '4',
          title: 'Maîtrise logistique & opérationnelle',
          iconName: 'Warehouse',
          imageAlt: 'Opérations logistiques d\'entrepôt FMCG au Maroc',
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
            { type: 'text', content: 'Cette organisation permet de sécuriser les flux et de maintenir un haut niveau de fiabilité opérationnelle.' },
            { type: 'emphasis', content: ['Objectif :', 'Disponibilité, réactivité et maîtrise du risque.'] }
          ]
        },
        {
          id: '2',
          title: 'Développement de marques',
          iconName: 'Handshake',
          imageAlt: 'Développement de marques FMCG et planification route-to-market au Maroc',
          blocks: [
            { type: 'text', content: 'Nous intervenons en amont et en aval du lancement :' },
            {
              type: 'list',
              content: [
                'Structuration de l\'architecture de gamme et du mix produit',
                'Définition du pricing et de l\'élasticité',
                'Étude d\'implantation et stratégie d\'entrée marché',
                'Identification des axes de croissance'
              ]
            },
            { type: 'text', content: 'Nous agissons comme un partenaire de développement, en combinant vision stratégique et excellence d\'exécution.' },
            { type: 'emphasis', content: ['Objectif :', 'Structurer des marques solides capables de s\'imposer durablement.'] }
          ]
        },
        {
          id: '5',
          title: 'Commerce international et accompagnement réglementaire',
          iconName: 'CheckCircle2',
          imageAlt: 'Accès au marché et opérations logistiques d\'importation au Maroc',
          blocks: [
            { type: 'text', content: 'Chaque marché présente ses contraintes. Nous accompagnons nos partenaires à chaque étape pour garantir l\'accès au marché.' },
            {
              type: 'list',
              content: [
                'Procédures d\'obtention d\'autorisation de mise sur le marché (AMM)',
                'Prise en charge du dédouanement en partenariat avec des transitaires qualifiés',
                'Aide à la mise en conformité des produits avec les exigences réglementaires du marché',
                'Suivi des dossiers en cas d\'évolution réglementaire'
              ]
            },
            { type: 'text', content: 'Nous assurons une coordination étroite entre les parties prenantes - fournisseurs, autorités, transitaires, etc. - afin de fluidifier les démarches.' },
            { type: 'emphasis', content: ['Objectif :', 'Garantir une mise en marché conforme, maîtrisée et durable.'] }
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
      subtitle: [
        "بخبرة تتجاوز 15 عاماً، تُعدّ كوراي فاعلاً رئيسياً",
    "في توزيع السلع الاستهلاكية سريعة التداول في المغرب. نعمل على كامل",
    "سلسلة القيمة التوزيعية: من استراتيجية الدخول إلى السوق إلى التنفيذ الميداني.",
    "مهمتنا هي تحويل التوزيع إلى رافعة هيكلية لخلق قيمة مستدامة."
      ],
      button: "اكتشف المزيد"
    },
    home: {
      introTitle: "كوراي",
      introSubtitle: "كوراي منصة متخصصة في توزيع السلع الاستهلاكية سريعة التداول، تركز على تطوير محافظ العلامات التجارية.",
      introText: "بخبرة تتجاوز 15 عاماً، تُعدّ كوراي فاعلاً رئيسياً في توزيع السلع الاستهلاكية سريعة التداول في المغرب. نعمل على كامل سلسلة القيمة التوزيعية: من استراتيجية الدخول إلى السوق إلى التنفيذ الميداني. مهمتنا واضحة: تحويل التوزيع إلى رافعة هيكلية لخلق قيمة مستدامة.",
      introList: ['استراتيجية دخول السوق', 'التنفيذ الميداني', 'إدارة لوجستية متقنة', 'قيادة الأداء'],
      introButton: "اكتشف المزيد",
      growthTitle: "منصة للنمو تتجاوز مفهوم التوزيع",
      growthSubtitle: "في كوراي، لا يقتصر التوزيع على مجرد نقل المنتجات، بل نعمل على بناء جسور مستدامة بين العلامات التجارية وشبكات التوزيع والمستهلكين.",
      growthList: [
        'تحسين استراتيجية الوصول إلى السوق',
        'إدارة محكمة للتدفقات اللوجستية',
        'قيادة تعتمد على تحليل البيانات',
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
        "كوراي شركة توزيع مقرها الدار البيضاء، تأسست سنة 2010. نواكب تطوير العلامات التجارية في قطاع السلع الاستهلاكية سريعة التداول في المغرب، مع أكثر من 10,000 متر مكعب من القدرة التخزينية وأسطول مخصص يضمن تنفيذًا لوجستيًا موثوقًا وتغطية وطنية.",
        "كما تعمل كوراي كمزوّد خدمات متكامل، من خلال مقاربة شاملة تغطي كامل سلسلة القيمة: من استراتيجية الدخول إلى السوق إلى التنفيذ الميداني. وتعتمد منظوماتنا على الجمع بين البيع المسبق والبيع المباشر، بما يتلاءم مع خصوصيات كل فئة، بهدف تأمين البيع للموزعين ودعم المبيعات لدى المستهلك النهائي.",
        "أولويتنا هي ضمان توزيع محكوم ومتوافق مع أهداف شركائنا."
      ],
      approachTitle: "مقاربتنا",
      approachText: [
        "تعتمد كوراي مقاربة منظمة ترتكز على استراتيجية الوصول إلى السوق وتنفيذ تجاري منضبط.",
        "من خلال دمج أدوات تحليل متقدمة وأنظمة إدارة المخزون والتدفقات التشغيلية، تعزز كوراي كفاءة بنياتها التوزيعية وتضمن توفر المنتجات بشكل مستمر في الميدان.",
        "تساهم هذه المنظومة في تحقيق إدارة سلسة لسلسلة القيمة من البداية إلى النهاية، مع مستوى عالٍ من التحكم في العمليات.",
        "يتمثل دورنا في تحويل التوزيع إلى نظام يخلق نمواً مستداماً للعلامات التجارية التي نواكبها."
      ],
      engagementTitle: "التزامنا",
      engagementText: [
        "في كوراي، نعتبر التوزيع بنية استراتيجية لخلق القيمة. وترتكز رؤيتنا على قناعة بسيطة مفادها أن أداء العلامات التجارية لا يعتمد فقط على جودتها، بل على دقة نشرها في الأسواق.",
        "من خلال الجمع بين الخبرة التجارية والانضباط التشغيلي والقيادة المعتمدة على البيانات، نمكّن شركاءنا من بناء منظومات توزيع تتلاءم مع واقع الميدان، وتحسين أداء البيع للموزعين والمبيعات لدى المستهلك النهائي، وضمان حضور قوي في السوق مع التحكم في التعقيد التشغيلي واللوجستي.",
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
      keyPartnersFooter: "قامت كوراي لوسيان ببناء شراكات طويلة الأمد مع أبرز تجار الجملة، مما يضمن توفرًا واسعًا للمنتجات وحضورًا قويًا للعلامات التجارية في جميع أنحاء البلاد.",
      coverageTitle: "تغطية وطنية",
      coverageSubtitle: "انتشار وطني بفضل شبكة توزيع راسخة",
      coverageList: [
        { title: "المدن المشمولة:", text: "الدار البيضاء، الرباط، مراكش، أكادير، فاس، طنجة، مكناس، وجدة، الناظور، ورزازات وغيرها." },
        { title: "القنوات التجارية:", text: "تجارة الجملة والتجارة التقليدية." },
        { title: "اللوجستيك والبنية التحتية:", text: "مستودع مركزي في الدار البيضاء وعمليات توصيل على الصعيد الوطني عبر أسطولنا (+40 مركبة متنوعة الأحجام) وشركاء التوزيع المحليين." }
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
      subtitle: "توزيع علامات تجارية معروفة",
      introTitle: "شريك التوزيع الرسمي",
      introText: "نؤدي دور الموزع الحصري لعدد من أبرز العلامات التجارية الدولية، ونعمل كجسر بين الشركات المصنعة العالمية والأسر المغربية.",
      brands: {
        Colgate: { description: "رائد عالمي في منتجات العناية بصحة الفم، يوفر الحماية والابتسامات الصحية لجميع أفراد الأسرة.", category: "العناية بالفم والأسنان" },
        Esemmat: { description: "منتجات منزلية عالية الجودة للاحتياجات اليومية.", category: "المنزل" },
        Joyful: { description: "حلول متقدمة للعناية بالأطفال الرضع مصممة لتوفير أقصى درجات الراحة والحماية.", category: "العناية بالرضع" },
        Soupline: { description: "العلامة الأولى في فرنسا في مجال منعمات الأقمشة، تمنح نعومة لا تقاوم وعطرًا يدوم طويلاً لغسيلك.", category: "العناية بالغسيل" },
        Ajax: { description: "منتجات تنظيف منزلية قوية تضمن بيئة منزلية نظيفة ومنعشة.", category: "العناية بالمنزل" },
        Cadum: { description: "علامة عريقة متخصصة في منتجات العناية الشخصية اللطيفة، تحترم التوازن الطبيعي للبشرة الحساسة.", category: "العناية الشخصية" },
        Tahiti: { description: "جل استحمام استوائي ينقلك إلى الجنة بعطوره الاستوائية وتركيباته المرطبة.", category: "العناية الشخصية" },
        Holder: { description: "حلول ورقية موثوقة وصديقة للبيئة للاحتياجات المنزلية اليومية.", category: "المنتجات الورقية" },
        Joyful_Solo: { description: "محاليل غسول الفم لنظافة فموية كاملة وثقة بنفس منعش.", category: "العناية بالفم والأسنان" }
      },
      ctaTitle: "اتصل بنا",
      ctaSubtitle: "هل تبحث عن شريك توزيع موثوق لعلامتك التجارية في المغرب؟",
      ctaButton: "اتصل بنا"
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
      formName: "الاسم العائلي",
      formFirstName: "الاسم الشخصي",
      formEmail: "عنوان البريد الإلكتروني",
      formSubject: "موضوع الرسالة",
      formMessage: "الرسالة",
      formPhone: "رقم الهاتف",
      formButton: "إرسال الرسالة",
      subjects: ["اقتراح شراكة", "استفسار عام", "فرصة عمل"]
    },
    footer: {
      description: "موزّع متخصص في السلع الاستهلاكية سريعة التداول في المغرب منذ عام 2010",
      navigation: "التنقل",
      contact: "اتصل بنا",
      brands: "أبرز العلامات التجارية",
      rights: "Corail L'Océan © Copyright 2026 - جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      address: "المنطقة الصناعية سابينو، النواصر 20100، الدار البيضاء، المغرب"
    },
    seo: {
      home: { 
        title: "شركة توزيع السلع الاستهلاكية في المغرب", 
        description: "كوراي موزع وطني للسلع الاستهلاكية في المغرب، يجمع بين اللوجستيات والتخزين وتنفيذ استراتيجية الوصول إلى السوق والتغطية التجارية للعلامات الاستهلاكية الرائدة." 
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
        value: "+20,000",
        label: "الحضور في السوق",
        description: "حضور قوي من خلال أكثر من 20,000 نقطة بيع نشطة في الدار البيضاء وما بعدها.",
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
          imageAlt: 'عمليات تحميل مستودع السلع الاستهلاكية في المغرب',
          blocks: [
            { type: 'text', content: 'تشهد قنوات التوزيع تطورًا مستمرًا، كما تتزايد تجزئة سلوكيات الشراء لدى المستهلكين. تعتمد كوراي بنية Route-to-Market مصممة خصيصًا لكل قناة توزيع:' },
            {
              type: 'list',
              content: [
                'التجارة الحديثة (الهايبرماركت والسوبرماركت)',
                'التجارة التقليدية (البقالات ومتاجر القرب)',
                'شبه الجملة وتجار الجملة',
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
                'عمق التشكيلة (عدد الخطوط في الفاتورة)',
                'معدل دوران المخزون'
              ]
            },
            { type: 'text', content: 'تعتمد منظوماتنا التجارية أيضًا على نماذج البيع التقليدي والبيع المسبق، بما يتيح تحسين دقيق للتغطية والأداء الميداني وفق احتياجات كل منتج وطبيعته.' },
            { type: 'emphasis', content: ['هدف:', 'ضمان حضور متماسك ومربح ومستدام في السوق.'] }
          ]
        },
        {
          id: '3',
          title: 'الإدارة التجارية والتنفيذ الميداني',
          iconName: 'Megaphone',
          imageAlt: 'اجتماع المبيعات والعمليات للسلع الاستهلاكية في المغرب',
          blocks: [
            { type: 'text', content: 'تعتمد التوزيع المحكم على عدة روافع:' },
            {
              type: 'list',
              content: [
                'هيكلة خطة التغطية السوقية',
                'متابعة مؤشرات الأداء الرئيسية (KPI) لكل قناة',
                'إدارة فرق المبيعات',
                'تنفيذ أنشطة العرض والترويج داخل نقاط البيع'
              ]
            },
            { type: 'text', content: 'كما تعمل كوراي كمزوّد خدمات متكامل، من خلال تصميم منظومات متكاملة تستجيب للتحديات التجارية واللوجستية والتشغيلية لشركائها.' },
            { type: 'emphasis', content: ['هدف:', 'تحسين الأداء التجاري من خلال تنفيذ منضبط.'] }
          ]
        },
        {
          id: '4',
          title: 'إدارة لوجستية وتشغيلية متقنة',
          iconName: 'Warehouse',
          imageAlt: 'عمليات لوجستيات مستودع السلع الاستهلاكية في المغرب',
          blocks: [
            { type: 'text', content: 'يتطلب التوزيع الفعّال سلسلة إمداد قوية ومتكاملة. نقوم بتنسيق ما يلي:' },
            {
              type: 'list',
              content: [
                'تخطيط عمليات التوريد',
                'إدارة عمليات التخزين',
                'مزامنة تدفقات الطلبات وعمليات التسليم',
                'تحسين مستويات المخزون'
              ]
            },
            { type: 'text', content: 'تتيح هذه المنظومة تأمين التدفقات والحفاظ على مستوى عالٍ من الموثوقية التشغيلية.' },
            { type: 'emphasis', content: ['هدف:', 'التوفر والاستجابة السريعة وإدارة المخاطر.'] }
          ]
        },
        {
          id: '2',
          title: 'تطوير العلامات التجارية',
          iconName: 'Handshake',
          imageAlt: 'تطوير العلامات التجارية للسلع الاستهلاكية وتخطيط استراتيجية الوصول إلى السوق في المغرب',
          blocks: [
            { type: 'text', content: 'نتدخل في مراحل ما قبل الإطلاق وما بعده:' },
            {
              type: 'list',
              content: [
                'هيكلة بنية التشكيلة ومزيج المنتجات',
                'تحديد استراتيجية التسعير وتحليل مرونة الطلب',
                'دراسة دخول السوق واستراتيجية الإطلاق',
                'تحديد محاور النمو'
              ]
            },
            { type: 'text', content: 'نؤدي دور شريك في التطوير، من خلال الجمع بين الرؤية الاستراتيجية والتميز في التنفيذ.' },
            { type: 'emphasis', content: ['هدف:', 'بناء علامات تجارية قوية قادرة على فرض حضورها بشكل مستدام.'] }
          ]
        },
        {
          id: '5',
          title: 'التجارة الدولية والمواكبة التنظيمية',
          iconName: 'CheckCircle2',
          imageAlt: 'الوصول إلى السوق وعمليات لوجستيات الاستيراد في المغرب',
          blocks: [
            { type: 'text', content: 'لكل سوق متطلباته وقيوده الخاصة. نواكب شركاءنا في كل مرحلة لضمان الوصول إلى السوق.' },
            {
              type: 'list',
              content: [
                'إجراءات الحصول على تراخيص تسويق المنتجات (AMM)',
                'إدارة عمليات التخليص الجمركي بالتعاون مع وكلاء عبور مؤهلين',
                'المساعدة في ضمان مطابقة المنتجات للمتطلبات التنظيمية في السوق',
                'متابعة الملفات في حال حدوث تغييرات تنظيمية'
              ]
            },
            { type: 'text', content: 'نضمن تنسيقًا وثيقًا بين جميع الأطراف المعنية - الموردين، السلطات، وكلاء العبور، إلخ - من أجل تسهيل الإجراءات.' },
            { type: 'emphasis', content: ['هدف:', 'ضمان دخول منظم وآمن ومستدام إلى السوق.'] }
          ]
        }
      ]
    }
  }
};

