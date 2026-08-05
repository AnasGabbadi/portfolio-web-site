import { SkillCategory } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: { fr: 'Langages & Technologies', en: 'Languages & Technologies' },
    icon: 'fas fa-code',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'C#', 'C++', 'SQL'],
  },
  {
    id: 'frameworks',
    title: { fr: 'Frameworks & Librairies', en: 'Frameworks & Libraries' },
    icon: 'fas fa-layer-group',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'NestJS', 'Laravel', 'Symfony', 'Spring Boot', 'EmberJS', 'Vue.js', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'ASP.NET Core', 'Refine'],
  },
  {
    id: 'databases',
    title: { fr: 'Bases de données', en: 'Databases' },
    icon: 'fas fa-database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server', 'SQLite', 'Redis', 'H2', 'Oracle Database', 'Firebase Realtime Database', 'Prisma (ORM)'],
  },
  {
    id: 'security',
    title: { fr: 'Sécurité', en: 'Security' },
    icon: 'fas fa-shield-alt',
    skills: ['JWT', 'Spring Security', 'BCrypt', 'OAuth 2.0', 'OpenID Connect', 'SSO (Single Sign-On)', 'Keycloak', 'IdP (Identity Provider)', 'LDAP'],
  },
  {
    id: 'devops',
    title: { fr: 'DevOps & Déploiement', en: 'DevOps & Deployment' },
    icon: 'fas fa-infinity',
    skills: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Docker', 'Docker Compose', 'Nginx', 'Apache', 'Vercel', 'Railway', 'Render', 'LWS'],
  },
  {
    id: 'ai-data',
    title: { fr: 'Intelligence Artificielle & Data Science', en: 'Artificial Intelligence & Data Science' },
    icon: 'fas fa-brain',
    skills: ['Ollama', 'CodeLlama', 'OpenAI API', 'Prompt Engineering', 'Intégration de LLM', 'Machine Learning', 'scikit-learn', 'FastAPI', 'Régression Linéaire', 'Arbre de Décision', 'SVM', 'joblib', 'Pandas', 'NumPy'],
  },
  {
    id: 'erp',
    title: { fr: 'Progiciels & ERP', en: 'Software Packages & ERP' },
    icon: 'fas fa-cubes',
    skills: ['Dolibarr', 'Fleetbase', 'WordPress', 'Elementor', 'Headless CMS'],
  },
  {
    id: 'systems',
    title: { fr: 'Systèmes & Réseaux', en: 'Systems & Networks' },
    icon: 'fas fa-network-wired',
    skills: ['Linux (Ubuntu/Debian)', 'Windows', 'WSL2', 'Services réseau', 'VPS'],
  },
  {
    id: 'testing',
    title: { fr: 'Tests & Qualité', en: 'Testing & Quality' },
    icon: 'fas fa-vial',
    skills: ['JUnit', 'Tests unitaires', 'Tests d’intégration', 'Pipelines de tests automatisés'],
  },
];
