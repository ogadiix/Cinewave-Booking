import type { Movie, Theatre, Show, User, Booking, Review, PromoCode, SnackItem } from '../types';

export const mockUsers: User[] = [
  { id: 'u1', name: 'Demo Customer', email: 'customer@cinewave.com', phone: '9876543210', role: 'customer', status: 'active', createdDate: '2026-01-01' },
  { id: 'u2', name: 'Demo Staff', email: 'staff@cinewave.com', phone: '9876543211', role: 'staff', status: 'active', createdDate: '2026-01-01' },
  { id: 'u3', name: 'Demo Admin', email: 'admin@cinewave.com', phone: '9876543212', role: 'admin', status: 'active', createdDate: '2026-01-01' },
];

export const mockMovies: Movie[] = [
  {
    "id": "m1",
    "type": "movie",
    "title": "Kalki 2898 AD",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Kalki 2898 AD.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "103 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-21"
  },
  {
    "id": "m2",
    "type": "movie",
    "title": "Jawan",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Jawan.",
    "genre": "Action, Sci-Fi",
    "language": "Kannada",
    "duration": "184 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-18"
  },
  {
    "id": "m3",
    "type": "movie",
    "title": "Animal",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Animal.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "124 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-16"
  },
  {
    "id": "m4",
    "type": "movie",
    "title": "Leo",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Leo.",
    "genre": "Biography, Drama, History",
    "language": "Hindi",
    "duration": "187 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-07"
  },
  {
    "id": "m5",
    "type": "movie",
    "title": "Oppenheimer",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Oppenheimer.",
    "genre": "Biography, Drama, History",
    "language": "Hindi, English",
    "duration": "206 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-06"
  },
  {
    "id": "m6",
    "type": "movie",
    "title": "Salaar",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Salaar.",
    "genre": "Biography, Drama, History",
    "language": "English",
    "duration": "162 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-18"
  },
  {
    "id": "m7",
    "type": "movie",
    "title": "Dune: Part Two",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dune: Part Two.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi",
    "duration": "137 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-17"
  },
  {
    "id": "m8",
    "type": "movie",
    "title": "Fighter",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fighter.",
    "genre": "Comedy, Drama",
    "language": "Tamil, Telugu",
    "duration": "112 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-22"
  },
  {
    "id": "m9",
    "type": "movie",
    "title": "Stree 2",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Stree 2.",
    "genre": "Fantasy, Adventure",
    "language": "Tamil, Telugu",
    "duration": "198 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-10"
  },
  {
    "id": "m10",
    "type": "movie",
    "title": "Deadpool & Wolverine",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Deadpool & Wolverine.",
    "genre": "Action, Sci-Fi",
    "language": "Telugu",
    "duration": "142 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-21"
  },
  {
    "id": "m11",
    "type": "movie",
    "title": "Lost Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Dimension.",
    "genre": "Action, Thriller",
    "language": "Malayalam",
    "duration": "101 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-17"
  },
  {
    "id": "m12",
    "type": "movie",
    "title": "Rise of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Shadow.",
    "genre": "Thriller, Mystery",
    "language": "Kannada",
    "duration": "173 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-15"
  },
  {
    "id": "m13",
    "type": "movie",
    "title": "Silent Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Assassin.",
    "genre": "Romance, Drama",
    "language": "Hindi, English",
    "duration": "189 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-28"
  },
  {
    "id": "m14",
    "type": "movie",
    "title": "Dark Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Legacy.",
    "genre": "Comedy, Horror",
    "language": "English",
    "duration": "101 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-11"
  },
  {
    "id": "m15",
    "type": "movie",
    "title": "The Last Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Quest.",
    "genre": "Thriller, Mystery",
    "language": "Telugu",
    "duration": "147 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-17"
  },
  {
    "id": "m16",
    "type": "movie",
    "title": "The Last Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Chronicles.",
    "genre": "Action, Thriller",
    "language": "Telugu",
    "duration": "173 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-18"
  },
  {
    "id": "m17",
    "type": "movie",
    "title": "Silent Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Shadow.",
    "genre": "Horror, Thriller",
    "language": "Hindi, English",
    "duration": "121 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-09"
  },
  {
    "id": "m18",
    "type": "movie",
    "title": "Return of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Spy.",
    "genre": "Fantasy, Adventure",
    "language": "Tamil",
    "duration": "159 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-28"
  },
  {
    "id": "m19",
    "type": "movie",
    "title": "Rise of Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Knight.",
    "genre": "Comedy, Horror",
    "language": "Kannada",
    "duration": "210 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-13"
  },
  {
    "id": "m20",
    "type": "movie",
    "title": "Golden Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Chronicles.",
    "genre": "Thriller, Mystery",
    "language": "Kannada",
    "duration": "180 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-15"
  },
  {
    "id": "m21",
    "type": "movie",
    "title": "Golden Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Ghost.",
    "genre": "Romance, Drama",
    "language": "Malayalam",
    "duration": "138 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-22"
  },
  {
    "id": "m22",
    "type": "movie",
    "title": "Secret of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Assassin.",
    "genre": "Romance, Drama",
    "language": "Tamil",
    "duration": "127 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-12"
  },
  {
    "id": "m23",
    "type": "movie",
    "title": "Return of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Shadow.",
    "genre": "Comedy, Drama",
    "language": "Tamil, Telugu",
    "duration": "169 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-28"
  },
  {
    "id": "m24",
    "type": "movie",
    "title": "Hidden Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Assassin.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil",
    "duration": "201 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-27"
  },
  {
    "id": "m25",
    "type": "movie",
    "title": "Hidden Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Dimension.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "182 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-18"
  },
  {
    "id": "m26",
    "type": "movie",
    "title": "Hidden Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Hero.",
    "genre": "Action, Crime, Drama",
    "language": "Telugu, Hindi",
    "duration": "194 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-11"
  },
  {
    "id": "m27",
    "type": "movie",
    "title": "Dark Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Ghost.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu",
    "duration": "209 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-04"
  },
  {
    "id": "m28",
    "type": "movie",
    "title": "Golden Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Dawn.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "171 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-07"
  },
  {
    "id": "m29",
    "type": "movie",
    "title": "Eternal Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Hero.",
    "genre": "Fantasy, Adventure",
    "language": "Malayalam",
    "duration": "191 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-14"
  },
  {
    "id": "m30",
    "type": "movie",
    "title": "Crimson Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Ghost.",
    "genre": "Horror, Thriller",
    "language": "Tamil, Telugu",
    "duration": "208 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-19"
  },
  {
    "id": "m31",
    "type": "movie",
    "title": "Legend of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Shadow.",
    "genre": "Animation, Family",
    "language": "Malayalam",
    "duration": "148 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-17"
  },
  {
    "id": "m32",
    "type": "movie",
    "title": "Rise of Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Dimension.",
    "genre": "Romance, Drama",
    "language": "Tamil, Telugu",
    "duration": "181 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-04"
  },
  {
    "id": "m33",
    "type": "movie",
    "title": "Phantom Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Hero.",
    "genre": "Thriller, Mystery",
    "language": "Hindi, English",
    "duration": "179 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-02"
  },
  {
    "id": "m34",
    "type": "movie",
    "title": "Dark Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Spy.",
    "genre": "Animation, Family",
    "language": "Malayalam",
    "duration": "139 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-02"
  },
  {
    "id": "m35",
    "type": "movie",
    "title": "Midnight Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Hero.",
    "genre": "Comedy, Horror",
    "language": "Tamil, Telugu",
    "duration": "147 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-20"
  },
  {
    "id": "m36",
    "type": "movie",
    "title": "Fall of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Shadow.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "110 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-05"
  },
  {
    "id": "m37",
    "type": "movie",
    "title": "The Last Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Dimension.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "202 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-17"
  },
  {
    "id": "m38",
    "type": "movie",
    "title": "Eternal Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Warrior.",
    "genre": "Comedy, Horror",
    "language": "Telugu, Hindi",
    "duration": "127 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-19"
  },
  {
    "id": "m39",
    "type": "movie",
    "title": "Golden Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Quest.",
    "genre": "Action, Sci-Fi",
    "language": "Malayalam",
    "duration": "124 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-19"
  },
  {
    "id": "m40",
    "type": "movie",
    "title": "Hidden Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Empire.",
    "genre": "Comedy, Horror",
    "language": "Malayalam",
    "duration": "126 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-23"
  },
  {
    "id": "m41",
    "type": "movie",
    "title": "The Last Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Kingdom.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "102 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-08"
  },
  {
    "id": "m42",
    "type": "movie",
    "title": "Eternal Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Dimension.",
    "genre": "Action, Crime, Drama",
    "language": "Malayalam",
    "duration": "145 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-23"
  },
  {
    "id": "m43",
    "type": "movie",
    "title": "Dark Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Empire.",
    "genre": "Comedy, Horror",
    "language": "English",
    "duration": "202 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-10"
  },
  {
    "id": "m44",
    "type": "movie",
    "title": "Phantom Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Warrior.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "112 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-12"
  },
  {
    "id": "m45",
    "type": "movie",
    "title": "Phantom Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Ghost.",
    "genre": "Comedy, Horror",
    "language": "Hindi",
    "duration": "199 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-20"
  },
  {
    "id": "m46",
    "type": "movie",
    "title": "Fall of Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Dimension.",
    "genre": "Horror, Thriller",
    "language": "Malayalam",
    "duration": "142 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-10"
  },
  {
    "id": "m47",
    "type": "movie",
    "title": "Return of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of City.",
    "genre": "Action, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "156 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-28"
  },
  {
    "id": "m48",
    "type": "movie",
    "title": "The Last Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Dawn.",
    "genre": "Romance, Drama",
    "language": "Kannada",
    "duration": "158 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-11"
  },
  {
    "id": "m49",
    "type": "movie",
    "title": "Fall of Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Empire.",
    "genre": "Comedy, Horror",
    "language": "Hindi",
    "duration": "175 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-02"
  },
  {
    "id": "m50",
    "type": "movie",
    "title": "Golden Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Dimension.",
    "genre": "Horror, Thriller",
    "language": "Telugu",
    "duration": "183 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-06"
  },
  {
    "id": "m51",
    "type": "movie",
    "title": "Legend of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Legacy.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "115 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-25"
  },
  {
    "id": "m52",
    "type": "movie",
    "title": "Eternal Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Shadow.",
    "genre": "Action, Crime, Drama",
    "language": "Hindi, English",
    "duration": "119 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-13"
  },
  {
    "id": "m53",
    "type": "movie",
    "title": "Golden Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Quest.",
    "genre": "Romance, Drama",
    "language": "Tamil",
    "duration": "201 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-13"
  },
  {
    "id": "m54",
    "type": "movie",
    "title": "Rise of Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Quest.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi",
    "duration": "137 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-17"
  },
  {
    "id": "m55",
    "type": "movie",
    "title": "Crimson Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Quest.",
    "genre": "Horror, Thriller",
    "language": "Kannada",
    "duration": "104 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-18"
  },
  {
    "id": "m56",
    "type": "movie",
    "title": "Hidden Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Shadow.",
    "genre": "Comedy, Horror",
    "language": "Telugu, Hindi",
    "duration": "159 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-22"
  },
  {
    "id": "m57",
    "type": "movie",
    "title": "Return of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Shadow.",
    "genre": "Thriller, Mystery",
    "language": "Tamil",
    "duration": "108 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-09"
  },
  {
    "id": "m58",
    "type": "movie",
    "title": "Legend of Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Chronicles.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "147 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-03"
  },
  {
    "id": "m59",
    "type": "movie",
    "title": "Dark Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Knight.",
    "genre": "Romance, Drama",
    "language": "Tamil, Telugu",
    "duration": "205 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-03"
  },
  {
    "id": "m60",
    "type": "movie",
    "title": "Silent Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Knight.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "115 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-14"
  },
  {
    "id": "m61",
    "type": "movie",
    "title": "Silent Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Quest.",
    "genre": "Fantasy, Adventure",
    "language": "Malayalam",
    "duration": "195 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-21"
  },
  {
    "id": "m62",
    "type": "movie",
    "title": "Golden Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Warrior.",
    "genre": "Animation, Family",
    "language": "Hindi, English",
    "duration": "134 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-23"
  },
  {
    "id": "m63",
    "type": "movie",
    "title": "Golden Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Shadow.",
    "genre": "Biography, Drama, History",
    "language": "Tamil",
    "duration": "117 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-16"
  },
  {
    "id": "m64",
    "type": "movie",
    "title": "Secret of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of City.",
    "genre": "Romance, Drama",
    "language": "Telugu",
    "duration": "185 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-18"
  },
  {
    "id": "m65",
    "type": "movie",
    "title": "Golden Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Dimension.",
    "genre": "Action, Thriller",
    "language": "Telugu",
    "duration": "201 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-24"
  },
  {
    "id": "m66",
    "type": "movie",
    "title": "Lost City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost City.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi",
    "duration": "116 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-04"
  },
  {
    "id": "m67",
    "type": "movie",
    "title": "Legend of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Spy.",
    "genre": "Comedy, Drama",
    "language": "Telugu",
    "duration": "113 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-17"
  },
  {
    "id": "m68",
    "type": "movie",
    "title": "Crimson Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Kingdom.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "135 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-02"
  },
  {
    "id": "m69",
    "type": "movie",
    "title": "Phantom Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Ghost.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "124 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-05"
  },
  {
    "id": "m70",
    "type": "movie",
    "title": "Hidden Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Hero.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "196 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-19"
  },
  {
    "id": "m71",
    "type": "movie",
    "title": "Lost Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Legacy.",
    "genre": "Animation, Family",
    "language": "Kannada",
    "duration": "131 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-23"
  },
  {
    "id": "m72",
    "type": "movie",
    "title": "The Last Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Empire.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Kannada",
    "duration": "131 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-02"
  },
  {
    "id": "m73",
    "type": "movie",
    "title": "Midnight Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Chronicles.",
    "genre": "Action, Thriller",
    "language": "English",
    "duration": "194 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-07"
  },
  {
    "id": "m74",
    "type": "movie",
    "title": "Silent Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Dawn.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "171 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-04"
  },
  {
    "id": "m75",
    "type": "movie",
    "title": "Dark Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Dimension.",
    "genre": "Animation, Family",
    "language": "Tamil",
    "duration": "132 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-21"
  },
  {
    "id": "m76",
    "type": "movie",
    "title": "Silent Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Shadow.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "144 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-25"
  },
  {
    "id": "m77",
    "type": "movie",
    "title": "Phantom Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Assassin.",
    "genre": "Animation, Family",
    "language": "Hindi",
    "duration": "162 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-07"
  },
  {
    "id": "m78",
    "type": "movie",
    "title": "Silent Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Warrior.",
    "genre": "Comedy, Drama",
    "language": "Telugu, Hindi",
    "duration": "178 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-15"
  },
  {
    "id": "m79",
    "type": "movie",
    "title": "Eternal Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Dawn.",
    "genre": "Horror, Thriller",
    "language": "Malayalam",
    "duration": "198 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-14"
  },
  {
    "id": "m80",
    "type": "movie",
    "title": "Silent Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Warrior.",
    "genre": "Action, Thriller",
    "language": "Tamil, Telugu",
    "duration": "100 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-23"
  },
  {
    "id": "m81",
    "type": "movie",
    "title": "Crimson Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Chronicles.",
    "genre": "Action, Thriller",
    "language": "Tamil, Telugu",
    "duration": "157 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-11"
  },
  {
    "id": "m82",
    "type": "movie",
    "title": "Secret of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Assassin.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "171 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-04"
  },
  {
    "id": "m83",
    "type": "movie",
    "title": "Golden Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Dawn.",
    "genre": "Comedy, Drama",
    "language": "Hindi",
    "duration": "144 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-17"
  },
  {
    "id": "m84",
    "type": "movie",
    "title": "Legend of Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Empire.",
    "genre": "Comedy, Horror",
    "language": "Malayalam",
    "duration": "120 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-25"
  },
  {
    "id": "m85",
    "type": "movie",
    "title": "Crimson Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Dimension.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "195 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-24"
  },
  {
    "id": "m86",
    "type": "movie",
    "title": "Eternal Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Dawn.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "177 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-12"
  },
  {
    "id": "m87",
    "type": "movie",
    "title": "Legend of Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Hero.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "143 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-16"
  },
  {
    "id": "m88",
    "type": "movie",
    "title": "Crimson Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Dawn.",
    "genre": "Biography, Drama, History",
    "language": "Telugu, Hindi",
    "duration": "115 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-16"
  },
  {
    "id": "m89",
    "type": "movie",
    "title": "Midnight Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Kingdom.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "154 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-09"
  },
  {
    "id": "m90",
    "type": "movie",
    "title": "Dark Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Dark Spy.",
    "genre": "Action, Thriller",
    "language": "Hindi",
    "duration": "110 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-09"
  },
  {
    "id": "m91",
    "type": "movie",
    "title": "Eternal City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal City.",
    "genre": "Animation, Family",
    "language": "Kannada",
    "duration": "125 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-15"
  },
  {
    "id": "m92",
    "type": "movie",
    "title": "Silent Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Assassin.",
    "genre": "Comedy, Drama",
    "language": "Hindi, English",
    "duration": "106 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-05"
  },
  {
    "id": "m93",
    "type": "movie",
    "title": "Hidden Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Dimension.",
    "genre": "Comedy, Drama",
    "language": "Kannada",
    "duration": "136 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-28"
  },
  {
    "id": "m94",
    "type": "movie",
    "title": "Lost Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Kingdom.",
    "genre": "Comedy, Drama",
    "language": "Kannada",
    "duration": "143 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-04"
  },
  {
    "id": "m95",
    "type": "movie",
    "title": "Crimson Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Warrior.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu",
    "duration": "116 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-28"
  },
  {
    "id": "m96",
    "type": "movie",
    "title": "Eternal Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Quest.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi",
    "duration": "113 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-03"
  },
  {
    "id": "m97",
    "type": "movie",
    "title": "Golden Knight",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Knight.",
    "genre": "Romance, Drama",
    "language": "Hindi",
    "duration": "161 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-21"
  },
  {
    "id": "m98",
    "type": "movie",
    "title": "The Last City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last City.",
    "genre": "Comedy, Drama",
    "language": "Hindi, English",
    "duration": "123 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-06"
  },
  {
    "id": "m99",
    "type": "movie",
    "title": "Secret of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Shadow.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "208 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-11"
  },
  {
    "id": "m100",
    "type": "movie",
    "title": "Midnight Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Dawn.",
    "genre": "Action, Thriller",
    "language": "Telugu",
    "duration": "155 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-14"
  },
  {
    "id": "m101",
    "type": "movie",
    "title": "Lost Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Spy.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "English",
    "duration": "174 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-10"
  },
  {
    "id": "m102",
    "type": "movie",
    "title": "Rise of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Legacy.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "170 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-27"
  },
  {
    "id": "m103",
    "type": "movie",
    "title": "Crimson Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Shadow.",
    "genre": "Comedy, Horror",
    "language": "Telugu, Hindi",
    "duration": "205 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-04"
  },
  {
    "id": "m104",
    "type": "movie",
    "title": "Lost City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost City.",
    "genre": "Biography, Drama, History",
    "language": "English",
    "duration": "155 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-28"
  },
  {
    "id": "m105",
    "type": "movie",
    "title": "Golden Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Empire.",
    "genre": "Romance, Drama",
    "language": "Malayalam",
    "duration": "132 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-17"
  },
  {
    "id": "m106",
    "type": "movie",
    "title": "Fall of Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Quest.",
    "genre": "Biography, Drama, History",
    "language": "Hindi, English",
    "duration": "158 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-04"
  },
  {
    "id": "m107",
    "type": "movie",
    "title": "Return of Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Spy.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "187 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-08"
  },
  {
    "id": "m108",
    "type": "movie",
    "title": "Midnight Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Hero.",
    "genre": "Action, Crime, Drama",
    "language": "Kannada",
    "duration": "109 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-10"
  },
  {
    "id": "m109",
    "type": "movie",
    "title": "Crimson City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson City.",
    "genre": "Action, Crime, Drama",
    "language": "Telugu",
    "duration": "167 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-26"
  },
  {
    "id": "m110",
    "type": "movie",
    "title": "Secret of Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Shadow.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "184 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-17"
  },
  {
    "id": "m111",
    "type": "movie",
    "title": "Return of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Assassin.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu",
    "duration": "101 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-06"
  },
  {
    "id": "m112",
    "type": "movie",
    "title": "Secret of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of City.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "127 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-15"
  },
  {
    "id": "m113",
    "type": "movie",
    "title": "Rise of Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Kingdom.",
    "genre": "Comedy, Horror",
    "language": "English",
    "duration": "178 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-16"
  },
  {
    "id": "m114",
    "type": "movie",
    "title": "Golden Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Hero.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi",
    "duration": "132 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-04"
  },
  {
    "id": "m115",
    "type": "movie",
    "title": "Hidden Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Kingdom.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "124 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-12"
  },
  {
    "id": "m116",
    "type": "movie",
    "title": "Hidden Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Dimension.",
    "genre": "Romance, Drama",
    "language": "Hindi, English",
    "duration": "123 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-26"
  },
  {
    "id": "m117",
    "type": "movie",
    "title": "Silent Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Ghost.",
    "genre": "Comedy, Horror",
    "language": "Telugu",
    "duration": "201 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-25"
  },
  {
    "id": "m118",
    "type": "movie",
    "title": "Lost Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Lost Spy.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "168 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-06"
  },
  {
    "id": "m119",
    "type": "movie",
    "title": "Rise of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of Legacy.",
    "genre": "Action, Sci-Fi",
    "language": "English",
    "duration": "108 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-12"
  },
  {
    "id": "m120",
    "type": "movie",
    "title": "The Last City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last City.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "190 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-11"
  },
  {
    "id": "m121",
    "type": "movie",
    "title": "Midnight Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Midnight Chronicles.",
    "genre": "Biography, Drama, History",
    "language": "Telugu, Hindi",
    "duration": "109 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-13"
  },
  {
    "id": "m122",
    "type": "movie",
    "title": "Legend of Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of Legacy.",
    "genre": "Comedy, Drama",
    "language": "Kannada",
    "duration": "155 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-17"
  },
  {
    "id": "m123",
    "type": "movie",
    "title": "Golden Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Warrior.",
    "genre": "Biography, Drama, History",
    "language": "Tamil",
    "duration": "105 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-07"
  },
  {
    "id": "m124",
    "type": "movie",
    "title": "Phantom Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Assassin.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "117 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-09"
  },
  {
    "id": "m125",
    "type": "movie",
    "title": "Silent Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Dimension.",
    "genre": "Animation, Family",
    "language": "Telugu",
    "duration": "111 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-28"
  },
  {
    "id": "m126",
    "type": "movie",
    "title": "Legend of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Legend of City.",
    "genre": "Horror, Thriller",
    "language": "Tamil",
    "duration": "149 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-21"
  },
  {
    "id": "m127",
    "type": "movie",
    "title": "Silent Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Empire.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "188 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-06"
  },
  {
    "id": "m128",
    "type": "movie",
    "title": "Silent Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Spy.",
    "genre": "Comedy, Horror",
    "language": "Malayalam",
    "duration": "137 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-02"
  },
  {
    "id": "m129",
    "type": "movie",
    "title": "Hidden Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Spy.",
    "genre": "Biography, Drama, History",
    "language": "Kannada",
    "duration": "172 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-09"
  },
  {
    "id": "m130",
    "type": "movie",
    "title": "The Last Kingdom",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Kingdom.",
    "genre": "Action, Crime, Drama",
    "language": "Telugu",
    "duration": "200 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-08"
  },
  {
    "id": "m131",
    "type": "movie",
    "title": "Eternal Hero",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Hero.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "110 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-01"
  },
  {
    "id": "m132",
    "type": "movie",
    "title": "Phantom Shadow",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Shadow.",
    "genre": "Action, Thriller",
    "language": "Hindi, English",
    "duration": "163 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-13"
  },
  {
    "id": "m133",
    "type": "movie",
    "title": "Hidden Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Assassin.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "150 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-24"
  },
  {
    "id": "m134",
    "type": "movie",
    "title": "Eternal Dimension",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Eternal Dimension.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "168 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-03"
  },
  {
    "id": "m135",
    "type": "movie",
    "title": "Rise of City",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Rise of City.",
    "genre": "Animation, Family",
    "language": "Kannada",
    "duration": "178 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-24"
  },
  {
    "id": "m136",
    "type": "movie",
    "title": "Golden Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Chronicles.",
    "genre": "Action, Thriller",
    "language": "Telugu, Hindi",
    "duration": "139 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-03"
  },
  {
    "id": "m137",
    "type": "movie",
    "title": "Fall of Quest",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Quest.",
    "genre": "Comedy, Drama",
    "language": "English",
    "duration": "193 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-13"
  },
  {
    "id": "m138",
    "type": "movie",
    "title": "Hidden Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Hidden Spy.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "165 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-02"
  },
  {
    "id": "m139",
    "type": "movie",
    "title": "Secret of Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Empire.",
    "genre": "Action, Thriller",
    "language": "Kannada",
    "duration": "115 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-10"
  },
  {
    "id": "m140",
    "type": "movie",
    "title": "Golden Empire",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Empire.",
    "genre": "Action, Thriller",
    "language": "Hindi",
    "duration": "187 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-17"
  },
  {
    "id": "m141",
    "type": "movie",
    "title": "Golden Legacy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Golden Legacy.",
    "genre": "Comedy, Horror",
    "language": "Hindi",
    "duration": "186 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-15"
  },
  {
    "id": "m142",
    "type": "movie",
    "title": "The Last Warrior",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Warrior.",
    "genre": "Comedy, Drama",
    "language": "Hindi, English",
    "duration": "107 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-18"
  },
  {
    "id": "m143",
    "type": "movie",
    "title": "Secret of Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Secret of Assassin.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "114 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-08"
  },
  {
    "id": "m144",
    "type": "movie",
    "title": "Crimson Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Chronicles.",
    "genre": "Thriller, Mystery",
    "language": "Malayalam",
    "duration": "182 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-14"
  },
  {
    "id": "m145",
    "type": "movie",
    "title": "Silent Assassin",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Silent Assassin.",
    "genre": "Animation, Family",
    "language": "Telugu, Hindi",
    "duration": "208 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-24"
  },
  {
    "id": "m146",
    "type": "movie",
    "title": "Fall of Ghost",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Fall of Ghost.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "206 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-02"
  },
  {
    "id": "m147",
    "type": "movie",
    "title": "Crimson Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Crimson Dawn.",
    "genre": "Horror, Thriller",
    "language": "Hindi, English",
    "duration": "187 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-21"
  },
  {
    "id": "m148",
    "type": "movie",
    "title": "Return of Dawn",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Return of Dawn.",
    "genre": "Action, Crime, Drama",
    "language": "Kannada",
    "duration": "156 min",
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-26"
  },
  {
    "id": "m149",
    "type": "movie",
    "title": "Phantom Chronicles",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in Phantom Chronicles.",
    "genre": "Thriller, Mystery",
    "language": "Malayalam",
    "duration": "119 min",
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-03"
  },
  {
    "id": "m150",
    "type": "movie",
    "title": "The Last Spy",
    "description": "An epic cinematic experience exploring themes of adventure, drama, and action in The Last Spy.",
    "genre": "Animation, Family",
    "language": "Hindi, English",
    "duration": "167 min",
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-07"
  },
  {
    "id": "m151",
    "type": "series",
    "title": "Stranger Things",
    "description": "A gripping episodic journey through the complex world of Stranger Things.",
    "genre": "Action, Thriller",
    "language": "Tamil, Telugu",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-23"
  },
  {
    "id": "m152",
    "type": "series",
    "title": "Game of Thrones",
    "description": "A gripping episodic journey through the complex world of Game of Thrones.",
    "genre": "Animation, Family",
    "language": "Telugu, Hindi",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-05"
  },
  {
    "id": "m153",
    "type": "series",
    "title": "Mirzapur",
    "description": "A gripping episodic journey through the complex world of Mirzapur.",
    "genre": "Romance, Drama",
    "language": "Kannada",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-08"
  },
  {
    "id": "m154",
    "type": "series",
    "title": "The Boys",
    "description": "A gripping episodic journey through the complex world of The Boys.",
    "genre": "Comedy, Drama",
    "language": "Hindi, English",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-25"
  },
  {
    "id": "m155",
    "type": "series",
    "title": "Breaking Bad",
    "description": "A gripping episodic journey through the complex world of Breaking Bad.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-06"
  },
  {
    "id": "m156",
    "type": "series",
    "title": "Lost Awakening",
    "description": "A gripping episodic journey through the complex world of Lost Awakening.",
    "genre": "Biography, Drama, History",
    "language": "Tamil",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-03"
  },
  {
    "id": "m157",
    "type": "series",
    "title": "Golden Island",
    "description": "A gripping episodic journey through the complex world of Golden Island.",
    "genre": "Action, Crime, Drama",
    "language": "Malayalam",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-16"
  },
  {
    "id": "m158",
    "type": "series",
    "title": "Hidden Rebellion",
    "description": "A gripping episodic journey through the complex world of Hidden Rebellion.",
    "genre": "Horror, Thriller",
    "language": "English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-24"
  },
  {
    "id": "m159",
    "type": "series",
    "title": "Return of Cartel",
    "description": "A gripping episodic journey through the complex world of Return of Cartel.",
    "genre": "Romance, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-06"
  },
  {
    "id": "m160",
    "type": "series",
    "title": "Rise of Cartel",
    "description": "A gripping episodic journey through the complex world of Rise of Cartel.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-12"
  },
  {
    "id": "m161",
    "type": "series",
    "title": "Rise of Awakening",
    "description": "A gripping episodic journey through the complex world of Rise of Awakening.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-20"
  },
  {
    "id": "m162",
    "type": "series",
    "title": "Secret of Awakening",
    "description": "A gripping episodic journey through the complex world of Secret of Awakening.",
    "genre": "Animation, Family",
    "language": "Malayalam",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-23"
  },
  {
    "id": "m163",
    "type": "series",
    "title": "Legend of Island",
    "description": "A gripping episodic journey through the complex world of Legend of Island.",
    "genre": "Animation, Family",
    "language": "Hindi",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-24"
  },
  {
    "id": "m164",
    "type": "series",
    "title": "Eternal Realm",
    "description": "A gripping episodic journey through the complex world of Eternal Realm.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-02"
  },
  {
    "id": "m165",
    "type": "series",
    "title": "Phantom Uprising",
    "description": "A gripping episodic journey through the complex world of Phantom Uprising.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-21"
  },
  {
    "id": "m166",
    "type": "series",
    "title": "Legend of Order",
    "description": "A gripping episodic journey through the complex world of Legend of Order.",
    "genre": "Biography, Drama, History",
    "language": "Hindi, English",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-05"
  },
  {
    "id": "m167",
    "type": "series",
    "title": "Secret of Paradox",
    "description": "A gripping episodic journey through the complex world of Secret of Paradox.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-03"
  },
  {
    "id": "m168",
    "type": "series",
    "title": "Legend of Syndicate",
    "description": "A gripping episodic journey through the complex world of Legend of Syndicate.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-21"
  },
  {
    "id": "m169",
    "type": "series",
    "title": "Return of Tribe",
    "description": "A gripping episodic journey through the complex world of Return of Tribe.",
    "genre": "Action, Crime, Drama",
    "language": "Hindi, English",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-22"
  },
  {
    "id": "m170",
    "type": "series",
    "title": "Silent Uprising",
    "description": "A gripping episodic journey through the complex world of Silent Uprising.",
    "genre": "Comedy, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-17"
  },
  {
    "id": "m171",
    "type": "series",
    "title": "Silent Cartel",
    "description": "A gripping episodic journey through the complex world of Silent Cartel.",
    "genre": "Romance, Drama",
    "language": "Kannada",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-19"
  },
  {
    "id": "m172",
    "type": "series",
    "title": "Fall of Paradox",
    "description": "A gripping episodic journey through the complex world of Fall of Paradox.",
    "genre": "Thriller, Mystery",
    "language": "Tamil",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-16"
  },
  {
    "id": "m173",
    "type": "series",
    "title": "Hidden Files",
    "description": "A gripping episodic journey through the complex world of Hidden Files.",
    "genre": "Action, Crime, Drama",
    "language": "Kannada",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-22"
  },
  {
    "id": "m174",
    "type": "series",
    "title": "Lost Uprising",
    "description": "A gripping episodic journey through the complex world of Lost Uprising.",
    "genre": "Fantasy, Adventure",
    "language": "Kannada",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-13"
  },
  {
    "id": "m175",
    "type": "series",
    "title": "Phantom Code",
    "description": "A gripping episodic journey through the complex world of Phantom Code.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-08"
  },
  {
    "id": "m176",
    "type": "series",
    "title": "Crimson Files",
    "description": "A gripping episodic journey through the complex world of Crimson Files.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-24"
  },
  {
    "id": "m177",
    "type": "series",
    "title": "Fall of Rebellion",
    "description": "A gripping episodic journey through the complex world of Fall of Rebellion.",
    "genre": "Animation, Family",
    "language": "Telugu, Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-12"
  },
  {
    "id": "m178",
    "type": "series",
    "title": "Rise of Protocol",
    "description": "A gripping episodic journey through the complex world of Rise of Protocol.",
    "genre": "Romance, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-04"
  },
  {
    "id": "m179",
    "type": "series",
    "title": "Legend of Protocol",
    "description": "A gripping episodic journey through the complex world of Legend of Protocol.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-01"
  },
  {
    "id": "m180",
    "type": "series",
    "title": "The Last Realm",
    "description": "A gripping episodic journey through the complex world of The Last Realm.",
    "genre": "Action, Thriller",
    "language": "Hindi, English",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-09"
  },
  {
    "id": "m181",
    "type": "series",
    "title": "Midnight Awakening",
    "description": "A gripping episodic journey through the complex world of Midnight Awakening.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil, Telugu",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-04"
  },
  {
    "id": "m182",
    "type": "series",
    "title": "The Last Saga",
    "description": "A gripping episodic journey through the complex world of The Last Saga.",
    "genre": "Action, Sci-Fi",
    "language": "Telugu",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-25"
  },
  {
    "id": "m183",
    "type": "series",
    "title": "Midnight Tribe",
    "description": "A gripping episodic journey through the complex world of Midnight Tribe.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-04"
  },
  {
    "id": "m184",
    "type": "series",
    "title": "Fall of Realm",
    "description": "A gripping episodic journey through the complex world of Fall of Realm.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-21"
  },
  {
    "id": "m185",
    "type": "series",
    "title": "Lost Uprising",
    "description": "A gripping episodic journey through the complex world of Lost Uprising.",
    "genre": "Horror, Thriller",
    "language": "English",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-02"
  },
  {
    "id": "m186",
    "type": "series",
    "title": "Legend of Paradox",
    "description": "A gripping episodic journey through the complex world of Legend of Paradox.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-25"
  },
  {
    "id": "m187",
    "type": "series",
    "title": "Fall of Rebellion",
    "description": "A gripping episodic journey through the complex world of Fall of Rebellion.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-15"
  },
  {
    "id": "m188",
    "type": "series",
    "title": "The Last Protocol",
    "description": "A gripping episodic journey through the complex world of The Last Protocol.",
    "genre": "Action, Sci-Fi",
    "language": "Kannada",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-12"
  },
  {
    "id": "m189",
    "type": "series",
    "title": "Secret of Saga",
    "description": "A gripping episodic journey through the complex world of Secret of Saga.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-15"
  },
  {
    "id": "m190",
    "type": "series",
    "title": "Rise of Uprising",
    "description": "A gripping episodic journey through the complex world of Rise of Uprising.",
    "genre": "Horror, Thriller",
    "language": "English",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-03"
  },
  {
    "id": "m191",
    "type": "series",
    "title": "Fall of Paradox",
    "description": "A gripping episodic journey through the complex world of Fall of Paradox.",
    "genre": "Action, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-17"
  },
  {
    "id": "m192",
    "type": "series",
    "title": "Fall of Paradox",
    "description": "A gripping episodic journey through the complex world of Fall of Paradox.",
    "genre": "Action, Sci-Fi",
    "language": "Kannada",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-21"
  },
  {
    "id": "m193",
    "type": "series",
    "title": "Golden Tribe",
    "description": "A gripping episodic journey through the complex world of Golden Tribe.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-06"
  },
  {
    "id": "m194",
    "type": "series",
    "title": "Fall of Rebellion",
    "description": "A gripping episodic journey through the complex world of Fall of Rebellion.",
    "genre": "Action, Sci-Fi",
    "language": "Kannada",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-02"
  },
  {
    "id": "m195",
    "type": "series",
    "title": "Rise of Rebellion",
    "description": "A gripping episodic journey through the complex world of Rise of Rebellion.",
    "genre": "Biography, Drama, History",
    "language": "Malayalam",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-18"
  },
  {
    "id": "m196",
    "type": "series",
    "title": "The Last Order",
    "description": "A gripping episodic journey through the complex world of The Last Order.",
    "genre": "Romance, Drama",
    "language": "Telugu",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-12"
  },
  {
    "id": "m197",
    "type": "series",
    "title": "Secret of Awakening",
    "description": "A gripping episodic journey through the complex world of Secret of Awakening.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-09"
  },
  {
    "id": "m198",
    "type": "series",
    "title": "Silent Syndicate",
    "description": "A gripping episodic journey through the complex world of Silent Syndicate.",
    "genre": "Comedy, Drama",
    "language": "Kannada",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-17"
  },
  {
    "id": "m199",
    "type": "series",
    "title": "Secret of Code",
    "description": "A gripping episodic journey through the complex world of Secret of Code.",
    "genre": "Comedy, Horror",
    "language": "Hindi",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-01"
  },
  {
    "id": "m200",
    "type": "series",
    "title": "Silent Files",
    "description": "A gripping episodic journey through the complex world of Silent Files.",
    "genre": "Action, Thriller",
    "language": "Telugu, Hindi",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-12"
  },
  {
    "id": "m201",
    "type": "series",
    "title": "Golden Protocol",
    "description": "A gripping episodic journey through the complex world of Golden Protocol.",
    "genre": "Fantasy, Adventure",
    "language": "Tamil, Telugu",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-25"
  },
  {
    "id": "m202",
    "type": "series",
    "title": "Crimson Files",
    "description": "A gripping episodic journey through the complex world of Crimson Files.",
    "genre": "Romance, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-07"
  },
  {
    "id": "m203",
    "type": "series",
    "title": "Fall of Realm",
    "description": "A gripping episodic journey through the complex world of Fall of Realm.",
    "genre": "Animation, Family",
    "language": "Tamil",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-14"
  },
  {
    "id": "m204",
    "type": "series",
    "title": "Dark Island",
    "description": "A gripping episodic journey through the complex world of Dark Island.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-10"
  },
  {
    "id": "m205",
    "type": "series",
    "title": "Legend of Island",
    "description": "A gripping episodic journey through the complex world of Legend of Island.",
    "genre": "Action, Thriller",
    "language": "English",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-17"
  },
  {
    "id": "m206",
    "type": "series",
    "title": "Silent Order",
    "description": "A gripping episodic journey through the complex world of Silent Order.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-24"
  },
  {
    "id": "m207",
    "type": "series",
    "title": "Legend of Island",
    "description": "A gripping episodic journey through the complex world of Legend of Island.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-10"
  },
  {
    "id": "m208",
    "type": "series",
    "title": "Legend of Tribe",
    "description": "A gripping episodic journey through the complex world of Legend of Tribe.",
    "genre": "Action, Crime, Drama",
    "language": "English",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-15"
  },
  {
    "id": "m209",
    "type": "series",
    "title": "Eternal Realm",
    "description": "A gripping episodic journey through the complex world of Eternal Realm.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-10"
  },
  {
    "id": "m210",
    "type": "series",
    "title": "Crimson Rebellion",
    "description": "A gripping episodic journey through the complex world of Crimson Rebellion.",
    "genre": "Horror, Thriller",
    "language": "Tamil, Telugu",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-11"
  },
  {
    "id": "m211",
    "type": "series",
    "title": "Fall of Uprising",
    "description": "A gripping episodic journey through the complex world of Fall of Uprising.",
    "genre": "Action, Sci-Fi",
    "language": "English",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-17"
  },
  {
    "id": "m212",
    "type": "series",
    "title": "Phantom Island",
    "description": "A gripping episodic journey through the complex world of Phantom Island.",
    "genre": "Fantasy, Adventure",
    "language": "Kannada",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-23"
  },
  {
    "id": "m213",
    "type": "series",
    "title": "Silent Order",
    "description": "A gripping episodic journey through the complex world of Silent Order.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-20"
  },
  {
    "id": "m214",
    "type": "series",
    "title": "Fall of Files",
    "description": "A gripping episodic journey through the complex world of Fall of Files.",
    "genre": "Romance, Drama",
    "language": "Hindi, English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-18"
  },
  {
    "id": "m215",
    "type": "series",
    "title": "Crimson Paradox",
    "description": "A gripping episodic journey through the complex world of Crimson Paradox.",
    "genre": "Thriller, Mystery",
    "language": "Telugu, Hindi",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-09"
  },
  {
    "id": "m216",
    "type": "series",
    "title": "Hidden Tribe",
    "description": "A gripping episodic journey through the complex world of Hidden Tribe.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "English",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-21"
  },
  {
    "id": "m217",
    "type": "series",
    "title": "Eternal Uprising",
    "description": "A gripping episodic journey through the complex world of Eternal Uprising.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-07"
  },
  {
    "id": "m218",
    "type": "series",
    "title": "Dark Rebellion",
    "description": "A gripping episodic journey through the complex world of Dark Rebellion.",
    "genre": "Animation, Family",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-28"
  },
  {
    "id": "m219",
    "type": "series",
    "title": "Return of Files",
    "description": "A gripping episodic journey through the complex world of Return of Files.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-25"
  },
  {
    "id": "m220",
    "type": "series",
    "title": "The Last Realm",
    "description": "A gripping episodic journey through the complex world of The Last Realm.",
    "genre": "Biography, Drama, History",
    "language": "Hindi",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-11"
  },
  {
    "id": "m221",
    "type": "series",
    "title": "The Last Code",
    "description": "A gripping episodic journey through the complex world of The Last Code.",
    "genre": "Action, Crime, Drama",
    "language": "Malayalam",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-06"
  },
  {
    "id": "m222",
    "type": "series",
    "title": "Lost Awakening",
    "description": "A gripping episodic journey through the complex world of Lost Awakening.",
    "genre": "Comedy, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-08"
  },
  {
    "id": "m223",
    "type": "series",
    "title": "Fall of Mansion",
    "description": "A gripping episodic journey through the complex world of Fall of Mansion.",
    "genre": "Action, Sci-Fi",
    "language": "Malayalam",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-13"
  },
  {
    "id": "m224",
    "type": "series",
    "title": "Hidden Awakening",
    "description": "A gripping episodic journey through the complex world of Hidden Awakening.",
    "genre": "Comedy, Drama",
    "language": "Telugu",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-17"
  },
  {
    "id": "m225",
    "type": "series",
    "title": "Fall of Mansion",
    "description": "A gripping episodic journey through the complex world of Fall of Mansion.",
    "genre": "Comedy, Drama",
    "language": "Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-25"
  },
  {
    "id": "m226",
    "type": "series",
    "title": "The Last Code",
    "description": "A gripping episodic journey through the complex world of The Last Code.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-13"
  },
  {
    "id": "m227",
    "type": "series",
    "title": "Midnight Rebellion",
    "description": "A gripping episodic journey through the complex world of Midnight Rebellion.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-27"
  },
  {
    "id": "m228",
    "type": "series",
    "title": "Rise of Code",
    "description": "A gripping episodic journey through the complex world of Rise of Code.",
    "genre": "Animation, Family",
    "language": "Tamil, Telugu",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-20"
  },
  {
    "id": "m229",
    "type": "series",
    "title": "Rise of Awakening",
    "description": "A gripping episodic journey through the complex world of Rise of Awakening.",
    "genre": "Action, Sci-Fi",
    "language": "Kannada",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-12"
  },
  {
    "id": "m230",
    "type": "series",
    "title": "Secret of Files",
    "description": "A gripping episodic journey through the complex world of Secret of Files.",
    "genre": "Romance, Drama",
    "language": "Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-15"
  },
  {
    "id": "m231",
    "type": "series",
    "title": "The Last Realm",
    "description": "A gripping episodic journey through the complex world of The Last Realm.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-22"
  },
  {
    "id": "m232",
    "type": "series",
    "title": "Lost Island",
    "description": "A gripping episodic journey through the complex world of Lost Island.",
    "genre": "Romance, Drama",
    "language": "Kannada",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-11"
  },
  {
    "id": "m233",
    "type": "series",
    "title": "Eternal Island",
    "description": "A gripping episodic journey through the complex world of Eternal Island.",
    "genre": "Comedy, Drama",
    "language": "Tamil",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-14"
  },
  {
    "id": "m234",
    "type": "series",
    "title": "The Last Mansion",
    "description": "A gripping episodic journey through the complex world of The Last Mansion.",
    "genre": "Comedy, Horror",
    "language": "Telugu",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-11"
  },
  {
    "id": "m235",
    "type": "series",
    "title": "Return of Order",
    "description": "A gripping episodic journey through the complex world of Return of Order.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-09"
  },
  {
    "id": "m236",
    "type": "series",
    "title": "Legend of Paradox",
    "description": "A gripping episodic journey through the complex world of Legend of Paradox.",
    "genre": "Comedy, Horror",
    "language": "Kannada",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-21"
  },
  {
    "id": "m237",
    "type": "series",
    "title": "Crimson Syndicate",
    "description": "A gripping episodic journey through the complex world of Crimson Syndicate.",
    "genre": "Horror, Thriller",
    "language": "Hindi",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-06"
  },
  {
    "id": "m238",
    "type": "series",
    "title": "Fall of Protocol",
    "description": "A gripping episodic journey through the complex world of Fall of Protocol.",
    "genre": "Thriller, Mystery",
    "language": "Telugu, Hindi",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-21"
  },
  {
    "id": "m239",
    "type": "series",
    "title": "Return of Tribe",
    "description": "A gripping episodic journey through the complex world of Return of Tribe.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-24"
  },
  {
    "id": "m240",
    "type": "series",
    "title": "Golden Syndicate",
    "description": "A gripping episodic journey through the complex world of Golden Syndicate.",
    "genre": "Biography, Drama, History",
    "language": "Malayalam",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-11"
  },
  {
    "id": "m241",
    "type": "series",
    "title": "Hidden Uprising",
    "description": "A gripping episodic journey through the complex world of Hidden Uprising.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-15"
  },
  {
    "id": "m242",
    "type": "series",
    "title": "Hidden Mansion",
    "description": "A gripping episodic journey through the complex world of Hidden Mansion.",
    "genre": "Action, Thriller",
    "language": "Hindi, English",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-01"
  },
  {
    "id": "m243",
    "type": "series",
    "title": "Return of Island",
    "description": "A gripping episodic journey through the complex world of Return of Island.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-12"
  },
  {
    "id": "m244",
    "type": "series",
    "title": "Legend of Uprising",
    "description": "A gripping episodic journey through the complex world of Legend of Uprising.",
    "genre": "Biography, Drama, History",
    "language": "Telugu",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-04"
  },
  {
    "id": "m245",
    "type": "series",
    "title": "Hidden Mansion",
    "description": "A gripping episodic journey through the complex world of Hidden Mansion.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-24"
  },
  {
    "id": "m246",
    "type": "series",
    "title": "The Last Tribe",
    "description": "A gripping episodic journey through the complex world of The Last Tribe.",
    "genre": "Comedy, Horror",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-18"
  },
  {
    "id": "m247",
    "type": "series",
    "title": "Phantom Protocol",
    "description": "A gripping episodic journey through the complex world of Phantom Protocol.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-08"
  },
  {
    "id": "m248",
    "type": "series",
    "title": "Golden Code",
    "description": "A gripping episodic journey through the complex world of Golden Code.",
    "genre": "Comedy, Horror",
    "language": "Tamil, Telugu",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-11"
  },
  {
    "id": "m249",
    "type": "series",
    "title": "Golden Mansion",
    "description": "A gripping episodic journey through the complex world of Golden Mansion.",
    "genre": "Biography, Drama, History",
    "language": "Tamil",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-13"
  },
  {
    "id": "m250",
    "type": "series",
    "title": "Rise of Awakening",
    "description": "A gripping episodic journey through the complex world of Rise of Awakening.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-11"
  },
  {
    "id": "m251",
    "type": "series",
    "title": "Legend of Code",
    "description": "A gripping episodic journey through the complex world of Legend of Code.",
    "genre": "Animation, Family",
    "language": "Hindi, English",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-18"
  },
  {
    "id": "m252",
    "type": "series",
    "title": "Secret of Uprising",
    "description": "A gripping episodic journey through the complex world of Secret of Uprising.",
    "genre": "Action, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-26"
  },
  {
    "id": "m253",
    "type": "series",
    "title": "Rise of Files",
    "description": "A gripping episodic journey through the complex world of Rise of Files.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-25"
  },
  {
    "id": "m254",
    "type": "series",
    "title": "Phantom Saga",
    "description": "A gripping episodic journey through the complex world of Phantom Saga.",
    "genre": "Action, Crime, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-09"
  },
  {
    "id": "m255",
    "type": "series",
    "title": "Return of Awakening",
    "description": "A gripping episodic journey through the complex world of Return of Awakening.",
    "genre": "Action, Crime, Drama",
    "language": "Kannada",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-26"
  },
  {
    "id": "m256",
    "type": "series",
    "title": "Dark Protocol",
    "description": "A gripping episodic journey through the complex world of Dark Protocol.",
    "genre": "Romance, Drama",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-17"
  },
  {
    "id": "m257",
    "type": "series",
    "title": "Legend of Cartel",
    "description": "A gripping episodic journey through the complex world of Legend of Cartel.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-27"
  },
  {
    "id": "m258",
    "type": "series",
    "title": "Eternal Uprising",
    "description": "A gripping episodic journey through the complex world of Eternal Uprising.",
    "genre": "Comedy, Horror",
    "language": "Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-13"
  },
  {
    "id": "m259",
    "type": "series",
    "title": "Return of Saga",
    "description": "A gripping episodic journey through the complex world of Return of Saga.",
    "genre": "Animation, Family",
    "language": "Hindi, English",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-25"
  },
  {
    "id": "m260",
    "type": "series",
    "title": "Silent Saga",
    "description": "A gripping episodic journey through the complex world of Silent Saga.",
    "genre": "Thriller, Mystery",
    "language": "Malayalam",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-02"
  },
  {
    "id": "m261",
    "type": "series",
    "title": "Midnight Order",
    "description": "A gripping episodic journey through the complex world of Midnight Order.",
    "genre": "Comedy, Horror",
    "language": "Telugu, Hindi",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-05"
  },
  {
    "id": "m262",
    "type": "series",
    "title": "Midnight Awakening",
    "description": "A gripping episodic journey through the complex world of Midnight Awakening.",
    "genre": "Biography, Drama, History",
    "language": "Tamil, Telugu",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-10"
  },
  {
    "id": "m263",
    "type": "series",
    "title": "Rise of Code",
    "description": "A gripping episodic journey through the complex world of Rise of Code.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-17"
  },
  {
    "id": "m264",
    "type": "series",
    "title": "Secret of Mansion",
    "description": "A gripping episodic journey through the complex world of Secret of Mansion.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-13"
  },
  {
    "id": "m265",
    "type": "series",
    "title": "Silent Rebellion",
    "description": "A gripping episodic journey through the complex world of Silent Rebellion.",
    "genre": "Fantasy, Adventure",
    "language": "Hindi, English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-04"
  },
  {
    "id": "m266",
    "type": "series",
    "title": "Midnight Awakening",
    "description": "A gripping episodic journey through the complex world of Midnight Awakening.",
    "genre": "Romance, Drama",
    "language": "Telugu, Hindi",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-26"
  },
  {
    "id": "m267",
    "type": "series",
    "title": "Midnight Tribe",
    "description": "A gripping episodic journey through the complex world of Midnight Tribe.",
    "genre": "Action, Thriller",
    "language": "Tamil, Telugu",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-01"
  },
  {
    "id": "m268",
    "type": "series",
    "title": "Eternal Protocol",
    "description": "A gripping episodic journey through the complex world of Eternal Protocol.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Hindi, English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-11"
  },
  {
    "id": "m269",
    "type": "series",
    "title": "Hidden Paradox",
    "description": "A gripping episodic journey through the complex world of Hidden Paradox.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Tamil",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-18"
  },
  {
    "id": "m270",
    "type": "series",
    "title": "Golden Order",
    "description": "A gripping episodic journey through the complex world of Golden Order.",
    "genre": "Horror, Thriller",
    "language": "Telugu, Hindi",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-04"
  },
  {
    "id": "m271",
    "type": "series",
    "title": "Eternal Uprising",
    "description": "A gripping episodic journey through the complex world of Eternal Uprising.",
    "genre": "Action, Thriller",
    "language": "Tamil",
    "duration": "Season 2",
    "seasons": 2,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-07-17"
  },
  {
    "id": "m272",
    "type": "series",
    "title": "Secret of Order",
    "description": "A gripping episodic journey through the complex world of Secret of Order.",
    "genre": "Horror, Thriller",
    "language": "Hindi",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-28"
  },
  {
    "id": "m273",
    "type": "series",
    "title": "Hidden Cartel",
    "description": "A gripping episodic journey through the complex world of Hidden Cartel.",
    "genre": "Action, Crime, Drama",
    "language": "English",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1505635552518-3448ff116af3?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-10"
  },
  {
    "id": "m274",
    "type": "series",
    "title": "Eternal Files",
    "description": "A gripping episodic journey through the complex world of Eternal Files.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-09"
  },
  {
    "id": "m275",
    "type": "series",
    "title": "Legend of Paradox",
    "description": "A gripping episodic journey through the complex world of Legend of Paradox.",
    "genre": "Thriller, Mystery",
    "language": "Telugu, Hindi",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-08"
  },
  {
    "id": "m276",
    "type": "series",
    "title": "Silent Realm",
    "description": "A gripping episodic journey through the complex world of Silent Realm.",
    "genre": "Thriller, Mystery",
    "language": "Tamil, Telugu",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-01"
  },
  {
    "id": "m277",
    "type": "series",
    "title": "The Last Tribe",
    "description": "A gripping episodic journey through the complex world of The Last Tribe.",
    "genre": "Thriller, Mystery",
    "language": "Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-03"
  },
  {
    "id": "m278",
    "type": "series",
    "title": "Dark Order",
    "description": "A gripping episodic journey through the complex world of Dark Order.",
    "genre": "Romance, Drama",
    "language": "English",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-07"
  },
  {
    "id": "m279",
    "type": "series",
    "title": "Hidden Realm",
    "description": "A gripping episodic journey through the complex world of Hidden Realm.",
    "genre": "Action, Adventure, Sci-Fi",
    "language": "Telugu, Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-06-06"
  },
  {
    "id": "m280",
    "type": "series",
    "title": "Legend of Realm",
    "description": "A gripping episodic journey through the complex world of Legend of Realm.",
    "genre": "Comedy, Drama",
    "language": "Telugu, Hindi",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-05"
  },
  {
    "id": "m281",
    "type": "series",
    "title": "Fall of Realm",
    "description": "A gripping episodic journey through the complex world of Fall of Realm.",
    "genre": "Animation, Family",
    "language": "English",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=500&h=750&fit=crop",
    "releaseDate": "2026-08-03"
  },
  {
    "id": "m282",
    "type": "series",
    "title": "Midnight Files",
    "description": "A gripping episodic journey through the complex world of Midnight Files.",
    "genre": "Comedy, Drama",
    "language": "Tamil, Telugu",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-27"
  },
  {
    "id": "m283",
    "type": "series",
    "title": "Lost Saga",
    "description": "A gripping episodic journey through the complex world of Lost Saga.",
    "genre": "Thriller, Mystery",
    "language": "Telugu",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-24"
  },
  {
    "id": "m284",
    "type": "series",
    "title": "Silent Island",
    "description": "A gripping episodic journey through the complex world of Silent Island.",
    "genre": "Horror, Thriller",
    "language": "Hindi, English",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1588665971946-b1cb0dbd15eb?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-25"
  },
  {
    "id": "m285",
    "type": "series",
    "title": "Eternal Protocol",
    "description": "A gripping episodic journey through the complex world of Eternal Protocol.",
    "genre": "Romance, Drama",
    "language": "Telugu",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-05"
  },
  {
    "id": "m286",
    "type": "series",
    "title": "Hidden Cartel",
    "description": "A gripping episodic journey through the complex world of Hidden Cartel.",
    "genre": "Action, Sci-Fi",
    "language": "Tamil",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-21"
  },
  {
    "id": "m287",
    "type": "series",
    "title": "Golden Paradox",
    "description": "A gripping episodic journey through the complex world of Golden Paradox.",
    "genre": "Action, Thriller",
    "language": "Telugu, Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-11"
  },
  {
    "id": "m288",
    "type": "series",
    "title": "The Last Uprising",
    "description": "A gripping episodic journey through the complex world of The Last Uprising.",
    "genre": "Horror, Thriller",
    "language": "Hindi, English",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "UA",
    "poster": "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=500&h=750&fit=crop",
    "releaseDate": "2026-09-05"
  },
  {
    "id": "m289",
    "type": "series",
    "title": "Midnight Code",
    "description": "A gripping episodic journey through the complex world of Midnight Code.",
    "genre": "Action, Thriller",
    "language": "Hindi, English",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=750&fit=crop",
    "releaseDate": "2026-02-20"
  },
  {
    "id": "m290",
    "type": "series",
    "title": "Dark Rebellion",
    "description": "A gripping episodic journey through the complex world of Dark Rebellion.",
    "genre": "Biography, Drama, History",
    "language": "Malayalam",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=500&h=750&fit=crop",
    "releaseDate": "2026-10-26"
  },
  {
    "id": "m291",
    "type": "series",
    "title": "Crimson Island",
    "description": "A gripping episodic journey through the complex world of Crimson Island.",
    "genre": "Romance, Drama",
    "language": "Kannada",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-28"
  },
  {
    "id": "m292",
    "type": "series",
    "title": "Dark Rebellion",
    "description": "A gripping episodic journey through the complex world of Dark Rebellion.",
    "genre": "Biography, Drama, History",
    "language": "English",
    "duration": "Season 1",
    "seasons": 1,
    "rating": "A",
    "poster": "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&h=750&fit=crop",
    "releaseDate": "2026-03-13"
  },
  {
    "id": "m293",
    "type": "series",
    "title": "Silent Code",
    "description": "A gripping episodic journey through the complex world of Silent Code.",
    "genre": "Action, Sci-Fi",
    "language": "Hindi, English",
    "duration": "Season 3",
    "seasons": 3,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-01-11"
  },
  {
    "id": "m294",
    "type": "series",
    "title": "Golden Saga",
    "description": "A gripping episodic journey through the complex world of Golden Saga.",
    "genre": "Comedy, Horror",
    "language": "Tamil, Telugu",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=750&fit=crop",
    "releaseDate": "2026-12-15"
  },
  {
    "id": "m295",
    "type": "series",
    "title": "Secret of Protocol",
    "description": "A gripping episodic journey through the complex world of Secret of Protocol.",
    "genre": "Comedy, Drama",
    "language": "Telugu",
    "duration": "Season 4",
    "seasons": 4,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-06"
  },
  {
    "id": "m296",
    "type": "series",
    "title": "Midnight Order",
    "description": "A gripping episodic journey through the complex world of Midnight Order.",
    "genre": "Fantasy, Adventure",
    "language": "Telugu, Hindi",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-18"
  },
  {
    "id": "m297",
    "type": "series",
    "title": "Eternal Cartel",
    "description": "A gripping episodic journey through the complex world of Eternal Cartel.",
    "genre": "Comedy, Horror",
    "language": "Telugu, Hindi",
    "duration": "Season 8",
    "seasons": 8,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1512149177596-f817c7ef5d4c?w=500&h=750&fit=crop",
    "releaseDate": "2026-05-05"
  },
  {
    "id": "m298",
    "type": "series",
    "title": "Silent Files",
    "description": "A gripping episodic journey through the complex world of Silent Files.",
    "genre": "Action, Thriller",
    "language": "Hindi",
    "duration": "Season 5",
    "seasons": 5,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&h=750&fit=crop",
    "releaseDate": "2026-04-28"
  },
  {
    "id": "m299",
    "type": "series",
    "title": "Midnight Paradox",
    "description": "A gripping episodic journey through the complex world of Midnight Paradox.",
    "genre": "Thriller, Mystery",
    "language": "English",
    "duration": "Season 7",
    "seasons": 7,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1614850715649-1d0106293cb1?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-11"
  },
  {
    "id": "m300",
    "type": "series",
    "title": "Return of Order",
    "description": "A gripping episodic journey through the complex world of Return of Order.",
    "genre": "Action, Crime, Drama",
    "language": "Hindi, English",
    "duration": "Season 6",
    "seasons": 6,
    "rating": "U",
    "poster": "https://images.unsplash.com/photo-1535016120720-40c746a51d8b?w=500&h=750&fit=crop",
    "releaseDate": "2026-11-20"
  }
];

