import type { Movie, Theatre, Show, User, Booking, Review, PromoCode, SnackItem } from '../types';
import { mockMovies, mockTheatres, mockShows, mockUsers, mockBookings, mockReviews, mockPromoCodes, mockSnacks } from '../data/mockData';

const KEYS = {
  MOVIES: 'cinewave_movies',
  THEATRES: 'cinewave_theatres',
  SHOWS: 'cinewave_shows',
  USERS: 'cinewave_users',
  BOOKINGS: 'cinewave_bookings',
  REVIEWS: 'cinewave_reviews',
  PROMO_CODES: 'cinewave_promo_codes',
  SNACKS: 'cinewave_snacks',
  CURRENT_USER: 'cinewave_current_user',
};

const DATA_VERSION = 'v7';

// Initialize mock data if not present or version changed
export const initializeData = () => {
  const currentVersion = localStorage.getItem('cinewave_data_version');
  
  if (currentVersion !== DATA_VERSION) {
    // Version mismatch, reset everything except users and bookings
    localStorage.setItem(KEYS.MOVIES, JSON.stringify(mockMovies));
    localStorage.setItem(KEYS.THEATRES, JSON.stringify(mockTheatres));
    localStorage.setItem(KEYS.SHOWS, JSON.stringify(mockShows));
    
    // Only reset users/bookings/reviews/promo codes if they don't exist
    if (!localStorage.getItem(KEYS.USERS)) localStorage.setItem(KEYS.USERS, JSON.stringify(mockUsers));
    if (!localStorage.getItem(KEYS.BOOKINGS)) localStorage.setItem(KEYS.BOOKINGS, JSON.stringify(mockBookings));
    if (!localStorage.getItem(KEYS.REVIEWS)) localStorage.setItem(KEYS.REVIEWS, JSON.stringify(mockReviews));
    if (!localStorage.getItem(KEYS.PROMO_CODES)) localStorage.setItem(KEYS.PROMO_CODES, JSON.stringify(mockPromoCodes));
    if (!localStorage.getItem(KEYS.SNACKS)) localStorage.setItem(KEYS.SNACKS, JSON.stringify(mockSnacks));
    
    localStorage.setItem('cinewave_data_version', DATA_VERSION);
  }
};

// Generic getters and setters
export const getData = <T>(key: string): T[] => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const setData = <T>(key: string, data: T[]) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getMovies = (): Movie[] => getData<Movie>(KEYS.MOVIES);
export const getTheatres = (): Theatre[] => getData<Theatre>(KEYS.THEATRES);
export const getShows = (): Show[] => getData<Show>(KEYS.SHOWS);
export const getUsers = (): User[] => getData<User>(KEYS.USERS);
export const getBookings = (): Booking[] => getData<Booking>(KEYS.BOOKINGS);
export const getReviews = (): Review[] => getData<Review>(KEYS.REVIEWS);
export const getPromoCodes = (): PromoCode[] => getData<PromoCode>(KEYS.PROMO_CODES);
export const getSnacks = (): SnackItem[] => getData<SnackItem>(KEYS.SNACKS);

export const saveBookings = (bookings: Booking[]) => setData(KEYS.BOOKINGS, bookings);
export const saveMovies = (movies: Movie[]) => setData(KEYS.MOVIES, movies);
export const saveTheatres = (theatres: Theatre[]) => setData(KEYS.THEATRES, theatres);
export const saveShows = (shows: Show[]) => setData(KEYS.SHOWS, shows);
export const saveUsers = (users: User[]) => setData(KEYS.USERS, users);
export const saveReviews = (reviews: Review[]) => setData(KEYS.REVIEWS, reviews);
export const savePromoCodes = (promoCodes: PromoCode[]) => setData(KEYS.PROMO_CODES, promoCodes);
export const saveSnacks = (snacks: SnackItem[]) => setData(KEYS.SNACKS, snacks);

// Current User
export const getCurrentUser = (): User | null => {
  const user = localStorage.getItem(KEYS.CURRENT_USER);
  return user ? JSON.parse(user) : null;
};

export const setCurrentUser = (user: User) => {
  localStorage.setItem(KEYS.CURRENT_USER, JSON.stringify(user));
};

export const clearCurrentUser = () => {
  localStorage.removeItem(KEYS.CURRENT_USER);
};

export const clearAllData = () => {
  localStorage.clear();
};

export { KEYS };
