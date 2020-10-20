import React from 'react';
import { TiBriefcase } from "react-icons/ti";
import { RiBankLine, RiArtboardLine } from "react-icons/ri";

const standardSize = 32;

export const indusryIcons = {
  generalBusiness: <TiBriefcase size={standardSize} />,
  accounting: <RiBankLine size={standardSize} />,
  consulting: <RiArtboardLine size={standardSize} />,
  finance: <RiBankLine size={standardSize} />,
  hospitalityTourism: [
    "Hospitality Intern",
    "Event Planning Intern",
    "Hotel Management Intern",
    "Live Event Intern",
  ],
  insurance: ["Actuarial Intern", "Insurance Intern", "Compliance Intern"],
  marketing: [
    "Social Media Marketing Intern",
    "Brand Marketing Intern",
    "Communications Intern",
    "PR Intern",
    "Advertising Intern",
    "Sales Intern",
  ],
  operations: [
    "Operations Intern",
    "Manufacturing Operations Intern",
    "Human Resources Intern",
  ],
  realEstate: ["Real Estate Intern"],
  computer: [
    "Software Engineering Intern",
    "Web Development Intern",
    "Front-End Intern",
    "Back-End Intern",
    "Full-stack Developer Intern",
    "iOS developer intern",
    "Android developer intern",
    "Systems Engineering Intern",
    "Data Science Intern",
    "AI Intern",
    "Data Analytics Intern",
  ],
  engineering: [
    "Industrial Engineer Intern",
    "Biomedical Engineer Intern",
    "Environmental Engineer Intern",
    "Marine Engineer Intern",
    "Civil Engineer Intern",
    "Mechanical Engineer Intern",
    "Electrical Engineer Intern",
    "Materials Engineer Intern",
    "Chemical Engineer Intern",
  ],
  scienceResearch: ["Research Assistant", "Biology Intern", "Chemistry Intern"],
  medical: [
    "Public Health Intern",
    "Physician Assistance Intern",
    "Laboratory Assistant Intern",
  ],
  pharmaceutical: [
    "Laboratory Assistant Intern",
    "Pharmaceutical Development Intern",
    "Quality Control Intern",
  ],
  art: ["Artist Intern", "Art Museum Intern"],
  fashion: ["Fashion Design Intern", "Seasonal Trend Forecaster Intern"],
  graphicDesign: [
    "UI Design Intern",
    "Game Design Intern",
    "Infographic Designer Intern",
  ],
  journalism: [
    "Creative Writing Intern",
    "Editorial Intern",
    "Publishing Intern",
    "Sports Journalist Intern",
  ],
  media: [
    "Social Media Intern",
    "Film Production Intern",
    "Production Assistant Intern",
  ],
  legal: ["Legal Clerk Intern", "Corporate Legal Intern"],
  nonProfit: [
    "Leadership Intern",
    "Public Affairs Intern",
    "Development Intern",
  ],
  politics: ["Congressional Office Intern", "Political Affairs Intern"],
  education: ["Education Services Intern", "Academic Advising Intern"],
  vocational: [
    "Automotive Services Apprentice/Intern",
    "Construction Apprentice/Intern",
    "Electrical Apprentice/Intern",
  ],
  research: ["University Research Intern"],
};
