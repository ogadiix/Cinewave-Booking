import type { Movie, Theatre, Show, User, Booking, Review, PromoCode, SnackItem } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Demo Customer', email: 'customer@cinewave.com', phone: '9876543210', role: 'customer', status: 'active', createdDate: '2026-01-01' },
  { id: 'u2', name: 'Demo Staff', email: 'staff@cinewave.com', phone: '9876543211', role: 'staff', status: 'active', createdDate: '2026-01-01' },
  { id: 'u3', name: 'Demo Admin', email: 'admin@cinewave.com', phone: '9876543212', role: 'admin', status: 'active', createdDate: '2026-01-01' },
];

export const mockMovies: Movie[] = [
  {
    "id": "m1",
    "title": "Kalki 2898 AD",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Kalki 2898 AD.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi",
    "duration": "180 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-13"
  },
  {
    "id": "m2",
    "title": "Jawan",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Jawan.",
    "genre": "Action, Sci-Fi",
    "language": "Kannada",
    "duration": "109 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-16"
  },
  {
    "id": "m3",
    "title": "Animal",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Animal.",
    "genre": "Action, Crime, Drama",
    "language": "Telugu",
    "duration": "124 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-04"
  },
  {
    "id": "m4",
    "title": "Leo",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Leo.",
    "genre": "Biography, Drama, History",
    "language": "Tamil",
    "duration": "146 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-24"
  },
  {
    "id": "m5",
    "title": "Oppenheimer",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Oppenheimer.",
    "genre": "Action, Thriller",
    "language": "Hindi, English",
    "duration": "203 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-14"
  },
  {
    "id": "m6",
    "title": "Salaar",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Salaar.",
    "genre": "Action, Crime, Drama",
    "language": "English",
    "duration": "120 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-21"
  },
  {
    "id": "m7",
    "title": "Dune: Part Two",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dune: Part Two.",
    "genre": "Action, Thriller",
    "language": "English",
    "duration": "192 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-03"
  },
  {
    "id": "m8",
    "title": "Fighter",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fighter.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "180 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-16"
  },
  {
    "id": "m9",
    "title": "Stree 2",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Stree 2.",
    "genre": "Comedy, Drama",
    "language": "Tamil, Telugu",
    "duration": "114 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-21"
  },
  {
    "id": "m10",
    "title": "Deadpool & Wolverine",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Deadpool & Wolverine.",
    "genre": "Biography, Drama, History",
    "language": "Telugu, Hindi",
    "duration": "192 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-13"
  },
  {
    "id": "m11",
    "title": "Phantom Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Knight.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "198 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-12"
  },
  {
    "id": "m12",
    "title": "Silent Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Hero.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "145 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-14"
  },
  {
    "id": "m13",
    "title": "Hidden Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Dawn.",
    "genre": "Thriller, Mystery",
    "language": "Telugu, Hindi",
    "duration": "176 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-22"
  },
  {
    "id": "m14",
    "title": "Midnight Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Kingdom.",
    "genre": "Action, Crime, Drama",
    "language": "Hindi, English",
    "duration": "198 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-06"
  },
  {
    "id": "m15",
    "title": "Golden Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Ghost.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "136 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-08"
  },
  {
    "id": "m16",
    "title": "Midnight Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Quest.",
    "genre": "Horror, Thriller",
    "language": "Telugu",
    "duration": "153 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-21"
  },
  {
    "id": "m17",
    "title": "Eternal Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Ghost.",
    "genre": "Comedy, Drama",
    "language": "Malayalam",
    "duration": "147 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-17"
  },
  {
    "id": "m18",
    "title": "Lost Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Chronicles.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "143 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-21"
  },
  {
    "id": "m19",
    "title": "Phantom Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Ghost.",
    "genre": "Biography, Drama, History",
    "language": "Telugu, Hindi",
    "duration": "189 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-22"
  },
  {
    "id": "m20",
    "title": "Crimson Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Legacy.",
    "genre": "Fantasy, Adventure",
    "language": "Malayalam",
    "duration": "181 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-14"
  },
  {
    "id": "m21",
    "title": "The Last Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Dawn.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "120 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-16"
  },
  {
    "id": "m22",
    "title": "Legend of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Shadow.",
    "genre": "Fantasy, Adventure",
    "language": "Malayalam",
    "duration": "166 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-09"
  },
  {
    "id": "m23",
    "title": "Return of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Assassin.",
    "genre": "Biography, Drama, History",
    "language": "Hindi, English",
    "duration": "100 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-22"
  },
  {
    "id": "m24",
    "title": "The Last City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last City.",
    "genre": "Action, Sci-Fi",
    "language": "Telugu",
    "duration": "143 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-14"
  },
  {
    "id": "m25",
    "title": "Secret of Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Warrior.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "174 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-02"
  },
  {
    "id": "m26",
    "title": "Crimson Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Knight.",
    "genre": "Horror, Thriller",
    "language": "Malayalam",
    "duration": "166 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-14"
  },
  {
    "id": "m27",
    "title": "Golden Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Assassin.",
    "genre": "Comedy, Drama",
    "language": "Kannada",
    "duration": "152 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-03"
  },
  {
    "id": "m28",
    "title": "Dark Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Assassin.",
    "genre": "Biography, Drama, History",
    "language": "Hindi",
    "duration": "195 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-03"
  },
  {
    "id": "m29",
    "title": "Fall of Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Knight.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi",
    "duration": "151 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-21"
  },
  {
    "id": "m30",
    "title": "Return of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of City.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "171 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-19"
  },
  {
    "id": "m31",
    "title": "Phantom Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Legacy.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "199 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-01"
  },
  {
    "id": "m32",
    "title": "Crimson Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Dimension.",
    "genre": "Action, Sci-Fi",
    "language": "Malayalam",
    "duration": "146 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-07"
  },
  {
    "id": "m33",
    "title": "Midnight Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Ghost.",
    "genre": "Action, Crime, Drama",
    "language": "Malayalam",
    "duration": "190 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-23"
  },
  {
    "id": "m34",
    "title": "Midnight Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Empire.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "190 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-17"
  },
  {
    "id": "m35",
    "title": "The Last Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Legacy.",
    "genre": "Comedy, Horror",
    "language": "Kannada",
    "duration": "186 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-22"
  },
  {
    "id": "m36",
    "title": "Lost Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Knight.",
    "genre": "Thriller, Mystery",
    "language": "Telugu",
    "duration": "122 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-21"
  },
  {
    "id": "m37",
    "title": "Golden Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Warrior.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil",
    "duration": "178 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-01"
  },
  {
    "id": "m38",
    "title": "Rise of Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Knight.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "139 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-19"
  },
  {
    "id": "m39",
    "title": "Golden Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Dimension.",
    "genre": "Animation, Family",
    "language": "Tamil",
    "duration": "192 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-14"
  },
  {
    "id": "m40",
    "title": "The Last Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Quest.",
    "genre": "Fantasy, Adventure",
    "language": "Tamil",
    "duration": "146 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-24"
  },
  {
    "id": "m41",
    "title": "Secret of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Spy.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "181 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-23"
  },
  {
    "id": "m42",
    "title": "Dark Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Warrior.",
    "genre": "Romance, Drama",
    "language": "Tamil, Telugu",
    "duration": "132 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-04"
  },
  {
    "id": "m43",
    "title": "Dark Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Chronicles.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "181 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-02"
  },
  {
    "id": "m44",
    "title": "Midnight Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Dimension.",
    "genre": "Biography, Drama, History",
    "language": "Kannada",
    "duration": "126 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-16"
  },
  {
    "id": "m45",
    "title": "Silent Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Empire.",
    "genre": "Action, Thriller",
    "language": "Malayalam",
    "duration": "152 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-17"
  },
  {
    "id": "m46",
    "title": "Secret of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of City.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil",
    "duration": "129 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-22"
  },
  {
    "id": "m47",
    "title": "Dark Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Empire.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "137 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-02"
  },
  {
    "id": "m48",
    "title": "Secret of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Dawn.",
    "genre": "Horror, Thriller",
    "language": "Hindi",
    "duration": "191 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-11"
  },
  {
    "id": "m49",
    "title": "Crimson Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Ghost.",
    "genre": "Horror, Thriller",
    "language": "English",
    "duration": "193 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-27"
  },
  {
    "id": "m50",
    "title": "Rise of Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Kingdom.",
    "genre": "Fantasy, Adventure",
    "language": "Malayalam",
    "duration": "151 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-28"
  },
  {
    "id": "m51",
    "title": "Fall of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Legacy.",
    "genre": "Action, Thriller",
    "language": "Malayalam",
    "duration": "144 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-09"
  },
  {
    "id": "m52",
    "title": "Golden Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Ghost.",
    "genre": "Animation, Family",
    "language": "Hindi, English",
    "duration": "144 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-03"
  },
  {
    "id": "m53",
    "title": "Eternal Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Spy.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "143 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-03"
  },
  {
    "id": "m54",
    "title": "Lost Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Knight.",
    "genre": "Action, Crime, Drama",
    "language": "Hindi",
    "duration": "182 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-01"
  },
  {
    "id": "m55",
    "title": "Eternal Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Legacy.",
    "genre": "Thriller, Mystery",
    "language": "Tamil",
    "duration": "171 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-03"
  },
  {
    "id": "m56",
    "title": "Return of Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Chronicles.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "116 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-27"
  },
  {
    "id": "m57",
    "title": "Fall of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of City.",
    "genre": "Animation, Family",
    "language": "Hindi",
    "duration": "111 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-04"
  },
  {
    "id": "m58",
    "title": "The Last Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Empire.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi",
    "duration": "205 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-06"
  },
  {
    "id": "m59",
    "title": "Eternal Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Spy.",
    "genre": "Animation, Family",
    "language": "Tamil",
    "duration": "121 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-26"
  },
  {
    "id": "m60",
    "title": "Fall of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Dawn.",
    "genre": "Comedy, Drama",
    "language": "Hindi, English",
    "duration": "168 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-24"
  },
  {
    "id": "m61",
    "title": "The Last Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Kingdom.",
    "genre": "Horror, Thriller",
    "language": "Tamil, Telugu",
    "duration": "134 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-15"
  },
  {
    "id": "m62",
    "title": "Golden Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Quest.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "203 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-26"
  },
  {
    "id": "m63",
    "title": "Hidden Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Kingdom.",
    "genre": "Horror, Thriller",
    "language": "Kannada",
    "duration": "102 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-20"
  },
  {
    "id": "m64",
    "title": "Return of Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Ghost.",
    "genre": "Romance, Drama",
    "language": "Tamil",
    "duration": "104 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-05"
  },
  {
    "id": "m65",
    "title": "Fall of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Dawn.",
    "genre": "Animation, Family",
    "language": "Malayalam",
    "duration": "151 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-12"
  },
  {
    "id": "m66",
    "title": "Lost Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Warrior.",
    "genre": "Comedy, Horror",
    "language": "Malayalam",
    "duration": "177 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-23"
  },
  {
    "id": "m67",
    "title": "Silent Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Assassin.",
    "genre": "Comedy, Horror",
    "language": "Telugu",
    "duration": "134 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-24"
  },
  {
    "id": "m68",
    "title": "Return of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Assassin.",
    "genre": "Biography, Drama, History",
    "language": "English",
    "duration": "106 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-22"
  },
  {
    "id": "m69",
    "title": "Phantom Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Warrior.",
    "genre": "Biography, Drama, History",
    "language": "Tamil",
    "duration": "143 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-03"
  },
  {
    "id": "m70",
    "title": "Return of Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Dimension.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "201 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-17"
  },
  {
    "id": "m71",
    "title": "Golden Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Knight.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "200 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-10"
  },
  {
    "id": "m72",
    "title": "Legend of Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Dimension.",
    "genre": "Action, Sci-Fi",
    "language": "Malayalam",
    "duration": "190 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-10"
  },
  {
    "id": "m73",
    "title": "Lost Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Warrior.",
    "genre": "Comedy, Drama",
    "language": "Hindi",
    "duration": "199 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-01"
  },
  {
    "id": "m74",
    "title": "Legend of Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Kingdom.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "140 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-23"
  },
  {
    "id": "m75",
    "title": "Golden Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Hero.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "189 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-22"
  },
  {
    "id": "m76",
    "title": "Hidden Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Ghost.",
    "genre": "Action, Thriller",
    "language": "Telugu",
    "duration": "147 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-09"
  },
  {
    "id": "m77",
    "title": "Return of Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Hero.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu",
    "duration": "173 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-25"
  },
  {
    "id": "m78",
    "title": "Crimson Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Warrior.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil, Telugu",
    "duration": "176 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-27"
  },
  {
    "id": "m79",
    "title": "Legend of Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Quest.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil",
    "duration": "159 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-21"
  },
  {
    "id": "m80",
    "title": "Hidden Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Assassin.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "100 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-19"
  },
  {
    "id": "m81",
    "title": "The Last Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Spy.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "108 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-11"
  },
  {
    "id": "m82",
    "title": "Secret of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Dawn.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu",
    "duration": "163 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-22"
  },
  {
    "id": "m83",
    "title": "Return of Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Knight.",
    "genre": "Romance, Drama",
    "language": "Telugu, Hindi",
    "duration": "124 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-25"
  },
  {
    "id": "m84",
    "title": "Eternal City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal City.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "107 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-01"
  },
  {
    "id": "m85",
    "title": "Dark Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Shadow.",
    "genre": "Comedy, Horror",
    "language": "Hindi, English",
    "duration": "160 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-20"
  },
  {
    "id": "m86",
    "title": "Golden Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Warrior.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "102 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-14"
  },
  {
    "id": "m87",
    "title": "Eternal Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Ghost.",
    "genre": "Comedy, Drama",
    "language": "Hindi, English",
    "duration": "137 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-13"
  },
  {
    "id": "m88",
    "title": "Secret of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Assassin.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil",
    "duration": "130 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-09"
  },
  {
    "id": "m89",
    "title": "Golden Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Legacy.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi",
    "duration": "202 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-13"
  },
  {
    "id": "m90",
    "title": "Rise of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Dawn.",
    "genre": "Action, Crime, Drama",
    "language": "Hindi, English",
    "duration": "167 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "m91",
    "title": "The Last Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Chronicles.",
    "genre": "Action, Thriller",
    "language": "Hindi",
    "duration": "147 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-02"
  },
  {
    "id": "m92",
    "title": "The Last Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Shadow.",
    "genre": "Biography, Drama, History",
    "language": "English",
    "duration": "176 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-11"
  },
  {
    "id": "m93",
    "title": "Hidden Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Kingdom.",
    "genre": "Comedy, Horror",
    "language": "Hindi, English",
    "duration": "129 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-27"
  },
  {
    "id": "m94",
    "title": "Crimson Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Ghost.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "144 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-14"
  },
  {
    "id": "m95",
    "title": "Hidden City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden City.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "201 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-09"
  },
  {
    "id": "m96",
    "title": "Return of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Dawn.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi, English",
    "duration": "141 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-17"
  },
  {
    "id": "m97",
    "title": "Crimson City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson City.",
    "genre": "Biography, Drama, History",
    "language": "Hindi, English",
    "duration": "183 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-20"
  },
  {
    "id": "m98",
    "title": "Return of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of City.",
    "genre": "Action, Sci-Fi",
    "language": "Malayalam",
    "duration": "148 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-16"
  },
  {
    "id": "m99",
    "title": "Fall of Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Warrior.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "161 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-20"
  },
  {
    "id": "m100",
    "title": "Lost Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Assassin.",
    "genre": "Biography, Drama, History",
    "language": "Telugu, Hindi",
    "duration": "121 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-10"
  },
  {
    "id": "m101",
    "title": "Hidden Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Warrior.",
    "genre": "Comedy, Drama",
    "language": "Kannada",
    "duration": "175 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-17"
  },
  {
    "id": "m102",
    "title": "Phantom Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Shadow.",
    "genre": "Biography, Drama, History",
    "language": "Tamil, Telugu",
    "duration": "201 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-15"
  },
  {
    "id": "m103",
    "title": "Rise of Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Quest.",
    "genre": "Comedy, Horror",
    "language": "Kannada",
    "duration": "128 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-19"
  },
  {
    "id": "m104",
    "title": "The Last Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Warrior.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "183 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-08"
  },
  {
    "id": "m105",
    "title": "Golden Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Chronicles.",
    "genre": "Action, Crime, Drama",
    "language": "Kannada",
    "duration": "150 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-09"
  },
  {
    "id": "m106",
    "title": "Eternal Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Quest.",
    "genre": "Action, Crime, Drama",
    "language": "English",
    "duration": "151 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-19"
  },
  {
    "id": "m107",
    "title": "Secret of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Legacy.",
    "genre": "Biography, Drama, History",
    "language": "Hindi",
    "duration": "143 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-20"
  },
  {
    "id": "m108",
    "title": "Golden Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Kingdom.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu",
    "duration": "137 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-07"
  },
  {
    "id": "m109",
    "title": "Legend of Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Hero.",
    "genre": "Comedy, Horror",
    "language": "Kannada",
    "duration": "100 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-03"
  },
  {
    "id": "m110",
    "title": "Lost Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Dawn.",
    "genre": "Comedy, Drama",
    "language": "Telugu",
    "duration": "203 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-26"
  },
  {
    "id": "m111",
    "title": "Fall of Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Chronicles.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "106 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-14"
  },
  {
    "id": "m112",
    "title": "Return of Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Kingdom.",
    "genre": "Romance, Drama",
    "language": "Hindi",
    "duration": "126 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-18"
  },
  {
    "id": "m113",
    "title": "Crimson Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Shadow.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu",
    "duration": "155 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-04"
  },
  {
    "id": "m114",
    "title": "The Last Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Empire.",
    "genre": "Biography, Drama, History",
    "language": "Telugu, Hindi",
    "duration": "173 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-10"
  },
  {
    "id": "m115",
    "title": "Silent Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Kingdom.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi",
    "duration": "161 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-10"
  },
  {
    "id": "m116",
    "title": "Return of Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Quest.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "English",
    "duration": "167 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-16"
  },
  {
    "id": "m117",
    "title": "Lost Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Warrior.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "184 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-23"
  },
  {
    "id": "m118",
    "title": "Dark Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Quest.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "140 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-25"
  },
  {
    "id": "m119",
    "title": "Secret of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Shadow.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi",
    "duration": "188 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-20"
  },
  {
    "id": "m120",
    "title": "Midnight Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Shadow.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "166 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-13"
  },
  {
    "id": "m121",
    "title": "Rise of Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Empire.",
    "genre": "Romance, Drama",
    "language": "Telugu, Hindi",
    "duration": "142 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-01"
  },
  {
    "id": "m122",
    "title": "Phantom Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Chronicles.",
    "genre": "Action, Thriller",
    "language": "English",
    "duration": "134 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-02"
  },
  {
    "id": "m123",
    "title": "Rise of Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Knight.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "140 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-28"
  },
  {
    "id": "m124",
    "title": "Lost Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Kingdom.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "124 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-05"
  },
  {
    "id": "m125",
    "title": "Phantom Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Legacy.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil",
    "duration": "101 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-04"
  },
  {
    "id": "m126",
    "title": "Midnight Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Kingdom.",
    "genre": "Comedy, Horror",
    "language": "English",
    "duration": "183 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-05"
  },
  {
    "id": "m127",
    "title": "Hidden Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Knight.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "110 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-27"
  },
  {
    "id": "m128",
    "title": "Secret of Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Dimension.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "195 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-25"
  },
  {
    "id": "m129",
    "title": "Legend of Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Ghost.",
    "genre": "Action, Crime, Drama",
    "language": "English",
    "duration": "160 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-06"
  },
  {
    "id": "m130",
    "title": "Crimson Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Hero.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "English",
    "duration": "193 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-16"
  },
  {
    "id": "m131",
    "title": "Fall of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Spy.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "168 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-16"
  },
  {
    "id": "m132",
    "title": "Crimson Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Hero.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "180 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-08"
  },
  {
    "id": "m133",
    "title": "Silent Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Empire.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "179 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-01"
  },
  {
    "id": "m134",
    "title": "Crimson Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Kingdom.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil",
    "duration": "156 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-12"
  },
  {
    "id": "m135",
    "title": "Secret of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Spy.",
    "genre": "Action, Sci-Fi",
    "language": "Malayalam",
    "duration": "143 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-24"
  },
  {
    "id": "m136",
    "title": "Fall of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of City.",
    "genre": "Horror, Thriller",
    "language": "Malayalam",
    "duration": "108 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-10"
  },
  {
    "id": "m137",
    "title": "Silent Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Knight.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "179 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-07"
  },
  {
    "id": "m138",
    "title": "Hidden Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Legacy.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi, English",
    "duration": "153 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-02"
  },
  {
    "id": "m139",
    "title": "Rise of Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Warrior.",
    "genre": "Action, Thriller",
    "language": "English",
    "duration": "106 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-01"
  },
  {
    "id": "m140",
    "title": "Hidden Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Dawn.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "205 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-16"
  },
  {
    "id": "m141",
    "title": "Secret of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Spy.",
    "genre": "Action, Thriller",
    "language": "Malayalam",
    "duration": "199 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-09"
  },
  {
    "id": "m142",
    "title": "Return of Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Warrior.",
    "genre": "Action, Thriller",
    "language": "Hindi",
    "duration": "201 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-24"
  },
  {
    "id": "m143",
    "title": "Crimson City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson City.",
    "genre": "Animation, Family",
    "language": "Hindi",
    "duration": "124 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-27"
  },
  {
    "id": "m144",
    "title": "Legend of Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Warrior.",
    "genre": "Action, Sci-Fi",
    "language": "English",
    "duration": "197 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-11"
  },
  {
    "id": "m145",
    "title": "Midnight Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Kingdom.",
    "genre": "Biography, Drama, History",
    "language": "Tamil, Telugu",
    "duration": "132 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-16"
  },
  {
    "id": "m146",
    "title": "Phantom Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Quest.",
    "genre": "Animation, Family",
    "language": "Hindi, English",
    "duration": "172 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-18"
  },
  {
    "id": "m147",
    "title": "Return of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Legacy.",
    "genre": "Action, Thriller",
    "language": "Malayalam",
    "duration": "136 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-09"
  },
  {
    "id": "m148",
    "title": "Dark City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark City.",
    "genre": "Romance, Drama",
    "language": "Malayalam",
    "duration": "182 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-13"
  },
  {
    "id": "m149",
    "title": "Midnight Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Dimension.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "179 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-10"
  },
  {
    "id": "m150",
    "title": "Fall of Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Ghost.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "English",
    "duration": "129 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-21"
  }
];

