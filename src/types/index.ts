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
  type: 'movie' | 'series';
  title: string;
  description: string;
  genre: string;
  language: string;
  duration: string; // e.g., "150 min" or "Season 1"
  seasons?: number; // for series
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
  snacks?: { snackId: string; quantity: number }[];
  totalAmount: number;
  status: 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
  bookingDate: string;
}

export interface Review {
  id: string;
  movieId: string;
  userId: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
}

export interface PromoCode {
  id: string;
  code: string;
  discountPercentage: number;
  isActive: boolean;
}

export interface SnackItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'Popcorn' | 'Beverage' | 'Combo' | 'Other';
}
