import type { Movie, Theatre, Show, User, Booking } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Demo Customer', email: 'customer@cinewave.com', phone: '9876543210', role: 'customer', status: 'active', createdDate: '2026-01-01' },
  { id: 'u2', name: 'Demo Staff', email: 'staff@cinewave.com', phone: '9876543211', role: 'staff', status: 'active', createdDate: '2026-01-01' },
  { id: 'u3', name: 'Demo Admin', email: 'admin@cinewave.com', phone: '9876543212', role: 'admin', status: 'active', createdDate: '2026-01-01' },
];

export const mockMovies: Movie[] = [
  {
    id: 'm1',
    title: 'Kalki 2898 AD',
    description: 'A modern-day avatar of Vishnu, a Hindu god, who is believed to have descended to earth to protect the world from evil forces.',
    genre: 'Action, Sci-Fi',
    language: 'Telugu, Hindi',
    duration: '181 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop',
    releaseDate: '2026-05-09'
  },
  {
    id: 'm2',
    title: 'Jawan',
    description: 'A high-octane action thriller which outlines the emotional journey of a man who is set to rectify the wrongs in the society.',
    genre: 'Action, Thriller',
    language: 'Hindi',
    duration: '169 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop',
    releaseDate: '2025-09-07'
  },
  {
    id: 'm3',
    title: 'Animal',
    description: 'A son\'s obsessive love for his father leads to a destructive rampage across the country.',
    genre: 'Action, Crime, Drama',
    language: 'Hindi',
    duration: '201 min',
    rating: 'A',
    poster: 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop',
    releaseDate: '2025-12-01'
  },
  {
    id: 'm4',
    title: 'Leo',
    description: 'A mild-mannered cafe owner becomes a local hero through an act of violence, which sets off repercussions with connections to an old life he left behind.',
    genre: 'Action, Thriller',
    language: 'Tamil',
    duration: '164 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop',
    releaseDate: '2025-10-19'
  },
  {
    id: 'm5',
    title: 'Oppenheimer',
    description: 'The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.',
    genre: 'Biography, Drama, History',
    language: 'English',
    duration: '180 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop',
    releaseDate: '2025-07-21'
  },
  {
    id: 'm6',
    title: 'Salaar: Part 1 - Ceasefire',
    description: 'A gang leader tries to keep a promise made to his dying friend and takes on the other criminal gangs.',
    genre: 'Action, Crime, Thriller',
    language: 'Telugu, Hindi',
    duration: '175 min',
    rating: 'A',
    poster: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop',
    releaseDate: '2025-12-22'
  },
  {
    id: 'm7',
    title: 'Dune: Part Two',
    description: 'Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators who destroyed his family.',
    genre: 'Action, Adventure, Sci-Fi',
    language: 'English',
    duration: '166 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop',
    releaseDate: '2026-03-01'
  },
  {
    id: 'm8',
    title: 'Fighter',
    description: 'Top IAF aviators come together in the face of imminent danger, to form Air Dragons.',
    genre: 'Action, Thriller',
    language: 'Hindi',
    duration: '166 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop',
    releaseDate: '2026-01-25'
  },
  {
    id: 'm9',
    title: 'Stree 2',
    description: 'The town of Chanderi is haunted again, this time by a headless entity that abducts women.',
    genre: 'Comedy, Horror',
    language: 'Hindi',
    duration: '145 min',
    rating: 'UA',
    poster: 'https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop',
    releaseDate: '2026-08-15'
  },
  {
    id: 'm10',
    title: 'Deadpool & Wolverine',
    description: 'Wolverine is recovering from his injuries when he crosses paths with the loudmouth Deadpool. They team up to defeat a common enemy.',
    genre: 'Action, Comedy, Sci-Fi',
    language: 'English',
    duration: '127 min',
    rating: 'A',
    poster: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop',
    releaseDate: '2026-07-26'
  }
];

export const mockTheatres: Theatre[] = [
  { id: 't1', name: 'PVR Director\'s Cut, Vasant Kunj', location: 'Delhi NCR', screens: 4 },
  { id: 't2', name: 'INOX Megaplex, Inorbit Mall', location: 'Mumbai', screens: 8 },
  { id: 't3', name: 'Cinepolis VIP, Orion Mall', location: 'Bangalore', screens: 6 },
  { id: 't4', name: 'PVR ICON, Andheri', location: 'Mumbai', screens: 5 },
  { id: 't5', name: 'SPI Cinemas, Express Avenue', location: 'Chennai', screens: 6 },
  { id: 't6', name: 'AMB Cinemas, Gachibowli', location: 'Hyderabad', screens: 7 },
  { id: 't7', name: 'INOX Select Citywalk', location: 'Delhi NCR', screens: 4 },
  { id: 't8', name: 'PVR Superplex, Mall of India', location: 'Delhi NCR', screens: 15 },
  { id: 't9', name: 'Carnival Cinemas, IMAX', location: 'Mumbai', screens: 3 },
  { id: 't10', name: 'PVR Vega City', location: 'Bangalore', screens: 12 },
];

