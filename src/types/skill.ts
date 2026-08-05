import { LocalizedText } from './index';

export interface SkillCategory {
  id: string;
  title: LocalizedText;
  icon: string;
  skills: string[];
}
