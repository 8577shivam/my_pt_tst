import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context value
interface Skill {
  name: string;
  experience: string|number;
  description: string;
}

interface AvailabilityContextType {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  availability: string;
  setAvailability: React.Dispatch<React.SetStateAction<string>>;
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  newSkill: Skill;
  setNewSkill: React.Dispatch<React.SetStateAction<Skill>>;
  currentIndex: number | null;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

// Create the context with an initial value of undefined
const AvailabilityContext = createContext<AvailabilityContextType | undefined>(undefined);

// Define the provider component props
interface AvailabilityProviderProps {
  children: ReactNode;
}

const AvailabilityProvider: React.FC<AvailabilityProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<string>('Actively looking for a job');
  const [availability, setAvailability] = useState<string>('1 month');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState<Skill>({ name: '', experience: 1, description: '' });
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const value: AvailabilityContextType = {
    status,
    setStatus,
    availability,
    setAvailability,
    skills,
    setSkills,
    newSkill,
    setNewSkill,
    currentIndex,
    setCurrentIndex,
  };

  return (
    <AvailabilityContext.Provider value={value}>
      {children}
    </AvailabilityContext.Provider>
  );
};

export { AvailabilityProvider, AvailabilityContext };
