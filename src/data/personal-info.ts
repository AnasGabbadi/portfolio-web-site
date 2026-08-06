import { PersonalInfo } from '@/types';

export const personalInfo: PersonalInfo = {
  name: 'Gabbadi Anas',
  title: 'Full Stack Developer & Engineering Student',
  description: 'Étudiant en dernière année du cycle ingénieur, passionné par le développement web et l\'automatisation. Motivé par l\'apprentissage de nouvelles compétences et la réalisation de projets concrets.',
  profileImage: '/images/profile.png',
  
  email: 'anas0gabbadi@gmail.com',
  phone: '+212 717-458-335',
  location: { fr: 'Fès, Maroc', en: 'Fès, Morocco' },
  birthday: '04-02-2004',
  
  degree: 'Ingénierie Logicielle',
  yearsExperience: 1, 
  
  
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anas-gabbadi-965872273',
      icon: 'fab fa-linkedin',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/anasgabbadi',
      icon: 'fab fa-github',
    },
    {
      platform: 'Email',
      url: 'mailto:anas0gabbadi@gmail.com',
      icon: 'fas fa-envelope',
    },
  ],
};