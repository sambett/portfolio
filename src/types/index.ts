export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  category: 'Software Engineer' | 'Computer Science Engineer' | 'AI Engineer' | 'DevOps Engineer';
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  impact: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  published: boolean;
}

export interface User {
  email: string;
  password: string;
}

export interface ProjectFilter {
  category: string;
  technology: string;
}

export interface Experience {
  id: string;
  country: string;
  flag: string;
  role: string;
  description: string;
  impact: string;
  stats: string;
  projects: string[];
  status: 'completed' | 'upcoming';
  year: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SoftSkill {
  skill: string;
  description: string;
}

export interface SkillsData {
  technical: SkillCategory[];
  soft: SoftSkill[];
  achievements: string[];
}

export interface AboutData {
  bio: string;
  background: string;
  education: string;
  location: string;
  interests: string[];
  personalNote: string;
  updatedAt: string;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  description: string;
  icon: string;
}

export interface ImpactData {
  title: string;
  subtitle: string;
  metrics: ImpactMetric[];
  mission: string;
  philosophy: string;
  updatedAt: string;
}

export interface SectionData {
  projects: Project[];
  experiences: Experience[];
}
