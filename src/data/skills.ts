import { SkillCategory } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    title: 'Langages & Technologies',
    icon: 'fas fa-code',
    skills: ['HTML5', 'CSS3', 'SCSS', 'JavaScript', 'TypeScript', 'PHP', 'Java', 'Python', 'C#', 'C++', 'SQL'],
  },
  {
    title: 'Frameworks & Librairies',
    icon: 'fas fa-layer-group',
    skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'NestJS', 'Laravel', 'Symfony', 'Spring Boot', 'EmberJS', 'Vue.js', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'ASP.NET Core', 'Refine'],
  },
  {
    title: 'Bases de données',
    icon: 'fas fa-database',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'SQL Server', 'SQLite', 'Redis', 'H2', 'Oracle Database', 'Firebase Realtime Database', 'Prisma (ORM)'],
  },
  {
    title: 'Sécurité',
    icon: 'fas fa-shield-alt',
    skills: ['JWT', 'Spring Security', 'BCrypt', 'OAuth 2.0', 'OpenID Connect', 'SSO (Single Sign-On)', 'Keycloak', 'IdP (Identity Provider)', 'LDAP'],
  },
  {
    title: 'DevOps & Déploiement',
    icon: 'fas fa-infinity',
    skills: ['Git', 'GitHub', 'GitHub Actions (CI/CD)', 'Docker', 'Docker Compose', 'Nginx', 'Apache', 'Vercel', 'Railway', 'Render', 'LWS'],
  },
  {
    title: 'Intelligence Artificielle & Data Science',
    icon: 'fas fa-brain',
    skills: ['Ollama', 'CodeLlama', 'OpenAI API', 'Prompt Engineering', 'Intégration de LLM', 'Machine Learning', 'scikit-learn', 'FastAPI', 'Régression Linéaire', 'Arbre de Décision', 'SVM', 'joblib', 'Pandas', 'NumPy'],
  },
  {
    title: 'Progiciels & ERP',
    icon: 'fas fa-cubes',
    skills: ['Dolibarr', 'Fleetbase', 'WordPress', 'Elementor', 'Headless CMS'],
  },
  {
    title: 'Systèmes & Réseaux',
    icon: 'fas fa-network-wired',
    skills: ['Linux (Ubuntu/Debian)', 'Windows', 'WSL2', 'Services réseau', 'VPS'],
  },
  {
    title: 'Tests & Qualité',
    icon: 'fas fa-vial',
    skills: ['JUnit', 'Tests unitaires', 'Tests d\u2019intégration', 'Pipelines de tests automatisés'],
  },
];