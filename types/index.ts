export interface NavLink {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  longDescription?: string;
  benefits?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Principle {
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageId: string;
  author: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  imageId: string;
}

export interface Job {
  id: string;
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  linkedin?: string;
}

export interface FloatingCard {
  id: string;
  icon: string;
  stat: string;
  label: string;
  color: "blue" | "sky" | "amber" | "violet" | "emerald" | "rose";
  live?: boolean;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  width: string;
  rotate: number;
  floatY: number;
  duration: number;
  delay: number;
}
