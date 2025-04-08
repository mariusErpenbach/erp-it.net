export type Idea = {
    idea: string;
    kontakt?: string;     // Optional
    ip: string;           // Für Rate-Limiting
    createdAt: Date;      // Automatisch
  };