export const mockTheatres: Theatre[] = [
  {
    "id": "t1",
    "name": "PVR City Center",
    "location": "Chennai",
    "screens": 4
  },
  {
    "id": "t2",
    "name": "Mukta A2 Square",
    "location": "Lucknow",
    "screens": 6
  },
  {
    "id": "t3",
    "name": "CineBells Mall",
    "location": "Pune",
    "screens": 10
  },
  {
    "id": "t4",
    "name": "Carnival City Center",
    "location": "Mumbai",
    "screens": 8
  },
  {
    "id": "t5",
    "name": "Cinepolis Square",
    "location": "Pune",
    "screens": 5
  },
  {
    "id": "t6",
    "name": "Mukta A2 Mall",
    "location": "Hyderabad",
    "screens": 10
  },
  {
    "id": "t7",
    "name": "Mukta A2 Avenue",
    "location": "Visakhapatnam",
    "screens": 15
  },
  {
    "id": "t8",
    "name": "CineBells Multiplex",
    "location": "Visakhapatnam",
    "screens": 2
  },
  {
    "id": "t9",
    "name": "CineBells Galleria",
    "location": "Bangalore",
    "screens": 2
  },
  {
    "id": "t10",
    "name": "CineBells Multiplex",
    "location": "Indore",
    "screens": 5
  },
  {
    "id": "t11",
    "name": "CineBells City Center",
    "location": "Delhi NCR",
    "screens": 15
  },
  {
    "id": "t12",
    "name": "PVR Galleria",
    "location": "Lucknow",
    "screens": 5
  },
  {
    "id": "t13",
    "name": "CineBells Plaza",
    "location": "Coimbatore",
    "screens": 3
  },
  {
    "id": "t14",
    "name": "Miraj Multiplex",
    "location": "Nagpur",
    "screens": 6
  },
  {
    "id": "t15",
    "name": "INOX Square",
    "location": "Surat",
    "screens": 2
  },
  {
    "id": "t16",
    "name": "PVR Square",
    "location": "Bangalore",
    "screens": 6
  },
  {
    "id": "t17",
    "name": "Carnival Avenue",
    "location": "Jaipur",
    "screens": 13
  },
  {
    "id": "t18",
    "name": "Asian Cinemas Multiplex",
    "location": "Surat",
    "screens": 11
  },
  {
    "id": "t19",
    "name": "PVR Square",
    "location": "Delhi NCR",
    "screens": 8
  },
  {
    "id": "t20",
    "name": "Cinepolis City Center",
    "location": "Mumbai",
    "screens": 6
  },
  {
    "id": "t21",
    "name": "Miraj Avenue",
    "location": "Surat",
    "screens": 2
  },
  {
    "id": "t22",
    "name": "Mukta A2 Square",
    "location": "Delhi NCR",
    "screens": 16
  },
  {
    "id": "t23",
    "name": "Carnival Avenue",
    "location": "Chandigarh",
    "screens": 16
  },
  {
    "id": "t24",
    "name": "PVR City Center",
    "location": "Jaipur",
    "screens": 7
  },
  {
    "id": "t25",
    "name": "Mukta A2 Multiplex",
    "location": "Chandigarh",
    "screens": 14
  },
  {
    "id": "t26",
    "name": "Mukta A2 Multiplex",
    "location": "Jaipur",
    "screens": 4
  },
  {
    "id": "t27",
    "name": "INOX Avenue",
    "location": "Coimbatore",
    "screens": 5
  },
  {
    "id": "t28",
    "name": "Miraj Mall",
    "location": "Nagpur",
    "screens": 5
  },
  {
    "id": "t29",
    "name": "CineBells Mall",
    "location": "Pune",
    "screens": 14
  },
  {
    "id": "t30",
    "name": "Asian Cinemas Galleria",
    "location": "Lucknow",
    "screens": 14
  },
  {
    "id": "t31",
    "name": "Carnival Mall",
    "location": "Lucknow",
    "screens": 8
  },
  {
    "id": "t32",
    "name": "PVR Galleria",
    "location": "Surat",
    "screens": 9
  },
  {
    "id": "t33",
    "name": "PVR City Center",
    "location": "Hyderabad",
    "screens": 3
  },
  {
    "id": "t34",
    "name": "Mukta A2 Galleria",
    "location": "Patna",
    "screens": 3
  },
  {
    "id": "t35",
    "name": "Asian Cinemas Plaza",
    "location": "Kolkata",
    "screens": 4
  },
  {
    "id": "t36",
    "name": "Mukta A2 Multiplex",
    "location": "Hyderabad",
    "screens": 14
  },
  {
    "id": "t37",
    "name": "Mukta A2 Plaza",
    "location": "Bangalore",
    "screens": 7
  },
  {
    "id": "t38",
    "name": "Cinepolis Multiplex",
    "location": "Vadodara",
    "screens": 6
  },
  {
    "id": "t39",
    "name": "Mukta A2 Avenue",
    "location": "Indore",
    "screens": 2
  },
  {
    "id": "t40",
    "name": "Carnival City Center",
    "location": "Chennai",
    "screens": 11
  },
  {
    "id": "t41",
    "name": "Miraj City Center",
    "location": "Visakhapatnam",
    "screens": 7
  },
  {
    "id": "t42",
    "name": "Miraj City Center",
    "location": "Kolkata",
    "screens": 12
  },
  {
    "id": "t43",
    "name": "INOX City Center",
    "location": "Delhi NCR",
    "screens": 3
  },
  {
    "id": "t44",
    "name": "CineBells Galleria",
    "location": "Patna",
    "screens": 4
  },
  {
    "id": "t45",
    "name": "Cinepolis Multiplex",
    "location": "Indore",
    "screens": 10
  },
  {
    "id": "t46",
    "name": "CineBells Mall",
    "location": "Kolkata",
    "screens": 16
  },
  {
    "id": "t47",
    "name": "Asian Cinemas Galleria",
    "location": "Visakhapatnam",
    "screens": 16
  },
  {
    "id": "t48",
    "name": "CineBells Multiplex",
    "location": "Ahmedabad",
    "screens": 3
  },
  {
    "id": "t49",
    "name": "CineBells Square",
    "location": "Coimbatore",
    "screens": 6
  },
  {
    "id": "t50",
    "name": "Asian Cinemas Avenue",
    "location": "Ahmedabad",
    "screens": 4
  },
  {
    "id": "t51",
    "name": "CineBells City Center",
    "location": "Nagpur",
    "screens": 2
  },
  {
    "id": "t52",
    "name": "Miraj Multiplex",
    "location": "Jaipur",
    "screens": 10
  },
  {
    "id": "t53",
    "name": "Mukta A2 City Center",
    "location": "Vadodara",
    "screens": 15
  },
  {
    "id": "t54",
    "name": "CineBells Multiplex",
    "location": "Kochi",
    "screens": 13
  },
  {
    "id": "t55",
    "name": "Miraj Avenue",
    "location": "Surat",
    "screens": 8
  },
  {
    "id": "t56",
    "name": "Carnival Galleria",
    "location": "Lucknow",
    "screens": 3
  },
  {
    "id": "t57",
    "name": "Cinepolis Galleria",
    "location": "Delhi NCR",
    "screens": 14
  },
  {
    "id": "t58",
    "name": "Mukta A2 Multiplex",
    "location": "Hyderabad",
    "screens": 12
  },
  {
    "id": "t59",
    "name": "Miraj Avenue",
    "location": "Chennai",
    "screens": 13
  },
  {
    "id": "t60",
    "name": "Miraj City Center",
    "location": "Nagpur",
    "screens": 5
  },
  {
    "id": "t61",
    "name": "Cinepolis Plaza",
    "location": "Jaipur",
    "screens": 13
  },
  {
    "id": "t62",
    "name": "Asian Cinemas Plaza",
    "location": "Chennai",
    "screens": 5
  },
  {
    "id": "t63",
    "name": "Carnival City Center",
    "location": "Chandigarh",
    "screens": 7
  },
  {
    "id": "t64",
    "name": "Miraj Avenue",
    "location": "Vadodara",
    "screens": 7
  },
  {
    "id": "t65",
    "name": "INOX Avenue",
    "location": "Hyderabad",
    "screens": 7
  },
  {
    "id": "t66",
    "name": "Mukta A2 Multiplex",
    "location": "Surat",
    "screens": 16
  },
  {
    "id": "t67",
    "name": "INOX Avenue",
    "location": "Patna",
    "screens": 15
  },
  {
    "id": "t68",
    "name": "CineBells City Center",
    "location": "Indore",
    "screens": 10
  },
  {
    "id": "t69",
    "name": "PVR Square",
    "location": "Nagpur",
    "screens": 9
  },
  {
    "id": "t70",
    "name": "CineBells Mall",
    "location": "Kochi",
    "screens": 5
  },
  {
    "id": "t71",
    "name": "PVR Mall",
    "location": "Coimbatore",
    "screens": 16
  },
  {
    "id": "t72",
    "name": "Asian Cinemas Mall",
    "location": "Chennai",
    "screens": 15
  },
  {
    "id": "t73",
    "name": "Carnival Multiplex",
    "location": "Vadodara",
    "screens": 2
  },
  {
    "id": "t74",
    "name": "Cinepolis Square",
    "location": "Vadodara",
    "screens": 14
  },
  {
    "id": "t75",
    "name": "CineBells City Center",
    "location": "Coimbatore",
    "screens": 13
  },
  {
    "id": "t76",
    "name": "Asian Cinemas Square",
    "location": "Visakhapatnam",
    "screens": 5
  },
  {
    "id": "t77",
    "name": "Carnival Square",
    "location": "Bhopal",
    "screens": 15
  },
  {
    "id": "t78",
    "name": "Miraj Galleria",
    "location": "Surat",
    "screens": 2
  },
  {
    "id": "t79",
    "name": "Asian Cinemas Square",
    "location": "Jaipur",
    "screens": 13
  },
  {
    "id": "t80",
    "name": "Miraj Avenue",
    "location": "Visakhapatnam",
    "screens": 7
  },
  {
    "id": "t81",
    "name": "CineBells Plaza",
    "location": "Lucknow",
    "screens": 14
  },
  {
    "id": "t82",
    "name": "CineBells Multiplex",
    "location": "Kochi",
    "screens": 2
  },
  {
    "id": "t83",
    "name": "Cinepolis Avenue",
    "location": "Jaipur",
    "screens": 7
  },
  {
    "id": "t84",
    "name": "Asian Cinemas City Center",
    "location": "Pune",
    "screens": 16
  },
  {
    "id": "t85",
    "name": "Carnival Multiplex",
    "location": "Jaipur",
    "screens": 16
  },
  {
    "id": "t86",
    "name": "Mukta A2 City Center",
    "location": "Chennai",
    "screens": 3
  },
  {
    "id": "t87",
    "name": "Cinepolis Square",
    "location": "Chandigarh",
    "screens": 15
  },
  {
    "id": "t88",
    "name": "Asian Cinemas Galleria",
    "location": "Visakhapatnam",
    "screens": 12
  },
  {
    "id": "t89",
    "name": "Asian Cinemas Multiplex",
    "location": "Pune",
    "screens": 10
  },
  {
    "id": "t90",
    "name": "Mukta A2 City Center",
    "location": "Ahmedabad",
    "screens": 13
  },
  {
    "id": "t91",
    "name": "Mukta A2 Galleria",
    "location": "Chennai",
    "screens": 12
  },
  {
    "id": "t92",
    "name": "CineBells Square",
    "location": "Lucknow",
    "screens": 16
  },
  {
    "id": "t93",
    "name": "PVR City Center",
    "location": "Coimbatore",
    "screens": 15
  },
  {
    "id": "t94",
    "name": "Asian Cinemas Mall",
    "location": "Indore",
    "screens": 3
  },
  {
    "id": "t95",
    "name": "Cinepolis City Center",
    "location": "Visakhapatnam",
    "screens": 8
  },
  {
    "id": "t96",
    "name": "Mukta A2 Plaza",
    "location": "Nagpur",
    "screens": 2
  },
  {
    "id": "t97",
    "name": "Carnival Mall",
    "location": "Hyderabad",
    "screens": 3
  },
  {
    "id": "t98",
    "name": "Mukta A2 Avenue",
    "location": "Delhi NCR",
    "screens": 8
  },
  {
    "id": "t99",
    "name": "CineBells Galleria",
    "location": "Chennai",
    "screens": 10
  },
  {
    "id": "t100",
    "name": "Miraj Plaza",
    "location": "Jaipur",
    "screens": 11
  },
  {
    "id": "t101",
    "name": "PVR Mall",
    "location": "Vadodara",
    "screens": 4
  },
  {
    "id": "t102",
    "name": "Miraj Mall",
    "location": "Vadodara",
    "screens": 10
  },
  {
    "id": "t103",
    "name": "CineBells City Center",
    "location": "Kochi",
    "screens": 11
  },
  {
    "id": "t104",
    "name": "INOX Galleria",
    "location": "Jaipur",
    "screens": 8
  },
  {
    "id": "t105",
    "name": "INOX Plaza",
    "location": "Kochi",
    "screens": 11
  },
  {
    "id": "t106",
    "name": "Asian Cinemas City Center",
    "location": "Mumbai",
    "screens": 9
  },
  {
    "id": "t107",
    "name": "INOX Square",
    "location": "Patna",
    "screens": 9
  },
  {
    "id": "t108",
    "name": "Mukta A2 City Center",
    "location": "Bhopal",
    "screens": 11
  },
  {
    "id": "t109",
    "name": "Asian Cinemas Square",
    "location": "Bangalore",
    "screens": 5
  },
  {
    "id": "t110",
    "name": "PVR Galleria",
    "location": "Hyderabad",
    "screens": 3
  },
  {
    "id": "t111",
    "name": "Mukta A2 City Center",
    "location": "Bhopal",
    "screens": 3
  },
  {
    "id": "t112",
    "name": "INOX Plaza",
    "location": "Chennai",
    "screens": 15
  },
  {
    "id": "t113",
    "name": "Carnival Avenue",
    "location": "Surat",
    "screens": 9
  },
  {
    "id": "t114",
    "name": "Carnival Multiplex",
    "location": "Bhopal",
    "screens": 11
  },
  {
    "id": "t115",
    "name": "Miraj Mall",
    "location": "Kochi",
    "screens": 13
  },
  {
    "id": "t116",
    "name": "Cinepolis Plaza",
    "location": "Indore",
    "screens": 4
  },
  {
    "id": "t117",
    "name": "PVR Galleria",
    "location": "Chennai",
    "screens": 16
  },
  {
    "id": "t118",
    "name": "CineBells Plaza",
    "location": "Kochi",
    "screens": 7
  },
  {
    "id": "t119",
    "name": "Carnival Mall",
    "location": "Visakhapatnam",
    "screens": 10
  },
  {
    "id": "t120",
    "name": "Carnival Mall",
    "location": "Coimbatore",
    "screens": 2
  },
  {
    "id": "t121",
    "name": "Asian Cinemas Galleria",
    "location": "Lucknow",
    "screens": 3
  },
  {
    "id": "t122",
    "name": "Asian Cinemas Avenue",
    "location": "Chandigarh",
    "screens": 5
  },
  {
    "id": "t123",
    "name": "Mukta A2 Galleria",
    "location": "Bhopal",
    "screens": 9
  },
  {
    "id": "t124",
    "name": "Cinepolis Multiplex",
    "location": "Pune",
    "screens": 4
  },
  {
    "id": "t125",
    "name": "PVR Square",
    "location": "Chandigarh",
    "screens": 7
  },
  {
    "id": "t126",
    "name": "PVR Avenue",
    "location": "Delhi NCR",
    "screens": 8
  },
  {
    "id": "t127",
    "name": "Asian Cinemas Mall",
    "location": "Patna",
    "screens": 6
  },
  {
    "id": "t128",
    "name": "Mukta A2 Mall",
    "location": "Patna",
    "screens": 15
  },
  {
    "id": "t129",
    "name": "Carnival Mall",
    "location": "Coimbatore",
    "screens": 9
  },
  {
    "id": "t130",
    "name": "Carnival City Center",
    "location": "Hyderabad",
    "screens": 2
  },
  {
    "id": "t131",
    "name": "Carnival Mall",
    "location": "Bangalore",
    "screens": 8
  },
  {
    "id": "t132",
    "name": "Carnival Square",
    "location": "Vadodara",
    "screens": 9
  },
  {
    "id": "t133",
    "name": "PVR Multiplex",
    "location": "Vadodara",
    "screens": 3
  },
  {
    "id": "t134",
    "name": "Carnival Mall",
    "location": "Bangalore",
    "screens": 3
  },
  {
    "id": "t135",
    "name": "Mukta A2 Avenue",
    "location": "Kochi",
    "screens": 11
  },
  {
    "id": "t136",
    "name": "Carnival Square",
    "location": "Patna",
    "screens": 6
  },
  {
    "id": "t137",
    "name": "INOX Mall",
    "location": "Pune",
    "screens": 5
  },
  {
    "id": "t138",
    "name": "Carnival Multiplex",
    "location": "Vadodara",
    "screens": 12
  },
  {
    "id": "t139",
    "name": "Cinepolis Multiplex",
    "location": "Chennai",
    "screens": 4
  },
  {
    "id": "t140",
    "name": "INOX Avenue",
    "location": "Visakhapatnam",
    "screens": 8
  },
  {
    "id": "t141",
    "name": "Carnival City Center",
    "location": "Chennai",
    "screens": 5
  },
  {
    "id": "t142",
    "name": "Miraj City Center",
    "location": "Kolkata",
    "screens": 3
  },
  {
    "id": "t143",
    "name": "Asian Cinemas Plaza",
    "location": "Chandigarh",
    "screens": 4
  },
  {
    "id": "t144",
    "name": "PVR Avenue",
    "location": "Pune",
    "screens": 15
  },
  {
    "id": "t145",
    "name": "INOX Multiplex",
    "location": "Kochi",
    "screens": 13
  },
  {
    "id": "t146",
    "name": "Miraj Avenue",
    "location": "Coimbatore",
    "screens": 10
  },
  {
    "id": "t147",
    "name": "Asian Cinemas Multiplex",
    "location": "Lucknow",
    "screens": 12
  },
  {
    "id": "t148",
    "name": "CineBells Multiplex",
    "location": "Hyderabad",
    "screens": 14
  },
  {
    "id": "t149",
    "name": "Cinepolis Plaza",
    "location": "Kochi",
    "screens": 14
  },
  {
    "id": "t150",
    "name": "Asian Cinemas Square",
    "location": "Bangalore",
    "screens": 3
  }
];

