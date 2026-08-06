// lib/servicesData.ts

export const SERVICES_LIST = [
  "Door Supervision",
  "Event Security",
  "Key Holding & Alarm Response",
  "Security Guards",
  "Pubs & Clubs Security",
  "Corporate Event Security",
  "Festivals & Concert Security",
  "Sporting Event Security",
  "Wedding Security",
  "Vacant Property Security",
  "Construction Security",
  "Education Security",
  "Entertainment & Art Security",
  "Factory Security",
  "Gatehouse Security",
  "Hotel Security",
  "Logistics & Distribution",
  "Pharmaceutical Sector",
  "Retail Security",
  "Student Accommodation",
  "Warehouse Security",
  "Other"
] as const;

export type ServiceType = (typeof SERVICES_LIST)[number];