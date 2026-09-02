import React, { createContext, useContext, useState, useEffect } from 'react';

interface LocationContextType {
  city: string;
  setCity: (city: string) => void;
  availableCities: string[];
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [city, setCityState] = useState<string>('Mumbai'); // Default city
  
  const availableCities = ['Mumbai', 'Delhi NCR', 'Bangalore', 'Chennai', 'Hyderabad'];

  useEffect(() => {
    const savedCity = localStorage.getItem('cinewave_city');
    if (savedCity && availableCities.includes(savedCity)) {
      setCityState(savedCity);
    }
  }, []);

  const setCity = (newCity: string) => {
    setCityState(newCity);
    localStorage.setItem('cinewave_city', newCity);
  };

  return (
    <LocationContext.Provider value={{ city, setCity, availableCities }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
