export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  bullets: string[];
  imagePath?: string;
  metrics?: { label: string; value: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  duration: string;
  bullets: string[];
  collaboration?: string;
  technologies: string[];
  links?: {
    github?: string;
    demo?: string;
    doi?: string;
    zenodo?: string;
  };
  imagePath?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  journalOrConference: string;
  type: 'journal' | 'conference' | 'dataset';
  status?: string;
  year: string;
  pages?: string;
  doi?: string;
  doiUrl?: string;
  pdfPath: string;
  websiteUrl?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  duration: string;
  cgpa: string;
  coursework?: string[];
  honor?: string;
  imagePath?: string;
}

export interface AwardItem {
  id: string;
  title: string;
  event: string;
  issuer: string;
  year: string;
  description: string;
  images: {
    path: string;
    label: string;
  }[];
}