export const mockTheatres: Theatre[] = [
  {
    "id": "t1",
    "name": "PVR Mall",
    "location": "Jaipur",
    "screens": 7
  },
  {
    "id": "t2",
    "name": "INOX Mall",
    "location": "Jaipur",
    "screens": 5
  },
  {
    "id": "t3",
    "name": "INOX Galleria",
    "location": "Nagpur",
    "screens": 9
  },
  {
    "id": "t4",
    "name": "Mukta A2 Avenue",
    "location": "Kolkata",
    "screens": 15
  },
  {
    "id": "t5",
    "name": "PVR Avenue",
    "location": "Nagpur",
    "screens": 2
  },
  {
    "id": "t6",
    "name": "Asian Cinemas Plaza",
    "location": "Jaipur",
    "screens": 12
  },
  {
    "id": "t7",
    "name": "Mukta A2 Galleria",
    "location": "Patna",
    "screens": 2
  },
  {
    "id": "t8",
    "name": "Carnival Avenue",
    "location": "Coimbatore",
    "screens": 2
  },
  {
    "id": "t9",
    "name": "PVR Multiplex",
    "location": "Chennai",
    "screens": 12
  },
  {
    "id": "t10",
    "name": "Cinepolis Square",
    "location": "Ahmedabad",
    "screens": 6
  },
  {
    "id": "t11",
    "name": "PVR Plaza",
    "location": "Lucknow",
    "screens": 13
  },
  {
    "id": "t12",
    "name": "PVR Plaza",
    "location": "Delhi NCR",
    "screens": 12
  },
  {
    "id": "t13",
    "name": "Asian Cinemas Avenue",
    "location": "Visakhapatnam",
    "screens": 10
  },
  {
    "id": "t14",
    "name": "Cinepolis Multiplex",
    "location": "Visakhapatnam",
    "screens": 3
  },
  {
    "id": "t15",
    "name": "Asian Cinemas Mall",
    "location": "Coimbatore",
    "screens": 7
  },
  {
    "id": "t16",
    "name": "Carnival Plaza",
    "location": "Indore",
    "screens": 6
  },
  {
    "id": "t17",
    "name": "Miraj Galleria",
    "location": "Ahmedabad",
    "screens": 11
  },
  {
    "id": "t18",
    "name": "PVR Plaza",
    "location": "Patna",
    "screens": 9
  },
  {
    "id": "t19",
    "name": "Mukta A2 City Center",
    "location": "Kochi",
    "screens": 13
  },
  {
    "id": "t20",
    "name": "CineBells Plaza",
    "location": "Chennai",
    "screens": 12
  },
  {
    "id": "t21",
    "name": "Asian Cinemas Plaza",
    "location": "Bangalore",
    "screens": 5
  },
  {
    "id": "t22",
    "name": "CineBells Avenue",
    "location": "Hyderabad",
    "screens": 7
  },
  {
    "id": "t23",
    "name": "Carnival Multiplex",
    "location": "Delhi NCR",
    "screens": 8
  },
  {
    "id": "t24",
    "name": "PVR Galleria",
    "location": "Nagpur",
    "screens": 12
  },
  {
    "id": "t25",
    "name": "Miraj Galleria",
    "location": "Chennai",
    "screens": 14
  },
  {
    "id": "t26",
    "name": "PVR Avenue",
    "location": "Delhi NCR",
    "screens": 12
  },
  {
    "id": "t27",
    "name": "Mukta A2 Galleria",
    "location": "Kochi",
    "screens": 14
  },
  {
    "id": "t28",
    "name": "Mukta A2 Avenue",
    "location": "Indore",
    "screens": 2
  },
  {
    "id": "t29",
    "name": "PVR City Center",
    "location": "Hyderabad",
    "screens": 15
  },
  {
    "id": "t30",
    "name": "INOX Galleria",
    "location": "Indore",
    "screens": 13
  },
  {
    "id": "t31",
    "name": "Miraj Avenue",
    "location": "Pune",
    "screens": 5
  },
  {
    "id": "t32",
    "name": "INOX Multiplex",
    "location": "Vadodara",
    "screens": 5
  },
  {
    "id": "t33",
    "name": "Carnival Mall",
    "location": "Kochi",
    "screens": 10
  },
  {
    "id": "t34",
    "name": "CineBells Mall",
    "location": "Patna",
    "screens": 16
  },
  {
    "id": "t35",
    "name": "CineBells Avenue",
    "location": "Mumbai",
    "screens": 11
  },
  {
    "id": "t36",
    "name": "CineBells Avenue",
    "location": "Mumbai",
    "screens": 16
  },
  {
    "id": "t37",
    "name": "CineBells Avenue",
    "location": "Kolkata",
    "screens": 12
  },
  {
    "id": "t38",
    "name": "INOX Multiplex",
    "location": "Kochi",
    "screens": 13
  },
  {
    "id": "t39",
    "name": "Cinepolis Square",
    "location": "Lucknow",
    "screens": 6
  },
  {
    "id": "t40",
    "name": "Asian Cinemas Mall",
    "location": "Coimbatore",
    "screens": 4
  },
  {
    "id": "t41",
    "name": "INOX City Center",
    "location": "Pune",
    "screens": 13
  },
  {
    "id": "t42",
    "name": "PVR Multiplex",
    "location": "Chandigarh",
    "screens": 6
  },
  {
    "id": "t43",
    "name": "Mukta A2 Square",
    "location": "Bangalore",
    "screens": 13
  },
  {
    "id": "t44",
    "name": "Carnival Square",
    "location": "Bhopal",
    "screens": 7
  },
  {
    "id": "t45",
    "name": "Asian Cinemas Galleria",
    "location": "Hyderabad",
    "screens": 7
  },
  {
    "id": "t46",
    "name": "Asian Cinemas Galleria",
    "location": "Patna",
    "screens": 16
  },
  {
    "id": "t47",
    "name": "Asian Cinemas Multiplex",
    "location": "Pune",
    "screens": 3
  },
  {
    "id": "t48",
    "name": "INOX Plaza",
    "location": "Hyderabad",
    "screens": 14
  },
  {
    "id": "t49",
    "name": "INOX City Center",
    "location": "Kolkata",
    "screens": 9
  },
  {
    "id": "t50",
    "name": "CineBells Plaza",
    "location": "Nagpur",
    "screens": 10
  },
  {
    "id": "t51",
    "name": "INOX Mall",
    "location": "Indore",
    "screens": 15
  },
  {
    "id": "t52",
    "name": "INOX Avenue",
    "location": "Nagpur",
    "screens": 11
  },
  {
    "id": "t53",
    "name": "CineBells Plaza",
    "location": "Visakhapatnam",
    "screens": 15
  },
  {
    "id": "t54",
    "name": "Miraj Galleria",
    "location": "Pune",
    "screens": 9
  },
  {
    "id": "t55",
    "name": "Asian Cinemas City Center",
    "location": "Patna",
    "screens": 11
  },
  {
    "id": "t56",
    "name": "INOX Plaza",
    "location": "Coimbatore",
    "screens": 3
  },
  {
    "id": "t57",
    "name": "INOX Avenue",
    "location": "Coimbatore",
    "screens": 5
  },
  {
    "id": "t58",
    "name": "Asian Cinemas Avenue",
    "location": "Chandigarh",
    "screens": 9
  },
  {
    "id": "t59",
    "name": "Asian Cinemas City Center",
    "location": "Chennai",
    "screens": 7
  },
  {
    "id": "t60",
    "name": "CineBells Mall",
    "location": "Lucknow",
    "screens": 3
  },
  {
    "id": "t61",
    "name": "Asian Cinemas Plaza",
    "location": "Pune",
    "screens": 12
  },
  {
    "id": "t62",
    "name": "Asian Cinemas Avenue",
    "location": "Vadodara",
    "screens": 14
  },
  {
    "id": "t63",
    "name": "CineBells Avenue",
    "location": "Patna",
    "screens": 3
  },
  {
    "id": "t64",
    "name": "Cinepolis Avenue",
    "location": "Visakhapatnam",
    "screens": 9
  },
  {
    "id": "t65",
    "name": "Mukta A2 Avenue",
    "location": "Pune",
    "screens": 8
  },
  {
    "id": "t66",
    "name": "Carnival Mall",
    "location": "Bhopal",
    "screens": 10
  },
  {
    "id": "t67",
    "name": "INOX Square",
    "location": "Bhopal",
    "screens": 12
  },
  {
    "id": "t68",
    "name": "Mukta A2 Galleria",
    "location": "Lucknow",
    "screens": 15
  },
  {
    "id": "t69",
    "name": "PVR Square",
    "location": "Vadodara",
    "screens": 6
  },
  {
    "id": "t70",
    "name": "Asian Cinemas Galleria",
    "location": "Kolkata",
    "screens": 10
  },
  {
    "id": "t71",
    "name": "Carnival City Center",
    "location": "Surat",
    "screens": 13
  },
  {
    "id": "t72",
    "name": "Mukta A2 Multiplex",
    "location": "Vadodara",
    "screens": 10
  },
  {
    "id": "t73",
    "name": "Mukta A2 Mall",
    "location": "Bangalore",
    "screens": 14
  },
  {
    "id": "t74",
    "name": "PVR Plaza",
    "location": "Mumbai",
    "screens": 6
  },
  {
    "id": "t75",
    "name": "PVR Square",
    "location": "Ahmedabad",
    "screens": 10
  },
  {
    "id": "t76",
    "name": "Mukta A2 Multiplex",
    "location": "Patna",
    "screens": 9
  },
  {
    "id": "t77",
    "name": "CineBells Multiplex",
    "location": "Bangalore",
    "screens": 3
  },
  {
    "id": "t78",
    "name": "Carnival Square",
    "location": "Jaipur",
    "screens": 9
  },
  {
    "id": "t79",
    "name": "PVR Mall",
    "location": "Hyderabad",
    "screens": 12
  },
  {
    "id": "t80",
    "name": "INOX Multiplex",
    "location": "Visakhapatnam",
    "screens": 13
  },
  {
    "id": "t81",
    "name": "Cinepolis Mall",
    "location": "Patna",
    "screens": 8
  },
  {
    "id": "t82",
    "name": "Mukta A2 Avenue",
    "location": "Hyderabad",
    "screens": 3
  },
  {
    "id": "t83",
    "name": "INOX City Center",
    "location": "Chandigarh",
    "screens": 10
  },
  {
    "id": "t84",
    "name": "INOX Multiplex",
    "location": "Vadodara",
    "screens": 6
  },
  {
    "id": "t85",
    "name": "PVR Mall",
    "location": "Chandigarh",
    "screens": 5
  },
  {
    "id": "t86",
    "name": "Cinepolis Avenue",
    "location": "Ahmedabad",
    "screens": 3
  },
  {
    "id": "t87",
    "name": "Miraj Plaza",
    "location": "Delhi NCR",
    "screens": 16
  },
  {
    "id": "t88",
    "name": "INOX Square",
    "location": "Kochi",
    "screens": 3
  },
  {
    "id": "t89",
    "name": "Asian Cinemas Plaza",
    "location": "Lucknow",
    "screens": 16
  },
  {
    "id": "t90",
    "name": "CineBells City Center",
    "location": "Lucknow",
    "screens": 3
  },
  {
    "id": "t91",
    "name": "INOX Plaza",
    "location": "Bhopal",
    "screens": 10
  },
  {
    "id": "t92",
    "name": "Carnival City Center",
    "location": "Delhi NCR",
    "screens": 10
  },
  {
    "id": "t93",
    "name": "INOX Mall",
    "location": "Ahmedabad",
    "screens": 6
  },
  {
    "id": "t94",
    "name": "CineBells Plaza",
    "location": "Bangalore",
    "screens": 8
  },
  {
    "id": "t95",
    "name": "Carnival Multiplex",
    "location": "Pune",
    "screens": 15
  },
  {
    "id": "t96",
    "name": "Mukta A2 Avenue",
    "location": "Kochi",
    "screens": 8
  },
  {
    "id": "t97",
    "name": "Cinepolis City Center",
    "location": "Chandigarh",
    "screens": 6
  },
  {
    "id": "t98",
    "name": "Miraj City Center",
    "location": "Visakhapatnam",
    "screens": 7
  },
  {
    "id": "t99",
    "name": "CineBells Plaza",
    "location": "Coimbatore",
    "screens": 11
  },
  {
    "id": "t100",
    "name": "Miraj Multiplex",
    "location": "Kochi",
    "screens": 12
  },
  {
    "id": "t101",
    "name": "Asian Cinemas Mall",
    "location": "Kolkata",
    "screens": 9
  },
  {
    "id": "t102",
    "name": "Asian Cinemas Mall",
    "location": "Jaipur",
    "screens": 6
  },
  {
    "id": "t103",
    "name": "Mukta A2 Square",
    "location": "Chennai",
    "screens": 10
  },
  {
    "id": "t104",
    "name": "Mukta A2 Plaza",
    "location": "Lucknow",
    "screens": 13
  },
  {
    "id": "t105",
    "name": "Miraj Square",
    "location": "Jaipur",
    "screens": 7
  },
  {
    "id": "t106",
    "name": "PVR Plaza",
    "location": "Visakhapatnam",
    "screens": 3
  },
  {
    "id": "t107",
    "name": "Miraj Galleria",
    "location": "Visakhapatnam",
    "screens": 2
  },
  {
    "id": "t108",
    "name": "Carnival City Center",
    "location": "Hyderabad",
    "screens": 12
  },
  {
    "id": "t109",
    "name": "CineBells City Center",
    "location": "Bangalore",
    "screens": 7
  },
  {
    "id": "t110",
    "name": "PVR Galleria",
    "location": "Kochi",
    "screens": 12
  },
  {
    "id": "t111",
    "name": "Carnival City Center",
    "location": "Pune",
    "screens": 14
  },
  {
    "id": "t112",
    "name": "Asian Cinemas City Center",
    "location": "Visakhapatnam",
    "screens": 15
  },
  {
    "id": "t113",
    "name": "Cinepolis City Center",
    "location": "Indore",
    "screens": 14
  },
  {
    "id": "t114",
    "name": "Carnival City Center",
    "location": "Bhopal",
    "screens": 8
  },
  {
    "id": "t115",
    "name": "Carnival Avenue",
    "location": "Coimbatore",
    "screens": 10
  },
  {
    "id": "t116",
    "name": "Mukta A2 City Center",
    "location": "Lucknow",
    "screens": 2
  },
  {
    "id": "t117",
    "name": "Carnival Multiplex",
    "location": "Patna",
    "screens": 8
  },
  {
    "id": "t118",
    "name": "Mukta A2 Square",
    "location": "Kochi",
    "screens": 14
  },
  {
    "id": "t119",
    "name": "Carnival City Center",
    "location": "Coimbatore",
    "screens": 6
  },
  {
    "id": "t120",
    "name": "Carnival Avenue",
    "location": "Jaipur",
    "screens": 6
  },
  {
    "id": "t121",
    "name": "Cinepolis Square",
    "location": "Chandigarh",
    "screens": 2
  },
  {
    "id": "t122",
    "name": "INOX Multiplex",
    "location": "Jaipur",
    "screens": 11
  },
  {
    "id": "t123",
    "name": "Asian Cinemas Mall",
    "location": "Ahmedabad",
    "screens": 10
  },
  {
    "id": "t124",
    "name": "Mukta A2 Square",
    "location": "Chandigarh",
    "screens": 6
  },
  {
    "id": "t125",
    "name": "Miraj Galleria",
    "location": "Hyderabad",
    "screens": 8
  },
  {
    "id": "t126",
    "name": "CineBells Mall",
    "location": "Pune",
    "screens": 15
  },
  {
    "id": "t127",
    "name": "INOX Square",
    "location": "Chennai",
    "screens": 2
  },
  {
    "id": "t128",
    "name": "INOX Galleria",
    "location": "Ahmedabad",
    "screens": 11
  },
  {
    "id": "t129",
    "name": "Asian Cinemas Multiplex",
    "location": "Delhi NCR",
    "screens": 6
  },
  {
    "id": "t130",
    "name": "INOX City Center",
    "location": "Kolkata",
    "screens": 10
  },
  {
    "id": "t131",
    "name": "Asian Cinemas City Center",
    "location": "Chennai",
    "screens": 11
  },
  {
    "id": "t132",
    "name": "PVR Mall",
    "location": "Delhi NCR",
    "screens": 6
  },
  {
    "id": "t133",
    "name": "Cinepolis Square",
    "location": "Kochi",
    "screens": 11
  },
  {
    "id": "t134",
    "name": "Miraj Plaza",
    "location": "Delhi NCR",
    "screens": 13
  },
  {
    "id": "t135",
    "name": "Cinepolis Square",
    "location": "Visakhapatnam",
    "screens": 10
  },
  {
    "id": "t136",
    "name": "CineBells Plaza",
    "location": "Delhi NCR",
    "screens": 7
  },
  {
    "id": "t137",
    "name": "Asian Cinemas City Center",
    "location": "Nagpur",
    "screens": 9
  },
  {
    "id": "t138",
    "name": "CineBells Mall",
    "location": "Lucknow",
    "screens": 10
  },
  {
    "id": "t139",
    "name": "Carnival Mall",
    "location": "Pune",
    "screens": 14
  },
  {
    "id": "t140",
    "name": "Cinepolis Avenue",
    "location": "Coimbatore",
    "screens": 2
  },
  {
    "id": "t141",
    "name": "Carnival Plaza",
    "location": "Chandigarh",
    "screens": 9
  },
  {
    "id": "t142",
    "name": "Mukta A2 Galleria",
    "location": "Chandigarh",
    "screens": 6
  },
  {
    "id": "t143",
    "name": "INOX Multiplex",
    "location": "Bhopal",
    "screens": 3
  },
  {
    "id": "t144",
    "name": "PVR Mall",
    "location": "Nagpur",
    "screens": 8
  },
  {
    "id": "t145",
    "name": "INOX Plaza",
    "location": "Chennai",
    "screens": 14
  },
  {
    "id": "t146",
    "name": "Mukta A2 Avenue",
    "location": "Indore",
    "screens": 6
  },
  {
    "id": "t147",
    "name": "PVR City Center",
    "location": "Chandigarh",
    "screens": 6
  },
  {
    "id": "t148",
    "name": "INOX City Center",
    "location": "Coimbatore",
    "screens": 7
  },
  {
    "id": "t149",
    "name": "PVR City Center",
    "location": "Nagpur",
    "screens": 6
  },
  {
    "id": "t150",
    "name": "Asian Cinemas Multiplex",
    "location": "Nagpur",
    "screens": 7
  }
];