export const mockShows: Show[] = [
  // Mumbai Shows
  { id: 's1', movieId: 'm1', theatreId: 't2', date: '2026-09-10', time: '10:00 AM', ticketPrice: 350, availableSeats: 120 },
  { id: 's2', movieId: 'm1', theatreId: 't2', date: '2026-09-10', time: '1:30 PM', ticketPrice: 400, availableSeats: 120 },
  { id: 's3', movieId: 'm2', theatreId: 't2', date: '2026-09-10', time: '4:00 PM', ticketPrice: 300, availableSeats: 120 },
  { id: 's4', movieId: 'm1', theatreId: 't4', date: '2026-09-10', time: '7:30 PM', ticketPrice: 450, availableSeats: 90 },
  { id: 's5', movieId: 'm3', theatreId: 't4', date: '2026-09-10', time: '10:30 PM', ticketPrice: 350, availableSeats: 90 },
  { id: 's19', movieId: 'm7', theatreId: 't9', date: '2026-09-10', time: '8:00 PM', ticketPrice: 850, availableSeats: 250 }, // IMAX
  { id: 's20', movieId: 'm10', theatreId: 't4', date: '2026-09-10', time: '5:15 PM', ticketPrice: 400, availableSeats: 90 },
  
  // Delhi Shows
  { id: 's6', movieId: 'm1', theatreId: 't1', date: '2026-09-10', time: '11:00 AM', ticketPrice: 1200, availableSeats: 40 }, 
  { id: 's7', movieId: 'm1', theatreId: 't1', date: '2026-09-10', time: '8:00 PM', ticketPrice: 1500, availableSeats: 40 },
  { id: 's8', movieId: 'm5', theatreId: 't7', date: '2026-09-10', time: '6:00 PM', ticketPrice: 450, availableSeats: 150 },
  { id: 's9', movieId: 'm2', theatreId: 't7', date: '2026-09-10', time: '9:30 PM', ticketPrice: 400, availableSeats: 150 },
  { id: 's21', movieId: 'm9', theatreId: 't8', date: '2026-09-10', time: '7:00 PM', ticketPrice: 350, availableSeats: 200 },
  { id: 's22', movieId: 'm8', theatreId: 't8', date: '2026-09-10', time: '9:45 PM', ticketPrice: 350, availableSeats: 200 },
  
  // Bangalore Shows
  { id: 's10', movieId: 'm1', theatreId: 't3', date: '2026-09-10', time: '12:30 PM', ticketPrice: 650, availableSeats: 60 },
  { id: 's11', movieId: 'm6', theatreId: 't3', date: '2026-09-10', time: '4:15 PM', ticketPrice: 500, availableSeats: 60 },
  { id: 's12', movieId: 'm5', theatreId: 't3', date: '2026-09-10', time: '8:45 PM', ticketPrice: 650, availableSeats: 60 },
  { id: 's23', movieId: 'm7', theatreId: 't10', date: '2026-09-10', time: '5:30 PM', ticketPrice: 450, availableSeats: 180 },
  { id: 's24', movieId: 'm10', theatreId: 't10', date: '2026-09-10', time: '8:15 PM', ticketPrice: 400, availableSeats: 180 },
  
  // Chennai Shows
  { id: 's13', movieId: 'm4', theatreId: 't5', date: '2026-09-10', time: '10:00 AM', ticketPrice: 200, availableSeats: 250 }, 
  { id: 's14', movieId: 'm4', theatreId: 't5', date: '2026-09-10', time: '2:30 PM', ticketPrice: 200, availableSeats: 250 },
  { id: 's15', movieId: 'm1', theatreId: 't5', date: '2026-09-10', time: '6:30 PM', ticketPrice: 200, availableSeats: 250 },
  { id: 's25', movieId: 'm8', theatreId: 't5', date: '2026-09-10', time: '9:30 PM', ticketPrice: 200, availableSeats: 250 },
  
  // Hyderabad Shows
  { id: 's16', movieId: 'm1', theatreId: 't6', date: '2026-09-10', time: '11:15 AM', ticketPrice: 350, availableSeats: 180 },
  { id: 's17', movieId: 'm6', theatreId: 't6', date: '2026-09-10', time: '3:00 PM', ticketPrice: 300, availableSeats: 180 },
  { id: 's18', movieId: 'm1', theatreId: 't6', date: '2026-09-10', time: '7:45 PM', ticketPrice: 350, availableSeats: 180 },
  { id: 's26', movieId: 'm7', theatreId: 't6', date: '2026-09-10', time: '10:30 PM', ticketPrice: 400, availableSeats: 180 },
];

export const mockBookings: Booking[] = [];
