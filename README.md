# 🎬 Movie Finder

Movie Finder is a web application that allows users to search for movies and TV shows by name and get detailed information about each title. Built using JavaScript, Node.js, Express, React, and Redux, this app offers a smooth and interactive experience for film and series enthusiasts looking to explore information on their favorite shows and movies.

## 🚀 Features

- **Search for Movies and TV Shows**: Type in the name of a movie or TV show to search the database.
- **View Detailed Information**: Click on a movie or show from the search results to view more detailed information such as synopsis, release date, awards, and more.
- **Responsive Design**: Works well on desktops, tablets, and mobile devices.
- **Smooth Navigation**: Quick and easy navigation between search results and detailed views, powered by Redux state management.

## 🛠️ Built With

- **JavaScript** - Programming language for front-end and back-end development.
- **Node.js** - Server-side JavaScript runtime.
- **Express** - Node.js framework for backend API handling.
- **React** - Frontend JavaScript library for building user interfaces.
- **Redux** - State management for React.

## 📦 Installation

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js installed on your machine.
- OMDB database API key (e.g., [OMDb API](https://www.omdbapi.com/)

### Installation Steps

1. **Clone the repository**:
    ```bash
    git clone https://github.com/hotskoj/movie-finder.git
    cd movie-finder
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    Create a `.env` file in the root of the project and add your API key:
    ```plaintext
    OMDB_API_KEY=your_api_key_here
    ```

4. **Run the application**:

    - **Development**: In the root directory:
        ```bash
        npm run dev
        ```

    - **Production**: In the root directory:
        ```bash
        npm run build
        npm run start
        ```

    The application should now be running at `http://localhost:3000`.

## 📚 Usage

1. **Search** - Enter the name of a movie or TV show in the search bar.
2. **Explore** - Browse through the results and click on the "MoreInfo" link below each title to see more details.
3. **Details** - On the details page, view information like plot, genre, release date, and more.

## 🔍 API Reference

This application uses [OMDb API](https://www.omdbapi.com/) for fetching movie and TV show data.

## 📬 Contact

**Your Name** - [your.email@example.com](mailto:your.email@example.com)  
**Project Repository** - [https://github.com/yourusername/movie-finder](https://github.com/yourusername/movie-finder)