export const mockShows: Show[] = [
  {
    "id": "s1",
    "movieId": "m49",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 270
  },
  {
    "id": "s2",
    "movieId": "m206",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 276
  },
  {
    "id": "s3",
    "movieId": "m7",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 350,
    "availableSeats": 150
  },
  {
    "id": "s4",
    "movieId": "m124",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 440,
    "availableSeats": 151
  },
  {
    "id": "s5",
    "movieId": "m124",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 500,
    "availableSeats": 228
  },
  {
    "id": "s6",
    "movieId": "m15",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 310,
    "availableSeats": 158
  },
  {
    "id": "s7",
    "movieId": "m15",
    "theatreId": "t1",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 600,
    "availableSeats": 143
  },
  {
    "id": "s8",
    "movieId": "m53",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 430,
    "availableSeats": 156
  },
  {
    "id": "s9",
    "movieId": "m284",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 360,
    "availableSeats": 234
  },
  {
    "id": "s10",
    "movieId": "m53",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 263
  },
  {
    "id": "s11",
    "movieId": "m187",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 530,
    "availableSeats": 152
  },
  {
    "id": "s12",
    "movieId": "m187",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 208
  },
  {
    "id": "s13",
    "movieId": "m259",
    "theatreId": "t2",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 750,
    "availableSeats": 244
  },
  {
    "id": "s14",
    "movieId": "m85",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 183
  },
  {
    "id": "s15",
    "movieId": "m125",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 165
  },
  {
    "id": "s16",
    "movieId": "m125",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 460,
    "availableSeats": 190
  },
  {
    "id": "s17",
    "movieId": "m85",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 63
  },
  {
    "id": "s18",
    "movieId": "m85",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 225
  },
  {
    "id": "s19",
    "movieId": "m49",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 650,
    "availableSeats": 259
  },
  {
    "id": "s20",
    "movieId": "m60",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 235
  },
  {
    "id": "s21",
    "movieId": "m49",
    "theatreId": "t3",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 165
  },
  {
    "id": "s22",
    "movieId": "m37",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 770,
    "availableSeats": 245
  },
  {
    "id": "s23",
    "movieId": "m286",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 90
  },
  {
    "id": "s24",
    "movieId": "m286",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 550,
    "availableSeats": 173
  },
  {
    "id": "s25",
    "movieId": "m217",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 287
  },
  {
    "id": "s26",
    "movieId": "m58",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 215
  },
  {
    "id": "s27",
    "movieId": "m37",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 720,
    "availableSeats": 219
  },
  {
    "id": "s28",
    "movieId": "m217",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 550,
    "availableSeats": 92
  },
  {
    "id": "s29",
    "movieId": "m217",
    "theatreId": "t4",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 250,
    "availableSeats": 265
  },
  {
    "id": "s30",
    "movieId": "m188",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 700,
    "availableSeats": 195
  },
  {
    "id": "s31",
    "movieId": "m188",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 570,
    "availableSeats": 215
  },
  {
    "id": "s32",
    "movieId": "m93",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 320,
    "availableSeats": 225
  },
  {
    "id": "s33",
    "movieId": "m34",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 63
  },
  {
    "id": "s34",
    "movieId": "m34",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 77
  },
  {
    "id": "s35",
    "movieId": "m153",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 237
  },
  {
    "id": "s36",
    "movieId": "m93",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 193
  },
  {
    "id": "s37",
    "movieId": "m2",
    "theatreId": "t5",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 270,
    "availableSeats": 295
  },
  {
    "id": "s38",
    "movieId": "m46",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 216
  },
  {
    "id": "s39",
    "movieId": "m46",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 710,
    "availableSeats": 237
  },
  {
    "id": "s40",
    "movieId": "m104",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 75
  },
  {
    "id": "s41",
    "movieId": "m177",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 450,
    "availableSeats": 165
  },
  {
    "id": "s42",
    "movieId": "m171",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 84
  },
  {
    "id": "s43",
    "movieId": "m245",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 390,
    "availableSeats": 271
  },
  {
    "id": "s44",
    "movieId": "m46",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 132
  },
  {
    "id": "s45",
    "movieId": "m46",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 370,
    "availableSeats": 109
  },
  {
    "id": "s46",
    "movieId": "m245",
    "theatreId": "t6",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 450,
    "availableSeats": 101
  },
  {
    "id": "s47",
    "movieId": "m38",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 190
  },
  {
    "id": "s48",
    "movieId": "m153",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 300,
    "availableSeats": 129
  },
  {
    "id": "s49",
    "movieId": "m38",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 289
  },
  {
    "id": "s50",
    "movieId": "m38",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 230
  },
  {
    "id": "s51",
    "movieId": "m38",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 340,
    "availableSeats": 254
  },
  {
    "id": "s52",
    "movieId": "m222",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 113
  },
  {
    "id": "s53",
    "movieId": "m38",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 420,
    "availableSeats": 163
  },
  {
    "id": "s54",
    "movieId": "m222",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 800,
    "availableSeats": 274
  },
  {
    "id": "s55",
    "movieId": "m222",
    "theatreId": "t7",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 185
  },
  {
    "id": "s56",
    "movieId": "m43",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 189
  },
  {
    "id": "s57",
    "movieId": "m22",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 267
  },
  {
    "id": "s58",
    "movieId": "m273",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 300
  },
  {
    "id": "s59",
    "movieId": "m43",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 770,
    "availableSeats": 187
  },
  {
    "id": "s60",
    "movieId": "m43",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 160
  },
  {
    "id": "s61",
    "movieId": "m135",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 198
  },
  {
    "id": "s62",
    "movieId": "m22",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 248
  },
  {
    "id": "s63",
    "movieId": "m22",
    "theatreId": "t8",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 147
  },
  {
    "id": "s64",
    "movieId": "m192",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 179
  },
  {
    "id": "s65",
    "movieId": "m192",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 660,
    "availableSeats": 112
  },
  {
    "id": "s66",
    "movieId": "m48",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 240,
    "availableSeats": 130
  },
  {
    "id": "s67",
    "movieId": "m58",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 253
  },
  {
    "id": "s68",
    "movieId": "m58",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 195
  },
  {
    "id": "s69",
    "movieId": "m192",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 260,
    "availableSeats": 59
  },
  {
    "id": "s70",
    "movieId": "m73",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 620,
    "availableSeats": 90
  },
  {
    "id": "s71",
    "movieId": "m58",
    "theatreId": "t9",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 228
  },
  {
    "id": "s72",
    "movieId": "m261",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 400,
    "availableSeats": 300
  },
  {
    "id": "s73",
    "movieId": "m77",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 271
  },
  {
    "id": "s74",
    "movieId": "m261",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 350,
    "availableSeats": 162
  },
  {
    "id": "s75",
    "movieId": "m41",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 295
  },
  {
    "id": "s76",
    "movieId": "m257",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 124
  },
  {
    "id": "s77",
    "movieId": "m257",
    "theatreId": "t10",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 780,
    "availableSeats": 126
  },
  {
    "id": "s78",
    "movieId": "m275",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 570,
    "availableSeats": 264
  },
  {
    "id": "s79",
    "movieId": "m188",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 680,
    "availableSeats": 199
  },
  {
    "id": "s80",
    "movieId": "m266",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 280,
    "availableSeats": 96
  },
  {
    "id": "s81",
    "movieId": "m275",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 270,
    "availableSeats": 57
  },
  {
    "id": "s82",
    "movieId": "m275",
    "theatreId": "t11",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 267
  },
  {
    "id": "s83",
    "movieId": "m164",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 610,
    "availableSeats": 204
  },
  {
    "id": "s84",
    "movieId": "m263",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 172
  },
  {
    "id": "s85",
    "movieId": "m263",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 251
  },
  {
    "id": "s86",
    "movieId": "m196",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 690,
    "availableSeats": 125
  },
  {
    "id": "s87",
    "movieId": "m263",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 183
  },
  {
    "id": "s88",
    "movieId": "m77",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 300
  },
  {
    "id": "s89",
    "movieId": "m164",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 200
  },
  {
    "id": "s90",
    "movieId": "m77",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 620,
    "availableSeats": 235
  },
  {
    "id": "s91",
    "movieId": "m77",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 284
  },
  {
    "id": "s92",
    "movieId": "m263",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 390,
    "availableSeats": 214
  },
  {
    "id": "s93",
    "movieId": "m263",
    "theatreId": "t12",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 320,
    "availableSeats": 82
  },
  {
    "id": "s94",
    "movieId": "m237",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 460,
    "availableSeats": 214
  },
  {
    "id": "s95",
    "movieId": "m168",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 245
  },
  {
    "id": "s96",
    "movieId": "m168",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 520,
    "availableSeats": 264
  },
  {
    "id": "s97",
    "movieId": "m237",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 200,
    "availableSeats": 121
  },
  {
    "id": "s98",
    "movieId": "m168",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 200
  },
  {
    "id": "s99",
    "movieId": "m126",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 172
  },
  {
    "id": "s100",
    "movieId": "m126",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 590,
    "availableSeats": 86
  },
  {
    "id": "s101",
    "movieId": "m295",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 252
  },
  {
    "id": "s102",
    "movieId": "m297",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 114
  },
  {
    "id": "s103",
    "movieId": "m295",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 71
  },
  {
    "id": "s104",
    "movieId": "m168",
    "theatreId": "t13",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 720,
    "availableSeats": 241
  },
  {
    "id": "s105",
    "movieId": "m252",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 246
  },
  {
    "id": "s106",
    "movieId": "m227",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 620,
    "availableSeats": 116
  },
  {
    "id": "s107",
    "movieId": "m193",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 267
  },
  {
    "id": "s108",
    "movieId": "m227",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 570,
    "availableSeats": 148
  },
  {
    "id": "s109",
    "movieId": "m22",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 770,
    "availableSeats": 274
  },
  {
    "id": "s110",
    "movieId": "m22",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 350,
    "availableSeats": 181
  },
  {
    "id": "s111",
    "movieId": "m252",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 212
  },
  {
    "id": "s112",
    "movieId": "m227",
    "theatreId": "t14",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 187
  },
  {
    "id": "s113",
    "movieId": "m53",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 255
  },
  {
    "id": "s114",
    "movieId": "m53",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 290,
    "availableSeats": 106
  },
  {
    "id": "s115",
    "movieId": "m34",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 192
  },
  {
    "id": "s116",
    "movieId": "m118",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 156
  },
  {
    "id": "s117",
    "movieId": "m53",
    "theatreId": "t15",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 298
  },
  {
    "id": "s118",
    "movieId": "m183",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 217
  },
  {
    "id": "s119",
    "movieId": "m118",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 248
  },
  {
    "id": "s120",
    "movieId": "m163",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 120
  },
  {
    "id": "s121",
    "movieId": "m163",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 68
  },
  {
    "id": "s122",
    "movieId": "m163",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 200,
    "availableSeats": 137
  },
  {
    "id": "s123",
    "movieId": "m118",
    "theatreId": "t16",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 410,
    "availableSeats": 189
  },
  {
    "id": "s124",
    "movieId": "m274",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 480,
    "availableSeats": 52
  },
  {
    "id": "s125",
    "movieId": "m194",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 480,
    "availableSeats": 277
  },
  {
    "id": "s126",
    "movieId": "m94",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 350,
    "availableSeats": 264
  },
  {
    "id": "s127",
    "movieId": "m274",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 570,
    "availableSeats": 91
  },
  {
    "id": "s128",
    "movieId": "m94",
    "theatreId": "t17",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 267
  },
  {
    "id": "s129",
    "movieId": "m103",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 210,
    "availableSeats": 275
  },
  {
    "id": "s130",
    "movieId": "m280",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 620,
    "availableSeats": 176
  },
  {
    "id": "s131",
    "movieId": "m280",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 127
  },
  {
    "id": "s132",
    "movieId": "m103",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 291
  },
  {
    "id": "s133",
    "movieId": "m193",
    "theatreId": "t18",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 410,
    "availableSeats": 248
  },
  {
    "id": "s134",
    "movieId": "m171",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 82
  },
  {
    "id": "s135",
    "movieId": "m11",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 380,
    "availableSeats": 292
  },
  {
    "id": "s136",
    "movieId": "m171",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 260,
    "availableSeats": 228
  },
  {
    "id": "s137",
    "movieId": "m11",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 87
  },
  {
    "id": "s138",
    "movieId": "m123",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 700,
    "availableSeats": 289
  },
  {
    "id": "s139",
    "movieId": "m123",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 221
  },
  {
    "id": "s140",
    "movieId": "m11",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 700,
    "availableSeats": 72
  },
  {
    "id": "s141",
    "movieId": "m223",
    "theatreId": "t19",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 76
  },
  {
    "id": "s142",
    "movieId": "m143",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 186
  },
  {
    "id": "s143",
    "movieId": "m63",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 96
  },
  {
    "id": "s144",
    "movieId": "m3",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 123
  },
  {
    "id": "s145",
    "movieId": "m64",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 157
  },
  {
    "id": "s146",
    "movieId": "m143",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 550,
    "availableSeats": 198
  },
  {
    "id": "s147",
    "movieId": "m64",
    "theatreId": "t20",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 730,
    "availableSeats": 220
  },
  {
    "id": "s148",
    "movieId": "m163",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 291
  },
  {
    "id": "s149",
    "movieId": "m108",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 299
  },
  {
    "id": "s150",
    "movieId": "m146",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 119
  },
  {
    "id": "s151",
    "movieId": "m272",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 241
  },
  {
    "id": "s152",
    "movieId": "m272",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 770,
    "availableSeats": 228
  },
  {
    "id": "s153",
    "movieId": "m277",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 740,
    "availableSeats": 79
  },
  {
    "id": "s154",
    "movieId": "m163",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 232
  },
  {
    "id": "s155",
    "movieId": "m272",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 101
  },
  {
    "id": "s156",
    "movieId": "m146",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 280,
    "availableSeats": 184
  },
  {
    "id": "s157",
    "movieId": "m146",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 100
  },
  {
    "id": "s158",
    "movieId": "m277",
    "theatreId": "t21",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 530,
    "availableSeats": 161
  },
  {
    "id": "s159",
    "movieId": "m100",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 260,
    "availableSeats": 103
  },
  {
    "id": "s160",
    "movieId": "m258",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 214
  },
  {
    "id": "s161",
    "movieId": "m298",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 159
  },
  {
    "id": "s162",
    "movieId": "m298",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 210,
    "availableSeats": 58
  },
  {
    "id": "s163",
    "movieId": "m100",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 490,
    "availableSeats": 103
  },
  {
    "id": "s164",
    "movieId": "m184",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 282
  },
  {
    "id": "s165",
    "movieId": "m298",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 298
  },
  {
    "id": "s166",
    "movieId": "m258",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 234
  },
  {
    "id": "s167",
    "movieId": "m272",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 188
  },
  {
    "id": "s168",
    "movieId": "m258",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 188
  },
  {
    "id": "s169",
    "movieId": "m298",
    "theatreId": "t22",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 280,
    "availableSeats": 115
  },
  {
    "id": "s170",
    "movieId": "m53",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 246
  },
  {
    "id": "s171",
    "movieId": "m235",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 660,
    "availableSeats": 289
  },
  {
    "id": "s172",
    "movieId": "m53",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 630,
    "availableSeats": 235
  },
  {
    "id": "s173",
    "movieId": "m53",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 780,
    "availableSeats": 222
  },
  {
    "id": "s174",
    "movieId": "m235",
    "theatreId": "t23",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 80
  },
  {
    "id": "s175",
    "movieId": "m197",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 244
  },
  {
    "id": "s176",
    "movieId": "m191",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 320,
    "availableSeats": 152
  },
  {
    "id": "s177",
    "movieId": "m95",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 230,
    "availableSeats": 204
  },
  {
    "id": "s178",
    "movieId": "m95",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 57
  },
  {
    "id": "s179",
    "movieId": "m95",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 225
  },
  {
    "id": "s180",
    "movieId": "m131",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 221
  },
  {
    "id": "s181",
    "movieId": "m197",
    "theatreId": "t24",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 460,
    "availableSeats": 236
  },
  {
    "id": "s182",
    "movieId": "m190",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 710,
    "availableSeats": 150
  },
  {
    "id": "s183",
    "movieId": "m1",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 143
  },
  {
    "id": "s184",
    "movieId": "m1",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 260,
    "availableSeats": 161
  },
  {
    "id": "s185",
    "movieId": "m17",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 660,
    "availableSeats": 263
  },
  {
    "id": "s186",
    "movieId": "m190",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 54
  },
  {
    "id": "s187",
    "movieId": "m1",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 227
  },
  {
    "id": "s188",
    "movieId": "m17",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 223
  },
  {
    "id": "s189",
    "movieId": "m190",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 151
  },
  {
    "id": "s190",
    "movieId": "m252",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 320,
    "availableSeats": 51
  },
  {
    "id": "s191",
    "movieId": "m228",
    "theatreId": "t25",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 178
  },
  {
    "id": "s192",
    "movieId": "m294",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 310,
    "availableSeats": 296
  },
  {
    "id": "s193",
    "movieId": "m106",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 242
  },
  {
    "id": "s194",
    "movieId": "m106",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 560,
    "availableSeats": 131
  },
  {
    "id": "s195",
    "movieId": "m152",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 298
  },
  {
    "id": "s196",
    "movieId": "m106",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 256
  },
  {
    "id": "s197",
    "movieId": "m152",
    "theatreId": "t26",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 242
  },
  {
    "id": "s198",
    "movieId": "m187",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 276
  },
  {
    "id": "s199",
    "movieId": "m223",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 250,
    "availableSeats": 227
  },
  {
    "id": "s200",
    "movieId": "m223",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 210,
    "availableSeats": 181
  },
  {
    "id": "s201",
    "movieId": "m26",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 530,
    "availableSeats": 111
  },
  {
    "id": "s202",
    "movieId": "m187",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 430,
    "availableSeats": 230
  },
  {
    "id": "s203",
    "movieId": "m187",
    "theatreId": "t27",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 56
  },
  {
    "id": "s204",
    "movieId": "m197",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 75
  },
  {
    "id": "s205",
    "movieId": "m140",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 221
  },
  {
    "id": "s206",
    "movieId": "m232",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 500,
    "availableSeats": 150
  },
  {
    "id": "s207",
    "movieId": "m232",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 51
  },
  {
    "id": "s208",
    "movieId": "m24",
    "theatreId": "t28",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 92
  },
  {
    "id": "s209",
    "movieId": "m187",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 127
  },
  {
    "id": "s210",
    "movieId": "m187",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 680,
    "availableSeats": 222
  },
  {
    "id": "s211",
    "movieId": "m125",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 234
  },
  {
    "id": "s212",
    "movieId": "m125",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 142
  },
  {
    "id": "s213",
    "movieId": "m163",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 300,
    "availableSeats": 258
  },
  {
    "id": "s214",
    "movieId": "m165",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 215
  },
  {
    "id": "s215",
    "movieId": "m298",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 235
  },
  {
    "id": "s216",
    "movieId": "m165",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 210,
    "availableSeats": 196
  },
  {
    "id": "s217",
    "movieId": "m163",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 107
  },
  {
    "id": "s218",
    "movieId": "m163",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 287
  },
  {
    "id": "s219",
    "movieId": "m125",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 253
  },
  {
    "id": "s220",
    "movieId": "m298",
    "theatreId": "t29",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 97
  },
  {
    "id": "s221",
    "movieId": "m75",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 141
  },
  {
    "id": "s222",
    "movieId": "m65",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 72
  },
  {
    "id": "s223",
    "movieId": "m176",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 62
  },
  {
    "id": "s224",
    "movieId": "m4",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 209
  },
  {
    "id": "s225",
    "movieId": "m176",
    "theatreId": "t30",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 102
  },
  {
    "id": "s226",
    "movieId": "m46",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 233
  },
  {
    "id": "s227",
    "movieId": "m123",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 500,
    "availableSeats": 182
  },
  {
    "id": "s228",
    "movieId": "m269",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 204
  },
  {
    "id": "s229",
    "movieId": "m123",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 154
  },
  {
    "id": "s230",
    "movieId": "m114",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 93
  },
  {
    "id": "s231",
    "movieId": "m123",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 670,
    "availableSeats": 65
  },
  {
    "id": "s232",
    "movieId": "m46",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 370,
    "availableSeats": 134
  },
  {
    "id": "s233",
    "movieId": "m269",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 680,
    "availableSeats": 152
  },
  {
    "id": "s234",
    "movieId": "m114",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 710,
    "availableSeats": 154
  },
  {
    "id": "s235",
    "movieId": "m269",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 190
  },
  {
    "id": "s236",
    "movieId": "m269",
    "theatreId": "t31",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 390,
    "availableSeats": 183
  },
  {
    "id": "s237",
    "movieId": "m29",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 420,
    "availableSeats": 143
  },
  {
    "id": "s238",
    "movieId": "m270",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 213
  },
  {
    "id": "s239",
    "movieId": "m297",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 800,
    "availableSeats": 199
  },
  {
    "id": "s240",
    "movieId": "m279",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 149
  },
  {
    "id": "s241",
    "movieId": "m108",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 58
  },
  {
    "id": "s242",
    "movieId": "m108",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 133
  },
  {
    "id": "s243",
    "movieId": "m29",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 620,
    "availableSeats": 156
  },
  {
    "id": "s244",
    "movieId": "m108",
    "theatreId": "t32",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 116
  },
  {
    "id": "s245",
    "movieId": "m166",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 188
  },
  {
    "id": "s246",
    "movieId": "m166",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 210
  },
  {
    "id": "s247",
    "movieId": "m286",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 590,
    "availableSeats": 50
  },
  {
    "id": "s248",
    "movieId": "m286",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 289
  },
  {
    "id": "s249",
    "movieId": "m94",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 200
  },
  {
    "id": "s250",
    "movieId": "m156",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 450,
    "availableSeats": 273
  },
  {
    "id": "s251",
    "movieId": "m286",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 53
  },
  {
    "id": "s252",
    "movieId": "m148",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 800,
    "availableSeats": 132
  },
  {
    "id": "s253",
    "movieId": "m286",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 650,
    "availableSeats": 99
  },
  {
    "id": "s254",
    "movieId": "m148",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 750,
    "availableSeats": 250
  },
  {
    "id": "s255",
    "movieId": "m166",
    "theatreId": "t33",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 300,
    "availableSeats": 87
  },
  {
    "id": "s256",
    "movieId": "m11",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 271
  },
  {
    "id": "s257",
    "movieId": "m155",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 270,
    "availableSeats": 241
  },
  {
    "id": "s258",
    "movieId": "m155",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 150
  },
  {
    "id": "s259",
    "movieId": "m155",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 133
  },
  {
    "id": "s260",
    "movieId": "m155",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 184
  },
  {
    "id": "s261",
    "movieId": "m298",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 135
  },
  {
    "id": "s262",
    "movieId": "m16",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 189
  },
  {
    "id": "s263",
    "movieId": "m211",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 74
  },
  {
    "id": "s264",
    "movieId": "m298",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 263
  },
  {
    "id": "s265",
    "movieId": "m11",
    "theatreId": "t34",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 470,
    "availableSeats": 252
  },
  {
    "id": "s266",
    "movieId": "m117",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 66
  },
  {
    "id": "s267",
    "movieId": "m87",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 257
  },
  {
    "id": "s268",
    "movieId": "m182",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 227
  },
  {
    "id": "s269",
    "movieId": "m87",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 610,
    "availableSeats": 266
  },
  {
    "id": "s270",
    "movieId": "m96",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 590,
    "availableSeats": 247
  },
  {
    "id": "s271",
    "movieId": "m96",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 350,
    "availableSeats": 169
  },
  {
    "id": "s272",
    "movieId": "m96",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 760,
    "availableSeats": 62
  },
  {
    "id": "s273",
    "movieId": "m182",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 530,
    "availableSeats": 188
  },
  {
    "id": "s274",
    "movieId": "m117",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 96
  },
  {
    "id": "s275",
    "movieId": "m117",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 620,
    "availableSeats": 124
  },
  {
    "id": "s276",
    "movieId": "m117",
    "theatreId": "t35",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 94
  },
  {
    "id": "s277",
    "movieId": "m83",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 174
  },
  {
    "id": "s278",
    "movieId": "m73",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 102
  },
  {
    "id": "s279",
    "movieId": "m218",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 280
  },
  {
    "id": "s280",
    "movieId": "m161",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 214
  },
  {
    "id": "s281",
    "movieId": "m83",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 300,
    "availableSeats": 164
  },
  {
    "id": "s282",
    "movieId": "m73",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 240
  },
  {
    "id": "s283",
    "movieId": "m299",
    "theatreId": "t36",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 218
  },
  {
    "id": "s284",
    "movieId": "m297",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 293
  },
  {
    "id": "s285",
    "movieId": "m167",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 78
  },
  {
    "id": "s286",
    "movieId": "m8",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 160
  },
  {
    "id": "s287",
    "movieId": "m167",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 278
  },
  {
    "id": "s288",
    "movieId": "m10",
    "theatreId": "t37",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 710,
    "availableSeats": 260
  },
  {
    "id": "s289",
    "movieId": "m70",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 770,
    "availableSeats": 227
  },
  {
    "id": "s290",
    "movieId": "m260",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 203
  },
  {
    "id": "s291",
    "movieId": "m222",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 680,
    "availableSeats": 256
  },
  {
    "id": "s292",
    "movieId": "m225",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 660,
    "availableSeats": 140
  },
  {
    "id": "s293",
    "movieId": "m222",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 208
  },
  {
    "id": "s294",
    "movieId": "m225",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 430,
    "availableSeats": 245
  },
  {
    "id": "s295",
    "movieId": "m222",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 730,
    "availableSeats": 158
  },
  {
    "id": "s296",
    "movieId": "m70",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 67
  },
  {
    "id": "s297",
    "movieId": "m260",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 310,
    "availableSeats": 246
  },
  {
    "id": "s298",
    "movieId": "m260",
    "theatreId": "t38",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 57
  },
  {
    "id": "s299",
    "movieId": "m102",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 60
  },
  {
    "id": "s300",
    "movieId": "m85",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 730,
    "availableSeats": 156
  },
  {
    "id": "s301",
    "movieId": "m210",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 390,
    "availableSeats": 123
  },
  {
    "id": "s302",
    "movieId": "m85",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 285
  },
  {
    "id": "s303",
    "movieId": "m102",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 206
  },
  {
    "id": "s304",
    "movieId": "m298",
    "theatreId": "t39",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 490,
    "availableSeats": 173
  },
  {
    "id": "s305",
    "movieId": "m108",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 410,
    "availableSeats": 112
  },
  {
    "id": "s306",
    "movieId": "m214",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 64
  },
  {
    "id": "s307",
    "movieId": "m197",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 162
  },
  {
    "id": "s308",
    "movieId": "m275",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 114
  },
  {
    "id": "s309",
    "movieId": "m108",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 213
  },
  {
    "id": "s310",
    "movieId": "m214",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 99
  },
  {
    "id": "s311",
    "movieId": "m275",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 215
  },
  {
    "id": "s312",
    "movieId": "m214",
    "theatreId": "t40",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 272
  },
  {
    "id": "s313",
    "movieId": "m268",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 193
  },
  {
    "id": "s314",
    "movieId": "m286",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 72
  },
  {
    "id": "s315",
    "movieId": "m268",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 291
  },
  {
    "id": "s316",
    "movieId": "m186",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 222
  },
  {
    "id": "s317",
    "movieId": "m268",
    "theatreId": "t41",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 171
  },
  {
    "id": "s318",
    "movieId": "m143",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 202
  },
  {
    "id": "s319",
    "movieId": "m243",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 288
  },
  {
    "id": "s320",
    "movieId": "m243",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 230,
    "availableSeats": 217
  },
  {
    "id": "s321",
    "movieId": "m177",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 200,
    "availableSeats": 137
  },
  {
    "id": "s322",
    "movieId": "m143",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 260
  },
  {
    "id": "s323",
    "movieId": "m143",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 740,
    "availableSeats": 214
  },
  {
    "id": "s324",
    "movieId": "m194",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 229
  },
  {
    "id": "s325",
    "movieId": "m177",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 340,
    "availableSeats": 231
  },
  {
    "id": "s326",
    "movieId": "m177",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 570,
    "availableSeats": 208
  },
  {
    "id": "s327",
    "movieId": "m177",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 690,
    "availableSeats": 64
  },
  {
    "id": "s328",
    "movieId": "m243",
    "theatreId": "t42",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 292
  },
  {
    "id": "s329",
    "movieId": "m97",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 730,
    "availableSeats": 98
  },
  {
    "id": "s330",
    "movieId": "m138",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 650,
    "availableSeats": 242
  },
  {
    "id": "s331",
    "movieId": "m275",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 99
  },
  {
    "id": "s332",
    "movieId": "m114",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 280,
    "availableSeats": 62
  },
  {
    "id": "s333",
    "movieId": "m97",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 282
  },
  {
    "id": "s334",
    "movieId": "m114",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 238
  },
  {
    "id": "s335",
    "movieId": "m275",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 233
  },
  {
    "id": "s336",
    "movieId": "m114",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 630,
    "availableSeats": 218
  },
  {
    "id": "s337",
    "movieId": "m138",
    "theatreId": "t43",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 64
  },
  {
    "id": "s338",
    "movieId": "m244",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 219
  },
  {
    "id": "s339",
    "movieId": "m117",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 420,
    "availableSeats": 155
  },
  {
    "id": "s340",
    "movieId": "m59",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 580,
    "availableSeats": 264
  },
  {
    "id": "s341",
    "movieId": "m117",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 235
  },
  {
    "id": "s342",
    "movieId": "m244",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 200,
    "availableSeats": 111
  },
  {
    "id": "s343",
    "movieId": "m117",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 260,
    "availableSeats": 56
  },
  {
    "id": "s344",
    "movieId": "m117",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 350,
    "availableSeats": 68
  },
  {
    "id": "s345",
    "movieId": "m59",
    "theatreId": "t44",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 700,
    "availableSeats": 269
  },
  {
    "id": "s346",
    "movieId": "m197",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 94
  },
  {
    "id": "s347",
    "movieId": "m39",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 171
  },
  {
    "id": "s348",
    "movieId": "m260",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 99
  },
  {
    "id": "s349",
    "movieId": "m39",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 570,
    "availableSeats": 245
  },
  {
    "id": "s350",
    "movieId": "m39",
    "theatreId": "t45",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 264
  },
  {
    "id": "s351",
    "movieId": "m279",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 500,
    "availableSeats": 59
  },
  {
    "id": "s352",
    "movieId": "m279",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 680,
    "availableSeats": 239
  },
  {
    "id": "s353",
    "movieId": "m243",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 164
  },
  {
    "id": "s354",
    "movieId": "m4",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 250,
    "availableSeats": 80
  },
  {
    "id": "s355",
    "movieId": "m48",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 291
  },
  {
    "id": "s356",
    "movieId": "m279",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 117
  },
  {
    "id": "s357",
    "movieId": "m300",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 520,
    "availableSeats": 84
  },
  {
    "id": "s358",
    "movieId": "m48",
    "theatreId": "t46",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 770,
    "availableSeats": 215
  },
  {
    "id": "s359",
    "movieId": "m195",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 225
  },
  {
    "id": "s360",
    "movieId": "m95",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 227
  },
  {
    "id": "s361",
    "movieId": "m195",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 278
  },
  {
    "id": "s362",
    "movieId": "m195",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 280,
    "availableSeats": 172
  },
  {
    "id": "s363",
    "movieId": "m95",
    "theatreId": "t47",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 200,
    "availableSeats": 242
  },
  {
    "id": "s364",
    "movieId": "m289",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 410,
    "availableSeats": 68
  },
  {
    "id": "s365",
    "movieId": "m51",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 760,
    "availableSeats": 236
  },
  {
    "id": "s366",
    "movieId": "m289",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 95
  },
  {
    "id": "s367",
    "movieId": "m289",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 197
  },
  {
    "id": "s368",
    "movieId": "m51",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 260,
    "availableSeats": 196
  },
  {
    "id": "s369",
    "movieId": "m247",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 213
  },
  {
    "id": "s370",
    "movieId": "m155",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 89
  },
  {
    "id": "s371",
    "movieId": "m289",
    "theatreId": "t48",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 67
  },
  {
    "id": "s372",
    "movieId": "m121",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 119
  },
  {
    "id": "s373",
    "movieId": "m244",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 219
  },
  {
    "id": "s374",
    "movieId": "m252",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 560,
    "availableSeats": 152
  },
  {
    "id": "s375",
    "movieId": "m121",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 153
  },
  {
    "id": "s376",
    "movieId": "m258",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 340,
    "availableSeats": 248
  },
  {
    "id": "s377",
    "movieId": "m121",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 157
  },
  {
    "id": "s378",
    "movieId": "m258",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 540,
    "availableSeats": 195
  },
  {
    "id": "s379",
    "movieId": "m244",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 229
  },
  {
    "id": "s380",
    "movieId": "m121",
    "theatreId": "t49",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 56
  },
  {
    "id": "s381",
    "movieId": "m282",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 300,
    "availableSeats": 254
  },
  {
    "id": "s382",
    "movieId": "m91",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 60
  },
  {
    "id": "s383",
    "movieId": "m91",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 230,
    "availableSeats": 93
  },
  {
    "id": "s384",
    "movieId": "m282",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 154
  },
  {
    "id": "s385",
    "movieId": "m78",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 134
  },
  {
    "id": "s386",
    "movieId": "m91",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 185
  },
  {
    "id": "s387",
    "movieId": "m91",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 215
  },
  {
    "id": "s388",
    "movieId": "m91",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 430,
    "availableSeats": 182
  },
  {
    "id": "s389",
    "movieId": "m78",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 170
  },
  {
    "id": "s390",
    "movieId": "m282",
    "theatreId": "t50",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 620,
    "availableSeats": 61
  },
  {
    "id": "s391",
    "movieId": "m220",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 540,
    "availableSeats": 212
  },
  {
    "id": "s392",
    "movieId": "m158",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 440,
    "availableSeats": 275
  },
  {
    "id": "s393",
    "movieId": "m201",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 298
  },
  {
    "id": "s394",
    "movieId": "m201",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 197
  },
  {
    "id": "s395",
    "movieId": "m174",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 220,
    "availableSeats": 55
  },
  {
    "id": "s396",
    "movieId": "m158",
    "theatreId": "t51",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 410,
    "availableSeats": 63
  },
  {
    "id": "s397",
    "movieId": "m220",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 290
  },
  {
    "id": "s398",
    "movieId": "m106",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 265
  },
  {
    "id": "s399",
    "movieId": "m106",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 289
  },
  {
    "id": "s400",
    "movieId": "m220",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 258
  },
  {
    "id": "s401",
    "movieId": "m106",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 710,
    "availableSeats": 124
  },
  {
    "id": "s402",
    "movieId": "m260",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 750,
    "availableSeats": 213
  },
  {
    "id": "s403",
    "movieId": "m220",
    "theatreId": "t52",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 80
  },
  {
    "id": "s404",
    "movieId": "m165",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 129
  },
  {
    "id": "s405",
    "movieId": "m165",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 650,
    "availableSeats": 281
  },
  {
    "id": "s406",
    "movieId": "m165",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 550,
    "availableSeats": 186
  },
  {
    "id": "s407",
    "movieId": "m165",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 239
  },
  {
    "id": "s408",
    "movieId": "m165",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 550,
    "availableSeats": 128
  },
  {
    "id": "s409",
    "movieId": "m94",
    "theatreId": "t53",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 670,
    "availableSeats": 143
  },
  {
    "id": "s410",
    "movieId": "m145",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 89
  },
  {
    "id": "s411",
    "movieId": "m251",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 181
  },
  {
    "id": "s412",
    "movieId": "m251",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 420,
    "availableSeats": 189
  },
  {
    "id": "s413",
    "movieId": "m126",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 293
  },
  {
    "id": "s414",
    "movieId": "m126",
    "theatreId": "t54",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 340,
    "availableSeats": 113
  },
  {
    "id": "s415",
    "movieId": "m196",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 97
  },
  {
    "id": "s416",
    "movieId": "m132",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 196
  },
  {
    "id": "s417",
    "movieId": "m232",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 210,
    "availableSeats": 112
  },
  {
    "id": "s418",
    "movieId": "m108",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 250
  },
  {
    "id": "s419",
    "movieId": "m196",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 70
  },
  {
    "id": "s420",
    "movieId": "m232",
    "theatreId": "t55",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 570,
    "availableSeats": 175
  },
  {
    "id": "s421",
    "movieId": "m119",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 520,
    "availableSeats": 195
  },
  {
    "id": "s422",
    "movieId": "m224",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 58
  },
  {
    "id": "s423",
    "movieId": "m11",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 199
  },
  {
    "id": "s424",
    "movieId": "m224",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 167
  },
  {
    "id": "s425",
    "movieId": "m224",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 610,
    "availableSeats": 282
  },
  {
    "id": "s426",
    "movieId": "m119",
    "theatreId": "t56",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 620,
    "availableSeats": 87
  },
  {
    "id": "s427",
    "movieId": "m199",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 390,
    "availableSeats": 217
  },
  {
    "id": "s428",
    "movieId": "m199",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 75
  },
  {
    "id": "s429",
    "movieId": "m226",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 500,
    "availableSeats": 78
  },
  {
    "id": "s430",
    "movieId": "m199",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 59
  },
  {
    "id": "s431",
    "movieId": "m199",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 250,
    "availableSeats": 176
  },
  {
    "id": "s432",
    "movieId": "m122",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 130
  },
  {
    "id": "s433",
    "movieId": "m122",
    "theatreId": "t57",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 270,
    "availableSeats": 150
  },
  {
    "id": "s434",
    "movieId": "m97",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 700,
    "availableSeats": 298
  },
  {
    "id": "s435",
    "movieId": "m9",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 132
  },
  {
    "id": "s436",
    "movieId": "m118",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 430,
    "availableSeats": 156
  },
  {
    "id": "s437",
    "movieId": "m97",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 550,
    "availableSeats": 61
  },
  {
    "id": "s438",
    "movieId": "m118",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 520,
    "availableSeats": 296
  },
  {
    "id": "s439",
    "movieId": "m118",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 278
  },
  {
    "id": "s440",
    "movieId": "m103",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 211
  },
  {
    "id": "s441",
    "movieId": "m9",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 71
  },
  {
    "id": "s442",
    "movieId": "m103",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 530,
    "availableSeats": 134
  },
  {
    "id": "s443",
    "movieId": "m103",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 450,
    "availableSeats": 119
  },
  {
    "id": "s444",
    "movieId": "m9",
    "theatreId": "t58",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 206
  },
  {
    "id": "s445",
    "movieId": "m88",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 145
  },
  {
    "id": "s446",
    "movieId": "m243",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 790,
    "availableSeats": 204
  },
  {
    "id": "s447",
    "movieId": "m56",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 58
  },
  {
    "id": "s448",
    "movieId": "m56",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 660,
    "availableSeats": 282
  },
  {
    "id": "s449",
    "movieId": "m183",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 770,
    "availableSeats": 133
  },
  {
    "id": "s450",
    "movieId": "m183",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 350,
    "availableSeats": 282
  },
  {
    "id": "s451",
    "movieId": "m183",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 340,
    "availableSeats": 59
  },
  {
    "id": "s452",
    "movieId": "m88",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 450,
    "availableSeats": 108
  },
  {
    "id": "s453",
    "movieId": "m243",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 760,
    "availableSeats": 247
  },
  {
    "id": "s454",
    "movieId": "m56",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 91
  },
  {
    "id": "s455",
    "movieId": "m88",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 171
  },
  {
    "id": "s456",
    "movieId": "m183",
    "theatreId": "t59",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 410,
    "availableSeats": 100
  },
  {
    "id": "s457",
    "movieId": "m256",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 122
  },
  {
    "id": "s458",
    "movieId": "m256",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 710,
    "availableSeats": 190
  },
  {
    "id": "s459",
    "movieId": "m254",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 106
  },
  {
    "id": "s460",
    "movieId": "m256",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 800,
    "availableSeats": 266
  },
  {
    "id": "s461",
    "movieId": "m82",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 650,
    "availableSeats": 55
  },
  {
    "id": "s462",
    "movieId": "m256",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 70
  },
  {
    "id": "s463",
    "movieId": "m254",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 237
  },
  {
    "id": "s464",
    "movieId": "m108",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 270,
    "availableSeats": 96
  },
  {
    "id": "s465",
    "movieId": "m64",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 350,
    "availableSeats": 300
  },
  {
    "id": "s466",
    "movieId": "m64",
    "theatreId": "t60",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 134
  },
  {
    "id": "s467",
    "movieId": "m285",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 430,
    "availableSeats": 252
  },
  {
    "id": "s468",
    "movieId": "m5",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 254
  },
  {
    "id": "s469",
    "movieId": "m252",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 230
  },
  {
    "id": "s470",
    "movieId": "m227",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 330,
    "availableSeats": 130
  },
  {
    "id": "s471",
    "movieId": "m5",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 251
  },
  {
    "id": "s472",
    "movieId": "m227",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 720,
    "availableSeats": 71
  },
  {
    "id": "s473",
    "movieId": "m5",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 690,
    "availableSeats": 61
  },
  {
    "id": "s474",
    "movieId": "m285",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 350,
    "availableSeats": 243
  },
  {
    "id": "s475",
    "movieId": "m34",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 278
  },
  {
    "id": "s476",
    "movieId": "m252",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 450,
    "availableSeats": 69
  },
  {
    "id": "s477",
    "movieId": "m285",
    "theatreId": "t61",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 136
  },
  {
    "id": "s478",
    "movieId": "m78",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 146
  },
  {
    "id": "s479",
    "movieId": "m247",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 102
  },
  {
    "id": "s480",
    "movieId": "m172",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 760,
    "availableSeats": 118
  },
  {
    "id": "s481",
    "movieId": "m78",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 193
  },
  {
    "id": "s482",
    "movieId": "m78",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 530,
    "availableSeats": 55
  },
  {
    "id": "s483",
    "movieId": "m15",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 126
  },
  {
    "id": "s484",
    "movieId": "m15",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 520,
    "availableSeats": 72
  },
  {
    "id": "s485",
    "movieId": "m172",
    "theatreId": "t62",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 183
  },
  {
    "id": "s486",
    "movieId": "m197",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 220
  },
  {
    "id": "s487",
    "movieId": "m197",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 480,
    "availableSeats": 196
  },
  {
    "id": "s488",
    "movieId": "m197",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 214
  },
  {
    "id": "s489",
    "movieId": "m60",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 243
  },
  {
    "id": "s490",
    "movieId": "m293",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 570,
    "availableSeats": 131
  },
  {
    "id": "s491",
    "movieId": "m295",
    "theatreId": "t63",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 320,
    "availableSeats": 231
  },
  {
    "id": "s492",
    "movieId": "m286",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 259
  },
  {
    "id": "s493",
    "movieId": "m286",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 720,
    "availableSeats": 247
  },
  {
    "id": "s494",
    "movieId": "m213",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 300,
    "availableSeats": 253
  },
  {
    "id": "s495",
    "movieId": "m129",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 181
  },
  {
    "id": "s496",
    "movieId": "m109",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 560,
    "availableSeats": 219
  },
  {
    "id": "s497",
    "movieId": "m213",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 234
  },
  {
    "id": "s498",
    "movieId": "m109",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 57
  },
  {
    "id": "s499",
    "movieId": "m213",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 570,
    "availableSeats": 156
  },
  {
    "id": "s500",
    "movieId": "m213",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 119
  },
  {
    "id": "s501",
    "movieId": "m129",
    "theatreId": "t64",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 210,
    "availableSeats": 151
  },
  {
    "id": "s502",
    "movieId": "m267",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 240,
    "availableSeats": 274
  },
  {
    "id": "s503",
    "movieId": "m267",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 126
  },
  {
    "id": "s504",
    "movieId": "m130",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 140
  },
  {
    "id": "s505",
    "movieId": "m275",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 720,
    "availableSeats": 272
  },
  {
    "id": "s506",
    "movieId": "m275",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 410,
    "availableSeats": 197
  },
  {
    "id": "s507",
    "movieId": "m123",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 236
  },
  {
    "id": "s508",
    "movieId": "m267",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 131
  },
  {
    "id": "s509",
    "movieId": "m267",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 550,
    "availableSeats": 199
  },
  {
    "id": "s510",
    "movieId": "m267",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 117
  },
  {
    "id": "s511",
    "movieId": "m275",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 220,
    "availableSeats": 265
  },
  {
    "id": "s512",
    "movieId": "m123",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 99
  },
  {
    "id": "s513",
    "movieId": "m130",
    "theatreId": "t65",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 210,
    "availableSeats": 197
  },
  {
    "id": "s514",
    "movieId": "m108",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 82
  },
  {
    "id": "s515",
    "movieId": "m144",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 204
  },
  {
    "id": "s516",
    "movieId": "m100",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 200,
    "availableSeats": 223
  },
  {
    "id": "s517",
    "movieId": "m80",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 410,
    "availableSeats": 167
  },
  {
    "id": "s518",
    "movieId": "m100",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 183
  },
  {
    "id": "s519",
    "movieId": "m208",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 440,
    "availableSeats": 64
  },
  {
    "id": "s520",
    "movieId": "m80",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 198
  },
  {
    "id": "s521",
    "movieId": "m108",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 85
  },
  {
    "id": "s522",
    "movieId": "m144",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 167
  },
  {
    "id": "s523",
    "movieId": "m208",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 235
  },
  {
    "id": "s524",
    "movieId": "m144",
    "theatreId": "t66",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 680,
    "availableSeats": 232
  },
  {
    "id": "s525",
    "movieId": "m64",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 410,
    "availableSeats": 223
  },
  {
    "id": "s526",
    "movieId": "m64",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 270,
    "availableSeats": 78
  },
  {
    "id": "s527",
    "movieId": "m218",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 770,
    "availableSeats": 52
  },
  {
    "id": "s528",
    "movieId": "m104",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 221
  },
  {
    "id": "s529",
    "movieId": "m218",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 480,
    "availableSeats": 233
  },
  {
    "id": "s530",
    "movieId": "m218",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 330,
    "availableSeats": 66
  },
  {
    "id": "s531",
    "movieId": "m270",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 280,
    "availableSeats": 143
  },
  {
    "id": "s532",
    "movieId": "m270",
    "theatreId": "t67",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 470,
    "availableSeats": 207
  },
  {
    "id": "s533",
    "movieId": "m226",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 84
  },
  {
    "id": "s534",
    "movieId": "m194",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 158
  },
  {
    "id": "s535",
    "movieId": "m194",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 219
  },
  {
    "id": "s536",
    "movieId": "m194",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 186
  },
  {
    "id": "s537",
    "movieId": "m226",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 132
  },
  {
    "id": "s538",
    "movieId": "m216",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 86
  },
  {
    "id": "s539",
    "movieId": "m35",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 195
  },
  {
    "id": "s540",
    "movieId": "m216",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 300,
    "availableSeats": 57
  },
  {
    "id": "s541",
    "movieId": "m226",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 300,
    "availableSeats": 273
  },
  {
    "id": "s542",
    "movieId": "m226",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 64
  },
  {
    "id": "s543",
    "movieId": "m226",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 235
  },
  {
    "id": "s544",
    "movieId": "m75",
    "theatreId": "t68",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 780,
    "availableSeats": 194
  },
  {
    "id": "s545",
    "movieId": "m228",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 590,
    "availableSeats": 150
  },
  {
    "id": "s546",
    "movieId": "m228",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 267
  },
  {
    "id": "s547",
    "movieId": "m142",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 168
  },
  {
    "id": "s548",
    "movieId": "m155",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 137
  },
  {
    "id": "s549",
    "movieId": "m142",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 340,
    "availableSeats": 201
  },
  {
    "id": "s550",
    "movieId": "m146",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 266
  },
  {
    "id": "s551",
    "movieId": "m155",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 360,
    "availableSeats": 166
  },
  {
    "id": "s552",
    "movieId": "m142",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 247
  },
  {
    "id": "s553",
    "movieId": "m155",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 680,
    "availableSeats": 161
  },
  {
    "id": "s554",
    "movieId": "m142",
    "theatreId": "t69",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 570,
    "availableSeats": 99
  },
  {
    "id": "s555",
    "movieId": "m15",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 270,
    "availableSeats": 165
  },
  {
    "id": "s556",
    "movieId": "m19",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 85
  },
  {
    "id": "s557",
    "movieId": "m7",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 400,
    "availableSeats": 218
  },
  {
    "id": "s558",
    "movieId": "m19",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 320,
    "availableSeats": 247
  },
  {
    "id": "s559",
    "movieId": "m84",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 570,
    "availableSeats": 137
  },
  {
    "id": "s560",
    "movieId": "m84",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 289
  },
  {
    "id": "s561",
    "movieId": "m19",
    "theatreId": "t70",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 230,
    "availableSeats": 161
  },
  {
    "id": "s562",
    "movieId": "m271",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 174
  },
  {
    "id": "s563",
    "movieId": "m173",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 300
  },
  {
    "id": "s564",
    "movieId": "m173",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 400,
    "availableSeats": 70
  },
  {
    "id": "s565",
    "movieId": "m199",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 179
  },
  {
    "id": "s566",
    "movieId": "m173",
    "theatreId": "t71",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 550,
    "availableSeats": 79
  },
  {
    "id": "s567",
    "movieId": "m142",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 186
  },
  {
    "id": "s568",
    "movieId": "m132",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 142
  },
  {
    "id": "s569",
    "movieId": "m34",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 186
  },
  {
    "id": "s570",
    "movieId": "m7",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 129
  },
  {
    "id": "s571",
    "movieId": "m132",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 148
  },
  {
    "id": "s572",
    "movieId": "m7",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 620,
    "availableSeats": 277
  },
  {
    "id": "s573",
    "movieId": "m7",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 760,
    "availableSeats": 154
  },
  {
    "id": "s574",
    "movieId": "m34",
    "theatreId": "t72",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 430,
    "availableSeats": 80
  },
  {
    "id": "s575",
    "movieId": "m74",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 250,
    "availableSeats": 71
  },
  {
    "id": "s576",
    "movieId": "m296",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 269
  },
  {
    "id": "s577",
    "movieId": "m76",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 380,
    "availableSeats": 183
  },
  {
    "id": "s578",
    "movieId": "m20",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 390,
    "availableSeats": 175
  },
  {
    "id": "s579",
    "movieId": "m91",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 285
  },
  {
    "id": "s580",
    "movieId": "m76",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 210,
    "availableSeats": 186
  },
  {
    "id": "s581",
    "movieId": "m20",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 85
  },
  {
    "id": "s582",
    "movieId": "m296",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 560,
    "availableSeats": 117
  },
  {
    "id": "s583",
    "movieId": "m91",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 540,
    "availableSeats": 246
  },
  {
    "id": "s584",
    "movieId": "m91",
    "theatreId": "t73",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 204
  },
  {
    "id": "s585",
    "movieId": "m203",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 280,
    "availableSeats": 224
  },
  {
    "id": "s586",
    "movieId": "m40",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 73
  },
  {
    "id": "s587",
    "movieId": "m199",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 620,
    "availableSeats": 164
  },
  {
    "id": "s588",
    "movieId": "m203",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 224
  },
  {
    "id": "s589",
    "movieId": "m40",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 670,
    "availableSeats": 78
  },
  {
    "id": "s590",
    "movieId": "m113",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 620,
    "availableSeats": 128
  },
  {
    "id": "s591",
    "movieId": "m113",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 179
  },
  {
    "id": "s592",
    "movieId": "m203",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 122
  },
  {
    "id": "s593",
    "movieId": "m203",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 650,
    "availableSeats": 105
  },
  {
    "id": "s594",
    "movieId": "m113",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 292
  },
  {
    "id": "s595",
    "movieId": "m113",
    "theatreId": "t74",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 223
  },
  {
    "id": "s596",
    "movieId": "m289",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 50
  },
  {
    "id": "s597",
    "movieId": "m289",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 195
  },
  {
    "id": "s598",
    "movieId": "m242",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 600,
    "availableSeats": 113
  },
  {
    "id": "s599",
    "movieId": "m18",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 218
  },
  {
    "id": "s600",
    "movieId": "m242",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 133
  },
  {
    "id": "s601",
    "movieId": "m295",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 217
  },
  {
    "id": "s602",
    "movieId": "m25",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 740,
    "availableSeats": 83
  },
  {
    "id": "s603",
    "movieId": "m289",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 260,
    "availableSeats": 65
  },
  {
    "id": "s604",
    "movieId": "m18",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 610,
    "availableSeats": 290
  },
  {
    "id": "s605",
    "movieId": "m289",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 310,
    "availableSeats": 228
  },
  {
    "id": "s606",
    "movieId": "m295",
    "theatreId": "t75",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 286
  },
  {
    "id": "s607",
    "movieId": "m220",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 500,
    "availableSeats": 116
  },
  {
    "id": "s608",
    "movieId": "m52",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 140
  },
  {
    "id": "s609",
    "movieId": "m182",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 780,
    "availableSeats": 189
  },
  {
    "id": "s610",
    "movieId": "m52",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 210,
    "availableSeats": 281
  },
  {
    "id": "s611",
    "movieId": "m220",
    "theatreId": "t76",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 260,
    "availableSeats": 250
  },
  {
    "id": "s612",
    "movieId": "m151",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 259
  },
  {
    "id": "s613",
    "movieId": "m2",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 81
  },
  {
    "id": "s614",
    "movieId": "m2",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 600,
    "availableSeats": 296
  },
  {
    "id": "s615",
    "movieId": "m2",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 780,
    "availableSeats": 119
  },
  {
    "id": "s616",
    "movieId": "m45",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 130
  },
  {
    "id": "s617",
    "movieId": "m151",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 720,
    "availableSeats": 300
  },
  {
    "id": "s618",
    "movieId": "m45",
    "theatreId": "t77",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 120
  },
  {
    "id": "s619",
    "movieId": "m142",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 234
  },
  {
    "id": "s620",
    "movieId": "m6",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 65
  },
  {
    "id": "s621",
    "movieId": "m142",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 109
  },
  {
    "id": "s622",
    "movieId": "m183",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 590,
    "availableSeats": 294
  },
  {
    "id": "s623",
    "movieId": "m46",
    "theatreId": "t78",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 690,
    "availableSeats": 290
  },
  {
    "id": "s624",
    "movieId": "m217",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 159
  },
  {
    "id": "s625",
    "movieId": "m51",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 173
  },
  {
    "id": "s626",
    "movieId": "m137",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 620,
    "availableSeats": 260
  },
  {
    "id": "s627",
    "movieId": "m64",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 54
  },
  {
    "id": "s628",
    "movieId": "m217",
    "theatreId": "t79",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 690,
    "availableSeats": 156
  },
  {
    "id": "s629",
    "movieId": "m186",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 223
  },
  {
    "id": "s630",
    "movieId": "m188",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 167
  },
  {
    "id": "s631",
    "movieId": "m186",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 440,
    "availableSeats": 134
  },
  {
    "id": "s632",
    "movieId": "m186",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 250,
    "availableSeats": 262
  },
  {
    "id": "s633",
    "movieId": "m10",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 281
  },
  {
    "id": "s634",
    "movieId": "m188",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 177
  },
  {
    "id": "s635",
    "movieId": "m250",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 89
  },
  {
    "id": "s636",
    "movieId": "m10",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 54
  },
  {
    "id": "s637",
    "movieId": "m186",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 790,
    "availableSeats": 73
  },
  {
    "id": "s638",
    "movieId": "m10",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 164
  },
  {
    "id": "s639",
    "movieId": "m10",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 253
  },
  {
    "id": "s640",
    "movieId": "m10",
    "theatreId": "t80",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 248
  },
  {
    "id": "s641",
    "movieId": "m228",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 450,
    "availableSeats": 127
  },
  {
    "id": "s642",
    "movieId": "m138",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 600,
    "availableSeats": 62
  },
  {
    "id": "s643",
    "movieId": "m240",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 240
  },
  {
    "id": "s644",
    "movieId": "m240",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 660,
    "availableSeats": 108
  },
  {
    "id": "s645",
    "movieId": "m240",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 270,
    "availableSeats": 55
  },
  {
    "id": "s646",
    "movieId": "m228",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 102
  },
  {
    "id": "s647",
    "movieId": "m47",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 730,
    "availableSeats": 268
  },
  {
    "id": "s648",
    "movieId": "m47",
    "theatreId": "t81",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 145
  },
  {
    "id": "s649",
    "movieId": "m138",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 150
  },
  {
    "id": "s650",
    "movieId": "m6",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 270
  },
  {
    "id": "s651",
    "movieId": "m138",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 82
  },
  {
    "id": "s652",
    "movieId": "m138",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 670,
    "availableSeats": 93
  },
  {
    "id": "s653",
    "movieId": "m202",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 450,
    "availableSeats": 98
  },
  {
    "id": "s654",
    "movieId": "m202",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 117
  },
  {
    "id": "s655",
    "movieId": "m96",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 590,
    "availableSeats": 65
  },
  {
    "id": "s656",
    "movieId": "m74",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 330,
    "availableSeats": 199
  },
  {
    "id": "s657",
    "movieId": "m138",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 210,
    "availableSeats": 248
  },
  {
    "id": "s658",
    "movieId": "m96",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 330,
    "availableSeats": 60
  },
  {
    "id": "s659",
    "movieId": "m6",
    "theatreId": "t82",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 600,
    "availableSeats": 249
  },
  {
    "id": "s660",
    "movieId": "m243",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 670,
    "availableSeats": 160
  },
  {
    "id": "s661",
    "movieId": "m280",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 51
  },
  {
    "id": "s662",
    "movieId": "m280",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 240
  },
  {
    "id": "s663",
    "movieId": "m279",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 231
  },
  {
    "id": "s664",
    "movieId": "m243",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 670,
    "availableSeats": 259
  },
  {
    "id": "s665",
    "movieId": "m279",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 142
  },
  {
    "id": "s666",
    "movieId": "m273",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 520,
    "availableSeats": 287
  },
  {
    "id": "s667",
    "movieId": "m273",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 236
  },
  {
    "id": "s668",
    "movieId": "m273",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 76
  },
  {
    "id": "s669",
    "movieId": "m273",
    "theatreId": "t83",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 75
  },
  {
    "id": "s670",
    "movieId": "m293",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 410,
    "availableSeats": 123
  },
  {
    "id": "s671",
    "movieId": "m293",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 147
  },
  {
    "id": "s672",
    "movieId": "m114",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 155
  },
  {
    "id": "s673",
    "movieId": "m177",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 56
  },
  {
    "id": "s674",
    "movieId": "m181",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 390,
    "availableSeats": 87
  },
  {
    "id": "s675",
    "movieId": "m293",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 158
  },
  {
    "id": "s676",
    "movieId": "m181",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 490,
    "availableSeats": 178
  },
  {
    "id": "s677",
    "movieId": "m181",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 78
  },
  {
    "id": "s678",
    "movieId": "m177",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 570,
    "availableSeats": 210
  },
  {
    "id": "s679",
    "movieId": "m114",
    "theatreId": "t84",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 55
  },
  {
    "id": "s680",
    "movieId": "m229",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 550,
    "availableSeats": 154
  },
  {
    "id": "s681",
    "movieId": "m7",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 77
  },
  {
    "id": "s682",
    "movieId": "m186",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 300,
    "availableSeats": 153
  },
  {
    "id": "s683",
    "movieId": "m265",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 660,
    "availableSeats": 180
  },
  {
    "id": "s684",
    "movieId": "m265",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 210,
    "availableSeats": 217
  },
  {
    "id": "s685",
    "movieId": "m229",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 620,
    "availableSeats": 212
  },
  {
    "id": "s686",
    "movieId": "m229",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 530,
    "availableSeats": 71
  },
  {
    "id": "s687",
    "movieId": "m280",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 630,
    "availableSeats": 78
  },
  {
    "id": "s688",
    "movieId": "m229",
    "theatreId": "t85",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 660,
    "availableSeats": 287
  },
  {
    "id": "s689",
    "movieId": "m229",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 540,
    "availableSeats": 252
  },
  {
    "id": "s690",
    "movieId": "m91",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 267
  },
  {
    "id": "s691",
    "movieId": "m91",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 105
  },
  {
    "id": "s692",
    "movieId": "m171",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 620,
    "availableSeats": 168
  },
  {
    "id": "s693",
    "movieId": "m259",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 184
  },
  {
    "id": "s694",
    "movieId": "m259",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 251
  },
  {
    "id": "s695",
    "movieId": "m91",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 56
  },
  {
    "id": "s696",
    "movieId": "m171",
    "theatreId": "t86",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 268
  },
  {
    "id": "s697",
    "movieId": "m127",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 210
  },
  {
    "id": "s698",
    "movieId": "m271",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 780,
    "availableSeats": 100
  },
  {
    "id": "s699",
    "movieId": "m94",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 670,
    "availableSeats": 174
  },
  {
    "id": "s700",
    "movieId": "m97",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 400,
    "availableSeats": 176
  },
  {
    "id": "s701",
    "movieId": "m94",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 350,
    "availableSeats": 266
  },
  {
    "id": "s702",
    "movieId": "m127",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 740,
    "availableSeats": 297
  },
  {
    "id": "s703",
    "movieId": "m94",
    "theatreId": "t87",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 200,
    "availableSeats": 278
  },
  {
    "id": "s704",
    "movieId": "m278",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 106
  },
  {
    "id": "s705",
    "movieId": "m111",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 108
  },
  {
    "id": "s706",
    "movieId": "m278",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 420,
    "availableSeats": 200
  },
  {
    "id": "s707",
    "movieId": "m6",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 93
  },
  {
    "id": "s708",
    "movieId": "m196",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 228
  },
  {
    "id": "s709",
    "movieId": "m6",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 790,
    "availableSeats": 102
  },
  {
    "id": "s710",
    "movieId": "m228",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 125
  },
  {
    "id": "s711",
    "movieId": "m6",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 210,
    "availableSeats": 71
  },
  {
    "id": "s712",
    "movieId": "m6",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 650,
    "availableSeats": 70
  },
  {
    "id": "s713",
    "movieId": "m196",
    "theatreId": "t88",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 192
  },
  {
    "id": "s714",
    "movieId": "m265",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 153
  },
  {
    "id": "s715",
    "movieId": "m235",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 250,
    "availableSeats": 199
  },
  {
    "id": "s716",
    "movieId": "m8",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 540,
    "availableSeats": 160
  },
  {
    "id": "s717",
    "movieId": "m8",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 510,
    "availableSeats": 187
  },
  {
    "id": "s718",
    "movieId": "m235",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 680,
    "availableSeats": 76
  },
  {
    "id": "s719",
    "movieId": "m8",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 570,
    "availableSeats": 158
  },
  {
    "id": "s720",
    "movieId": "m265",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 280,
    "availableSeats": 116
  },
  {
    "id": "s721",
    "movieId": "m235",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 680,
    "availableSeats": 266
  },
  {
    "id": "s722",
    "movieId": "m235",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 202
  },
  {
    "id": "s723",
    "movieId": "m265",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 220,
    "availableSeats": 184
  },
  {
    "id": "s724",
    "movieId": "m265",
    "theatreId": "t89",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 560,
    "availableSeats": 117
  },
  {
    "id": "s725",
    "movieId": "m238",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 62
  },
  {
    "id": "s726",
    "movieId": "m105",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 760,
    "availableSeats": 119
  },
  {
    "id": "s727",
    "movieId": "m105",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 690,
    "availableSeats": 245
  },
  {
    "id": "s728",
    "movieId": "m113",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 241
  },
  {
    "id": "s729",
    "movieId": "m241",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 360,
    "availableSeats": 157
  },
  {
    "id": "s730",
    "movieId": "m105",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 740,
    "availableSeats": 167
  },
  {
    "id": "s731",
    "movieId": "m241",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 210
  },
  {
    "id": "s732",
    "movieId": "m234",
    "theatreId": "t90",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 259
  },
  {
    "id": "s733",
    "movieId": "m48",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 173
  },
  {
    "id": "s734",
    "movieId": "m292",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 750,
    "availableSeats": 110
  },
  {
    "id": "s735",
    "movieId": "m171",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 610,
    "availableSeats": 190
  },
  {
    "id": "s736",
    "movieId": "m292",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 131
  },
  {
    "id": "s737",
    "movieId": "m48",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 240,
    "availableSeats": 55
  },
  {
    "id": "s738",
    "movieId": "m292",
    "theatreId": "t91",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 156
  },
  {
    "id": "s739",
    "movieId": "m161",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 148
  },
  {
    "id": "s740",
    "movieId": "m44",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 220,
    "availableSeats": 132
  },
  {
    "id": "s741",
    "movieId": "m44",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 670,
    "availableSeats": 296
  },
  {
    "id": "s742",
    "movieId": "m144",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 241
  },
  {
    "id": "s743",
    "movieId": "m276",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 222
  },
  {
    "id": "s744",
    "movieId": "m161",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 640,
    "availableSeats": 186
  },
  {
    "id": "s745",
    "movieId": "m161",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 271
  },
  {
    "id": "s746",
    "movieId": "m161",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 660,
    "availableSeats": 172
  },
  {
    "id": "s747",
    "movieId": "m144",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 710,
    "availableSeats": 281
  },
  {
    "id": "s748",
    "movieId": "m161",
    "theatreId": "t92",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 92
  },
  {
    "id": "s749",
    "movieId": "m290",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 144
  },
  {
    "id": "s750",
    "movieId": "m21",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 114
  },
  {
    "id": "s751",
    "movieId": "m290",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 790,
    "availableSeats": 127
  },
  {
    "id": "s752",
    "movieId": "m290",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 163
  },
  {
    "id": "s753",
    "movieId": "m21",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 287
  },
  {
    "id": "s754",
    "movieId": "m57",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 360,
    "availableSeats": 137
  },
  {
    "id": "s755",
    "movieId": "m221",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 770,
    "availableSeats": 232
  },
  {
    "id": "s756",
    "movieId": "m221",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 310,
    "availableSeats": 111
  },
  {
    "id": "s757",
    "movieId": "m290",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 260
  },
  {
    "id": "s758",
    "movieId": "m21",
    "theatreId": "t93",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 420,
    "availableSeats": 156
  },
  {
    "id": "s759",
    "movieId": "m180",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 480,
    "availableSeats": 194
  },
  {
    "id": "s760",
    "movieId": "m95",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 75
  },
  {
    "id": "s761",
    "movieId": "m119",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 110
  },
  {
    "id": "s762",
    "movieId": "m161",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 490,
    "availableSeats": 149
  },
  {
    "id": "s763",
    "movieId": "m161",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 490,
    "availableSeats": 267
  },
  {
    "id": "s764",
    "movieId": "m280",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 670,
    "availableSeats": 268
  },
  {
    "id": "s765",
    "movieId": "m180",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 91
  },
  {
    "id": "s766",
    "movieId": "m180",
    "theatreId": "t94",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 710,
    "availableSeats": 250
  },
  {
    "id": "s767",
    "movieId": "m256",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 570,
    "availableSeats": 194
  },
  {
    "id": "s768",
    "movieId": "m90",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 310,
    "availableSeats": 126
  },
  {
    "id": "s769",
    "movieId": "m206",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 310,
    "availableSeats": 133
  },
  {
    "id": "s770",
    "movieId": "m90",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 195
  },
  {
    "id": "s771",
    "movieId": "m206",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 294
  },
  {
    "id": "s772",
    "movieId": "m206",
    "theatreId": "t95",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 360,
    "availableSeats": 91
  },
  {
    "id": "s773",
    "movieId": "m41",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 204
  },
  {
    "id": "s774",
    "movieId": "m115",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 510,
    "availableSeats": 189
  },
  {
    "id": "s775",
    "movieId": "m4",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 250,
    "availableSeats": 113
  },
  {
    "id": "s776",
    "movieId": "m41",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 710,
    "availableSeats": 290
  },
  {
    "id": "s777",
    "movieId": "m260",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 69
  },
  {
    "id": "s778",
    "movieId": "m271",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 268
  },
  {
    "id": "s779",
    "movieId": "m41",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 630,
    "availableSeats": 175
  },
  {
    "id": "s780",
    "movieId": "m271",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 700,
    "availableSeats": 253
  },
  {
    "id": "s781",
    "movieId": "m260",
    "theatreId": "t96",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 230,
    "availableSeats": 190
  },
  {
    "id": "s782",
    "movieId": "m221",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 128
  },
  {
    "id": "s783",
    "movieId": "m226",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 73
  },
  {
    "id": "s784",
    "movieId": "m157",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 76
  },
  {
    "id": "s785",
    "movieId": "m8",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 98
  },
  {
    "id": "s786",
    "movieId": "m221",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 244
  },
  {
    "id": "s787",
    "movieId": "m157",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 136
  },
  {
    "id": "s788",
    "movieId": "m157",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 163
  },
  {
    "id": "s789",
    "movieId": "m226",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 710,
    "availableSeats": 52
  },
  {
    "id": "s790",
    "movieId": "m159",
    "theatreId": "t97",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 680,
    "availableSeats": 153
  },
  {
    "id": "s791",
    "movieId": "m263",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 310,
    "availableSeats": 287
  },
  {
    "id": "s792",
    "movieId": "m139",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 92
  },
  {
    "id": "s793",
    "movieId": "m89",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 59
  },
  {
    "id": "s794",
    "movieId": "m89",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 270,
    "availableSeats": 118
  },
  {
    "id": "s795",
    "movieId": "m139",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 530,
    "availableSeats": 219
  },
  {
    "id": "s796",
    "movieId": "m187",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 163
  },
  {
    "id": "s797",
    "movieId": "m187",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 61
  },
  {
    "id": "s798",
    "movieId": "m263",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 184
  },
  {
    "id": "s799",
    "movieId": "m263",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 209
  },
  {
    "id": "s800",
    "movieId": "m192",
    "theatreId": "t98",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 790,
    "availableSeats": 61
  },
  {
    "id": "s801",
    "movieId": "m163",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 270,
    "availableSeats": 226
  },
  {
    "id": "s802",
    "movieId": "m129",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 510,
    "availableSeats": 128
  },
  {
    "id": "s803",
    "movieId": "m129",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 213
  },
  {
    "id": "s804",
    "movieId": "m129",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 690,
    "availableSeats": 271
  },
  {
    "id": "s805",
    "movieId": "m163",
    "theatreId": "t99",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 420,
    "availableSeats": 290
  },
  {
    "id": "s806",
    "movieId": "m144",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 690,
    "availableSeats": 219
  },
  {
    "id": "s807",
    "movieId": "m144",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 510,
    "availableSeats": 128
  },
  {
    "id": "s808",
    "movieId": "m31",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 252
  },
  {
    "id": "s809",
    "movieId": "m201",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 274
  },
  {
    "id": "s810",
    "movieId": "m17",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 800,
    "availableSeats": 211
  },
  {
    "id": "s811",
    "movieId": "m17",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 156
  },
  {
    "id": "s812",
    "movieId": "m31",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 133
  },
  {
    "id": "s813",
    "movieId": "m201",
    "theatreId": "t100",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 134
  },
  {
    "id": "s814",
    "movieId": "m66",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 185
  },
  {
    "id": "s815",
    "movieId": "m196",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 210,
    "availableSeats": 141
  },
  {
    "id": "s816",
    "movieId": "m196",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 186
  },
  {
    "id": "s817",
    "movieId": "m154",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 270,
    "availableSeats": 219
  },
  {
    "id": "s818",
    "movieId": "m196",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 480,
    "availableSeats": 90
  },
  {
    "id": "s819",
    "movieId": "m232",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 510,
    "availableSeats": 174
  },
  {
    "id": "s820",
    "movieId": "m196",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 680,
    "availableSeats": 167
  },
  {
    "id": "s821",
    "movieId": "m202",
    "theatreId": "t101",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 740,
    "availableSeats": 122
  },
  {
    "id": "s822",
    "movieId": "m214",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 350,
    "availableSeats": 130
  },
  {
    "id": "s823",
    "movieId": "m250",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 76
  },
  {
    "id": "s824",
    "movieId": "m250",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 259
  },
  {
    "id": "s825",
    "movieId": "m250",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 170
  },
  {
    "id": "s826",
    "movieId": "m250",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 80
  },
  {
    "id": "s827",
    "movieId": "m214",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 240,
    "availableSeats": 115
  },
  {
    "id": "s828",
    "movieId": "m250",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 210,
    "availableSeats": 138
  },
  {
    "id": "s829",
    "movieId": "m248",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 211
  },
  {
    "id": "s830",
    "movieId": "m256",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 260,
    "availableSeats": 173
  },
  {
    "id": "s831",
    "movieId": "m248",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 173
  },
  {
    "id": "s832",
    "movieId": "m4",
    "theatreId": "t102",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 260,
    "availableSeats": 274
  },
  {
    "id": "s833",
    "movieId": "m195",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 283
  },
  {
    "id": "s834",
    "movieId": "m228",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 54
  },
  {
    "id": "s835",
    "movieId": "m184",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 250,
    "availableSeats": 208
  },
  {
    "id": "s836",
    "movieId": "m169",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 240,
    "availableSeats": 97
  },
  {
    "id": "s837",
    "movieId": "m184",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 350,
    "availableSeats": 124
  },
  {
    "id": "s838",
    "movieId": "m228",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 720,
    "availableSeats": 113
  },
  {
    "id": "s839",
    "movieId": "m169",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 720,
    "availableSeats": 112
  },
  {
    "id": "s840",
    "movieId": "m93",
    "theatreId": "t103",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 250,
    "availableSeats": 239
  },
  {
    "id": "s841",
    "movieId": "m286",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 240,
    "availableSeats": 61
  },
  {
    "id": "s842",
    "movieId": "m286",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 290,
    "availableSeats": 156
  },
  {
    "id": "s843",
    "movieId": "m286",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 273
  },
  {
    "id": "s844",
    "movieId": "m150",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 520,
    "availableSeats": 244
  },
  {
    "id": "s845",
    "movieId": "m170",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 560,
    "availableSeats": 97
  },
  {
    "id": "s846",
    "movieId": "m286",
    "theatreId": "t104",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 690,
    "availableSeats": 294
  },
  {
    "id": "s847",
    "movieId": "m271",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 560,
    "availableSeats": 113
  },
  {
    "id": "s848",
    "movieId": "m222",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 710,
    "availableSeats": 173
  },
  {
    "id": "s849",
    "movieId": "m253",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 620,
    "availableSeats": 229
  },
  {
    "id": "s850",
    "movieId": "m271",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 600,
    "availableSeats": 247
  },
  {
    "id": "s851",
    "movieId": "m271",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 136
  },
  {
    "id": "s852",
    "movieId": "m117",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 220,
    "availableSeats": 254
  },
  {
    "id": "s853",
    "movieId": "m222",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 174
  },
  {
    "id": "s854",
    "movieId": "m253",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 290
  },
  {
    "id": "s855",
    "movieId": "m117",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 470,
    "availableSeats": 255
  },
  {
    "id": "s856",
    "movieId": "m253",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 113
  },
  {
    "id": "s857",
    "movieId": "m117",
    "theatreId": "t105",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 189
  },
  {
    "id": "s858",
    "movieId": "m235",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 640,
    "availableSeats": 197
  },
  {
    "id": "s859",
    "movieId": "m64",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 116
  },
  {
    "id": "s860",
    "movieId": "m51",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 115
  },
  {
    "id": "s861",
    "movieId": "m51",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 148
  },
  {
    "id": "s862",
    "movieId": "m51",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 227
  },
  {
    "id": "s863",
    "movieId": "m64",
    "theatreId": "t106",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 650,
    "availableSeats": 129
  },
  {
    "id": "s864",
    "movieId": "m268",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 320,
    "availableSeats": 136
  },
  {
    "id": "s865",
    "movieId": "m268",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 800,
    "availableSeats": 165
  },
  {
    "id": "s866",
    "movieId": "m268",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 790,
    "availableSeats": 55
  },
  {
    "id": "s867",
    "movieId": "m213",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 780,
    "availableSeats": 78
  },
  {
    "id": "s868",
    "movieId": "m213",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 660,
    "availableSeats": 265
  },
  {
    "id": "s869",
    "movieId": "m213",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 370,
    "availableSeats": 265
  },
  {
    "id": "s870",
    "movieId": "m191",
    "theatreId": "t107",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 620,
    "availableSeats": 162
  },
  {
    "id": "s871",
    "movieId": "m229",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 510,
    "availableSeats": 102
  },
  {
    "id": "s872",
    "movieId": "m56",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 162
  },
  {
    "id": "s873",
    "movieId": "m56",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 108
  },
  {
    "id": "s874",
    "movieId": "m229",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 420,
    "availableSeats": 277
  },
  {
    "id": "s875",
    "movieId": "m96",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 87
  },
  {
    "id": "s876",
    "movieId": "m112",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 410,
    "availableSeats": 171
  },
  {
    "id": "s877",
    "movieId": "m254",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 128
  },
  {
    "id": "s878",
    "movieId": "m112",
    "theatreId": "t108",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 270,
    "availableSeats": 232
  },
  {
    "id": "s879",
    "movieId": "m269",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 640,
    "availableSeats": 300
  },
  {
    "id": "s880",
    "movieId": "m235",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 440,
    "availableSeats": 243
  },
  {
    "id": "s881",
    "movieId": "m52",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 192
  },
  {
    "id": "s882",
    "movieId": "m110",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 610,
    "availableSeats": 66
  },
  {
    "id": "s883",
    "movieId": "m269",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 275
  },
  {
    "id": "s884",
    "movieId": "m52",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 130
  },
  {
    "id": "s885",
    "movieId": "m211",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 260,
    "availableSeats": 176
  },
  {
    "id": "s886",
    "movieId": "m110",
    "theatreId": "t109",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 200,
    "availableSeats": 170
  },
  {
    "id": "s887",
    "movieId": "m30",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 202
  },
  {
    "id": "s888",
    "movieId": "m131",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 330,
    "availableSeats": 171
  },
  {
    "id": "s889",
    "movieId": "m234",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 390,
    "availableSeats": 158
  },
  {
    "id": "s890",
    "movieId": "m175",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 600,
    "availableSeats": 287
  },
  {
    "id": "s891",
    "movieId": "m175",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 370,
    "availableSeats": 192
  },
  {
    "id": "s892",
    "movieId": "m131",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 550,
    "availableSeats": 162
  },
  {
    "id": "s893",
    "movieId": "m207",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 260
  },
  {
    "id": "s894",
    "movieId": "m207",
    "theatreId": "t110",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 390,
    "availableSeats": 72
  },
  {
    "id": "s895",
    "movieId": "m7",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 230,
    "availableSeats": 84
  },
  {
    "id": "s896",
    "movieId": "m65",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 600,
    "availableSeats": 148
  },
  {
    "id": "s897",
    "movieId": "m195",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 106
  },
  {
    "id": "s898",
    "movieId": "m195",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 217
  },
  {
    "id": "s899",
    "movieId": "m7",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 280,
    "availableSeats": 104
  },
  {
    "id": "s900",
    "movieId": "m25",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 255
  },
  {
    "id": "s901",
    "movieId": "m65",
    "theatreId": "t111",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 710,
    "availableSeats": 224
  },
  {
    "id": "s902",
    "movieId": "m277",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 790,
    "availableSeats": 58
  },
  {
    "id": "s903",
    "movieId": "m240",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 350,
    "availableSeats": 150
  },
  {
    "id": "s904",
    "movieId": "m277",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 460,
    "availableSeats": 119
  },
  {
    "id": "s905",
    "movieId": "m167",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 160
  },
  {
    "id": "s906",
    "movieId": "m27",
    "theatreId": "t112",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 440,
    "availableSeats": 255
  },
  {
    "id": "s907",
    "movieId": "m182",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 310,
    "availableSeats": 206
  },
  {
    "id": "s908",
    "movieId": "m182",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 191
  },
  {
    "id": "s909",
    "movieId": "m27",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 113
  },
  {
    "id": "s910",
    "movieId": "m129",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 710,
    "availableSeats": 71
  },
  {
    "id": "s911",
    "movieId": "m27",
    "theatreId": "t113",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 262
  },
  {
    "id": "s912",
    "movieId": "m278",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 690,
    "availableSeats": 52
  },
  {
    "id": "s913",
    "movieId": "m144",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 59
  },
  {
    "id": "s914",
    "movieId": "m278",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 76
  },
  {
    "id": "s915",
    "movieId": "m278",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 222
  },
  {
    "id": "s916",
    "movieId": "m144",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 710,
    "availableSeats": 121
  },
  {
    "id": "s917",
    "movieId": "m289",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 380,
    "availableSeats": 295
  },
  {
    "id": "s918",
    "movieId": "m289",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 720,
    "availableSeats": 132
  },
  {
    "id": "s919",
    "movieId": "m139",
    "theatreId": "t114",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 540,
    "availableSeats": 54
  },
  {
    "id": "s920",
    "movieId": "m89",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 640,
    "availableSeats": 272
  },
  {
    "id": "s921",
    "movieId": "m12",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 460,
    "availableSeats": 204
  },
  {
    "id": "s922",
    "movieId": "m259",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 300,
    "availableSeats": 114
  },
  {
    "id": "s923",
    "movieId": "m12",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 103
  },
  {
    "id": "s924",
    "movieId": "m12",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 580,
    "availableSeats": 79
  },
  {
    "id": "s925",
    "movieId": "m89",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 96
  },
  {
    "id": "s926",
    "movieId": "m89",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 530,
    "availableSeats": 240
  },
  {
    "id": "s927",
    "movieId": "m76",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 242
  },
  {
    "id": "s928",
    "movieId": "m179",
    "theatreId": "t115",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 390,
    "availableSeats": 293
  },
  {
    "id": "s929",
    "movieId": "m25",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 330,
    "availableSeats": 79
  },
  {
    "id": "s930",
    "movieId": "m234",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 94
  },
  {
    "id": "s931",
    "movieId": "m217",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 620,
    "availableSeats": 166
  },
  {
    "id": "s932",
    "movieId": "m234",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 770,
    "availableSeats": 279
  },
  {
    "id": "s933",
    "movieId": "m234",
    "theatreId": "t116",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 220,
    "availableSeats": 93
  },
  {
    "id": "s934",
    "movieId": "m271",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 450,
    "availableSeats": 212
  },
  {
    "id": "s935",
    "movieId": "m10",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 261
  },
  {
    "id": "s936",
    "movieId": "m72",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 390,
    "availableSeats": 246
  },
  {
    "id": "s937",
    "movieId": "m100",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 98
  },
  {
    "id": "s938",
    "movieId": "m72",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 480,
    "availableSeats": 235
  },
  {
    "id": "s939",
    "movieId": "m271",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 350,
    "availableSeats": 232
  },
  {
    "id": "s940",
    "movieId": "m271",
    "theatreId": "t117",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 300,
    "availableSeats": 123
  },
  {
    "id": "s941",
    "movieId": "m180",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 670,
    "availableSeats": 206
  },
  {
    "id": "s942",
    "movieId": "m161",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 79
  },
  {
    "id": "s943",
    "movieId": "m296",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 430,
    "availableSeats": 125
  },
  {
    "id": "s944",
    "movieId": "m238",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 560,
    "availableSeats": 103
  },
  {
    "id": "s945",
    "movieId": "m161",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 196
  },
  {
    "id": "s946",
    "movieId": "m280",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 730,
    "availableSeats": 91
  },
  {
    "id": "s947",
    "movieId": "m238",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 291
  },
  {
    "id": "s948",
    "movieId": "m238",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 275
  },
  {
    "id": "s949",
    "movieId": "m238",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 650,
    "availableSeats": 262
  },
  {
    "id": "s950",
    "movieId": "m180",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 260,
    "availableSeats": 52
  },
  {
    "id": "s951",
    "movieId": "m280",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 640,
    "availableSeats": 89
  },
  {
    "id": "s952",
    "movieId": "m180",
    "theatreId": "t118",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 310,
    "availableSeats": 103
  },
  {
    "id": "s953",
    "movieId": "m15",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 220,
    "availableSeats": 65
  },
  {
    "id": "s954",
    "movieId": "m15",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 390,
    "availableSeats": 148
  },
  {
    "id": "s955",
    "movieId": "m15",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 183
  },
  {
    "id": "s956",
    "movieId": "m219",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 271
  },
  {
    "id": "s957",
    "movieId": "m15",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 113
  },
  {
    "id": "s958",
    "movieId": "m242",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 590,
    "availableSeats": 196
  },
  {
    "id": "s959",
    "movieId": "m15",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 77
  },
  {
    "id": "s960",
    "movieId": "m15",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 800,
    "availableSeats": 157
  },
  {
    "id": "s961",
    "movieId": "m29",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 580,
    "availableSeats": 215
  },
  {
    "id": "s962",
    "movieId": "m135",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 209
  },
  {
    "id": "s963",
    "movieId": "m135",
    "theatreId": "t119",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 700,
    "availableSeats": 295
  },
  {
    "id": "s964",
    "movieId": "m28",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 740,
    "availableSeats": 175
  },
  {
    "id": "s965",
    "movieId": "m196",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 330,
    "availableSeats": 195
  },
  {
    "id": "s966",
    "movieId": "m28",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 280,
    "availableSeats": 266
  },
  {
    "id": "s967",
    "movieId": "m196",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 231
  },
  {
    "id": "s968",
    "movieId": "m212",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 630,
    "availableSeats": 150
  },
  {
    "id": "s969",
    "movieId": "m28",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 250
  },
  {
    "id": "s970",
    "movieId": "m28",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 62
  },
  {
    "id": "s971",
    "movieId": "m179",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 290,
    "availableSeats": 86
  },
  {
    "id": "s972",
    "movieId": "m238",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 169
  },
  {
    "id": "s973",
    "movieId": "m212",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 470,
    "availableSeats": 175
  },
  {
    "id": "s974",
    "movieId": "m212",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 87
  },
  {
    "id": "s975",
    "movieId": "m196",
    "theatreId": "t120",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 680,
    "availableSeats": 223
  },
  {
    "id": "s976",
    "movieId": "m24",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 720,
    "availableSeats": 221
  },
  {
    "id": "s977",
    "movieId": "m299",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 650,
    "availableSeats": 266
  },
  {
    "id": "s978",
    "movieId": "m142",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 270,
    "availableSeats": 99
  },
  {
    "id": "s979",
    "movieId": "m142",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 760,
    "availableSeats": 76
  },
  {
    "id": "s980",
    "movieId": "m24",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 246
  },
  {
    "id": "s981",
    "movieId": "m264",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 300,
    "availableSeats": 174
  },
  {
    "id": "s982",
    "movieId": "m264",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 292
  },
  {
    "id": "s983",
    "movieId": "m24",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 320,
    "availableSeats": 234
  },
  {
    "id": "s984",
    "movieId": "m74",
    "theatreId": "t121",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 234
  },
  {
    "id": "s985",
    "movieId": "m193",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 220,
    "availableSeats": 216
  },
  {
    "id": "s986",
    "movieId": "m81",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 430,
    "availableSeats": 108
  },
  {
    "id": "s987",
    "movieId": "m88",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 600,
    "availableSeats": 65
  },
  {
    "id": "s988",
    "movieId": "m204",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 380,
    "availableSeats": 258
  },
  {
    "id": "s989",
    "movieId": "m193",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 660,
    "availableSeats": 249
  },
  {
    "id": "s990",
    "movieId": "m193",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 235
  },
  {
    "id": "s991",
    "movieId": "m24",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 109
  },
  {
    "id": "s992",
    "movieId": "m193",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 115
  },
  {
    "id": "s993",
    "movieId": "m88",
    "theatreId": "t122",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 720,
    "availableSeats": 200
  },
  {
    "id": "s994",
    "movieId": "m20",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 770,
    "availableSeats": 54
  },
  {
    "id": "s995",
    "movieId": "m127",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 450,
    "availableSeats": 181
  },
  {
    "id": "s996",
    "movieId": "m127",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 740,
    "availableSeats": 199
  },
  {
    "id": "s997",
    "movieId": "m28",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 290,
    "availableSeats": 174
  },
  {
    "id": "s998",
    "movieId": "m127",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 610,
    "availableSeats": 59
  },
  {
    "id": "s999",
    "movieId": "m204",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 282
  },
  {
    "id": "s1000",
    "movieId": "m20",
    "theatreId": "t123",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 240
  },
  {
    "id": "s1001",
    "movieId": "m297",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 96
  },
  {
    "id": "s1002",
    "movieId": "m18",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 420,
    "availableSeats": 163
  },
  {
    "id": "s1003",
    "movieId": "m23",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 230,
    "availableSeats": 282
  },
  {
    "id": "s1004",
    "movieId": "m23",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 590,
    "availableSeats": 154
  },
  {
    "id": "s1005",
    "movieId": "m23",
    "theatreId": "t124",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 500,
    "availableSeats": 198
  },
  {
    "id": "s1006",
    "movieId": "m167",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 151
  },
  {
    "id": "s1007",
    "movieId": "m222",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 108
  },
  {
    "id": "s1008",
    "movieId": "m167",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 410,
    "availableSeats": 163
  },
  {
    "id": "s1009",
    "movieId": "m166",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 240,
    "availableSeats": 125
  },
  {
    "id": "s1010",
    "movieId": "m222",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 297
  },
  {
    "id": "s1011",
    "movieId": "m166",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 590,
    "availableSeats": 166
  },
  {
    "id": "s1012",
    "movieId": "m97",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 710,
    "availableSeats": 149
  },
  {
    "id": "s1013",
    "movieId": "m97",
    "theatreId": "t125",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 220,
    "availableSeats": 150
  },
  {
    "id": "s1014",
    "movieId": "m81",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 350,
    "availableSeats": 167
  },
  {
    "id": "s1015",
    "movieId": "m202",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 274
  },
  {
    "id": "s1016",
    "movieId": "m71",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 151
  },
  {
    "id": "s1017",
    "movieId": "m214",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 174
  },
  {
    "id": "s1018",
    "movieId": "m202",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 124
  },
  {
    "id": "s1019",
    "movieId": "m71",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 770,
    "availableSeats": 147
  },
  {
    "id": "s1020",
    "movieId": "m214",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 210,
    "availableSeats": 284
  },
  {
    "id": "s1021",
    "movieId": "m81",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 510,
    "availableSeats": 168
  },
  {
    "id": "s1022",
    "movieId": "m214",
    "theatreId": "t126",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 630,
    "availableSeats": 172
  },
  {
    "id": "s1023",
    "movieId": "m58",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 520,
    "availableSeats": 255
  },
  {
    "id": "s1024",
    "movieId": "m60",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 370,
    "availableSeats": 299
  },
  {
    "id": "s1025",
    "movieId": "m7",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 210,
    "availableSeats": 129
  },
  {
    "id": "s1026",
    "movieId": "m58",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 730,
    "availableSeats": 122
  },
  {
    "id": "s1027",
    "movieId": "m58",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 540,
    "availableSeats": 161
  },
  {
    "id": "s1028",
    "movieId": "m7",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 760,
    "availableSeats": 216
  },
  {
    "id": "s1029",
    "movieId": "m58",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 540,
    "availableSeats": 54
  },
  {
    "id": "s1030",
    "movieId": "m60",
    "theatreId": "t127",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 700,
    "availableSeats": 200
  },
  {
    "id": "s1031",
    "movieId": "m209",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 240
  },
  {
    "id": "s1032",
    "movieId": "m249",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 390,
    "availableSeats": 221
  },
  {
    "id": "s1033",
    "movieId": "m249",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 200,
    "availableSeats": 287
  },
  {
    "id": "s1034",
    "movieId": "m253",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 720,
    "availableSeats": 200
  },
  {
    "id": "s1035",
    "movieId": "m249",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 450,
    "availableSeats": 103
  },
  {
    "id": "s1036",
    "movieId": "m150",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 330,
    "availableSeats": 166
  },
  {
    "id": "s1037",
    "movieId": "m253",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 590,
    "availableSeats": 238
  },
  {
    "id": "s1038",
    "movieId": "m249",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 800,
    "availableSeats": 203
  },
  {
    "id": "s1039",
    "movieId": "m209",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 780,
    "availableSeats": 145
  },
  {
    "id": "s1040",
    "movieId": "m150",
    "theatreId": "t128",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 760,
    "availableSeats": 193
  },
  {
    "id": "s1041",
    "movieId": "m254",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 760,
    "availableSeats": 255
  },
  {
    "id": "s1042",
    "movieId": "m265",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 260,
    "availableSeats": 199
  },
  {
    "id": "s1043",
    "movieId": "m254",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 400,
    "availableSeats": 91
  },
  {
    "id": "s1044",
    "movieId": "m22",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 260,
    "availableSeats": 132
  },
  {
    "id": "s1045",
    "movieId": "m22",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 230,
    "availableSeats": 240
  },
  {
    "id": "s1046",
    "movieId": "m254",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 370,
    "availableSeats": 201
  },
  {
    "id": "s1047",
    "movieId": "m265",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 520,
    "availableSeats": 298
  },
  {
    "id": "s1048",
    "movieId": "m265",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 400,
    "availableSeats": 291
  },
  {
    "id": "s1049",
    "movieId": "m265",
    "theatreId": "t129",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 290,
    "availableSeats": 300
  },
  {
    "id": "s1050",
    "movieId": "m148",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 450,
    "availableSeats": 221
  },
  {
    "id": "s1051",
    "movieId": "m38",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 286
  },
  {
    "id": "s1052",
    "movieId": "m269",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 400,
    "availableSeats": 226
  },
  {
    "id": "s1053",
    "movieId": "m13",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 690,
    "availableSeats": 216
  },
  {
    "id": "s1054",
    "movieId": "m269",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 490,
    "availableSeats": 223
  },
  {
    "id": "s1055",
    "movieId": "m38",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 93
  },
  {
    "id": "s1056",
    "movieId": "m269",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 410,
    "availableSeats": 154
  },
  {
    "id": "s1057",
    "movieId": "m38",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 590,
    "availableSeats": 61
  },
  {
    "id": "s1058",
    "movieId": "m183",
    "theatreId": "t130",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 770,
    "availableSeats": 152
  },
  {
    "id": "s1059",
    "movieId": "m148",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 630,
    "availableSeats": 186
  },
  {
    "id": "s1060",
    "movieId": "m227",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 580,
    "availableSeats": 88
  },
  {
    "id": "s1061",
    "movieId": "m239",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 530,
    "availableSeats": 90
  },
  {
    "id": "s1062",
    "movieId": "m239",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 790,
    "availableSeats": 125
  },
  {
    "id": "s1063",
    "movieId": "m236",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 271
  },
  {
    "id": "s1064",
    "movieId": "m236",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 580,
    "availableSeats": 63
  },
  {
    "id": "s1065",
    "movieId": "m239",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 340,
    "availableSeats": 250
  },
  {
    "id": "s1066",
    "movieId": "m227",
    "theatreId": "t131",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 470,
    "availableSeats": 167
  },
  {
    "id": "s1067",
    "movieId": "m197",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 270,
    "availableSeats": 252
  },
  {
    "id": "s1068",
    "movieId": "m131",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 470,
    "availableSeats": 276
  },
  {
    "id": "s1069",
    "movieId": "m131",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 300,
    "availableSeats": 155
  },
  {
    "id": "s1070",
    "movieId": "m131",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 380,
    "availableSeats": 214
  },
  {
    "id": "s1071",
    "movieId": "m215",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 430,
    "availableSeats": 61
  },
  {
    "id": "s1072",
    "movieId": "m255",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 380,
    "availableSeats": 165
  },
  {
    "id": "s1073",
    "movieId": "m255",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 800,
    "availableSeats": 227
  },
  {
    "id": "s1074",
    "movieId": "m250",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 279
  },
  {
    "id": "s1075",
    "movieId": "m250",
    "theatreId": "t132",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 178
  },
  {
    "id": "s1076",
    "movieId": "m40",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 510,
    "availableSeats": 148
  },
  {
    "id": "s1077",
    "movieId": "m27",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 240,
    "availableSeats": 250
  },
  {
    "id": "s1078",
    "movieId": "m208",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 230,
    "availableSeats": 227
  },
  {
    "id": "s1079",
    "movieId": "m208",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 420,
    "availableSeats": 119
  },
  {
    "id": "s1080",
    "movieId": "m18",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 590,
    "availableSeats": 133
  },
  {
    "id": "s1081",
    "movieId": "m40",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 750,
    "availableSeats": 77
  },
  {
    "id": "s1082",
    "movieId": "m170",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 430,
    "availableSeats": 275
  },
  {
    "id": "s1083",
    "movieId": "m208",
    "theatreId": "t133",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 630,
    "availableSeats": 98
  },
  {
    "id": "s1084",
    "movieId": "m47",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 230,
    "availableSeats": 199
  },
  {
    "id": "s1085",
    "movieId": "m72",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 720,
    "availableSeats": 75
  },
  {
    "id": "s1086",
    "movieId": "m273",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 370,
    "availableSeats": 76
  },
  {
    "id": "s1087",
    "movieId": "m47",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 640,
    "availableSeats": 101
  },
  {
    "id": "s1088",
    "movieId": "m47",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 100
  },
  {
    "id": "s1089",
    "movieId": "m47",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 290,
    "availableSeats": 282
  },
  {
    "id": "s1090",
    "movieId": "m273",
    "theatreId": "t134",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 510,
    "availableSeats": 78
  },
  {
    "id": "s1091",
    "movieId": "m292",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 268
  },
  {
    "id": "s1092",
    "movieId": "m234",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 490,
    "availableSeats": 132
  },
  {
    "id": "s1093",
    "movieId": "m286",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 89
  },
  {
    "id": "s1094",
    "movieId": "m292",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 750,
    "availableSeats": 230
  },
  {
    "id": "s1095",
    "movieId": "m17",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 410,
    "availableSeats": 283
  },
  {
    "id": "s1096",
    "movieId": "m292",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 229
  },
  {
    "id": "s1097",
    "movieId": "m17",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 390,
    "availableSeats": 217
  },
  {
    "id": "s1098",
    "movieId": "m286",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 700,
    "availableSeats": 257
  },
  {
    "id": "s1099",
    "movieId": "m286",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 460,
    "availableSeats": 188
  },
  {
    "id": "s1100",
    "movieId": "m17",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 500,
    "availableSeats": 55
  },
  {
    "id": "s1101",
    "movieId": "m17",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 147
  },
  {
    "id": "s1102",
    "movieId": "m292",
    "theatreId": "t135",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 690,
    "availableSeats": 75
  },
  {
    "id": "s1103",
    "movieId": "m59",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 510,
    "availableSeats": 52
  },
  {
    "id": "s1104",
    "movieId": "m68",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 550,
    "availableSeats": 194
  },
  {
    "id": "s1105",
    "movieId": "m53",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 210,
    "availableSeats": 50
  },
  {
    "id": "s1106",
    "movieId": "m68",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 200,
    "availableSeats": 135
  },
  {
    "id": "s1107",
    "movieId": "m68",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 580,
    "availableSeats": 221
  },
  {
    "id": "s1108",
    "movieId": "m14",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 670,
    "availableSeats": 256
  },
  {
    "id": "s1109",
    "movieId": "m59",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 256
  },
  {
    "id": "s1110",
    "movieId": "m68",
    "theatreId": "t136",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 500,
    "availableSeats": 188
  },
  {
    "id": "s1111",
    "movieId": "m62",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 800,
    "availableSeats": 67
  },
  {
    "id": "s1112",
    "movieId": "m218",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 670,
    "availableSeats": 129
  },
  {
    "id": "s1113",
    "movieId": "m79",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 790,
    "availableSeats": 223
  },
  {
    "id": "s1114",
    "movieId": "m146",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 232
  },
  {
    "id": "s1115",
    "movieId": "m146",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 119
  },
  {
    "id": "s1116",
    "movieId": "m79",
    "theatreId": "t137",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 540,
    "availableSeats": 231
  },
  {
    "id": "s1117",
    "movieId": "m97",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 490,
    "availableSeats": 160
  },
  {
    "id": "s1118",
    "movieId": "m97",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 430,
    "availableSeats": 103
  },
  {
    "id": "s1119",
    "movieId": "m127",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 250,
    "availableSeats": 226
  },
  {
    "id": "s1120",
    "movieId": "m263",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 490,
    "availableSeats": 145
  },
  {
    "id": "s1121",
    "movieId": "m97",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 790,
    "availableSeats": 232
  },
  {
    "id": "s1122",
    "movieId": "m263",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 400,
    "availableSeats": 215
  },
  {
    "id": "s1123",
    "movieId": "m260",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 780,
    "availableSeats": 235
  },
  {
    "id": "s1124",
    "movieId": "m278",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 280,
    "availableSeats": 69
  },
  {
    "id": "s1125",
    "movieId": "m260",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 660,
    "availableSeats": 57
  },
  {
    "id": "s1126",
    "movieId": "m263",
    "theatreId": "t138",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 161
  },
  {
    "id": "s1127",
    "movieId": "m169",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 520,
    "availableSeats": 76
  },
  {
    "id": "s1128",
    "movieId": "m169",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 550,
    "availableSeats": 221
  },
  {
    "id": "s1129",
    "movieId": "m277",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 240,
    "availableSeats": 78
  },
  {
    "id": "s1130",
    "movieId": "m93",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 197
  },
  {
    "id": "s1131",
    "movieId": "m169",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 790,
    "availableSeats": 87
  },
  {
    "id": "s1132",
    "movieId": "m93",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 440,
    "availableSeats": 172
  },
  {
    "id": "s1133",
    "movieId": "m93",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 460,
    "availableSeats": 192
  },
  {
    "id": "s1134",
    "movieId": "m93",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 450,
    "availableSeats": 109
  },
  {
    "id": "s1135",
    "movieId": "m169",
    "theatreId": "t139",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 480,
    "availableSeats": 193
  },
  {
    "id": "s1136",
    "movieId": "m31",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 530,
    "availableSeats": 233
  },
  {
    "id": "s1137",
    "movieId": "m123",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 259
  },
  {
    "id": "s1138",
    "movieId": "m31",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 470,
    "availableSeats": 300
  },
  {
    "id": "s1139",
    "movieId": "m153",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 590,
    "availableSeats": 115
  },
  {
    "id": "s1140",
    "movieId": "m64",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 490,
    "availableSeats": 116
  },
  {
    "id": "s1141",
    "movieId": "m123",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 330,
    "availableSeats": 95
  },
  {
    "id": "s1142",
    "movieId": "m122",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 330,
    "availableSeats": 109
  },
  {
    "id": "s1143",
    "movieId": "m64",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 490,
    "availableSeats": 78
  },
  {
    "id": "s1144",
    "movieId": "m31",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 350,
    "availableSeats": 108
  },
  {
    "id": "s1145",
    "movieId": "m122",
    "theatreId": "t140",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 240,
    "availableSeats": 275
  },
  {
    "id": "s1146",
    "movieId": "m165",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 310,
    "availableSeats": 158
  },
  {
    "id": "s1147",
    "movieId": "m133",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 269
  },
  {
    "id": "s1148",
    "movieId": "m133",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 590,
    "availableSeats": 81
  },
  {
    "id": "s1149",
    "movieId": "m133",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 670,
    "availableSeats": 174
  },
  {
    "id": "s1150",
    "movieId": "m133",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 460,
    "availableSeats": 242
  },
  {
    "id": "s1151",
    "movieId": "m6",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 500,
    "availableSeats": 105
  },
  {
    "id": "s1152",
    "movieId": "m242",
    "theatreId": "t141",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 360,
    "availableSeats": 293
  },
  {
    "id": "s1153",
    "movieId": "m19",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 250,
    "availableSeats": 89
  },
  {
    "id": "s1154",
    "movieId": "m19",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 730,
    "availableSeats": 276
  },
  {
    "id": "s1155",
    "movieId": "m208",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 243
  },
  {
    "id": "s1156",
    "movieId": "m56",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 320,
    "availableSeats": 90
  },
  {
    "id": "s1157",
    "movieId": "m208",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 530,
    "availableSeats": 126
  },
  {
    "id": "s1158",
    "movieId": "m44",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 300,
    "availableSeats": 180
  },
  {
    "id": "s1159",
    "movieId": "m44",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 730,
    "availableSeats": 87
  },
  {
    "id": "s1160",
    "movieId": "m44",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 770,
    "availableSeats": 87
  },
  {
    "id": "s1161",
    "movieId": "m208",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 430,
    "availableSeats": 167
  },
  {
    "id": "s1162",
    "movieId": "m19",
    "theatreId": "t142",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 540,
    "availableSeats": 300
  },
  {
    "id": "s1163",
    "movieId": "m67",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 480,
    "availableSeats": 78
  },
  {
    "id": "s1164",
    "movieId": "m67",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 750,
    "availableSeats": 246
  },
  {
    "id": "s1165",
    "movieId": "m233",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 410,
    "availableSeats": 53
  },
  {
    "id": "s1166",
    "movieId": "m294",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 550,
    "availableSeats": 202
  },
  {
    "id": "s1167",
    "movieId": "m233",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 730,
    "availableSeats": 154
  },
  {
    "id": "s1168",
    "movieId": "m294",
    "theatreId": "t143",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 480,
    "availableSeats": 234
  },
  {
    "id": "s1169",
    "movieId": "m265",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 750,
    "availableSeats": 92
  },
  {
    "id": "s1170",
    "movieId": "m173",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 490,
    "availableSeats": 191
  },
  {
    "id": "s1171",
    "movieId": "m82",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 196
  },
  {
    "id": "s1172",
    "movieId": "m173",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 400,
    "availableSeats": 173
  },
  {
    "id": "s1173",
    "movieId": "m265",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 220,
    "availableSeats": 118
  },
  {
    "id": "s1174",
    "movieId": "m82",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 760,
    "availableSeats": 123
  },
  {
    "id": "s1175",
    "movieId": "m227",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 790,
    "availableSeats": 178
  },
  {
    "id": "s1176",
    "movieId": "m173",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 640,
    "availableSeats": 278
  },
  {
    "id": "s1177",
    "movieId": "m82",
    "theatreId": "t144",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 310,
    "availableSeats": 282
  },
  {
    "id": "s1178",
    "movieId": "m244",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 640,
    "availableSeats": 199
  },
  {
    "id": "s1179",
    "movieId": "m149",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 430,
    "availableSeats": 215
  },
  {
    "id": "s1180",
    "movieId": "m212",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 570,
    "availableSeats": 83
  },
  {
    "id": "s1181",
    "movieId": "m254",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 670,
    "availableSeats": 208
  },
  {
    "id": "s1182",
    "movieId": "m244",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 580,
    "availableSeats": 245
  },
  {
    "id": "s1183",
    "movieId": "m254",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 110
  },
  {
    "id": "s1184",
    "movieId": "m149",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 710,
    "availableSeats": 82
  },
  {
    "id": "s1185",
    "movieId": "m212",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 650,
    "availableSeats": 289
  },
  {
    "id": "s1186",
    "movieId": "m212",
    "theatreId": "t145",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 340,
    "availableSeats": 81
  },
  {
    "id": "s1187",
    "movieId": "m81",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 420,
    "availableSeats": 66
  },
  {
    "id": "s1188",
    "movieId": "m5",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 460,
    "availableSeats": 266
  },
  {
    "id": "s1189",
    "movieId": "m281",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 450,
    "availableSeats": 234
  },
  {
    "id": "s1190",
    "movieId": "m81",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 660,
    "availableSeats": 142
  },
  {
    "id": "s1191",
    "movieId": "m33",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 270
  },
  {
    "id": "s1192",
    "movieId": "m281",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 200,
    "availableSeats": 89
  },
  {
    "id": "s1193",
    "movieId": "m81",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 480,
    "availableSeats": 78
  },
  {
    "id": "s1194",
    "movieId": "m81",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 350,
    "availableSeats": 164
  },
  {
    "id": "s1195",
    "movieId": "m105",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 610,
    "availableSeats": 263
  },
  {
    "id": "s1196",
    "movieId": "m105",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 210,
    "availableSeats": 163
  },
  {
    "id": "s1197",
    "movieId": "m81",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 220,
    "availableSeats": 274
  },
  {
    "id": "s1198",
    "movieId": "m81",
    "theatreId": "t146",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 620,
    "availableSeats": 251
  },
  {
    "id": "s1199",
    "movieId": "m15",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 540,
    "availableSeats": 286
  },
  {
    "id": "s1200",
    "movieId": "m243",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 750,
    "availableSeats": 150
  },
  {
    "id": "s1201",
    "movieId": "m20",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 770,
    "availableSeats": 248
  },
  {
    "id": "s1202",
    "movieId": "m20",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 500,
    "availableSeats": 107
  },
  {
    "id": "s1203",
    "movieId": "m15",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 750,
    "availableSeats": 173
  },
  {
    "id": "s1204",
    "movieId": "m15",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 680,
    "availableSeats": 171
  },
  {
    "id": "s1205",
    "movieId": "m243",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 380,
    "availableSeats": 140
  },
  {
    "id": "s1206",
    "movieId": "m214",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 310,
    "availableSeats": 135
  },
  {
    "id": "s1207",
    "movieId": "m214",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 270,
    "availableSeats": 109
  },
  {
    "id": "s1208",
    "movieId": "m15",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 154
  },
  {
    "id": "s1209",
    "movieId": "m15",
    "theatreId": "t147",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 790,
    "availableSeats": 184
  },
  {
    "id": "s1210",
    "movieId": "m146",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 600,
    "availableSeats": 169
  },
  {
    "id": "s1211",
    "movieId": "m146",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 530,
    "availableSeats": 283
  },
  {
    "id": "s1212",
    "movieId": "m145",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 560,
    "availableSeats": 229
  },
  {
    "id": "s1213",
    "movieId": "m97",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 580,
    "availableSeats": 223
  },
  {
    "id": "s1214",
    "movieId": "m97",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 530,
    "availableSeats": 156
  },
  {
    "id": "s1215",
    "movieId": "m262",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 560,
    "availableSeats": 142
  },
  {
    "id": "s1216",
    "movieId": "m145",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 260,
    "availableSeats": 94
  },
  {
    "id": "s1217",
    "movieId": "m259",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 230,
    "availableSeats": 105
  },
  {
    "id": "s1218",
    "movieId": "m146",
    "theatreId": "t148",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 510,
    "availableSeats": 215
  },
  {
    "id": "s1219",
    "movieId": "m282",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 310,
    "availableSeats": 259
  },
  {
    "id": "s1220",
    "movieId": "m237",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 340,
    "availableSeats": 284
  },
  {
    "id": "s1221",
    "movieId": "m75",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 390,
    "availableSeats": 266
  },
  {
    "id": "s1222",
    "movieId": "m237",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 700,
    "availableSeats": 146
  },
  {
    "id": "s1223",
    "movieId": "m282",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 300,
    "availableSeats": 220
  },
  {
    "id": "s1224",
    "movieId": "m58",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 570,
    "availableSeats": 244
  },
  {
    "id": "s1225",
    "movieId": "m282",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "01:30 PM",
    "ticketPrice": 300,
    "availableSeats": 174
  },
  {
    "id": "s1226",
    "movieId": "m188",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 57
  },
  {
    "id": "s1227",
    "movieId": "m282",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 360,
    "availableSeats": 77
  },
  {
    "id": "s1228",
    "movieId": "m75",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "09:45 PM",
    "ticketPrice": 630,
    "availableSeats": 180
  },
  {
    "id": "s1229",
    "movieId": "m237",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 740,
    "availableSeats": 119
  },
  {
    "id": "s1230",
    "movieId": "m58",
    "theatreId": "t149",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 470,
    "availableSeats": 255
  },
  {
    "id": "s1231",
    "movieId": "m39",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 650,
    "availableSeats": 217
  },
  {
    "id": "s1232",
    "movieId": "m6",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 420,
    "availableSeats": 232
  },
  {
    "id": "s1233",
    "movieId": "m39",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 280,
    "availableSeats": 67
  },
  {
    "id": "s1234",
    "movieId": "m140",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "10:30 PM",
    "ticketPrice": 360,
    "availableSeats": 60
  },
  {
    "id": "s1235",
    "movieId": "m6",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "04:00 PM",
    "ticketPrice": 690,
    "availableSeats": 105
  },
  {
    "id": "s1236",
    "movieId": "m6",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 240,
    "availableSeats": 257
  },
  {
    "id": "s1237",
    "movieId": "m133",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "09:00 AM",
    "ticketPrice": 280,
    "availableSeats": 298
  },
  {
    "id": "s1238",
    "movieId": "m39",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "11:15 AM",
    "ticketPrice": 310,
    "availableSeats": 229
  },
  {
    "id": "s1239",
    "movieId": "m39",
    "theatreId": "t150",
    "date": "2026-09-10",
    "time": "07:15 PM",
    "ticketPrice": 750,
    "availableSeats": 96
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
