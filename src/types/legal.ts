export interface LegalListBlock {
  intro?: string;
  items: string[];
}

export interface LegalSectionData {
  id: string;
  title: string;
  paragraphs?: string[];
  lists?: LegalListBlock[];
}

export interface LegalDocument {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSectionData[];
}
