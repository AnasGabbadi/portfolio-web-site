import { LocalizedText } from '@/types';

export interface CareerItem {
  period: LocalizedText;
  title: LocalizedText;
  organization: string;
  location?: LocalizedText;
  description?: LocalizedText;
  highlights?: LocalizedText[];
}

export const education: CareerItem[] = [
  {
    period: { fr: 'oct. 2024 – aujourd’hui', en: 'Oct. 2024 – present' },
    title: {
      fr: 'Cycle d’ingénierie en informatique, spécialité Génie Logiciel',
      en: 'Engineering degree in Computer Science, Software Engineering track',
    },
    organization: 'Groupe ISGA',
  },
  {
    period: { fr: 'sept. 2022 – mai 2024', en: 'Sept. 2022 – May 2024' },
    title: {
      fr: 'Diplôme universitaire de technologie (DUT), Génie logiciel',
      en: 'University Diploma of Technology (DUT), Software Engineering',
    },
    organization: 'École supérieure de technologie Khénifra',
  },
  {
    period: { fr: 'sept. 2021 – mai 2022', en: 'Sept. 2021 – May 2022' },
    title: { fr: 'Baccalauréat (BAC), Sciences physiques', en: 'Baccalaureate (BAC), Physical Sciences' },
    organization: 'Lycée Ibno Hani, Fès',
  },
];

export const professionalExperience: CareerItem[] = [
  {
    period: { fr: 'juil. 2026 – aujourd’hui', en: 'Jul. 2026 – present' },
    title: {
      fr: 'Stagiaire Ingénieur Full-Stack — Systèmes Financiers (FinTech)',
      en: 'Full-Stack Engineering Intern — Financial Systems (FinTech)',
    },
    organization: 'Kounhany · Stage',
    location: { fr: 'Casablanca-Settat, Maroc · Hybride', en: 'Casablanca-Settat, Morocco · Hybrid' },
    description: {
      fr: 'Développement du Wallet Kounhany, un système de portefeuille financier unifié basé sur un moteur de comptabilité en partie double (Blnk), centralisant les flux financiers de l’entreprise : applications métier, ERP Dolibarr et authentification SSO via Authentik.',
      en: 'Development of Kounhany Wallet, a unified financial wallet system built on a double-entry accounting engine (Blnk), centralizing the company’s financial flows: business applications, the Dolibarr ERP, and SSO authentication via Authentik.',
    },
  },
  {
    period: { fr: 'sept. 2025 - juin 2026', en: 'Sept. 2025 - Jun. 2026' },
    title: { fr: 'Auto-entrepreneur – Développement web & automatisation', en: 'Freelancer – Web Development & Automation' },
    organization: 'Indépendant',
    highlights: [
      {
        fr: 'Conception et développement de solutions web sur mesure.',
        en: 'Design and development of custom web solutions.',
      },
      {
        fr: 'Automatisation de processus métiers pour améliorer la productivité.',
        en: 'Automation of business processes to improve productivity.',
      },
      {
        fr: 'Intégration d’outils et APIs tierces.',
        en: 'Integration of third-party tools and APIs.',
      },
      {
        fr: 'Déploiement, maintenance et optimisation des applications.',
        en: 'Deployment, maintenance, and optimization of applications.',
      },
    ],
  },
  {
    period: { fr: 'juin 2025 - juil. 2025', en: 'Jun. 2025 - Jul. 2025' },
    title: { fr: 'Stage – Développeur Web Full-Stack', en: 'Internship – Full-Stack Web Developer' },
    organization: 'GAMATEL',
    highlights: [
      {
        fr: 'Développement d’une application web full-stack basée sur la stack MERN (MongoDB, Express.js, React.js, Node.js).',
        en: 'Development of a full-stack web application based on the MERN stack (MongoDB, Express.js, React.js, Node.js).',
      },
      {
        fr: 'Conception d’un panneau d’administration pour la gestion des produits et des demandes de devis.',
        en: 'Design of an admin panel for managing products and quote requests.',
      },
      {
        fr: 'Implémentation d’un système d’authentification sécurisé (login / logout).',
        en: 'Implementation of a secure authentication system (login / logout).',
      },
      {
        fr: 'Développement et tests des API REST avec Postman.',
        en: 'Development and testing of REST APIs with Postman.',
      },
      {
        fr: 'Déploiement du back-end sur Railway et du front-end sur Vercel.',
        en: 'Deployment of the back-end on Railway and the front-end on Vercel.',
      },
    ],
  },
  {
    period: { fr: 'avr. 2024 - mai 2024', en: 'Apr. 2024 - May 2024' },
    title: { fr: 'Stage – Développeur Web Full-Stack', en: 'Internship – Full-Stack Web Developer' },
    organization: 'Tasmime Web',
    highlights: [
      {
        fr: 'Conception et développement d’un site vitrine moderne avec Next.js et React (front-end).',
        en: 'Design and development of a modern showcase website with Next.js and React (front-end).',
      },
      {
        fr: 'Mise en place d’un back-end WordPress headless pour la gestion de contenu.',
        en: 'Setup of a headless WordPress back-end for content management.',
      },
      {
        fr: 'Intégration et consommation des données du CMS via GraphQL.',
        en: 'Integration and consumption of CMS data via GraphQL.',
      },
      {
        fr: 'Optimisation des performances, du SEO et de l’expérience utilisateur.',
        en: 'Optimization of performance, SEO, and user experience.',
      },
    ],
  },
  {
    period: { fr: 'juin 2023 - juil. 2023', en: 'Jun. 2023 - Jul. 2023' },
    title: { fr: 'Stage d’initiation – Développeur Web', en: 'Introductory Internship – Web Developer' },
    organization: 'IMAGO',
    highlights: [
      {
        fr: 'Conception et développement d’un site web pour une agence de voyage.',
        en: 'Design and development of a website for a travel agency.',
      },
      {
        fr: 'Découverte et mise en pratique du développement back-end PHP et de la gestion de bases de données.',
        en: 'Introduction to and hands-on practice of PHP back-end development and database management.',
      },
      {
        fr: 'Participation à l’intégration des fonctionnalités et à la structure du site.',
        en: 'Contribution to feature integration and site structure.',
      },
    ],
  },
];
