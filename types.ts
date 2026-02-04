
export interface Project {
  title: string;
  year: string;
  description: string[];
  tags: string[];
  link?: string;
  imageUrl?: string; // New field for real images
  imagePlaceholder: string; // Fallback text
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
