
import { Mail, Phone, MessageCircle, MapPin, Linkedin, Globe } from "lucide-react";

export interface ContactMethod {
  type: 'call' | 'whatsapp' | 'viber' | 'email' | 'linkedin' | 'location';
  label: string;
  value: string;
  href: string;
  description: string;
  icon: any;
  primary?: boolean;
  country?: string;
  flag?: string;
}

export interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  href?: string;
  description: string;
  methods?: ContactMethod[];
}

export const phoneNumbers = {
  spain: {
    number: "+34 657 205 923",
    formatted: "(+34) 657 205 923",
    country: "Spain",
    flag: "🇪🇸",
    whatsapp: "34657205923",
    tel: "+34657205923"
  },
  greece: {
    number: "+30 6948 181 389",
    formatted: "(+30) 6948 181 389", 
    country: "Greece",
    flag: "🇬🇷",
    whatsapp: "306948181389",
    tel: "+306948181389"
  }
};

export const contactInfo: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "stgeorgo141@gmail.com",
    href: "mailto:stgeorgo141@gmail.com",
    description: "Primary contact for professional inquiries"
  },
  {
    icon: Phone,
    label: "Phone (Spain)",
    value: phoneNumbers.spain.formatted,
    description: "Primary contact - Available for professional matters",
    methods: [
      {
        type: 'call',
        label: "Call",
        value: phoneNumbers.spain.formatted,
        href: `tel:${phoneNumbers.spain.tel}`,
        description: "Direct call",
        icon: Phone,
        primary: true,
        country: phoneNumbers.spain.country,
        flag: phoneNumbers.spain.flag
      },
      {
        type: 'whatsapp',
        label: "WhatsApp",
        value: phoneNumbers.spain.formatted,
        href: `https://wa.me/${phoneNumbers.spain.whatsapp}`,
        description: "WhatsApp message",
        icon: MessageCircle,
        country: phoneNumbers.spain.country,
        flag: phoneNumbers.spain.flag
      }
    ]
  },
  {
    icon: Phone,
    label: "Phone (Greece)",
    value: phoneNumbers.greece.formatted,
    description: "Alternative contact - Available for professional matters",
    methods: [
      {
        type: 'call',
        label: "Call",
        value: phoneNumbers.greece.formatted,
        href: `tel:${phoneNumbers.greece.tel}`,
        description: "Direct call",
        icon: Phone,
        country: phoneNumbers.greece.country,
        flag: phoneNumbers.greece.flag
      },
      {
        type: 'viber',
        label: "Viber",
        value: phoneNumbers.greece.formatted,
        href: `viber://chat?number=${phoneNumbers.greece.whatsapp}`,
        description: "Viber message",
        icon: MessageCircle,
        country: phoneNumbers.greece.country,
        flag: phoneNumbers.greece.flag
      }
    ]
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/efstathios-georgopoulos",
    href: "https://www.linkedin.com/in/efstathios-georgopoulos/",
    description: "Professional network and latest updates"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Madrid, Community of Madrid, Spain",
    description: "Based in Madrid"
  }
];

export const languages = [
  { language: "Greek", level: "Native", proficiency: 100 },
  { language: "English", level: "Fluent", proficiency: 95 },
  { language: "Spanish", level: "Fluent", proficiency: 90 }
];

export const collaborationAreas = [
  "Financial Compliance Consulting",
  "AML/CFT Implementation", 
  "Blockchain Analysis",
  "Regulatory Framework Development",
  "Risk Assessment & Management",
  "Process Optimization",
  "Training & Education",
  "Research Collaboration"
];

export const quickActions = [
  {
    type: 'email',
    label: 'Send Email',
    href: 'mailto:stgeorgo141@gmail.com',
    icon: Mail,
    variant: 'default' as const,
    description: 'Best for detailed inquiries'
  },
  {
    type: 'linkedin',
    label: 'Connect on LinkedIn', 
    href: 'https://www.linkedin.com/in/efstathios-georgopoulos/',
    icon: Linkedin,
    variant: 'outline' as const,
    description: 'Professional networking'
  }
];
