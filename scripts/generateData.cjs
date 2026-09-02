const fs = require('fs');
const path = require('path');

const cities = [
  'Mumbai', 'Delhi NCR', 'Bangalore', 'Chennai', 'Hyderabad', 
  'Pune', 'Kolkata', 'Ahmedabad', 'Jaipur', 'Chandigarh', 
  'Lucknow', 'Kochi', 'Indore', 'Bhopal', 'Surat', 'Nagpur',
  'Coimbatore', 'Visakhapatnam', 'Patna', 'Vadodara'
];

const theatreBrands = ['PVR', 'INOX', 'Cinepolis', 'Carnival', 'Mukta A2', 'Miraj', 'CineBells', 'Asian Cinemas'];
const theatreSuffixes = ['Mall', 'Multiplex', 'Plaza', 'Square', 'City Center', 'Avenue', 'Galleria'];

const genres = ['Action, Sci-Fi', 'Action, Thriller', 'Action, Crime, Drama', 'Biography, Drama, History', 'Action, Adventure, Sci-Fi', 'Comedy, Horror', 'Comedy, Drama', 'Romance, Drama', 'Thriller, Mystery', 'Horror, Thriller', 'Animation, Family', 'Fantasy, Adventure'];
const languages = ['Hindi', 'English', 'Telugu', 'Tamil', 'Malayalam', 'Kannada', 'Hindi, English', 'Telugu, Hindi', 'Tamil, Telugu'];
const ratings = ['U', 'UA', 'A'];

// High quality unsplash posters for movies
const posters = [
  'https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop',
  'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop'
];

const movieAdjectives = ['The Last', 'Return of', 'Rise of', 'Fall of', 'Legend of', 'Secret of', 'Midnight', 'Crimson', 'Silent', 'Golden', 'Lost', 'Dark', 'Eternal', 'Hidden', 'Phantom'];
const movieNouns = ['Warrior', 'Kingdom', 'Shadow', 'Hero', 'Ghost', 'Dawn', 'Empire', 'City', 'Knight', 'Spy', 'Assassin', 'Legacy', 'Chronicles', 'Dimension', 'Quest'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate Movies
const mockMovies = [];
for (let i = 1; i <= 150; i++) {
  const isReal = i <= 10;
  const title = isReal ? 
    ['Kalki 2898 AD', 'Jawan', 'Animal', 'Leo', 'Oppenheimer', 'Salaar', 'Dune: Part Two', 'Fighter', 'Stree 2', 'Deadpool & Wolverine'][i-1] :
    `${getRandomElement(movieAdjectives)} ${getRandomElement(movieNouns)}`;
  
  mockMovies.push({
    id: `m${i}`,
    title,
    description: `An epic cinematic experience exploring themes of adventure, drama, and action in ${title}.`,
    genre: getRandomElement(genres),
    language: getRandomElement(languages),
    duration: `${getRandomInt(100, 210)} min`,
    rating: getRandomElement(ratings),
    poster: getRandomElement(posters),
    releaseDate: `2026-${String(getRandomInt(1, 12)).padStart(2, '0')}-${String(getRandomInt(1, 28)).padStart(2, '0')}`
  });
}

// Generate Theatres
const mockTheatres = [];
for (let i = 1; i <= 150; i++) {
  mockTheatres.push({
    id: `t${i}`,
    name: `${getRandomElement(theatreBrands)} ${getRandomElement(theatreSuffixes)}`,
    location: getRandomElement(cities),
    screens: getRandomInt(2, 16)
  });
}

// Generate Shows
const mockShows = [];
let showId = 1;
// Give each theatre 5-10 shows
mockTheatres.forEach(theatre => {
  const numShows = getRandomInt(5, 12);
  const selectedMovies = [];
  // select a few random movies for this theatre
  for (let j = 0; j < 5; j++) {
    selectedMovies.push(getRandomElement(mockMovies).id);
  }
  
  for (let s = 0; s < numShows; s++) {
    const times = ['09:00 AM', '11:15 AM', '01:30 PM', '04:00 PM', '07:15 PM', '09:45 PM', '10:30 PM'];
    mockShows.push({
      id: `s${showId++}`,
      movieId: getRandomElement(selectedMovies),
      theatreId: theatre.id,
      date: '2026-09-10', // Focus on a specific date for simplicity in demo
      time: getRandomElement(times),
      ticketPrice: getRandomInt(20, 80) * 10, // 200 to 800
      availableSeats: getRandomInt(50, 300)
    });
  }
});

// Build the file content
const fileContent = `import type { Movie, Theatre, Show, User, Booking, Review, PromoCode, SnackItem } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Demo Customer', email: 'customer@cinewave.com', phone: '9876543210', role: 'customer', status: 'active', createdDate: '2026-01-01' },
  { id: 'u2', name: 'Demo Staff', email: 'staff@cinewave.com', phone: '9876543211', role: 'staff', status: 'active', createdDate: '2026-01-01' },
  { id: 'u3', name: 'Demo Admin', email: 'admin@cinewave.com', phone: '9876543212', role: 'admin', status: 'active', createdDate: '2026-01-01' },
];

export const mockMovies: Movie[] = ${JSON.stringify(mockMovies, null, 2)};

export const mockTheatres: Theatre[] = ${JSON.stringify(mockTheatres, null, 2)};

export const mockShows: Show[] = ${JSON.stringify(mockShows, null, 2)};

export const mockBookings: Booking[] = [];

export const mockReviews: Review[] = [
  { id: 'r1', movieId: 'm1', userId: 'u1', rating: 5, comment: 'Absolutely mind-blowing visuals and great story!', date: '2026-08-15' },
  { id: 'r2', movieId: 'm1', userId: 'u2', rating: 4, comment: 'Good, but the pacing could be better in the first half.', date: '2026-08-16' }
];

export const mockPromoCodes: PromoCode[] = [
  { id: 'pc1', code: 'WELCOME10', discountPercentage: 10, isActive: true },
  { id: 'pc2', code: 'FESTIVAL20', discountPercentage: 20, isActive: true },
  { id: 'pc3', code: 'EXPIRED50', discountPercentage: 50, isActive: false },
];

export const mockSnacks: SnackItem[] = [
  { id: 'snack1', name: 'Large Popcorn', description: 'Freshly popped salted popcorn', price: 350, image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=300&fit=crop', category: 'Popcorn' },
  { id: 'snack2', name: 'Caramel Popcorn', description: 'Sweet and crunchy caramel coated popcorn', price: 400, image: 'https://images.unsplash.com/photo-1585671569438-e9f80164c9d7?w=300&h=300&fit=crop', category: 'Popcorn' },
  { id: 'snack3', name: 'Coke Large', description: 'Chilled Coca-Cola', price: 200, image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&h=300&fit=crop', category: 'Beverage' },
  { id: 'snack4', name: 'Nachos with Salsa', description: 'Crispy nachos served with spicy salsa dip', price: 300, image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300&h=300&fit=crop', category: 'Other' },
  { id: 'snack5', name: 'Movie Combo 1', description: 'Large Popcorn + 2 Coke Large', price: 650, image: 'https://images.unsplash.com/photo-1543826270-f42f2ed1c750?w=300&h=300&fit=crop', category: 'Combo' },
];
`;

fs.writeFileSync(path.join(__dirname, '../src/data/mockData.ts'), fileContent);
console.log('Successfully generated massive mockData.ts');
