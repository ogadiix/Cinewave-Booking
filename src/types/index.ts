export type Role = 'customer' | 'staff' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  status: 'active' | 'inactive';
  createdDate: string;
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  genre: string;
  language: string;
  duration: string; // e.g., "150 min"
  rating: string; // e.g., "UA", "A"
  poster: string;
  releaseDate: string;
}

export interface Theatre {
  id: string;
  name: string;
  location: string;
  screens: number;
}

export interface Show {
  id: string;
  movieId: string;
  theatreId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM AM/PM
  ticketPrice: number;
  availableSeats: number;
}

export interface Booking {
  id: string; // e.g., CW-2026-000001
  userId: string;
  showId: string;
  seats: string[];
  totalAmount: number;
  status: 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  bookingDate: string;
}
