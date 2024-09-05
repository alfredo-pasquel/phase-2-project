# **Alfredo Pasquel Portfolio**

## 🎉 Welcome and Overview

Welcome to the **Alfredo Pasquel Portfolio**, a Single Page Application (SPA) showcasing my work in music and sound production for movies and video games. This project allows users to browse through my various credits, view detailed information for each work, and explore awards I’ve received. This portfolio also includes an option to add new credits to my body of work.

The app is built with React and serves both frontend and backend data from a mock JSON API. Additionally, it features a real-time search functionality to filter through credits.

## 🚀 Features

- **Interactive Credits List**: Users can browse through my credits in the "Credits" section, featuring detailed information about each work.
- **Dynamic Search**: The app features a search bar that allows users to filter through credits in real-time.
- **Add New Credits**: Users can add new entries to my credits list via a controlled form.
- **Awards**: A dedicated section displaying notable nominations and awards.
- **Responsive Design**: The app is fully responsive and works on all device sizes.

## 🛠️ Frameworks and Dependencies

### **Frontend**

- **React**: JavaScript library for building the user interface.
- **React Router DOM**: Handles routing and navigation within the SPA.
- **Material UI (MUI)**: A component library used for building responsive and visually appealing UI.
- **Vite**: The build tool for running the development environment and building the production app.

### **Backend (API)**

- **JSON Server**: Used to simulate a RESTful API for managing credits, awards, and biography data.

### **Dependencies**

```json
"dependencies": {
  "react": "^18.0.0",
  "react-router-dom": "^6.3.0",
  "json-server": "^0.16.3",
  "vite": "^2.0.5",
  "material-ui": "^5.2.0",
  "cors": "^2.8.5"
}
```

## ⚙️ Installation

### Prerequisites
- Node.js
- npm or yarn

### Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/alfredo-portfolio.git
   ```
   
2. Navigate to the project directory:
   ```bash
   cd alfredo-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Run JSON Server to serve the mock API:
   ```bash
   npx json-server --watch db.json --port 3000
   ```

3. Open the app in the browser by navigating to:
   ```
   http://localhost:5173
   ```

## 📑 Project Structure

```bash
src/
├── assets/          # Static images and assets
├── components/      # Reusable React components
├── layouts/         # Layout components like RootLayout.jsx
├── App.jsx          # Main app logic
├── main.jsx         # Entry point for the application
```

## 🏗️ Conventions

- **Commit Messages**: Use clear and descriptive commit messages following the convention:
  - `feat`: for new features
  - `fix`: for bug fixes
  - `docs`: for documentation changes
  - `style`: for code style changes
  - `refactor`: for code refactoring
  - `chore`: for maintenance tasks

- **Branching**: Use feature branching for new features (`feature/branch-name`), and hotfix branches for urgent fixes (`hotfix/branch-name`).

## 🎯 Future Enhancements

- **Spotify/Apple Music Integration**: Plan to integrate a music player in the credits detail section to showcase actual audio work.
- **Expanded Awards Section**: Future updates will expand the awards page to include visuals and detailed descriptions of award categories.

---

This **README** serves as a guide for both users and developers working on or using the application. The portfolio is currently deployed using Vite and the mock API is served through JSON Server.

## 📞 Contact

Feel free to reach out with any questions or feedback! You can contact me via my [email](mailto:alfredo.pasquel@gmail.com) or visit my [portfolio website](http://www.alfredopasquel.com).