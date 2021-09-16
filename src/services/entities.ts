export interface ExpertProps {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  location: string;
  employmentType: string;
  hourlyRate: string;
  isFavorit: boolean;
}

export interface Respones<Type> {
  data: Type[];
}

export interface Error {
  message: string;
}
