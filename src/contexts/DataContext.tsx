import React, { createContext, useContext, useState, useEffect } from 'react';

export interface PersonalInfo {
  name: string;
  title: string;
  currentPosition: string;
  description: string;
  location: string;
  cvLink: string;
  linkedInLink: string;
  badges: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  responsibilities: string[];
  skills: string[];
  achievements?: string[];
  visible: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  status: string;
  visible: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  link?: string;
  visible: boolean;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
  readTime?: string;
  featured: boolean;
  visible: boolean;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  additionalLinks: { name: string; url: string }[];
}

interface DataContextType {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (info: PersonalInfo) => void;
  experiences: Experience[];
  updateExperiences: (experiences: Experience[]) => void;
  addExperience: (experience: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, experience: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  education: Education[];
  updateEducation: (education: Education[]) => void;
  addEducation: (edu: Omit<Education, 'id'>) => void;
  updateEducationItem: (id: string, edu: Partial<Education>) => void;
  deleteEducation: (id: string) => void;
  certifications: Certification[];
  updateCertifications: (certs: Certification[]) => void;
  addCertification: (cert: Omit<Certification, 'id'>) => void;
  updateCertification: (id: string, cert: Partial<Certification>) => void;
  deleteCertification: (id: string) => void;
  articles: Article[];
  updateArticles: (articles: Article[]) => void;
  addArticle: (article: Omit<Article, 'id'>) => void;
  updateArticle: (id: string, article: Partial<Article>) => void;
  deleteArticle: (id: string) => void;
  contactInfo: ContactInfo;
  updateContactInfo: (info: ContactInfo) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// Default data
const defaultPersonalInfo: PersonalInfo = {
  name: "Efstathios Georgopoulos",
  title: "Financial Crime Compliance Quality Assurance Analyst",
  currentPosition: "Currently at Ebury - Leading Quality Assurance in Financial Crime Compliance",
  description: "Multilingual Compliance & Blockchain Specialist with deep expertise in AML/CFT, fraud detection, and forensic financial analysis. Demonstrated success across banking and fintech sectors in Europe, with experience working with regulators such as BoG, FinCEN, SEPBLAC, CSSF, BaFin, FIU-IND, and SHCP.",
  location: "Madrid, Spain",
  cvLink: "https://drive.google.com/file/d/1Y0U3PSoK0kOcysbQK76HB3pFxUUOhnYy/view?usp=drive_link",
  linkedInLink: "https://www.linkedin.com/in/efstathios-georgopoulos/",
  badges: [
    "🏛️ Financial Crime Compliance",
    "⛓️ Blockchain Specialist", 
    "🎓 MSc Fintech & Blockchain",
    "📍 Madrid, Spain"
  ]
};

const defaultContactInfo: ContactInfo = {
  email: "contact@efstathios.com",
  location: "Madrid, Spain",
  additionalLinks: []
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(defaultPersonalInfo);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [contactInfo, setContactInfo] = useState<ContactInfo>(defaultContactInfo);

  // Load data from localStorage on init
  useEffect(() => {
    const loadData = (key: string, defaultValue: any, setter: (value: any) => void) => {
      const saved = localStorage.getItem(`portfolio_${key}`);
      if (saved) {
        try {
          setter(JSON.parse(saved));
        } catch (error) {
          setter(defaultValue);
        }
      }
    };

    loadData('personalInfo', defaultPersonalInfo, setPersonalInfo);
    loadData('experiences', [], setExperiences);
    loadData('education', [], setEducation);
    loadData('certifications', [], setCertifications);
    loadData('articles', [], setArticles);
    loadData('contactInfo', defaultContactInfo, setContactInfo);
  }, []);

  // Save to localStorage when data changes
  const saveData = (key: string, data: any) => {
    localStorage.setItem(`portfolio_${key}`, JSON.stringify(data));
  };

  const updatePersonalInfo = (info: PersonalInfo) => {
    setPersonalInfo(info);
    saveData('personalInfo', info);
  };

  const updateExperiences = (exps: Experience[]) => {
    setExperiences(exps);
    saveData('experiences', exps);
  };

  const addExperience = (exp: Omit<Experience, 'id'>) => {
    const newExp = { ...exp, id: Date.now().toString() };
    const newExps = [...experiences, newExp];
    updateExperiences(newExps);
  };

  const updateExperience = (id: string, expUpdate: Partial<Experience>) => {
    const newExps = experiences.map(exp => 
      exp.id === id ? { ...exp, ...expUpdate } : exp
    );
    updateExperiences(newExps);
  };

  const deleteExperience = (id: string) => {
    const newExps = experiences.filter(exp => exp.id !== id);
    updateExperiences(newExps);
  };

  const updateEducation = (edu: Education[]) => {
    setEducation(edu);
    saveData('education', edu);
  };

  const addEducation = (edu: Omit<Education, 'id'>) => {
    const newEdu = { ...edu, id: Date.now().toString() };
    const newEducation = [...education, newEdu];
    updateEducation(newEducation);
  };

  const updateEducationItem = (id: string, eduUpdate: Partial<Education>) => {
    const newEducation = education.map(edu => 
      edu.id === id ? { ...edu, ...eduUpdate } : edu
    );
    updateEducation(newEducation);
  };

  const deleteEducation = (id: string) => {
    const newEducation = education.filter(edu => edu.id !== id);
    updateEducation(newEducation);
  };

  const updateCertifications = (certs: Certification[]) => {
    setCertifications(certs);
    saveData('certifications', certs);
  };

  const addCertification = (cert: Omit<Certification, 'id'>) => {
    const newCert = { ...cert, id: Date.now().toString() };
    const newCerts = [...certifications, newCert];
    updateCertifications(newCerts);
  };

  const updateCertification = (id: string, certUpdate: Partial<Certification>) => {
    const newCerts = certifications.map(cert => 
      cert.id === id ? { ...cert, ...certUpdate } : cert
    );
    updateCertifications(newCerts);
  };

  const deleteCertification = (id: string) => {
    const newCerts = certifications.filter(cert => cert.id !== id);
    updateCertifications(newCerts);
  };

  const updateArticles = (arts: Article[]) => {
    setArticles(arts);
    saveData('articles', arts);
  };

  const addArticle = (article: Omit<Article, 'id'>) => {
    const newArticle = { ...article, id: Date.now().toString() };
    const newArticles = [...articles, newArticle];
    updateArticles(newArticles);
  };

  const updateArticle = (id: string, articleUpdate: Partial<Article>) => {
    const newArticles = articles.map(article => 
      article.id === id ? { ...article, ...articleUpdate } : article
    );
    updateArticles(newArticles);
  };

  const deleteArticle = (id: string) => {
    const newArticles = articles.filter(article => article.id !== id);
    updateArticles(newArticles);
  };

  const updateContactInfo = (info: ContactInfo) => {
    setContactInfo(info);
    saveData('contactInfo', info);
  };

  const value = {
    personalInfo,
    updatePersonalInfo,
    experiences,
    updateExperiences,
    addExperience,
    updateExperience,
    deleteExperience,
    education,
    updateEducation,
    addEducation,
    updateEducationItem,
    deleteEducation,
    certifications,
    updateCertifications,
    addCertification,
    updateCertification,
    deleteCertification,
    articles,
    updateArticles,
    addArticle,
    updateArticle,
    deleteArticle,
    contactInfo,
    updateContactInfo
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};