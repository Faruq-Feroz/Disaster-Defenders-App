# Disaster Defenders - Disaster Management Platform

## Table of Contents

- [Overview](#overview)
- [Built with](#built-with)
- [Links](#links)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [License](#license)
- [Author](#author)

### Overview

Disaster Defenders is a web application designed to help individuals and communities stay informed and prepared during natural disasters. With real-time weather data, disaster alerts, and essential preparedness resources, the platform supports users in responding to disasters effectively. From weather forecasts to emergency reporting and community involvement, Disaster Defenders aims to empower users and provide them with the tools they need to stay safe.

### Built with

- ReactJs
- SCSS Modules
- RESTful API
- Context API
- Vite
- ESLint and Prettier for code linting and formatting
- Designed and developed by me

### Features

- **Real-time Weather Data:** Displays weather conditions for any city, including temperature, humidity, pressure, and visibility.
- **Disaster Alerts:** Real-time alerts for ongoing, recent, and past disaster events, with information on severity, affected areas, and more.
- **Preparedness Tips & Checklists:** Essential resources to help users prepare for various natural disasters.
- **Response and Recovery Guidance:** Practical steps on how to respond to different types of disasters and tips for recovery.
- **Emergency Reporting:** A form to report emergencies with details like type, location, severity, and images (optional).
- **5-Day Weather Forecast:** Provides weather forecasts for the next five days, allowing users to plan accordingly.
- **Map Integration:** Interactive maps to display disaster zones, weather patterns, and emergency routes.
- **Get Involved:** Users can volunteer, donate, or partner with disaster relief efforts through the platform.
- **Educational Resources:** Access to first aid, CPR, mental health awareness videos, and other disaster-related educational content.
- **Light and Dark Modes:** Users can toggle between light and dark modes, with their preference saved using local storage.



## Project Structure

- `src/` : Source code directory
  - `assets/` : Image files, stylesheets, or other static assets
  - `components/` : React components
    - `ComponentName.jsx` : Component
    - `ComponentName.module.css` : Stylesheet for the component using CSS modules
  - `context/` : Context providers for the Context API
  - `hooks/` : Custom hooks used throughout the app
  - `App.jsx` : Main application component
  - `index.css` : Global stylesheet
  - `main.js` : Entry point of the application
- `public/` : Public assets and `index.html`
- `.eslintrc.cjs` : ESLint configuration file
- `.env.local` : Local environment variables (sensitive, not committed to version control)
- `vercel.json` : Vercel configuration file
- `package.json` : Project configuration and dependencies
- `vite.config.js` : Vite configuration file

## API Integration

Disaster Defenders uses multiple APIs for fetching weather data, disaster alerts, and emergency information to provide real-time updates.

## License

This project is open-source and free for non-commercial use. You are allowed to view, modify, and distribute the code for non-commercial purposes. For commercial use or any other inquiries, please contact me.
No specific license file is provided. If you have questions about using this project, feel free to reach out to me at faruqhassan641@gmail.com

## Author

- [LinkedIn](https://www.linkedin.com/in/hassan-faruq-4a2858311/)
