# Britt Project

## Overview

This project is a React-based web application for BrittoCharette, a luxury interior design firm. The application provides information about the firm's services, projects, and team. It includes multiple pages for different sections of the site and utilizes routing for navigation.

## Project Structure

The project is organized as follows:

- **src/index.js**: Entry point of the React application.
- **src/pages/**: Contains different page components for the website (Home, About, Projects, Contact, NoPage, Layout).
- **src/assets/**: Contains images and other static assets.
- **src/pages/Elements.js**: Contains reusable UI components such as buttons, cards, and images.

## Key Components

- **Layout**: The main layout component that wraps other page components.
- **Home**: The homepage component with various sections including Hero, Stats, Showroom, and Showcase.
- **About**: The about page component with information about the firm.
- **Projects**: The projects page component showcasing different projects.
- **Contact**: The contact page component with contact details.
- **NoPage**: A fallback component for undefined routes.
- **Footer**: The footer component containing social links and contact information.

## Navigation

The application uses `react-router-dom` for routing. The main routes are defined in `src/index.js`:

- `/`: Home page
- `/about`: About page
- `/projects`: Projects page
- `/contact`: Contact page
- `*`: NoPage (fallback for undefined routes)

## Styling

- **Global Styles**: The global styles are imported from `src/index.css`.
- **Component Styles**: Individual component styles are defined using Tailwind CSS classes.

## Running the Project

To run the project locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Conclusion

This project showcases the luxurious interior designs of BrittoCharette and provides detailed information about the firm and its services. The structured approach ensures easy navigation and a seamless user experience.
