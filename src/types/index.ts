export interface NavLink {
  href: string;
  label: string;
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
  location: string;
  birthday: string;
  degree: string;
  profileImage?: string;
  yearsExperience: number;
  socialLinks: SocialLink[];
}