
export interface Project {
  title: string;
  year: string;
  description: string[];
  tags: string[];
  link?: string;
  imagePlaceholder: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  gpa?: string;
  coursework: string[];
}
