# 🎬 Cinemate – Movie Discovery App

Cinemate is a modern movie discovery web application built with **React**, **React Router**, and **Tailwind CSS**, powered by the **TMDB API**.  
Users can explore trending movies, search for films, and view detailed movie information with a clean and responsive UI.

---

## 🚀 Features

- 🔥 Now Playing, Popular, Top Rated & Upcoming movies
- 🔍 Search movies by keyword
- 🎞️ Movie details page
- 🌙 Dark mode support
- 📜 Smooth navigation with React Router
- ⬆️ Auto scroll-to-top on page change
- ❌ Custom 404 Page Not Found

---

## 🛠️ Tech Stack

- **React** (Hooks & Functional Components)
- **React Router DOM**
- **Tailwind CSS**
- **TMDB API**
- **Custom Hooks**
  - `useFetch`
  - `useTitle`

---

## 📂 Project Structure

src/
│── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── Card.jsx
│ ├── Button.jsx
│ ├── ScrollToTop.jsx
│
│── hooks/
│ ├── useFetch.js
│ ├── useTitle.js
│
│── pages/
│ ├── MoviesList.jsx
│ ├── MoviesDetail.jsx
│ ├── Search.jsx
│ ├── PageNotFound.jsx
│
│── routes/
│ ├── AllRoutes.jsx
│
│── App.js
│── index.js


---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your TMDB API key:

```env
REACT_APP_API_KEY=your_tmdb_api_key_here

▶️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/your-username/cinemate.git

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm start

The app will run at:

http://localhost:3000

🌐 API Reference

TMDB API Documentation

🙌 Acknowledgements

TMDB for providing the movie data

React & Tailwind CSS community

📄 License

This project is licensed under the MIT License.

👤 Author

Tun Tun Oo