export const mockShows: Show[] = [
  {
    "id": "s1",
    "movieId": "m130",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 390,
    "availableSeats": 171
  },
  {
    "id": "s2",
    "movieId": "m72",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 90
  },
  {
    "id": "s3",
    "movieId": "m130",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 790,
    "availableSeats": 117
  },
  {
    "id": "s4",
    "movieId": "m87",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 760,
    "availableSeats": 171
  },
  {
    "id": "s5",
    "movieId": "m130",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 171
  },
  {
    "id": "s6",
    "movieId": "m72",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 102
  },
  {
    "id": "s7",
    "movieId": "m130",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 206
  },
  {
    "id": "s8",
    "movieId": "m104",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 320,
    "availableSeats": 68
  },
  {
    "id": "s9",
    "movieId": "m141",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 202
  },
  {
    "id": "s10",
    "movieId": "m129",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 65
  },
  {
    "id": "s11",
    "movieId": "m62",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 134
  },
  {
    "id": "s12",
    "movieId": "m104",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 172
  },
  {
    "id": "s13",
    "movieId": "m104",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 300,
    "availableSeats": 114
  },
  {
    "id": "s14",
    "movieId": "m104",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 231
  },
  {
    "id": "s15",
    "movieId": "m127",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 165
  },
  {
    "id": "s16",
    "movieId": "m129",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 230,
    "availableSeats": 105
  },
  {
    "id": "s17",
    "movieId": "m149",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 273
  },
  {
    "id": "s18",
    "movieId": "m149",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 660,
    "availableSeats": 63
  },
  {
    "id": "s19",
    "movieId": "m69",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 760,
    "availableSeats": 110
  },
  {
    "id": "s20",
    "movieId": "m149",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 270
  },
  {
    "id": "s21",
    "movieId": "m149",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 67
  },
  {
    "id": "s22",
    "movieId": "m150",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 239
  },
  {
    "id": "s23",
    "movieId": "m149",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 230
  },
  {
    "id": "s24",
    "movieId": "m72",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 259
  },
  {
    "id": "s25",
    "movieId": "m88",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 800,
    "availableSeats": 266
  },
  {
    "id": "s26",
    "movieId": "m72",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 620,
    "availableSeats": 233
  },
  {
    "id": "s27",
    "movieId": "m105",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 710,
    "availableSeats": 247
  },
  {
    "id": "s28",
    "movieId": "m103",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 65
  },
  {
    "id": "s29",
    "movieId": "m60",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 94
  },
  {
    "id": "s30",
    "movieId": "m60",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 270,
    "availableSeats": 170
  },
  {
    "id": "s31",
    "movieId": "m103",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 590,
    "availableSeats": 204
  },
  {
    "id": "s32",
    "movieId": "m60",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 550,
    "availableSeats": 191
  },
  {
    "id": "s33",
    "movieId": "m105",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 178
  },
  {
    "id": "s34",
    "movieId": "m103",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 340,
    "availableSeats": 229
  },
  {
    "id": "s35",
    "movieId": "m105",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 254
  },
  {
    "id": "s36",
    "movieId": "m110",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 530,
    "availableSeats": 235
  },
  {
    "id": "s37",
    "movieId": "m108",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 144
  },
  {
    "id": "s38",
    "movieId": "m108",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 480,
    "availableSeats": 80
  },
  {
    "id": "s39",
    "movieId": "m61",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 158
  },
  {
    "id": "s40",
    "movieId": "m108",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 251
  },
  {
    "id": "s41",
    "movieId": "m108",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 258
  },
  {
    "id": "s42",
    "movieId": "m61",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 290,
    "availableSeats": 272
  },
  {
    "id": "s43",
    "movieId": "m124",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 470,
    "availableSeats": 139
  },
  {
    "id": "s44",
    "movieId": "m55",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 165
  },
  {
    "id": "s45",
    "movieId": "m124",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 175
  },
  {
    "id": "s46",
    "movieId": "m124",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 212
  },
  {
    "id": "s47",
    "movieId": "m72",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 210,
    "availableSeats": 289
  },
  {
    "id": "s48",
    "movieId": "m85",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 240,
    "availableSeats": 263
  },
  {
    "id": "s49",
    "movieId": "m149",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 540,
    "availableSeats": 118
  },
  {
    "id": "s50",
    "movieId": "m85",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 257
  },
  {
    "id": "s51",
    "movieId": "m114",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 520,
    "availableSeats": 172
  },
  {
    "id": "s52",
    "movieId": "m74",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 310,
    "availableSeats": 115
  },
  {
    "id": "s53",
    "movieId": "m149",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 350,
    "availableSeats": 153
  },
  {
    "id": "s54",
    "movieId": "m114",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 170
  },
  {
    "id": "s55",
    "movieId": "m36",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 246
  },
  {
    "id": "s56",
    "movieId": "m27",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 450,
    "availableSeats": 68
  },
  {
    "id": "s57",
    "movieId": "m27",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 216
  },
  {
    "id": "s58",
    "movieId": "m27",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 55
  },
  {
    "id": "s59",
    "movieId": "m36",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 260,
    "availableSeats": 129
  },
  {
    "id": "s60",
    "movieId": "m123",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 74
  },
  {
    "id": "s61",
    "movieId": "m85",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 460,
    "availableSeats": 167
  },
  {
    "id": "s62",
    "movieId": "m123",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 249
  },
  {
    "id": "s63",
    "movieId": "m36",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 350,
    "availableSeats": 92
  },
  {
    "id": "s64",
    "movieId": "m27",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 240,
    "availableSeats": 225
  },
  {
    "id": "s65",
    "movieId": "m142",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 650,
    "availableSeats": 251
  },
  {
    "id": "s66",
    "movieId": "m142",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 142
  },
  {
    "id": "s67",
    "movieId": "m14",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 780,
    "availableSeats": 279
  },
  {
    "id": "s68",
    "movieId": "m134",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 97
  },
  {
    "id": "s69",
    "movieId": "m142",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 620,
    "availableSeats": 90
  },
  {
    "id": "s70",
    "movieId": "m7",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 175
  },
  {
    "id": "s71",
    "movieId": "m52",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 272
  },
  {
    "id": "s72",
    "movieId": "m7",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 182
  },
  {
    "id": "s73",
    "movieId": "m120",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 58
  },
  {
    "id": "s74",
    "movieId": "m59",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 139
  },
  {
    "id": "s75",
    "movieId": "m59",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 175
  },
  {
    "id": "s76",
    "movieId": "m120",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 490,
    "availableSeats": 291
  },
  {
    "id": "s77",
    "movieId": "m52",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 185
  },
  {
    "id": "s78",
    "movieId": "m120",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 256
  },
  {
    "id": "s79",
    "movieId": "m52",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 78
  },
  {
    "id": "s80",
    "movieId": "m149",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 126
  },
  {
    "id": "s81",
    "movieId": "m59",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 300,
    "availableSeats": 258
  },
  {
    "id": "s82",
    "movieId": "m40",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 144
  },
  {
    "id": "s83",
    "movieId": "m57",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 257
  },
  {
    "id": "s84",
    "movieId": "m57",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 265
  },
  {
    "id": "s85",
    "movieId": "m57",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 620,
    "availableSeats": 166
  },
  {
    "id": "s86",
    "movieId": "m40",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 280,
    "availableSeats": 99
  },
  {
    "id": "s87",
    "movieId": "m124",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 261
  },
  {
    "id": "s88",
    "movieId": "m32",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 790,
    "availableSeats": 286
  },
  {
    "id": "s89",
    "movieId": "m111",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 184
  },
  {
    "id": "s90",
    "movieId": "m57",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 150
  },
  {
    "id": "s91",
    "movieId": "m40",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 104
  },
  {
    "id": "s92",
    "movieId": "m11",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 291
  },
  {
    "id": "s93",
    "movieId": "m21",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 70
  },
  {
    "id": "s94",
    "movieId": "m107",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 124
  },
  {
    "id": "s95",
    "movieId": "m21",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 340,
    "availableSeats": 240
  },
  {
    "id": "s96",
    "movieId": "m11",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 126
  },
  {
    "id": "s97",
    "movieId": "m21",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 202
  },
  {
    "id": "s98",
    "movieId": "m147",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 66
  },
  {
    "id": "s99",
    "movieId": "m21",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 56
  },
  {
    "id": "s100",
    "movieId": "m45",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 94
  },
  {
    "id": "s101",
    "movieId": "m111",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 212
  },
  {
    "id": "s102",
    "movieId": "m17",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 116
  },
  {
    "id": "s103",
    "movieId": "m49",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 120
  },
  {
    "id": "s104",
    "movieId": "m45",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 800,
    "availableSeats": 68
  },
  {
    "id": "s105",
    "movieId": "m17",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 240
  },
  {
    "id": "s106",
    "movieId": "m111",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 231
  },
  {
    "id": "s107",
    "movieId": "m45",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 245
  },
  {
    "id": "s108",
    "movieId": "m17",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 710,
    "availableSeats": 135
  },
  {
    "id": "s109",
    "movieId": "m49",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 111
  },
  {
    "id": "s110",
    "movieId": "m79",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 570,
    "availableSeats": 177
  },
  {
    "id": "s111",
    "movieId": "m79",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 290,
    "availableSeats": 242
  },
  {
    "id": "s112",
    "movieId": "m26",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 360,
    "availableSeats": 215
  },
  {
    "id": "s113",
    "movieId": "m121",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 550,
    "availableSeats": 123
  },
  {
    "id": "s114",
    "movieId": "m79",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 570,
    "availableSeats": 92
  },
  {
    "id": "s115",
    "movieId": "m43",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 274
  },
  {
    "id": "s116",
    "movieId": "m79",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 126
  },
  {
    "id": "s117",
    "movieId": "m100",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 210,
    "availableSeats": 53
  },
  {
    "id": "s118",
    "movieId": "m100",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 220,
    "availableSeats": 262
  },
  {
    "id": "s119",
    "movieId": "m69",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 91
  },
  {
    "id": "s120",
    "movieId": "m70",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 98
  },
  {
    "id": "s121",
    "movieId": "m103",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 660,
    "availableSeats": 132
  },
  {
    "id": "s122",
    "movieId": "m69",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 530,
    "availableSeats": 126
  },
  {
    "id": "s123",
    "movieId": "m127",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 260,
    "availableSeats": 144
  },
  {
    "id": "s124",
    "movieId": "m32",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 300,
    "availableSeats": 284
  },
  {
    "id": "s125",
    "movieId": "m71",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 69
  },
  {
    "id": "s126",
    "movieId": "m145",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 103
  },
  {
    "id": "s127",
    "movieId": "m103",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 51
  },
  {
    "id": "s128",
    "movieId": "m145",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 188
  },
  {
    "id": "s129",
    "movieId": "m89",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 430,
    "availableSeats": 263
  },
  {
    "id": "s130",
    "movieId": "m145",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 450,
    "availableSeats": 183
  },
  {
    "id": "s131",
    "movieId": "m71",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 261
  },
  {
    "id": "s132",
    "movieId": "m103",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 52
  },
  {
    "id": "s133",
    "movieId": "m89",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 420,
    "availableSeats": 246
  },
  {
    "id": "s134",
    "movieId": "m55",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 129
  },
  {
    "id": "s135",
    "movieId": "m54",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 340,
    "availableSeats": 90
  },
  {
    "id": "s136",
    "movieId": "m109",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 690,
    "availableSeats": 236
  },
  {
    "id": "s137",
    "movieId": "m109",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 162
  },
  {
    "id": "s138",
    "movieId": "m138",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 410,
    "availableSeats": 135
  },
  {
    "id": "s139",
    "movieId": "m55",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 136
  },
  {
    "id": "s140",
    "movieId": "m138",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 179
  },
  {
    "id": "s141",
    "movieId": "m109",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 340,
    "availableSeats": 107
  },
  {
    "id": "s142",
    "movieId": "m138",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 156
  },
  {
    "id": "s143",
    "movieId": "m109",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 113
  },
  {
    "id": "s144",
    "movieId": "m24",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 157
  },
  {
    "id": "s145",
    "movieId": "m68",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 67
  },
  {
    "id": "s146",
    "movieId": "m68",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 210,
    "availableSeats": 57
  },
  {
    "id": "s147",
    "movieId": "m8",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 166
  },
  {
    "id": "s148",
    "movieId": "m112",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 78
  },
  {
    "id": "s149",
    "movieId": "m54",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 116
  },
  {
    "id": "s150",
    "movieId": "m112",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 90
  },
  {
    "id": "s151",
    "movieId": "m54",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 82
  },
  {
    "id": "s152",
    "movieId": "m8",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 530,
    "availableSeats": 88
  },
  {
    "id": "s153",
    "movieId": "m7",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 55
  },
  {
    "id": "s154",
    "movieId": "m68",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 570,
    "availableSeats": 151
  },
  {
    "id": "s155",
    "movieId": "m7",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 710,
    "availableSeats": 60
  },
  {
    "id": "s156",
    "movieId": "m7",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 770,
    "availableSeats": 151
  },
  {
    "id": "s157",
    "movieId": "m142",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 266
  },
  {
    "id": "s158",
    "movieId": "m51",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 225
  },
  {
    "id": "s159",
    "movieId": "m79",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 231
  },
  {
    "id": "s160",
    "movieId": "m136",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 50
  },
  {
    "id": "s161",
    "movieId": "m136",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 260,
    "availableSeats": 77
  },
  {
    "id": "s162",
    "movieId": "m51",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 650,
    "availableSeats": 147
  },
  {
    "id": "s163",
    "movieId": "m79",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 166
  },
  {
    "id": "s164",
    "movieId": "m79",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 87
  },
  {
    "id": "s165",
    "movieId": "m23",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 176
  },
  {
    "id": "s166",
    "movieId": "m37",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 167
  },
  {
    "id": "s167",
    "movieId": "m74",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 720,
    "availableSeats": 104
  },
  {
    "id": "s168",
    "movieId": "m142",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 440,
    "availableSeats": 164
  },
  {
    "id": "s169",
    "movieId": "m142",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 570,
    "availableSeats": 63
  },
  {
    "id": "s170",
    "movieId": "m74",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 109
  },
  {
    "id": "s171",
    "movieId": "m23",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 440,
    "availableSeats": 88
  },
  {
    "id": "s172",
    "movieId": "m142",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 220
  },
  {
    "id": "s173",
    "movieId": "m142",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 450,
    "availableSeats": 291
  },
  {
    "id": "s174",
    "movieId": "m37",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 390,
    "availableSeats": 140
  },
  {
    "id": "s175",
    "movieId": "m74",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 104
  },
  {
    "id": "s176",
    "movieId": "m80",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 77
  },
  {
    "id": "s177",
    "movieId": "m22",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 570,
    "availableSeats": 110
  },
  {
    "id": "s178",
    "movieId": "m80",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 216
  },
  {
    "id": "s179",
    "movieId": "m18",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 280,
    "availableSeats": 184
  },
  {
    "id": "s180",
    "movieId": "m92",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 187
  },
  {
    "id": "s181",
    "movieId": "m18",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 254
  },
  {
    "id": "s182",
    "movieId": "m80",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 220,
    "availableSeats": 140
  },
  {
    "id": "s183",
    "movieId": "m18",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 780,
    "availableSeats": 176
  },
  {
    "id": "s184",
    "movieId": "m18",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 530,
    "availableSeats": 219
  },
  {
    "id": "s185",
    "movieId": "m22",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 320,
    "availableSeats": 105
  },
  {
    "id": "s186",
    "movieId": "m33",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 390,
    "availableSeats": 98
  },
  {
    "id": "s187",
    "movieId": "m109",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 193
  },
  {
    "id": "s188",
    "movieId": "m33",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 138
  },
  {
    "id": "s189",
    "movieId": "m12",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 440,
    "availableSeats": 185
  },
  {
    "id": "s190",
    "movieId": "m12",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 106
  },
  {
    "id": "s191",
    "movieId": "m109",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 224
  },
  {
    "id": "s192",
    "movieId": "m114",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 53
  },
  {
    "id": "s193",
    "movieId": "m132",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 227
  },
  {
    "id": "s194",
    "movieId": "m5",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 230,
    "availableSeats": 166
  },
  {
    "id": "s195",
    "movieId": "m114",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 410,
    "availableSeats": 78
  },
  {
    "id": "s196",
    "movieId": "m114",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 197
  },
  {
    "id": "s197",
    "movieId": "m132",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 97
  },
  {
    "id": "s198",
    "movieId": "m146",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 290,
    "availableSeats": 221
  },
  {
    "id": "s199",
    "movieId": "m114",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 245
  },
  {
    "id": "s200",
    "movieId": "m5",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 248
  },
  {
    "id": "s201",
    "movieId": "m46",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 210,
    "availableSeats": 103
  },
  {
    "id": "s202",
    "movieId": "m46",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 420,
    "availableSeats": 60
  },
  {
    "id": "s203",
    "movieId": "m46",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 320,
    "availableSeats": 104
  },
  {
    "id": "s204",
    "movieId": "m97",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 188
  },
  {
    "id": "s205",
    "movieId": "m144",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 101
  },
  {
    "id": "s206",
    "movieId": "m144",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 209
  },
  {
    "id": "s207",
    "movieId": "m46",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 410,
    "availableSeats": 252
  },
  {
    "id": "s208",
    "movieId": "m148",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 480,
    "availableSeats": 79
  },
  {
    "id": "s209",
    "movieId": "m144",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 148
  },
  {
    "id": "s210",
    "movieId": "m24",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 137
  },
  {
    "id": "s211",
    "movieId": "m24",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 221
  },
  {
    "id": "s212",
    "movieId": "m143",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 296
  },
  {
    "id": "s213",
    "movieId": "m24",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 221
  },
  {
    "id": "s214",
    "movieId": "m38",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 770,
    "availableSeats": 298
  },
  {
    "id": "s215",
    "movieId": "m143",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 259
  },
  {
    "id": "s216",
    "movieId": "m24",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 190
  },
  {
    "id": "s217",
    "movieId": "m143",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 162
  },
  {
    "id": "s218",
    "movieId": "m107",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 470,
    "availableSeats": 191
  },
  {
    "id": "s219",
    "movieId": "m24",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 177
  },
  {
    "id": "s220",
    "movieId": "m139",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 132
  },
  {
    "id": "s221",
    "movieId": "m38",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 123
  },
  {
    "id": "s222",
    "movieId": "m127",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 141
  },
  {
    "id": "s223",
    "movieId": "m107",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 279
  },
  {
    "id": "s224",
    "movieId": "m111",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 520,
    "availableSeats": 142
  },
  {
    "id": "s225",
    "movieId": "m88",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 89
  },
  {
    "id": "s226",
    "movieId": "m107",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 52
  },
  {
    "id": "s227",
    "movieId": "m18",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 370,
    "availableSeats": 204
  },
  {
    "id": "s228",
    "movieId": "m132",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 108
  },
  {
    "id": "s229",
    "movieId": "m18",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 730,
    "availableSeats": 217
  },
  {
    "id": "s230",
    "movieId": "m36",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 219
  },
  {
    "id": "s231",
    "movieId": "m36",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 530,
    "availableSeats": 268
  },
  {
    "id": "s232",
    "movieId": "m118",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 490,
    "availableSeats": 68
  },
  {
    "id": "s233",
    "movieId": "m122",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 710,
    "availableSeats": 271
  },
  {
    "id": "s234",
    "movieId": "m135",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 350,
    "availableSeats": 264
  },
  {
    "id": "s235",
    "movieId": "m135",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 640,
    "availableSeats": 287
  },
  {
    "id": "s236",
    "movieId": "m135",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 80
  },
  {
    "id": "s237",
    "movieId": "m94",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 680,
    "availableSeats": 143
  },
  {
    "id": "s238",
    "movieId": "m132",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 253
  },
  {
    "id": "s239",
    "movieId": "m94",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 230
  },
  {
    "id": "s240",
    "movieId": "m94",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 269
  },
  {
    "id": "s241",
    "movieId": "m94",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 248
  },
  {
    "id": "s242",
    "movieId": "m101",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 700,
    "availableSeats": 78
  },
  {
    "id": "s243",
    "movieId": "m100",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 450,
    "availableSeats": 269
  },
  {
    "id": "s244",
    "movieId": "m100",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 280
  },
  {
    "id": "s245",
    "movieId": "m101",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 650,
    "availableSeats": 288
  },
  {
    "id": "s246",
    "movieId": "m115",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 63
  },
  {
    "id": "s247",
    "movieId": "m115",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 320,
    "availableSeats": 202
  },
  {
    "id": "s248",
    "movieId": "m115",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 205
  },
  {
    "id": "s249",
    "movieId": "m100",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 590,
    "availableSeats": 260
  },
  {
    "id": "s250",
    "movieId": "m82",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 256
  },
  {
    "id": "s251",
    "movieId": "m115",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 237
  },
  {
    "id": "s252",
    "movieId": "m100",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 211
  },
  {
    "id": "s253",
    "movieId": "m100",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 470,
    "availableSeats": 151
  },
  {
    "id": "s254",
    "movieId": "m83",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 167
  },
  {
    "id": "s255",
    "movieId": "m113",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 67
  },
  {
    "id": "s256",
    "movieId": "m107",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 249
  },
  {
    "id": "s257",
    "movieId": "m83",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 570,
    "availableSeats": 130
  },
  {
    "id": "s258",
    "movieId": "m113",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 690,
    "availableSeats": 55
  },
  {
    "id": "s259",
    "movieId": "m60",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 800,
    "availableSeats": 300
  },
  {
    "id": "s260",
    "movieId": "m60",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 630,
    "availableSeats": 218
  },
  {
    "id": "s261",
    "movieId": "m60",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 420,
    "availableSeats": 110
  },
  {
    "id": "s262",
    "movieId": "m120",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 71
  },
  {
    "id": "s263",
    "movieId": "m53",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 390,
    "availableSeats": 295
  },
  {
    "id": "s264",
    "movieId": "m136",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 159
  },
  {
    "id": "s265",
    "movieId": "m136",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 560,
    "availableSeats": 238
  },
  {
    "id": "s266",
    "movieId": "m136",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 102
  },
  {
    "id": "s267",
    "movieId": "m120",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 204
  },
  {
    "id": "s268",
    "movieId": "m6",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 63
  },
  {
    "id": "s269",
    "movieId": "m79",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 390,
    "availableSeats": 244
  },
  {
    "id": "s270",
    "movieId": "m60",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 78
  },
  {
    "id": "s271",
    "movieId": "m82",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 126
  },
  {
    "id": "s272",
    "movieId": "m134",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 210,
    "availableSeats": 121
  },
  {
    "id": "s273",
    "movieId": "m6",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 670,
    "availableSeats": 170
  },
  {
    "id": "s274",
    "movieId": "m127",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 82
  },
  {
    "id": "s275",
    "movieId": "m83",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 190
  },
  {
    "id": "s276",
    "movieId": "m57",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 650,
    "availableSeats": 139
  },
  {
    "id": "s277",
    "movieId": "m57",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 89
  },
  {
    "id": "s278",
    "movieId": "m117",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 213
  },
  {
    "id": "s279",
    "movieId": "m36",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 590,
    "availableSeats": 188
  },
  {
    "id": "s280",
    "movieId": "m132",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 93
  },
  {
    "id": "s281",
    "movieId": "m36",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 161
  },
  {
    "id": "s282",
    "movieId": "m78",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 210
  },
  {
    "id": "s283",
    "movieId": "m78",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 730,
    "availableSeats": 144
  },
  {
    "id": "s284",
    "movieId": "m78",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 206
  },
  {
    "id": "s285",
    "movieId": "m132",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 167
  },
  {
    "id": "s286",
    "movieId": "m141",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 720,
    "availableSeats": 151
  },
  {
    "id": "s287",
    "movieId": "m78",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 300
  },
  {
    "id": "s288",
    "movieId": "m141",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 280,
    "availableSeats": 261
  },
  {
    "id": "s289",
    "movieId": "m141",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 460,
    "availableSeats": 267
  },
  {
    "id": "s290",
    "movieId": "m80",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 155
  },
  {
    "id": "s291",
    "movieId": "m80",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 131
  },
  {
    "id": "s292",
    "movieId": "m150",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 730,
    "availableSeats": 230
  },
  {
    "id": "s293",
    "movieId": "m150",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 209
  },
  {
    "id": "s294",
    "movieId": "m118",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 690,
    "availableSeats": 83
  },
  {
    "id": "s295",
    "movieId": "m128",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 220,
    "availableSeats": 99
  },
  {
    "id": "s296",
    "movieId": "m128",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 209
  },
  {
    "id": "s297",
    "movieId": "m133",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 580,
    "availableSeats": 114
  },
  {
    "id": "s298",
    "movieId": "m150",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 79
  },
  {
    "id": "s299",
    "movieId": "m150",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 400,
    "availableSeats": 173
  },
  {
    "id": "s300",
    "movieId": "m131",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 260
  },
  {
    "id": "s301",
    "movieId": "m131",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 600,
    "availableSeats": 264
  },
  {
    "id": "s302",
    "movieId": "m113",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 770,
    "availableSeats": 278
  },
  {
    "id": "s303",
    "movieId": "m129",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 600,
    "availableSeats": 194
  },
  {
    "id": "s304",
    "movieId": "m51",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 226
  },
  {
    "id": "s305",
    "movieId": "m131",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 570,
    "availableSeats": 74
  },
  {
    "id": "s306",
    "movieId": "m113",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 410,
    "availableSeats": 216
  },
  {
    "id": "s307",
    "movieId": "m97",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 170
  },
  {
    "id": "s308",
    "movieId": "m113",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 69
  },
  {
    "id": "s309",
    "movieId": "m129",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 134
  },
  {
    "id": "s310",
    "movieId": "m87",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 158
  },
  {
    "id": "s311",
    "movieId": "m99",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 760,
    "availableSeats": 296
  },
  {
    "id": "s312",
    "movieId": "m85",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 700,
    "availableSeats": 194
  },
  {
    "id": "s313",
    "movieId": "m85",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 65
  },
  {
    "id": "s314",
    "movieId": "m99",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 270
  },
  {
    "id": "s315",
    "movieId": "m119",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 280,
    "availableSeats": 233
  },
  {
    "id": "s316",
    "movieId": "m119",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 143
  },
  {
    "id": "s317",
    "movieId": "m119",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 250,
    "availableSeats": 168
  },
  {
    "id": "s318",
    "movieId": "m78",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 670,
    "availableSeats": 183
  },
  {
    "id": "s319",
    "movieId": "m78",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 147
  },
  {
    "id": "s320",
    "movieId": "m121",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 194
  },
  {
    "id": "s321",
    "movieId": "m78",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 350,
    "availableSeats": 221
  },
  {
    "id": "s322",
    "movieId": "m32",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 370,
    "availableSeats": 123
  },
  {
    "id": "s323",
    "movieId": "m112",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 290
  },
  {
    "id": "s324",
    "movieId": "m77",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 420,
    "availableSeats": 235
  },
  {
    "id": "s325",
    "movieId": "m112",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 640,
    "availableSeats": 166
  },
  {
    "id": "s326",
    "movieId": "m112",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 115
  },
  {
    "id": "s327",
    "movieId": "m112",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 259
  },
  {
    "id": "s328",
    "movieId": "m25",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 760,
    "availableSeats": 177
  },
  {
    "id": "s329",
    "movieId": "m127",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 750,
    "availableSeats": 101
  },
  {
    "id": "s330",
    "movieId": "m127",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 470,
    "availableSeats": 100
  },
  {
    "id": "s331",
    "movieId": "m127",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 64
  },
  {
    "id": "s332",
    "movieId": "m57",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 250,
    "availableSeats": 285
  },
  {
    "id": "s333",
    "movieId": "m57",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 620,
    "availableSeats": 290
  },
  {
    "id": "s334",
    "movieId": "m49",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 630,
    "availableSeats": 168
  },
  {
    "id": "s335",
    "movieId": "m140",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 179
  },
  {
    "id": "s336",
    "movieId": "m56",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 274
  },
  {
    "id": "s337",
    "movieId": "m18",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 53
  },
  {
    "id": "s338",
    "movieId": "m56",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 289
  },
  {
    "id": "s339",
    "movieId": "m117",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 85
  },
  {
    "id": "s340",
    "movieId": "m117",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 139
  },
  {
    "id": "s341",
    "movieId": "m117",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 470,
    "availableSeats": 160
  },
  {
    "id": "s342",
    "movieId": "m41",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 570,
    "availableSeats": 137
  },
  {
    "id": "s343",
    "movieId": "m41",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 200,
    "availableSeats": 165
  },
  {
    "id": "s344",
    "movieId": "m46",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 610,
    "availableSeats": 128
  },
  {
    "id": "s345",
    "movieId": "m5",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 520,
    "availableSeats": 265
  },
  {
    "id": "s346",
    "movieId": "m15",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 580,
    "availableSeats": 86
  },
  {
    "id": "s347",
    "movieId": "m15",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 400,
    "availableSeats": 279
  },
  {
    "id": "s348",
    "movieId": "m128",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 470,
    "availableSeats": 292
  },
  {
    "id": "s349",
    "movieId": "m72",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 75
  },
  {
    "id": "s350",
    "movieId": "m128",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 390,
    "availableSeats": 199
  },
  {
    "id": "s351",
    "movieId": "m46",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 241
  },
  {
    "id": "s352",
    "movieId": "m133",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 730,
    "availableSeats": 289
  },
  {
    "id": "s353",
    "movieId": "m22",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 220
  },
  {
    "id": "s354",
    "movieId": "m63",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 620,
    "availableSeats": 214
  },
  {
    "id": "s355",
    "movieId": "m133",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 91
  },
  {
    "id": "s356",
    "movieId": "m63",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 135
  },
  {
    "id": "s357",
    "movieId": "m75",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 320,
    "availableSeats": 84
  },
  {
    "id": "s358",
    "movieId": "m22",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 340,
    "availableSeats": 111
  },
  {
    "id": "s359",
    "movieId": "m63",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 590,
    "availableSeats": 286
  },
  {
    "id": "s360",
    "movieId": "m85",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 233
  },
  {
    "id": "s361",
    "movieId": "m22",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 530,
    "availableSeats": 91
  },
  {
    "id": "s362",
    "movieId": "m85",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 240,
    "availableSeats": 298
  },
  {
    "id": "s363",
    "movieId": "m74",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 710,
    "availableSeats": 270
  },
  {
    "id": "s364",
    "movieId": "m33",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 138
  },
  {
    "id": "s365",
    "movieId": "m33",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 172
  },
  {
    "id": "s366",
    "movieId": "m144",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 56
  },
  {
    "id": "s367",
    "movieId": "m33",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 740,
    "availableSeats": 123
  },
  {
    "id": "s368",
    "movieId": "m144",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 72
  },
  {
    "id": "s369",
    "movieId": "m33",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 154
  },
  {
    "id": "s370",
    "movieId": "m72",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 570,
    "availableSeats": 200
  },
  {
    "id": "s371",
    "movieId": "m116",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 760,
    "availableSeats": 230
  },
  {
    "id": "s372",
    "movieId": "m121",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 410,
    "availableSeats": 149
  },
  {
    "id": "s373",
    "movieId": "m121",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 700,
    "availableSeats": 267
  },
  {
    "id": "s374",
    "movieId": "m41",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 138
  },
  {
    "id": "s375",
    "movieId": "m116",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 640,
    "availableSeats": 69
  },
  {
    "id": "s376",
    "movieId": "m72",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 149
  },
  {
    "id": "s377",
    "movieId": "m72",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 250,
    "availableSeats": 169
  },
  {
    "id": "s378",
    "movieId": "m72",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 250,
    "availableSeats": 230
  },
  {
    "id": "s379",
    "movieId": "m38",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 570,
    "availableSeats": 163
  },
  {
    "id": "s380",
    "movieId": "m43",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 550,
    "availableSeats": 233
  },
  {
    "id": "s381",
    "movieId": "m18",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 136
  },
  {
    "id": "s382",
    "movieId": "m78",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 410,
    "availableSeats": 178
  },
  {
    "id": "s383",
    "movieId": "m43",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 292
  },
  {
    "id": "s384",
    "movieId": "m78",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 194
  },
  {
    "id": "s385",
    "movieId": "m29",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 270,
    "availableSeats": 236
  },
  {
    "id": "s386",
    "movieId": "m78",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 209
  },
  {
    "id": "s387",
    "movieId": "m43",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 256
  },
  {
    "id": "s388",
    "movieId": "m78",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 121
  },
  {
    "id": "s389",
    "movieId": "m18",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 200,
    "availableSeats": 157
  },
  {
    "id": "s390",
    "movieId": "m45",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 50
  },
  {
    "id": "s391",
    "movieId": "m105",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 289
  },
  {
    "id": "s392",
    "movieId": "m149",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 51
  },
  {
    "id": "s393",
    "movieId": "m29",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 210,
    "availableSeats": 94
  },
  {
    "id": "s394",
    "movieId": "m29",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 410,
    "availableSeats": 229
  },
  {
    "id": "s395",
    "movieId": "m21",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 102
  },
  {
    "id": "s396",
    "movieId": "m105",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 271
  },
  {
    "id": "s397",
    "movieId": "m149",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 790,
    "availableSeats": 247
  },
  {
    "id": "s398",
    "movieId": "m60",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 279
  },
  {
    "id": "s399",
    "movieId": "m149",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 197
  },
  {
    "id": "s400",
    "movieId": "m29",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 282
  },
  {
    "id": "s401",
    "movieId": "m29",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 290,
    "availableSeats": 246
  },
  {
    "id": "s402",
    "movieId": "m60",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 470,
    "availableSeats": 126
  },
  {
    "id": "s403",
    "movieId": "m6",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 189
  },
  {
    "id": "s404",
    "movieId": "m37",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 200,
    "availableSeats": 55
  },
  {
    "id": "s405",
    "movieId": "m122",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 138
  },
  {
    "id": "s406",
    "movieId": "m138",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 239
  },
  {
    "id": "s407",
    "movieId": "m37",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 480,
    "availableSeats": 182
  },
  {
    "id": "s408",
    "movieId": "m144",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 253
  },
  {
    "id": "s409",
    "movieId": "m144",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 550,
    "availableSeats": 54
  },
  {
    "id": "s410",
    "movieId": "m144",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 179
  },
  {
    "id": "s411",
    "movieId": "m39",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 133
  },
  {
    "id": "s412",
    "movieId": "m42",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 72
  },
  {
    "id": "s413",
    "movieId": "m42",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 202
  },
  {
    "id": "s414",
    "movieId": "m42",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 144
  },
  {
    "id": "s415",
    "movieId": "m42",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 226
  },
  {
    "id": "s416",
    "movieId": "m90",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 630,
    "availableSeats": 300
  },
  {
    "id": "s417",
    "movieId": "m42",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 265
  },
  {
    "id": "s418",
    "movieId": "m71",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 256
  },
  {
    "id": "s419",
    "movieId": "m77",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 66
  },
  {
    "id": "s420",
    "movieId": "m88",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 140
  },
  {
    "id": "s421",
    "movieId": "m77",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 148
  },
  {
    "id": "s422",
    "movieId": "m46",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 129
  },
  {
    "id": "s423",
    "movieId": "m46",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 156
  },
  {
    "id": "s424",
    "movieId": "m46",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 200,
    "availableSeats": 53
  },
  {
    "id": "s425",
    "movieId": "m43",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 278
  },
  {
    "id": "s426",
    "movieId": "m77",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 233
  },
  {
    "id": "s427",
    "movieId": "m71",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 340,
    "availableSeats": 69
  },
  {
    "id": "s428",
    "movieId": "m43",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 560,
    "availableSeats": 277
  },
  {
    "id": "s429",
    "movieId": "m71",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 530,
    "availableSeats": 80
  },
  {
    "id": "s430",
    "movieId": "m58",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 270,
    "availableSeats": 242
  },
  {
    "id": "s431",
    "movieId": "m99",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 410,
    "availableSeats": 155
  },
  {
    "id": "s432",
    "movieId": "m132",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 480,
    "availableSeats": 59
  },
  {
    "id": "s433",
    "movieId": "m115",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 61
  },
  {
    "id": "s434",
    "movieId": "m99",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 251
  },
  {
    "id": "s435",
    "movieId": "m115",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 204
  },
  {
    "id": "s436",
    "movieId": "m99",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 65
  },
  {
    "id": "s437",
    "movieId": "m115",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 134
  },
  {
    "id": "s438",
    "movieId": "m132",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 221
  },
  {
    "id": "s439",
    "movieId": "m42",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 261
  },
  {
    "id": "s440",
    "movieId": "m150",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 292
  },
  {
    "id": "s441",
    "movieId": "m47",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 165
  },
  {
    "id": "s442",
    "movieId": "m56",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 272
  },
  {
    "id": "s443",
    "movieId": "m47",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 52
  },
  {
    "id": "s444",
    "movieId": "m56",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 260
  },
  {
    "id": "s445",
    "movieId": "m150",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 278
  },
  {
    "id": "s446",
    "movieId": "m56",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 280,
    "availableSeats": 151
  },
  {
    "id": "s447",
    "movieId": "m61",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 228
  },
  {
    "id": "s448",
    "movieId": "m56",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 191
  },
  {
    "id": "s449",
    "movieId": "m150",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 670,
    "availableSeats": 200
  },
  {
    "id": "s450",
    "movieId": "m114",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 235
  },
  {
    "id": "s451",
    "movieId": "m85",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 790,
    "availableSeats": 248
  },
  {
    "id": "s452",
    "movieId": "m85",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 210,
    "availableSeats": 130
  },
  {
    "id": "s453",
    "movieId": "m28",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 107
  },
  {
    "id": "s454",
    "movieId": "m85",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 132
  },
  {
    "id": "s455",
    "movieId": "m55",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 176
  },
  {
    "id": "s456",
    "movieId": "m114",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 182
  },
  {
    "id": "s457",
    "movieId": "m41",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 160
  },
  {
    "id": "s458",
    "movieId": "m143",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 175
  },
  {
    "id": "s459",
    "movieId": "m144",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 63
  },
  {
    "id": "s460",
    "movieId": "m41",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 55
  },
  {
    "id": "s461",
    "movieId": "m144",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 153
  },
  {
    "id": "s462",
    "movieId": "m82",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 330,
    "availableSeats": 155
  },
  {
    "id": "s463",
    "movieId": "m82",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 430,
    "availableSeats": 120
  },
  {
    "id": "s464",
    "movieId": "m144",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 320,
    "availableSeats": 202
  },
  {
    "id": "s465",
    "movieId": "m132",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 450,
    "availableSeats": 198
  },
  {
    "id": "s466",
    "movieId": "m106",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 166
  },
  {
    "id": "s467",
    "movieId": "m94",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 650,
    "availableSeats": 290
  },
  {
    "id": "s468",
    "movieId": "m94",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 72
  },
  {
    "id": "s469",
    "movieId": "m143",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 278
  },
  {
    "id": "s470",
    "movieId": "m106",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 93
  },
  {
    "id": "s471",
    "movieId": "m140",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 790,
    "availableSeats": 74
  },
  {
    "id": "s472",
    "movieId": "m39",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 219
  },
  {
    "id": "s473",
    "movieId": "m52",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 145
  },
  {
    "id": "s474",
    "movieId": "m37",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 51
  },
  {
    "id": "s475",
    "movieId": "m44",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 237
  },
  {
    "id": "s476",
    "movieId": "m140",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 210
  },
  {
    "id": "s477",
    "movieId": "m39",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 53
  },
  {
    "id": "s478",
    "movieId": "m108",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 150
  },
  {
    "id": "s479",
    "movieId": "m102",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 269
  },
  {
    "id": "s480",
    "movieId": "m108",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 286
  },
  {
    "id": "s481",
    "movieId": "m108",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 500,
    "availableSeats": 233
  },
  {
    "id": "s482",
    "movieId": "m94",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 790,
    "availableSeats": 217
  },
  {
    "id": "s483",
    "movieId": "m2",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 230,
    "availableSeats": 238
  },
  {
    "id": "s484",
    "movieId": "m108",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 770,
    "availableSeats": 233
  },
  {
    "id": "s485",
    "movieId": "m102",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 670,
    "availableSeats": 243
  },
  {
    "id": "s486",
    "movieId": "m108",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 560,
    "availableSeats": 135
  },
  {
    "id": "s487",
    "movieId": "m127",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 261
  },
  {
    "id": "s488",
    "movieId": "m78",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 287
  },
  {
    "id": "s489",
    "movieId": "m46",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 124
  },
  {
    "id": "s490",
    "movieId": "m46",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 193
  },
  {
    "id": "s491",
    "movieId": "m46",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 278
  },
  {
    "id": "s492",
    "movieId": "m78",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 149
  },
  {
    "id": "s493",
    "movieId": "m95",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 390,
    "availableSeats": 279
  },
  {
    "id": "s494",
    "movieId": "m71",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 240,
    "availableSeats": 286
  },
  {
    "id": "s495",
    "movieId": "m147",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 730,
    "availableSeats": 240
  },
  {
    "id": "s496",
    "movieId": "m78",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 800,
    "availableSeats": 252
  },
  {
    "id": "s497",
    "movieId": "m71",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 260
  },
  {
    "id": "s498",
    "movieId": "m95",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 240,
    "availableSeats": 189
  },
  {
    "id": "s499",
    "movieId": "m95",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 790,
    "availableSeats": 239
  },
  {
    "id": "s500",
    "movieId": "m119",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 60
  },
  {
    "id": "s501",
    "movieId": "m64",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 281
  },
  {
    "id": "s502",
    "movieId": "m119",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 228
  },
  {
    "id": "s503",
    "movieId": "m7",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 289
  },
  {
    "id": "s504",
    "movieId": "m119",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 420,
    "availableSeats": 279
  },
  {
    "id": "s505",
    "movieId": "m7",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 83
  },
  {
    "id": "s506",
    "movieId": "m119",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 227
  },
  {
    "id": "s507",
    "movieId": "m7",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 171
  },
  {
    "id": "s508",
    "movieId": "m102",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 52
  },
  {
    "id": "s509",
    "movieId": "m117",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 162
  },
  {
    "id": "s510",
    "movieId": "m117",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 800,
    "availableSeats": 128
  },
  {
    "id": "s511",
    "movieId": "m74",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 279
  },
  {
    "id": "s512",
    "movieId": "m113",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 103
  },
  {
    "id": "s513",
    "movieId": "m102",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 67
  },
  {
    "id": "s514",
    "movieId": "m117",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 520,
    "availableSeats": 134
  },
  {
    "id": "s515",
    "movieId": "m36",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 210,
    "availableSeats": 105
  },
  {
    "id": "s516",
    "movieId": "m20",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 130
  },
  {
    "id": "s517",
    "movieId": "m36",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 350,
    "availableSeats": 272
  },
  {
    "id": "s518",
    "movieId": "m36",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 116
  },
  {
    "id": "s519",
    "movieId": "m36",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 340,
    "availableSeats": 74
  },
  {
    "id": "s520",
    "movieId": "m89",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 281
  },
  {
    "id": "s521",
    "movieId": "m89",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 232
  },
  {
    "id": "s522",
    "movieId": "m14",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 700,
    "availableSeats": 275
  },
  {
    "id": "s523",
    "movieId": "m118",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 197
  },
  {
    "id": "s524",
    "movieId": "m118",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 295
  },
  {
    "id": "s525",
    "movieId": "m49",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 293
  },
  {
    "id": "s526",
    "movieId": "m89",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 590,
    "availableSeats": 150
  },
  {
    "id": "s527",
    "movieId": "m14",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 600,
    "availableSeats": 170
  },
  {
    "id": "s528",
    "movieId": "m127",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 640,
    "availableSeats": 253
  },
  {
    "id": "s529",
    "movieId": "m133",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 590,
    "availableSeats": 291
  },
  {
    "id": "s530",
    "movieId": "m133",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 159
  },
  {
    "id": "s531",
    "movieId": "m93",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 205
  },
  {
    "id": "s532",
    "movieId": "m47",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 300,
    "availableSeats": 279
  },
  {
    "id": "s533",
    "movieId": "m133",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 199
  },
  {
    "id": "s534",
    "movieId": "m133",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 267
  },
  {
    "id": "s535",
    "movieId": "m127",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 730,
    "availableSeats": 80
  },
  {
    "id": "s536",
    "movieId": "m47",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 780,
    "availableSeats": 272
  },
  {
    "id": "s537",
    "movieId": "m28",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 650,
    "availableSeats": 220
  },
  {
    "id": "s538",
    "movieId": "m48",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 281
  },
  {
    "id": "s539",
    "movieId": "m52",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 218
  },
  {
    "id": "s540",
    "movieId": "m147",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 490,
    "availableSeats": 163
  },
  {
    "id": "s541",
    "movieId": "m52",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 125
  },
  {
    "id": "s542",
    "movieId": "m47",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 230,
    "availableSeats": 265
  },
  {
    "id": "s543",
    "movieId": "m47",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 200,
    "availableSeats": 94
  },
  {
    "id": "s544",
    "movieId": "m48",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 87
  },
  {
    "id": "s545",
    "movieId": "m52",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 330,
    "availableSeats": 85
  },
  {
    "id": "s546",
    "movieId": "m48",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 370,
    "availableSeats": 281
  },
  {
    "id": "s547",
    "movieId": "m36",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 102
  },
  {
    "id": "s548",
    "movieId": "m36",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 410,
    "availableSeats": 124
  },
  {
    "id": "s549",
    "movieId": "m36",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 250,
    "availableSeats": 93
  },
  {
    "id": "s550",
    "movieId": "m30",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 57
  },
  {
    "id": "s551",
    "movieId": "m86",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 270,
    "availableSeats": 82
  },
  {
    "id": "s552",
    "movieId": "m86",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 204
  },
  {
    "id": "s553",
    "movieId": "m35",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 115
  },
  {
    "id": "s554",
    "movieId": "m59",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 250
  },
  {
    "id": "s555",
    "movieId": "m119",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 490,
    "availableSeats": 196
  },
  {
    "id": "s556",
    "movieId": "m119",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 237
  },
  {
    "id": "s557",
    "movieId": "m71",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 630,
    "availableSeats": 278
  },
  {
    "id": "s558",
    "movieId": "m59",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 730,
    "availableSeats": 193
  },
  {
    "id": "s559",
    "movieId": "m36",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 182
  },
  {
    "id": "s560",
    "movieId": "m36",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 710,
    "availableSeats": 93
  },
  {
    "id": "s561",
    "movieId": "m119",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 56
  },
  {
    "id": "s562",
    "movieId": "m19",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 490,
    "availableSeats": 169
  },
  {
    "id": "s563",
    "movieId": "m59",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 500,
    "availableSeats": 140
  },
  {
    "id": "s564",
    "movieId": "m126",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 166
  },
  {
    "id": "s565",
    "movieId": "m116",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 610,
    "availableSeats": 228
  },
  {
    "id": "s566",
    "movieId": "m40",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 450,
    "availableSeats": 191
  },
  {
    "id": "s567",
    "movieId": "m116",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 248
  },
  {
    "id": "s568",
    "movieId": "m126",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 168
  },
  {
    "id": "s569",
    "movieId": "m40",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 206
  },
  {
    "id": "s570",
    "movieId": "m25",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 83
  },
  {
    "id": "s571",
    "movieId": "m126",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 111
  },
  {
    "id": "s572",
    "movieId": "m116",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 80
  },
  {
    "id": "s573",
    "movieId": "m25",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 260,
    "availableSeats": 54
  },
  {
    "id": "s574",
    "movieId": "m40",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 215
  },
  {
    "id": "s575",
    "movieId": "m40",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 51
  },
  {
    "id": "s576",
    "movieId": "m115",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 207
  },
  {
    "id": "s577",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 150
  },
  {
    "id": "s578",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 179
  },
  {
    "id": "s579",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 370,
    "availableSeats": 177
  },
  {
    "id": "s580",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 188
  },
  {
    "id": "s581",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 650,
    "availableSeats": 76
  },
  {
    "id": "s582",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 450,
    "availableSeats": 91
  },
  {
    "id": "s583",
    "movieId": "m56",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 84
  },
  {
    "id": "s584",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 260
  },
  {
    "id": "s585",
    "movieId": "m56",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 191
  },
  {
    "id": "s586",
    "movieId": "m8",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 207
  },
  {
    "id": "s587",
    "movieId": "m83",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 440,
    "availableSeats": 103
  },
  {
    "id": "s588",
    "movieId": "m86",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 480,
    "availableSeats": 242
  },
  {
    "id": "s589",
    "movieId": "m32",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 530,
    "availableSeats": 143
  },
  {
    "id": "s590",
    "movieId": "m32",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 208
  },
  {
    "id": "s591",
    "movieId": "m148",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 153
  },
  {
    "id": "s592",
    "movieId": "m148",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 294
  },
  {
    "id": "s593",
    "movieId": "m99",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 51
  },
  {
    "id": "s594",
    "movieId": "m99",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 800,
    "availableSeats": 198
  },
  {
    "id": "s595",
    "movieId": "m148",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 131
  },
  {
    "id": "s596",
    "movieId": "m118",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 292
  },
  {
    "id": "s597",
    "movieId": "m134",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 56
  },
  {
    "id": "s598",
    "movieId": "m56",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 430,
    "availableSeats": 233
  },
  {
    "id": "s599",
    "movieId": "m75",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 310,
    "availableSeats": 298
  },
  {
    "id": "s600",
    "movieId": "m118",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 209
  },
  {
    "id": "s601",
    "movieId": "m75",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 770,
    "availableSeats": 73
  },
  {
    "id": "s602",
    "movieId": "m134",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 320,
    "availableSeats": 222
  },
  {
    "id": "s603",
    "movieId": "m134",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 320,
    "availableSeats": 190
  },
  {
    "id": "s604",
    "movieId": "m134",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 181
  },
  {
    "id": "s605",
    "movieId": "m134",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 260,
    "availableSeats": 81
  },
  {
    "id": "s606",
    "movieId": "m111",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 390,
    "availableSeats": 143
  },
  {
    "id": "s607",
    "movieId": "m84",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 136
  },
  {
    "id": "s608",
    "movieId": "m58",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 200,
    "availableSeats": 159
  },
  {
    "id": "s609",
    "movieId": "m111",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 260,
    "availableSeats": 248
  },
  {
    "id": "s610",
    "movieId": "m58",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 300,
    "availableSeats": 128
  },
  {
    "id": "s611",
    "movieId": "m58",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 290
  },
  {
    "id": "s612",
    "movieId": "m58",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 256
  },
  {
    "id": "s613",
    "movieId": "m106",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 690,
    "availableSeats": 94
  },
  {
    "id": "s614",
    "movieId": "m27",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 185
  },
  {
    "id": "s615",
    "movieId": "m91",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 233
  },
  {
    "id": "s616",
    "movieId": "m71",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 450,
    "availableSeats": 106
  },
  {
    "id": "s617",
    "movieId": "m71",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 430,
    "availableSeats": 69
  },
  {
    "id": "s618",
    "movieId": "m106",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 290,
    "availableSeats": 183
  },
  {
    "id": "s619",
    "movieId": "m106",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 277
  },
  {
    "id": "s620",
    "movieId": "m111",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 166
  },
  {
    "id": "s621",
    "movieId": "m4",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 760,
    "availableSeats": 56
  },
  {
    "id": "s622",
    "movieId": "m40",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 259
  },
  {
    "id": "s623",
    "movieId": "m4",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 178
  },
  {
    "id": "s624",
    "movieId": "m48",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 110
  },
  {
    "id": "s625",
    "movieId": "m40",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 420,
    "availableSeats": 205
  },
  {
    "id": "s626",
    "movieId": "m40",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 340,
    "availableSeats": 84
  },
  {
    "id": "s627",
    "movieId": "m111",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 250,
    "availableSeats": 268
  },
  {
    "id": "s628",
    "movieId": "m111",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 201
  },
  {
    "id": "s629",
    "movieId": "m40",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 206
  },
  {
    "id": "s630",
    "movieId": "m111",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 64
  },
  {
    "id": "s631",
    "movieId": "m142",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 266
  },
  {
    "id": "s632",
    "movieId": "m34",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 256
  },
  {
    "id": "s633",
    "movieId": "m34",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 231
  },
  {
    "id": "s634",
    "movieId": "m51",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 119
  },
  {
    "id": "s635",
    "movieId": "m51",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 720,
    "availableSeats": 141
  },
  {
    "id": "s636",
    "movieId": "m51",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 780,
    "availableSeats": 191
  },
  {
    "id": "s637",
    "movieId": "m51",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 350,
    "availableSeats": 104
  },
  {
    "id": "s638",
    "movieId": "m51",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 207
  },
  {
    "id": "s639",
    "movieId": "m121",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 260
  },
  {
    "id": "s640",
    "movieId": "m111",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 232
  },
  {
    "id": "s641",
    "movieId": "m136",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 420,
    "availableSeats": 206
  },
  {
    "id": "s642",
    "movieId": "m121",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 67
  },
  {
    "id": "s643",
    "movieId": "m10",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 94
  },
  {
    "id": "s644",
    "movieId": "m19",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 550,
    "availableSeats": 68
  },
  {
    "id": "s645",
    "movieId": "m111",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 202
  },
  {
    "id": "s646",
    "movieId": "m136",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 222
  },
  {
    "id": "s647",
    "movieId": "m136",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 630,
    "availableSeats": 69
  },
  {
    "id": "s648",
    "movieId": "m19",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 205
  },
  {
    "id": "s649",
    "movieId": "m136",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 760,
    "availableSeats": 186
  },
  {
    "id": "s650",
    "movieId": "m136",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 294
  },
  {
    "id": "s651",
    "movieId": "m26",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 168
  },
  {
    "id": "s652",
    "movieId": "m26",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 91
  },
  {
    "id": "s653",
    "movieId": "m145",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 620,
    "availableSeats": 119
  },
  {
    "id": "s654",
    "movieId": "m26",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 232
  },
  {
    "id": "s655",
    "movieId": "m19",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 99
  },
  {
    "id": "s656",
    "movieId": "m105",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 98
  },
  {
    "id": "s657",
    "movieId": "m109",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 200,
    "availableSeats": 70
  },
  {
    "id": "s658",
    "movieId": "m109",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 600,
    "availableSeats": 225
  },
  {
    "id": "s659",
    "movieId": "m109",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 282
  },
  {
    "id": "s660",
    "movieId": "m41",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 790,
    "availableSeats": 128
  },
  {
    "id": "s661",
    "movieId": "m105",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 222
  },
  {
    "id": "s662",
    "movieId": "m109",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 300
  },
  {
    "id": "s663",
    "movieId": "m69",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 85
  },
  {
    "id": "s664",
    "movieId": "m69",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 79
  },
  {
    "id": "s665",
    "movieId": "m111",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 740,
    "availableSeats": 207
  },
  {
    "id": "s666",
    "movieId": "m3",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 73
  },
  {
    "id": "s667",
    "movieId": "m64",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 210,
    "availableSeats": 145
  },
  {
    "id": "s668",
    "movieId": "m111",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 295
  },
  {
    "id": "s669",
    "movieId": "m41",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 800,
    "availableSeats": 56
  },
  {
    "id": "s670",
    "movieId": "m111",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 158
  },
  {
    "id": "s671",
    "movieId": "m69",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 228
  },
  {
    "id": "s672",
    "movieId": "m111",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 530,
    "availableSeats": 115
  },
  {
    "id": "s673",
    "movieId": "m69",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 430,
    "availableSeats": 238
  },
  {
    "id": "s674",
    "movieId": "m3",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 650,
    "availableSeats": 93
  },
  {
    "id": "s675",
    "movieId": "m8",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 206
  },
  {
    "id": "s676",
    "movieId": "m2",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 290,
    "availableSeats": 84
  },
  {
    "id": "s677",
    "movieId": "m68",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 630,
    "availableSeats": 266
  },
  {
    "id": "s678",
    "movieId": "m113",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 226
  },
  {
    "id": "s679",
    "movieId": "m68",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 320,
    "availableSeats": 78
  },
  {
    "id": "s680",
    "movieId": "m141",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 207
  },
  {
    "id": "s681",
    "movieId": "m8",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 780,
    "availableSeats": 252
  },
  {
    "id": "s682",
    "movieId": "m113",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 106
  },
  {
    "id": "s683",
    "movieId": "m8",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 690,
    "availableSeats": 133
  },
  {
    "id": "s684",
    "movieId": "m141",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 202
  },
  {
    "id": "s685",
    "movieId": "m141",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 274
  },
  {
    "id": "s686",
    "movieId": "m127",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 111
  },
  {
    "id": "s687",
    "movieId": "m14",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 620,
    "availableSeats": 81
  },
  {
    "id": "s688",
    "movieId": "m126",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 140
  },
  {
    "id": "s689",
    "movieId": "m126",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 450,
    "availableSeats": 179
  },
  {
    "id": "s690",
    "movieId": "m77",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 203
  },
  {
    "id": "s691",
    "movieId": "m86",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 175
  },
  {
    "id": "s692",
    "movieId": "m77",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 650,
    "availableSeats": 185
  },
  {
    "id": "s693",
    "movieId": "m77",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 177
  },
  {
    "id": "s694",
    "movieId": "m86",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 223
  },
  {
    "id": "s695",
    "movieId": "m127",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 570,
    "availableSeats": 256
  },
  {
    "id": "s696",
    "movieId": "m126",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 590,
    "availableSeats": 80
  },
  {
    "id": "s697",
    "movieId": "m63",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 51
  },
  {
    "id": "s698",
    "movieId": "m63",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 450,
    "availableSeats": 245
  },
  {
    "id": "s699",
    "movieId": "m66",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 105
  },
  {
    "id": "s700",
    "movieId": "m63",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 120
  },
  {
    "id": "s701",
    "movieId": "m97",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 162
  },
  {
    "id": "s702",
    "movieId": "m66",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 271
  },
  {
    "id": "s703",
    "movieId": "m97",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 242
  },
  {
    "id": "s704",
    "movieId": "m97",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 270
  },
  {
    "id": "s705",
    "movieId": "m106",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 80
  },
  {
    "id": "s706",
    "movieId": "m97",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 610,
    "availableSeats": 161
  },
  {
    "id": "s707",
    "movieId": "m110",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 273
  },
  {
    "id": "s708",
    "movieId": "m110",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 800,
    "availableSeats": 295
  },
  {
    "id": "s709",
    "movieId": "m84",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 560,
    "availableSeats": 103
  },
  {
    "id": "s710",
    "movieId": "m25",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 770,
    "availableSeats": 162
  },
  {
    "id": "s711",
    "movieId": "m84",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 176
  },
  {
    "id": "s712",
    "movieId": "m84",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 580,
    "availableSeats": 299
  },
  {
    "id": "s713",
    "movieId": "m25",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 267
  },
  {
    "id": "s714",
    "movieId": "m37",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 152
  },
  {
    "id": "s715",
    "movieId": "m10",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 610,
    "availableSeats": 191
  },
  {
    "id": "s716",
    "movieId": "m98",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 260,
    "availableSeats": 231
  },
  {
    "id": "s717",
    "movieId": "m37",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 223
  },
  {
    "id": "s718",
    "movieId": "m98",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 640,
    "availableSeats": 196
  },
  {
    "id": "s719",
    "movieId": "m94",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 82
  },
  {
    "id": "s720",
    "movieId": "m98",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 700,
    "availableSeats": 106
  },
  {
    "id": "s721",
    "movieId": "m94",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 225
  },
  {
    "id": "s722",
    "movieId": "m94",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 410,
    "availableSeats": 99
  },
  {
    "id": "s723",
    "movieId": "m46",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 80
  },
  {
    "id": "s724",
    "movieId": "m25",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 310,
    "availableSeats": 169
  },
  {
    "id": "s725",
    "movieId": "m25",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 169
  },
  {
    "id": "s726",
    "movieId": "m46",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 108
  },
  {
    "id": "s727",
    "movieId": "m120",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 390,
    "availableSeats": 53
  },
  {
    "id": "s728",
    "movieId": "m140",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 270,
    "availableSeats": 50
  },
  {
    "id": "s729",
    "movieId": "m25",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 480,
    "availableSeats": 150
  },
  {
    "id": "s730",
    "movieId": "m120",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 167
  },
  {
    "id": "s731",
    "movieId": "m120",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 195
  },
  {
    "id": "s732",
    "movieId": "m25",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 222
  },
  {
    "id": "s733",
    "movieId": "m120",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 610,
    "availableSeats": 223
  },
  {
    "id": "s734",
    "movieId": "m46",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 780,
    "availableSeats": 271
  },
  {
    "id": "s735",
    "movieId": "m90",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 780,
    "availableSeats": 169
  },
  {
    "id": "s736",
    "movieId": "m90",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 132
  },
  {
    "id": "s737",
    "movieId": "m125",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 440,
    "availableSeats": 52
  },
  {
    "id": "s738",
    "movieId": "m90",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 257
  },
  {
    "id": "s739",
    "movieId": "m24",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 118
  },
  {
    "id": "s740",
    "movieId": "m125",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 198
  },
  {
    "id": "s741",
    "movieId": "m24",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 720,
    "availableSeats": 248
  },
  {
    "id": "s742",
    "movieId": "m17",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 236
  },
  {
    "id": "s743",
    "movieId": "m17",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 710,
    "availableSeats": 211
  },
  {
    "id": "s744",
    "movieId": "m33",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 83
  },
  {
    "id": "s745",
    "movieId": "m6",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 520,
    "availableSeats": 50
  },
  {
    "id": "s746",
    "movieId": "m141",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 220
  },
  {
    "id": "s747",
    "movieId": "m77",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 177
  },
  {
    "id": "s748",
    "movieId": "m19",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 135
  },
  {
    "id": "s749",
    "movieId": "m106",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 460,
    "availableSeats": 289
  },
  {
    "id": "s750",
    "movieId": "m69",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 202
  },
  {
    "id": "s751",
    "movieId": "m71",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 212
  },
  {
    "id": "s752",
    "movieId": "m99",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 202
  },
  {
    "id": "s753",
    "movieId": "m106",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 53
  },
  {
    "id": "s754",
    "movieId": "m71",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 186
  },
  {
    "id": "s755",
    "movieId": "m69",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 300,
    "availableSeats": 244
  },
  {
    "id": "s756",
    "movieId": "m79",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 200,
    "availableSeats": 78
  },
  {
    "id": "s757",
    "movieId": "m71",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 289
  },
  {
    "id": "s758",
    "movieId": "m69",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 650,
    "availableSeats": 296
  },
  {
    "id": "s759",
    "movieId": "m99",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 177
  },
  {
    "id": "s760",
    "movieId": "m135",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 285
  },
  {
    "id": "s761",
    "movieId": "m94",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 690,
    "availableSeats": 271
  },
  {
    "id": "s762",
    "movieId": "m145",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 55
  },
  {
    "id": "s763",
    "movieId": "m80",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 296
  },
  {
    "id": "s764",
    "movieId": "m145",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 127
  },
  {
    "id": "s765",
    "movieId": "m94",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 286
  },
  {
    "id": "s766",
    "movieId": "m40",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 235
  },
  {
    "id": "s767",
    "movieId": "m9",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 770,
    "availableSeats": 293
  },
  {
    "id": "s768",
    "movieId": "m9",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 67
  },
  {
    "id": "s769",
    "movieId": "m105",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 51
  },
  {
    "id": "s770",
    "movieId": "m108",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 133
  },
  {
    "id": "s771",
    "movieId": "m105",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 209
  },
  {
    "id": "s772",
    "movieId": "m69",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 151
  },
  {
    "id": "s773",
    "movieId": "m40",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 690,
    "availableSeats": 66
  },
  {
    "id": "s774",
    "movieId": "m9",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 440,
    "availableSeats": 186
  },
  {
    "id": "s775",
    "movieId": "m27",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 167
  },
  {
    "id": "s776",
    "movieId": "m27",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 102
  },
  {
    "id": "s777",
    "movieId": "m27",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 283
  },
  {
    "id": "s778",
    "movieId": "m123",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 75
  },
  {
    "id": "s779",
    "movieId": "m123",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 56
  },
  {
    "id": "s780",
    "movieId": "m123",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 141
  },
  {
    "id": "s781",
    "movieId": "m123",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 197
  },
  {
    "id": "s782",
    "movieId": "m46",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 640,
    "availableSeats": 226
  },
  {
    "id": "s783",
    "movieId": "m123",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 690,
    "availableSeats": 183
  },
  {
    "id": "s784",
    "movieId": "m125",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 760,
    "availableSeats": 292
  },
  {
    "id": "s785",
    "movieId": "m40",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 760,
    "availableSeats": 128
  },
  {
    "id": "s786",
    "movieId": "m40",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 236
  },
  {
    "id": "s787",
    "movieId": "m40",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 270,
    "availableSeats": 90
  },
  {
    "id": "s788",
    "movieId": "m125",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 285
  },
  {
    "id": "s789",
    "movieId": "m84",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 620,
    "availableSeats": 66
  },
  {
    "id": "s790",
    "movieId": "m108",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 128
  },
  {
    "id": "s791",
    "movieId": "m112",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 238
  },
  {
    "id": "s792",
    "movieId": "m142",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 255
  },
  {
    "id": "s793",
    "movieId": "m126",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 186
  },
  {
    "id": "s794",
    "movieId": "m126",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 350,
    "availableSeats": 121
  },
  {
    "id": "s795",
    "movieId": "m67",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 410,
    "availableSeats": 205
  },
  {
    "id": "s796",
    "movieId": "m67",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 83
  },
  {
    "id": "s797",
    "movieId": "m67",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 105
  },
  {
    "id": "s798",
    "movieId": "m109",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 294
  },
  {
    "id": "s799",
    "movieId": "m67",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 172
  },
  {
    "id": "s800",
    "movieId": "m67",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 263
  },
  {
    "id": "s801",
    "movieId": "m50",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 760,
    "availableSeats": 236
  },
  {
    "id": "s802",
    "movieId": "m48",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 730,
    "availableSeats": 253
  },
  {
    "id": "s803",
    "movieId": "m109",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 780,
    "availableSeats": 176
  },
  {
    "id": "s804",
    "movieId": "m142",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 53
  },
  {
    "id": "s805",
    "movieId": "m91",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 93
  },
  {
    "id": "s806",
    "movieId": "m80",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 295
  },
  {
    "id": "s807",
    "movieId": "m91",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 670,
    "availableSeats": 217
  },
  {
    "id": "s808",
    "movieId": "m57",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 590,
    "availableSeats": 266
  },
  {
    "id": "s809",
    "movieId": "m91",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 290,
    "availableSeats": 178
  },
  {
    "id": "s810",
    "movieId": "m91",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 490,
    "availableSeats": 113
  },
  {
    "id": "s811",
    "movieId": "m142",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 730,
    "availableSeats": 277
  },
  {
    "id": "s812",
    "movieId": "m80",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 82
  },
  {
    "id": "s813",
    "movieId": "m13",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 81
  },
  {
    "id": "s814",
    "movieId": "m140",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 800,
    "availableSeats": 70
  },
  {
    "id": "s815",
    "movieId": "m95",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 630,
    "availableSeats": 233
  },
  {
    "id": "s816",
    "movieId": "m92",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 530,
    "availableSeats": 158
  },
  {
    "id": "s817",
    "movieId": "m140",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 560,
    "availableSeats": 224
  },
  {
    "id": "s818",
    "movieId": "m23",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 760,
    "availableSeats": 117
  },
  {
    "id": "s819",
    "movieId": "m95",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 580,
    "availableSeats": 274
  },
  {
    "id": "s820",
    "movieId": "m92",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 72
  },
  {
    "id": "s821",
    "movieId": "m89",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 255
  },
  {
    "id": "s822",
    "movieId": "m89",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 169
  },
  {
    "id": "s823",
    "movieId": "m33",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 390,
    "availableSeats": 109
  },
  {
    "id": "s824",
    "movieId": "m42",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 192
  },
  {
    "id": "s825",
    "movieId": "m89",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 460,
    "availableSeats": 137
  },
  {
    "id": "s826",
    "movieId": "m33",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 196
  },
  {
    "id": "s827",
    "movieId": "m37",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 298
  },
  {
    "id": "s828",
    "movieId": "m116",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 172
  },
  {
    "id": "s829",
    "movieId": "m116",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 98
  },
  {
    "id": "s830",
    "movieId": "m138",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 248
  },
  {
    "id": "s831",
    "movieId": "m117",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 470,
    "availableSeats": 118
  },
  {
    "id": "s832",
    "movieId": "m117",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 550,
    "availableSeats": 60
  },
  {
    "id": "s833",
    "movieId": "m117",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 270,
    "availableSeats": 182
  },
  {
    "id": "s834",
    "movieId": "m105",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 240,
    "availableSeats": 119
  },
  {
    "id": "s835",
    "movieId": "m80",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 105
  },
  {
    "id": "s836",
    "movieId": "m149",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 253
  },
  {
    "id": "s837",
    "movieId": "m149",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 750,
    "availableSeats": 284
  },
  {
    "id": "s838",
    "movieId": "m80",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 203
  },
  {
    "id": "s839",
    "movieId": "m105",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 380,
    "availableSeats": 300
  },
  {
    "id": "s840",
    "movieId": "m146",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 166
  },
  {
    "id": "s841",
    "movieId": "m105",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 720,
    "availableSeats": 201
  },
  {
    "id": "s842",
    "movieId": "m39",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 460,
    "availableSeats": 59
  },
  {
    "id": "s843",
    "movieId": "m45",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 390,
    "availableSeats": 208
  },
  {
    "id": "s844",
    "movieId": "m145",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 115
  },
  {
    "id": "s845",
    "movieId": "m135",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 700,
    "availableSeats": 58
  },
  {
    "id": "s846",
    "movieId": "m135",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 149
  },
  {
    "id": "s847",
    "movieId": "m39",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 410,
    "availableSeats": 159
  },
  {
    "id": "s848",
    "movieId": "m45",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 242
  },
  {
    "id": "s849",
    "movieId": "m145",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 250,
    "availableSeats": 197
  },
  {
    "id": "s850",
    "movieId": "m138",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 118
  },
  {
    "id": "s851",
    "movieId": "m39",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 55
  },
  {
    "id": "s852",
    "movieId": "m67",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 58
  },
  {
    "id": "s853",
    "movieId": "m89",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 52
  },
  {
    "id": "s854",
    "movieId": "m107",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 94
  },
  {
    "id": "s855",
    "movieId": "m149",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 257
  },
  {
    "id": "s856",
    "movieId": "m89",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 281
  },
  {
    "id": "s857",
    "movieId": "m149",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 460,
    "availableSeats": 230
  },
  {
    "id": "s858",
    "movieId": "m67",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 142
  },
  {
    "id": "s859",
    "movieId": "m81",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 610,
    "availableSeats": 51
  },
  {
    "id": "s860",
    "movieId": "m26",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 62
  },
  {
    "id": "s861",
    "movieId": "m26",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 800,
    "availableSeats": 214
  },
  {
    "id": "s862",
    "movieId": "m95",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 121
  },
  {
    "id": "s863",
    "movieId": "m33",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 220,
    "availableSeats": 195
  },
  {
    "id": "s864",
    "movieId": "m95",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 620,
    "availableSeats": 206
  },
  {
    "id": "s865",
    "movieId": "m81",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 57
  },
  {
    "id": "s866",
    "movieId": "m26",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 219
  },
  {
    "id": "s867",
    "movieId": "m33",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 71
  },
  {
    "id": "s868",
    "movieId": "m65",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 160
  },
  {
    "id": "s869",
    "movieId": "m131",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 490,
    "availableSeats": 149
  },
  {
    "id": "s870",
    "movieId": "m25",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 240
  },
  {
    "id": "s871",
    "movieId": "m25",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 136
  },
  {
    "id": "s872",
    "movieId": "m25",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 700,
    "availableSeats": 149
  },
  {
    "id": "s873",
    "movieId": "m16",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 246
  },
  {
    "id": "s874",
    "movieId": "m7",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 99
  },
  {
    "id": "s875",
    "movieId": "m140",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 340,
    "availableSeats": 285
  },
  {
    "id": "s876",
    "movieId": "m86",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 210,
    "availableSeats": 160
  },
  {
    "id": "s877",
    "movieId": "m148",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 790,
    "availableSeats": 154
  },
  {
    "id": "s878",
    "movieId": "m86",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 670,
    "availableSeats": 57
  },
  {
    "id": "s879",
    "movieId": "m86",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 260,
    "availableSeats": 103
  },
  {
    "id": "s880",
    "movieId": "m7",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 227
  },
  {
    "id": "s881",
    "movieId": "m19",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 216
  },
  {
    "id": "s882",
    "movieId": "m142",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 270
  },
  {
    "id": "s883",
    "movieId": "m26",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 88
  },
  {
    "id": "s884",
    "movieId": "m85",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 790,
    "availableSeats": 155
  },
  {
    "id": "s885",
    "movieId": "m19",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 470,
    "availableSeats": 145
  },
  {
    "id": "s886",
    "movieId": "m76",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 550,
    "availableSeats": 225
  },
  {
    "id": "s887",
    "movieId": "m26",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 570,
    "availableSeats": 199
  },
  {
    "id": "s888",
    "movieId": "m21",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 202
  },
  {
    "id": "s889",
    "movieId": "m98",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 530,
    "availableSeats": 119
  },
  {
    "id": "s890",
    "movieId": "m98",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 122
  },
  {
    "id": "s891",
    "movieId": "m146",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 138
  },
  {
    "id": "s892",
    "movieId": "m116",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 260,
    "availableSeats": 191
  },
  {
    "id": "s893",
    "movieId": "m146",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 670,
    "availableSeats": 95
  },
  {
    "id": "s894",
    "movieId": "m21",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 680,
    "availableSeats": 90
  },
  {
    "id": "s895",
    "movieId": "m146",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 230,
    "availableSeats": 272
  },
  {
    "id": "s896",
    "movieId": "m21",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 192
  },
  {
    "id": "s897",
    "movieId": "m44",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 195
  },
  {
    "id": "s898",
    "movieId": "m105",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 137
  },
  {
    "id": "s899",
    "movieId": "m78",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 150
  },
  {
    "id": "s900",
    "movieId": "m44",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 210,
    "availableSeats": 102
  },
  {
    "id": "s901",
    "movieId": "m140",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 202
  },
  {
    "id": "s902",
    "movieId": "m78",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 278
  },
  {
    "id": "s903",
    "movieId": "m70",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 170
  },
  {
    "id": "s904",
    "movieId": "m140",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 297
  },
  {
    "id": "s905",
    "movieId": "m78",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 229
  },
  {
    "id": "s906",
    "movieId": "m44",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 99
  },
  {
    "id": "s907",
    "movieId": "m44",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 121
  },
  {
    "id": "s908",
    "movieId": "m140",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 83
  },
  {
    "id": "s909",
    "movieId": "m2",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 123
  },
  {
    "id": "s910",
    "movieId": "m4",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 770,
    "availableSeats": 215
  },
  {
    "id": "s911",
    "movieId": "m2",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 116
  },
  {
    "id": "s912",
    "movieId": "m2",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 610,
    "availableSeats": 126
  },
  {
    "id": "s913",
    "movieId": "m2",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 135
  },
  {
    "id": "s914",
    "movieId": "m2",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 54
  },
  {
    "id": "s915",
    "movieId": "m146",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 430,
    "availableSeats": 293
  },
  {
    "id": "s916",
    "movieId": "m4",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 294
  },
  {
    "id": "s917",
    "movieId": "m137",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 166
  },
  {
    "id": "s918",
    "movieId": "m122",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 330,
    "availableSeats": 141
  },
  {
    "id": "s919",
    "movieId": "m137",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 263
  },
  {
    "id": "s920",
    "movieId": "m89",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 520,
    "availableSeats": 138
  },
  {
    "id": "s921",
    "movieId": "m122",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 320,
    "availableSeats": 255
  },
  {
    "id": "s922",
    "movieId": "m89",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 490,
    "availableSeats": 210
  },
  {
    "id": "s923",
    "movieId": "m89",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 171
  },
  {
    "id": "s924",
    "movieId": "m137",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 680,
    "availableSeats": 250
  },
  {
    "id": "s925",
    "movieId": "m137",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 254
  },
  {
    "id": "s926",
    "movieId": "m7",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 181
  },
  {
    "id": "s927",
    "movieId": "m89",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 410,
    "availableSeats": 126
  },
  {
    "id": "s928",
    "movieId": "m10",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 170
  },
  {
    "id": "s929",
    "movieId": "m72",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 294
  },
  {
    "id": "s930",
    "movieId": "m10",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 179
  },
  {
    "id": "s931",
    "movieId": "m72",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 730,
    "availableSeats": 204
  },
  {
    "id": "s932",
    "movieId": "m72",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 68
  },
  {
    "id": "s933",
    "movieId": "m10",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 54
  },
  {
    "id": "s934",
    "movieId": "m72",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 790,
    "availableSeats": 244
  },
  {
    "id": "s935",
    "movieId": "m23",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 57
  },
  {
    "id": "s936",
    "movieId": "m11",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 450,
    "availableSeats": 66
  },
  {
    "id": "s937",
    "movieId": "m11",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 267
  },
  {
    "id": "s938",
    "movieId": "m80",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 590,
    "availableSeats": 176
  },
  {
    "id": "s939",
    "movieId": "m26",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 800,
    "availableSeats": 192
  },
  {
    "id": "s940",
    "movieId": "m80",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 780,
    "availableSeats": 143
  },
  {
    "id": "s941",
    "movieId": "m23",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 560,
    "availableSeats": 278
  },
  {
    "id": "s942",
    "movieId": "m16",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 740,
    "availableSeats": 82
  },
  {
    "id": "s943",
    "movieId": "m131",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 450,
    "availableSeats": 84
  },
  {
    "id": "s944",
    "movieId": "m26",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 520,
    "availableSeats": 86
  },
  {
    "id": "s945",
    "movieId": "m80",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 124
  },
  {
    "id": "s946",
    "movieId": "m23",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 127
  },
  {
    "id": "s947",
    "movieId": "m52",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 200,
    "availableSeats": 210
  },
  {
    "id": "s948",
    "movieId": "m7",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 186
  },
  {
    "id": "s949",
    "movieId": "m59",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 94
  },
  {
    "id": "s950",
    "movieId": "m59",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 159
  },
  {
    "id": "s951",
    "movieId": "m59",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 720,
    "availableSeats": 266
  },
  {
    "id": "s952",
    "movieId": "m2",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 230,
    "availableSeats": 278
  },
  {
    "id": "s953",
    "movieId": "m122",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 730,
    "availableSeats": 121
  },
  {
    "id": "s954",
    "movieId": "m128",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 173
  },
  {
    "id": "s955",
    "movieId": "m45",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 89
  },
  {
    "id": "s956",
    "movieId": "m45",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 150
  },
  {
    "id": "s957",
    "movieId": "m68",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 67
  },
  {
    "id": "s958",
    "movieId": "m45",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 590,
    "availableSeats": 188
  },
  {
    "id": "s959",
    "movieId": "m2",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 66
  },
  {
    "id": "s960",
    "movieId": "m116",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 600,
    "availableSeats": 60
  },
  {
    "id": "s961",
    "movieId": "m93",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 730,
    "availableSeats": 144
  },
  {
    "id": "s962",
    "movieId": "m39",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 800,
    "availableSeats": 223
  },
  {
    "id": "s963",
    "movieId": "m91",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 740,
    "availableSeats": 192
  },
  {
    "id": "s964",
    "movieId": "m93",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 197
  },
  {
    "id": "s965",
    "movieId": "m93",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 73
  },
  {
    "id": "s966",
    "movieId": "m91",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 71
  },
  {
    "id": "s967",
    "movieId": "m39",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 700,
    "availableSeats": 98
  },
  {
    "id": "s968",
    "movieId": "m117",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 275
  },
  {
    "id": "s969",
    "movieId": "m39",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 220
  },
  {
    "id": "s970",
    "movieId": "m22",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 690,
    "availableSeats": 93
  },
  {
    "id": "s971",
    "movieId": "m22",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 480,
    "availableSeats": 99
  },
  {
    "id": "s972",
    "movieId": "m104",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 138
  },
  {
    "id": "s973",
    "movieId": "m107",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 220
  },
  {
    "id": "s974",
    "movieId": "m107",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 202
  },
  {
    "id": "s975",
    "movieId": "m91",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 290,
    "availableSeats": 244
  },
  {
    "id": "s976",
    "movieId": "m140",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 690,
    "availableSeats": 141
  },
  {
    "id": "s977",
    "movieId": "m22",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 147
  },
  {
    "id": "s978",
    "movieId": "m91",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 104
  },
  {
    "id": "s979",
    "movieId": "m91",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 165
  },
  {
    "id": "s980",
    "movieId": "m107",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 255
  },
  {
    "id": "s981",
    "movieId": "m91",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 51
  },
  {
    "id": "s982",
    "movieId": "m142",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 160
  },
  {
    "id": "s983",
    "movieId": "m101",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 210,
    "availableSeats": 274
  },
  {
    "id": "s984",
    "movieId": "m108",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 70
  },
  {
    "id": "s985",
    "movieId": "m108",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 460,
    "availableSeats": 63
  },
  {
    "id": "s986",
    "movieId": "m142",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 450,
    "availableSeats": 225
  },
  {
    "id": "s987",
    "movieId": "m138",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 127
  },
  {
    "id": "s988",
    "movieId": "m108",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 700,
    "availableSeats": 272
  },
  {
    "id": "s989",
    "movieId": "m101",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 480,
    "availableSeats": 209
  },
  {
    "id": "s990",
    "movieId": "m138",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 84
  },
  {
    "id": "s991",
    "movieId": "m142",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 520,
    "availableSeats": 121
  },
  {
    "id": "s992",
    "movieId": "m108",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 410,
    "availableSeats": 252
  },
  {
    "id": "s993",
    "movieId": "m49",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 480,
    "availableSeats": 235
  },
  {
    "id": "s994",
    "movieId": "m54",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 135
  },
  {
    "id": "s995",
    "movieId": "m54",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 500,
    "availableSeats": 196
  },
  {
    "id": "s996",
    "movieId": "m49",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 290,
    "availableSeats": 131
  },
  {
    "id": "s997",
    "movieId": "m54",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 119
  },
  {
    "id": "s998",
    "movieId": "m35",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 145
  },
  {
    "id": "s999",
    "movieId": "m109",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 131
  },
  {
    "id": "s1000",
    "movieId": "m109",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 480,
    "availableSeats": 97
  },
  {
    "id": "s1001",
    "movieId": "m107",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 197
  },
  {
    "id": "s1002",
    "movieId": "m107",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 227
  },
  {
    "id": "s1003",
    "movieId": "m107",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 185
  },
  {
    "id": "s1004",
    "movieId": "m109",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 135
  },
  {
    "id": "s1005",
    "movieId": "m6",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 257
  },
  {
    "id": "s1006",
    "movieId": "m6",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 181
  },
  {
    "id": "s1007",
    "movieId": "m79",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 720,
    "availableSeats": 153
  },
  {
    "id": "s1008",
    "movieId": "m24",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 470,
    "availableSeats": 76
  },
  {
    "id": "s1009",
    "movieId": "m79",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 580,
    "availableSeats": 280
  },
  {
    "id": "s1010",
    "movieId": "m6",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 117
  },
  {
    "id": "s1011",
    "movieId": "m76",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 287
  },
  {
    "id": "s1012",
    "movieId": "m76",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 410,
    "availableSeats": 97
  },
  {
    "id": "s1013",
    "movieId": "m23",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 119
  },
  {
    "id": "s1014",
    "movieId": "m23",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 770,
    "availableSeats": 121
  },
  {
    "id": "s1015",
    "movieId": "m24",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 350,
    "availableSeats": 117
  },
  {
    "id": "s1016",
    "movieId": "m24",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 260,
    "availableSeats": 286
  },
  {
    "id": "s1017",
    "movieId": "m38",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 770,
    "availableSeats": 84
  },
  {
    "id": "s1018",
    "movieId": "m38",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 99
  },
  {
    "id": "s1019",
    "movieId": "m38",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 480,
    "availableSeats": 277
  },
  {
    "id": "s1020",
    "movieId": "m75",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 135
  },
  {
    "id": "s1021",
    "movieId": "m64",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 178
  },
  {
    "id": "s1022",
    "movieId": "m91",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 117
  },
  {
    "id": "s1023",
    "movieId": "m38",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 590,
    "availableSeats": 143
  },
  {
    "id": "s1024",
    "movieId": "m64",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 270,
    "availableSeats": 70
  },
  {
    "id": "s1025",
    "movieId": "m10",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 76
  },
  {
    "id": "s1026",
    "movieId": "m95",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 93
  },
  {
    "id": "s1027",
    "movieId": "m4",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 280,
    "availableSeats": 251
  },
  {
    "id": "s1028",
    "movieId": "m148",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 76
  },
  {
    "id": "s1029",
    "movieId": "m4",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 350,
    "availableSeats": 182
  },
  {
    "id": "s1030",
    "movieId": "m62",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 240,
    "availableSeats": 112
  },
  {
    "id": "s1031",
    "movieId": "m34",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 151
  },
  {
    "id": "s1032",
    "movieId": "m34",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 228
  },
  {
    "id": "s1033",
    "movieId": "m4",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 238
  },
  {
    "id": "s1034",
    "movieId": "m95",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 370,
    "availableSeats": 56
  },
  {
    "id": "s1035",
    "movieId": "m34",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 135
  },
  {
    "id": "s1036",
    "movieId": "m4",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 118
  },
  {
    "id": "s1037",
    "movieId": "m148",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 650,
    "availableSeats": 171
  },
  {
    "id": "s1038",
    "movieId": "m50",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 75
  },
  {
    "id": "s1039",
    "movieId": "m50",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 236
  },
  {
    "id": "s1040",
    "movieId": "m50",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 110
  },
  {
    "id": "s1041",
    "movieId": "m34",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 340,
    "availableSeats": 57
  },
  {
    "id": "s1042",
    "movieId": "m50",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 164
  },
  {
    "id": "s1043",
    "movieId": "m50",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 149
  },
  {
    "id": "s1044",
    "movieId": "m104",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 249
  },
  {
    "id": "s1045",
    "movieId": "m50",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 680,
    "availableSeats": 70
  },
  {
    "id": "s1046",
    "movieId": "m44",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 131
  },
  {
    "id": "s1047",
    "movieId": "m137",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 430,
    "availableSeats": 243
  },
  {
    "id": "s1048",
    "movieId": "m145",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 680,
    "availableSeats": 92
  },
  {
    "id": "s1049",
    "movieId": "m137",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 690,
    "availableSeats": 201
  },
  {
    "id": "s1050",
    "movieId": "m98",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 264
  },
  {
    "id": "s1051",
    "movieId": "m84",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 610,
    "availableSeats": 101
  },
  {
    "id": "s1052",
    "movieId": "m62",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 209
  },
  {
    "id": "s1053",
    "movieId": "m62",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 680,
    "availableSeats": 245
  },
  {
    "id": "s1054",
    "movieId": "m137",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 640,
    "availableSeats": 194
  },
  {
    "id": "s1055",
    "movieId": "m98",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 237
  },
  {
    "id": "s1056",
    "movieId": "m69",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 50
  },
  {
    "id": "s1057",
    "movieId": "m146",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 620,
    "availableSeats": 227
  },
  {
    "id": "s1058",
    "movieId": "m93",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 53
  },
  {
    "id": "s1059",
    "movieId": "m69",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 277
  },
  {
    "id": "s1060",
    "movieId": "m71",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 189
  },
  {
    "id": "s1061",
    "movieId": "m146",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 89
  },
  {
    "id": "s1062",
    "movieId": "m47",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 720,
    "availableSeats": 270
  },
  {
    "id": "s1063",
    "movieId": "m42",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 740,
    "availableSeats": 259
  },
  {
    "id": "s1064",
    "movieId": "m73",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 173
  },
  {
    "id": "s1065",
    "movieId": "m42",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 69
  },
  {
    "id": "s1066",
    "movieId": "m42",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 117
  },
  {
    "id": "s1067",
    "movieId": "m150",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 580,
    "availableSeats": 281
  },
  {
    "id": "s1068",
    "movieId": "m58",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 167
  },
  {
    "id": "s1069",
    "movieId": "m150",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 117
  },
  {
    "id": "s1070",
    "movieId": "m58",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 125
  },
  {
    "id": "s1071",
    "movieId": "m58",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 265
  },
  {
    "id": "s1072",
    "movieId": "m150",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 350,
    "availableSeats": 264
  },
  {
    "id": "s1073",
    "movieId": "m128",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 750,
    "availableSeats": 77
  },
  {
    "id": "s1074",
    "movieId": "m58",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 220
  },
  {
    "id": "s1075",
    "movieId": "m150",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 740,
    "availableSeats": 77
  },
  {
    "id": "s1076",
    "movieId": "m120",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 168
  },
  {
    "id": "s1077",
    "movieId": "m58",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 650,
    "availableSeats": 65
  },
  {
    "id": "s1078",
    "movieId": "m141",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 143
  },
  {
    "id": "s1079",
    "movieId": "m49",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 670,
    "availableSeats": 262
  },
  {
    "id": "s1080",
    "movieId": "m51",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 710,
    "availableSeats": 195
  },
  {
    "id": "s1081",
    "movieId": "m51",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 283
  },
  {
    "id": "s1082",
    "movieId": "m141",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 162
  },
  {
    "id": "s1083",
    "movieId": "m58",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 115
  },
  {
    "id": "s1084",
    "movieId": "m141",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 610,
    "availableSeats": 299
  },
  {
    "id": "s1085",
    "movieId": "m86",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 600,
    "availableSeats": 282
  },
  {
    "id": "s1086",
    "movieId": "m58",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 196
  },
  {
    "id": "s1087",
    "movieId": "m58",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 92
  },
  {
    "id": "s1088",
    "movieId": "m141",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 760,
    "availableSeats": 107
  },
  {
    "id": "s1089",
    "movieId": "m107",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 420,
    "availableSeats": 64
  },
  {
    "id": "s1090",
    "movieId": "m60",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 131
  },
  {
    "id": "s1091",
    "movieId": "m60",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 760,
    "availableSeats": 295
  },
  {
    "id": "s1092",
    "movieId": "m29",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 55
  },
  {
    "id": "s1093",
    "movieId": "m29",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 610,
    "availableSeats": 144
  },
  {
    "id": "s1094",
    "movieId": "m111",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 278
  },
  {
    "id": "s1095",
    "movieId": "m54",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 179
  },
  {
    "id": "s1096",
    "movieId": "m78",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 209
  },
  {
    "id": "s1097",
    "movieId": "m38",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 670,
    "availableSeats": 89
  },
  {
    "id": "s1098",
    "movieId": "m54",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 350,
    "availableSeats": 255
  },
  {
    "id": "s1099",
    "movieId": "m84",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 63
  },
  {
    "id": "s1100",
    "movieId": "m84",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 220
  },
  {
    "id": "s1101",
    "movieId": "m38",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 243
  },
  {
    "id": "s1102",
    "movieId": "m78",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 271
  },
  {
    "id": "s1103",
    "movieId": "m66",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 300,
    "availableSeats": 73
  },
  {
    "id": "s1104",
    "movieId": "m66",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 730,
    "availableSeats": 149
  },
  {
    "id": "s1105",
    "movieId": "m88",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 290,
    "availableSeats": 272
  },
  {
    "id": "s1106",
    "movieId": "m88",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 430,
    "availableSeats": 159
  },
  {
    "id": "s1107",
    "movieId": "m88",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 242
  },
  {
    "id": "s1108",
    "movieId": "m86",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 560,
    "availableSeats": 163
  },
  {
    "id": "s1109",
    "movieId": "m30",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 220,
    "availableSeats": 262
  },
  {
    "id": "s1110",
    "movieId": "m30",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 193
  },
  {
    "id": "s1111",
    "movieId": "m30",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 291
  },
  {
    "id": "s1112",
    "movieId": "m86",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 460,
    "availableSeats": 257
  },
  {
    "id": "s1113",
    "movieId": "m86",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 152
  },
  {
    "id": "s1114",
    "movieId": "m32",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 590,
    "availableSeats": 130
  },
  {
    "id": "s1115",
    "movieId": "m32",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 780,
    "availableSeats": 295
  },
  {
    "id": "s1116",
    "movieId": "m50",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 350,
    "availableSeats": 275
  },
  {
    "id": "s1117",
    "movieId": "m123",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 470,
    "availableSeats": 58
  },
  {
    "id": "s1118",
    "movieId": "m32",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 590,
    "availableSeats": 183
  },
  {
    "id": "s1119",
    "movieId": "m17",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 232
  },
  {
    "id": "s1120",
    "movieId": "m32",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 50
  },
  {
    "id": "s1121",
    "movieId": "m39",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 52
  },
  {
    "id": "s1122",
    "movieId": "m39",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 410,
    "availableSeats": 291
  },
  {
    "id": "s1123",
    "movieId": "m17",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 175
  },
  {
    "id": "s1124",
    "movieId": "m39",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 320,
    "availableSeats": 259
  },
  {
    "id": "s1125",
    "movieId": "m145",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 162
  },
  {
    "id": "s1126",
    "movieId": "m7",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 390,
    "availableSeats": 176
  },
  {
    "id": "s1127",
    "movieId": "m145",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 780,
    "availableSeats": 142
  },
  {
    "id": "s1128",
    "movieId": "m7",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 760,
    "availableSeats": 166
  },
  {
    "id": "s1129",
    "movieId": "m13",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 265
  },
  {
    "id": "s1130",
    "movieId": "m7",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 266
  },
  {
    "id": "s1131",
    "movieId": "m84",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 232
  },
  {
    "id": "s1132",
    "movieId": "m121",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 142
  },
  {
    "id": "s1133",
    "movieId": "m139",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 440,
    "availableSeats": 237
  },
  {
    "id": "s1134",
    "movieId": "m121",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 410,
    "availableSeats": 138
  },
  {
    "id": "s1135",
    "movieId": "m48",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 199
  },
  {
    "id": "s1136",
    "movieId": "m100",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 200,
    "availableSeats": 187
  },
  {
    "id": "s1137",
    "movieId": "m139",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 240
  },
  {
    "id": "s1138",
    "movieId": "m48",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 183
  },
  {
    "id": "s1139",
    "movieId": "m107",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 123
  },
  {
    "id": "s1140",
    "movieId": "m121",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 680,
    "availableSeats": 50
  },
  {
    "id": "s1141",
    "movieId": "m121",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 200,
    "availableSeats": 283
  },
  {
    "id": "s1142",
    "movieId": "m121",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 108
  },
  {
    "id": "s1143",
    "movieId": "m121",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 218
  },
  {
    "id": "s1144",
    "movieId": "m21",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 291
  },
  {
    "id": "s1145",
    "movieId": "m67",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 163
  },
  {
    "id": "s1146",
    "movieId": "m15",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 260
  },
  {
    "id": "s1147",
    "movieId": "m128",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 97
  },
  {
    "id": "s1148",
    "movieId": "m21",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 223
  },
  {
    "id": "s1149",
    "movieId": "m85",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 235
  },
  {
    "id": "s1150",
    "movieId": "m15",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 520,
    "availableSeats": 166
  },
  {
    "id": "s1151",
    "movieId": "m15",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 390,
    "availableSeats": 129
  },
  {
    "id": "s1152",
    "movieId": "m118",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 610,
    "availableSeats": 277
  },
  {
    "id": "s1153",
    "movieId": "m143",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 117
  },
  {
    "id": "s1154",
    "movieId": "m118",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 620,
    "availableSeats": 205
  },
  {
    "id": "s1155",
    "movieId": "m118",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 430,
    "availableSeats": 56
  },
  {
    "id": "s1156",
    "movieId": "m143",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 710,
    "availableSeats": 88
  },
  {
    "id": "s1157",
    "movieId": "m143",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 186
  },
  {
    "id": "s1158",
    "movieId": "m92",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 320,
    "availableSeats": 258
  },
  {
    "id": "s1159",
    "movieId": "m92",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 160
  },
  {
    "id": "s1160",
    "movieId": "m92",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 300
  },
  {
    "id": "s1161",
    "movieId": "m118",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 220,
    "availableSeats": 228
  },
  {
    "id": "s1162",
    "movieId": "m16",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 390,
    "availableSeats": 298
  },
  {
    "id": "s1163",
    "movieId": "m143",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 56
  },
  {
    "id": "s1164",
    "movieId": "m11",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 750,
    "availableSeats": 290
  },
  {
    "id": "s1165",
    "movieId": "m16",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 126
  },
  {
    "id": "s1166",
    "movieId": "m11",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 76
  },
  {
    "id": "s1167",
    "movieId": "m16",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 259
  },
  {
    "id": "s1168",
    "movieId": "m143",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 530,
    "availableSeats": 277
  },
  {
    "id": "s1169",
    "movieId": "m16",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 270,
    "availableSeats": 63
  },
  {
    "id": "s1170",
    "movieId": "m131",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 260,
    "availableSeats": 106
  },
  {
    "id": "s1171",
    "movieId": "m134",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 250,
    "availableSeats": 201
  },
  {
    "id": "s1172",
    "movieId": "m134",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 145
  },
  {
    "id": "s1173",
    "movieId": "m22",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 280
  },
  {
    "id": "s1174",
    "movieId": "m27",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 70
  },
  {
    "id": "s1175",
    "movieId": "m27",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 440,
    "availableSeats": 282
  },
  {
    "id": "s1176",
    "movieId": "m22",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 238
  },
  {
    "id": "s1177",
    "movieId": "m144",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 300,
    "availableSeats": 146
  },
  {
    "id": "s1178",
    "movieId": "m22",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 128
  },
  {
    "id": "s1179",
    "movieId": "m27",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 186
  },
  {
    "id": "s1180",
    "movieId": "m134",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 137
  },
  {
    "id": "s1181",
    "movieId": "m22",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 147
  },
  {
    "id": "s1182",
    "movieId": "m68",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 620,
    "availableSeats": 156
  },
  {
    "id": "s1183",
    "movieId": "m41",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 135
  },
  {
    "id": "s1184",
    "movieId": "m68",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 211
  },
  {
    "id": "s1185",
    "movieId": "m41",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 124
  },
  {
    "id": "s1186",
    "movieId": "m19",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 220
  },
  {
    "id": "s1187",
    "movieId": "m92",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 260
  },
  {
    "id": "s1188",
    "movieId": "m92",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 290
  },
  {
    "id": "s1189",
    "movieId": "m41",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 127
  },
  {
    "id": "s1190",
    "movieId": "m76",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 99
  },
  {
    "id": "s1191",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 272
  },
  {
    "id": "s1192",
    "movieId": "m117",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 520,
    "availableSeats": 79
  },
  {
    "id": "s1193",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 130
  },
  {
    "id": "s1194",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 98
  },
  {
    "id": "s1195",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 299
  },
  {
    "id": "s1196",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 221
  },
  {
    "id": "s1197",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 253
  },
  {
    "id": "s1198",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 90
  },
  {
    "id": "s1199",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 330,
    "availableSeats": 86
  },
  {
    "id": "s1200",
    "movieId": "m134",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 760,
    "availableSeats": 139
  },
  {
    "id": "s1201",
    "movieId": "m9",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 590,
    "availableSeats": 299
  },
  {
    "id": "s1202",
    "movieId": "m110",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 460,
    "availableSeats": 298
  },
  {
    "id": "s1203",
    "movieId": "m9",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 276
  },
  {
    "id": "s1204",
    "movieId": "m136",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 600,
    "availableSeats": 298
  },
  {
    "id": "s1205",
    "movieId": "m67",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 350,
    "availableSeats": 64
  },
  {
    "id": "s1206",
    "movieId": "m85",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 670,
    "availableSeats": 129
  },
  {
    "id": "s1207",
    "movieId": "m133",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 99
  },
  {
    "id": "s1208",
    "movieId": "m40",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 220,
    "availableSeats": 183
  },
  {
    "id": "s1209",
    "movieId": "m97",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 60
  },
  {
    "id": "s1210",
    "movieId": "m40",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 260,
    "availableSeats": 182
  },
  {
    "id": "s1211",
    "movieId": "m97",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 97
  },
  {
    "id": "s1212",
    "movieId": "m126",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 720,
    "availableSeats": 246
  },
  {
    "id": "s1213",
    "movieId": "m77",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 153
  },
  {
    "id": "s1214",
    "movieId": "m77",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 350,
    "availableSeats": 152
  },
  {
    "id": "s1215",
    "movieId": "m99",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 590,
    "availableSeats": 82
  },
  {
    "id": "s1216",
    "movieId": "m81",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 200,
    "availableSeats": 233
  },
  {
    "id": "s1217",
    "movieId": "m58",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 264
  },
  {
    "id": "s1218",
    "movieId": "m58",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 65
  },
  {
    "id": "s1219",
    "movieId": "m25",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 127
  },
  {
    "id": "s1220",
    "movieId": "m77",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 237
  },
  {
    "id": "s1221",
    "movieId": "m77",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 340,
    "availableSeats": 100
  },
  {
    "id": "s1222",
    "movieId": "m77",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 237
  },
  {
    "id": "s1223",
    "movieId": "m122",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 550,
    "availableSeats": 112
  },
  {
    "id": "s1224",
    "movieId": "m116",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 238
  },
  {
    "id": "s1225",
    "movieId": "m116",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 800,
    "availableSeats": 239
  },
  {
    "id": "s1226",
    "movieId": "m63",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 164
  },
  {
    "id": "s1227",
    "movieId": "m137",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 179
  },
  {
    "id": "s1228",
    "movieId": "m122",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 550,
    "availableSeats": 63
  },
  {
    "id": "s1229",
    "movieId": "m126",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 460,
    "availableSeats": 62
  },
  {
    "id": "s1230",
    "movieId": "m116",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 660,
    "availableSeats": 84
  },
  {
    "id": "s1231",
    "movieId": "m63",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 198
  },
  {
    "id": "s1232",
    "movieId": "m137",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 710,
    "availableSeats": 129
  },
  {
    "id": "s1233",
    "movieId": "m116",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 258
  },
  {
    "id": "s1234",
    "movieId": "m83",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 88
  },
  {
    "id": "s1235",
    "movieId": "m94",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 225
  },
  {
    "id": "s1236",
    "movieId": "m8",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 126
  },
  {
    "id": "s1237",
    "movieId": "m2",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 132
  },
  {
    "id": "s1238",
    "movieId": "m8",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 107
  },
  {
    "id": "s1239",
    "movieId": "m94",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 270,
    "availableSeats": 172
  },
  {
    "id": "s1240",
    "movieId": "m2",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 96
  },
  {
    "id": "s1241",
    "movieId": "m8",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 62
  },
  {
    "id": "s1242",
    "movieId": "m83",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 620,
    "availableSeats": 184
  },
  {
    "id": "s1243",
    "movieId": "m94",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 440,
    "availableSeats": 290
  },
  {
    "id": "s1244",
    "movieId": "m6",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 580,
    "availableSeats": 275
  },
  {
    "id": "s1245",
    "movieId": "m14",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 72
  },
  {
    "id": "s1246",
    "movieId": "m6",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 107
  },
  {
    "id": "s1247",
    "movieId": "m6",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 235
  },
  {
    "id": "s1248",
    "movieId": "m126",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 450,
    "availableSeats": 91
  },
  {
    "id": "s1249",
    "movieId": "m14",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 205
  },
  {
    "id": "s1250",
    "movieId": "m126",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 146
  },
  {
    "id": "s1251",
    "movieId": "m124",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 260,
    "availableSeats": 126
  },
  {
    "id": "s1252",
    "movieId": "m49",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 680,
    "availableSeats": 278
  },
  {
    "id": "s1253",
    "movieId": "m105",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 65
  },
  {
    "id": "s1254",
    "movieId": "m105",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 430,
    "availableSeats": 241
  },
  {
    "id": "s1255",
    "movieId": "m146",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 300,
    "availableSeats": 71
  },
  {
    "id": "s1256",
    "movieId": "m49",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 210,
    "availableSeats": 228
  },
  {
    "id": "s1257",
    "movieId": "m146",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 208
  },
  {
    "id": "s1258",
    "movieId": "m84",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 105
  },
  {
    "id": "s1259",
    "movieId": "m24",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 257
  },
  {
    "id": "s1260",
    "movieId": "m68",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 280,
    "availableSeats": 168
  },
  {
    "id": "s1261",
    "movieId": "m24",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 230,
    "availableSeats": 151
  },
  {
    "id": "s1262",
    "movieId": "m76",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 191
  },
  {
    "id": "s1263",
    "movieId": "m76",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 640,
    "availableSeats": 105
  },
  {
    "id": "s1264",
    "movieId": "m84",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 223
  },
  {
    "id": "s1265",
    "movieId": "m84",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 270,
    "availableSeats": 251
  },
  {
    "id": "s1266",
    "movieId": "m24",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 300,
    "availableSeats": 197
  },
  {
    "id": "s1267",
    "movieId": "m68",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 161
  },
  {
    "id": "s1268",
    "movieId": "m24",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 280,
    "availableSeats": 63
  },
  {
    "id": "s1269",
    "movieId": "m125",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 298
  },
  {
    "id": "s1270",
    "movieId": "m90",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 182
  },
  {
    "id": "s1271",
    "movieId": "m28",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 230,
    "availableSeats": 78
  },
  {
    "id": "s1272",
    "movieId": "m28",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 480,
    "availableSeats": 268
  },
  {
    "id": "s1273",
    "movieId": "m28",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 400,
    "availableSeats": 240
  },
  {
    "id": "s1274",
    "movieId": "m73",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 217
  },
  {
    "id": "s1275",
    "movieId": "m73",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 270,
    "availableSeats": 227
  },
  {
    "id": "s1276",
    "movieId": "m79",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 233
  },
  {
    "id": "s1277",
    "movieId": "m90",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 670,
    "availableSeats": 123
  },
  {
    "id": "s1278",
    "movieId": "m73",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 320,
    "availableSeats": 252
  },
  {
    "id": "s1279",
    "movieId": "m131",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 620,
    "availableSeats": 242
  },
  {
    "id": "s1280",
    "movieId": "m131",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 138
  },
  {
    "id": "s1281",
    "movieId": "m11",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 490,
    "availableSeats": 93
  },
  {
    "id": "s1282",
    "movieId": "m7",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 142
  },
  {
    "id": "s1283",
    "movieId": "m11",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 710,
    "availableSeats": 79
  },
  {
    "id": "s1284",
    "movieId": "m7",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 287
  },
  {
    "id": "s1285",
    "movieId": "m131",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 200,
    "availableSeats": 193
  },
  {
    "id": "s1286",
    "movieId": "m7",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 118
  },
  {
    "id": "s1287",
    "movieId": "m7",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 190
  },
  {
    "id": "s1288",
    "movieId": "m131",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 700,
    "availableSeats": 269
  },
  {
    "id": "s1289",
    "movieId": "m11",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 182
  },
  {
    "id": "s1290",
    "movieId": "m22",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 170
  },
  {
    "id": "s1291",
    "movieId": "m61",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 600,
    "availableSeats": 298
  },
  {
    "id": "s1292",
    "movieId": "m101",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 690,
    "availableSeats": 276
  },
  {
    "id": "s1293",
    "movieId": "m61",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 620,
    "availableSeats": 163
  },
  {
    "id": "s1294",
    "movieId": "m101",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 230,
    "availableSeats": 74
  },
  {
    "id": "s1295",
    "movieId": "m101",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 261
  },
  {
    "id": "s1296",
    "movieId": "m61",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 620,
    "availableSeats": 151
  },
  {
    "id": "s1297",
    "movieId": "m62",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 273
  },
  {
    "id": "s1298",
    "movieId": "m55",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 470,
    "availableSeats": 138
  },
  {
    "id": "s1299",
    "movieId": "m123",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 290,
    "availableSeats": 119
  },
  {
    "id": "s1300",
    "movieId": "m49",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 200,
    "availableSeats": 103
  },
  {
    "id": "s1301",
    "movieId": "m49",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 102
  },
  {
    "id": "s1302",
    "movieId": "m55",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 280,
    "availableSeats": 214
  },
  {
    "id": "s1303",
    "movieId": "m123",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 199
  },
  {
    "id": "s1304",
    "movieId": "m55",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 800,
    "availableSeats": 142
  },
  {
    "id": "s1305",
    "movieId": "m55",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 150
  },
  {
    "id": "s1306",
    "movieId": "m53",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 350,
    "availableSeats": 205
  },
  {
    "id": "s1307",
    "movieId": "m53",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 230,
    "availableSeats": 256
  },
  {
    "id": "s1308",
    "movieId": "m19",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 740,
    "availableSeats": 53
  },
  {
    "id": "s1309",
    "movieId": "m68",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 800,
    "availableSeats": 102
  },
  {
    "id": "s1310",
    "movieId": "m2",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 186
  },
  {
    "id": "s1311",
    "movieId": "m53",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 170
  },
  {
    "id": "s1312",
    "movieId": "m11",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 600,
    "availableSeats": 132
  },
  {
    "id": "s1313",
    "movieId": "m11",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 265
  },
  {
    "id": "s1314",
    "movieId": "m11",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 277
  }
];

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
