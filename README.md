# CineWave Entertainment - Movie Ticket Booking Management System

A complete, polished frontend-only web application built with React, Vite, TypeScript, and Tailwind CSS. 

## Overview
CineWave is a movie ticket booking management system simulating a real cinema booking platform. This project operates entirely on the frontend, using browser `localStorage` to simulate a database. It features three distinct user roles with separate dashboards and capabilities.

## Features
- **Cinematic Design**: Modern, premium dark theme with interactive elements and glassmorphism.
- **Seat Selection Engine**: Interactive seat grid with available, selected, and booked states.
- **Digital Tickets**: Simulated QR code and printable digital ticket generation.
- **Role-Based Dashboards**: Customized views for Customers, Staff, and Admins.
- **Data Persistence**: Uses `localStorage` to save movies, theatres, shows, and bookings.

## User Roles
1. **Customer**: Browse movies, select seats, book tickets, view booking history, and cancel bookings.
2. **Staff**: View today's bookings, manage booking statuses (Confirm, Complete, Cancel), and check revenue.
3. **Admin**: View system analytics, and perform CRUD operations on Movies, Theatres, and Shows.

## Booking Flow
1. Browse Movies → Select a Movie
2. Choose Theatre & Date/Time
3. Select Seats on the interactive layout
4. Review Booking Summary & Payment
5. Receive Booking Confirmation & Digital Ticket

## Technology Stack
- **Frontend Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Icons & UI**: Lucide React, clsx, tailwind-merge
- **Storage**: Browser LocalStorage API
- **Dates**: date-fns

## Project Structure
```
cinewave-pega-movie-ticket-booking/
├── src/
│   ├── components/
│   │   ├── shared/     # Navbar, Footer, etc.
│   │   └── ui/         # Reusable UI components (Button, Card, Badge, etc.)
│   ├── context/        # React Context (e.g., ToastProvider)
│   ├── data/           # Mock data initialization
│   ├── layouts/        # MainLayout, DashboardLayout
│   ├── pages/
│   │   ├── Public/     # Home, Movies, Login
│   │   ├── Booking/    # SeatSelection, Summary, Ticket
│   │   ├── Customer/   # Customer Dashboard, My Bookings
│   │   ├── Staff/      # Staff Dashboard, Booking Management
│   │   └── Admin/      # Admin Dashboard, CRUD for Movies/Theatres/Shows
│   ├── types/          # TypeScript interfaces
│   ├── utils/          # LocalStorage handlers
│   ├── App.tsx         # Application routes
│   └── main.tsx        # Entry point
```

## Demo Credentials
To explore the application, use the following credentials on the `/login` page:

| Role | Email | Password |
|------|-------|----------|
| **Customer** | `customer@cinewave.com` | `demo123` |
| **Staff** | `staff@cinewave.com` | `demo123` |
| **Admin** | `admin@cinewave.com` | `demo123` |

## How to Run
1. Clone the repository or navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

## Disclaimer
*This is a frontend-only academic prototype using mock data and browser `localStorage`. No real backend, database, or payment gateway is implemented.*
