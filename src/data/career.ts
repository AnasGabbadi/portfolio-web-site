export interface CareerItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description?: string;
  highlights?: string[];
}

export const education: CareerItem[] = [
  {
    period: 'oct. 2024 – aujourd’hui',
    title: 'Cycle d’ingénierie en informatique, spécialité Génie Logiciel',
    organization: 'Groupe ISGA',
  },
  {
    period: 'sept. 2022 – mai 2024',
    title: 'Diplôme universitaire de technologie (DUT), Génie logiciel',
    organization: 'École supérieure de technologie Khénifra',
  },
  {
    period: 'sept. 2021 – mai 2022',
    title: 'Baccalauréat (BAC), Sciences physiques',
    organization: 'Lycée Ibno hani, Fès',
  },
];

export const professionalExperience: CareerItem[] = [
  {
    period: 'juil. 2026 – aujourd’hui',
    title: 'Stagiaire Ingénieur Full-Stack — Systèmes Financiers (FinTech)',
    organization: 'Kounhany · Stage',
    location: 'Casablanca-Settat, Maroc · Hybride',
    description: 'Développement du Wallet Kounhany, un système de portefeuille financier unifié basé sur un moteur de comptabilité en partie double (Blnk), centralisant les flux financiers de l’entreprise : applications métier, ERP Dolibarr et authentification SSO via Authentik.',
  },
  {
    period: 'sept. 2025 - juin 2026',
    title: 'Auto-entrepreneur – Développement web & automatisation',
    organization: 'Indépendant',
    highlights: [
      'Conception et développement de solutions web sur mesure.',
      'Automatisation de processus métiers pour améliorer la productivité.',
      'Intégration d’outils et APIs tierces.',
      'Déploiement, maintenance et optimisation des applications.',
    ],
  },
  {
    period: 'juin 2025 - juil. 2025',
    title: 'Stage – Développeur Web Full-Stack',
    organization: 'GAMATEL',
    highlights: [
      'Développement d’une application web full-stack basée sur la stack MERN (MongoDB, Express.js, React.js, Node.js).',
      'Conception d’un panneau d’administration pour la gestion des produits et des demandes de devis.',
      'Implémentation d’un système d’authentification sécurisé (login / logout).',
      'Développement et tests des API REST avec Postman.',
      'Déploiement du back-end sur Railway et du front-end sur Vercel.',
    ],
  },
  {
    period: 'avr. 2024 - mai 2024',
    title: 'Stage – Développeur Web Full-Stack',
    organization: 'Tasmime Web',
    highlights: [
      'Conception et développement d’un site vitrine moderne avec Next.js et React (front-end).',
      'Mise en place d’un back-end WordPress headless pour la gestion de contenu.',
      'Intégration et consommation des données du CMS via GraphQL.',
      'Optimisation des performances, du SEO et de l’expérience utilisateur.',
    ],
  },
  {
    period: 'juin 2023 - juil. 2023',
    title: 'Stage d’initiation – Développeur Web',
    organization: 'IMAGO',
    highlights: [
      'Conception et développement d’un site web pour une agence de voyage.',
      'Découverte et mise en pratique du développement back-end PHP et de la gestion de bases de données.',
      'Participation à l’intégration des fonctionnalités et à la structure du site.',
    ],
  },
];
