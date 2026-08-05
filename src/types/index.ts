export interface NavLink {
  href: string;
  label: string;
}

/** Texte disponible dans les deux langues du site (fr/en). */
export interface LocalizedText {
  fr: string;
  en: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: LocalizedText;
  birthday: string;
  degree: string;
  profileImage?: string;
  yearsExperience: number;
  socialLinks: SocialLink[];
}