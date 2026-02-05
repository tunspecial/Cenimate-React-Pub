// React Router components for defining routes
import { Routes, Route } from "react-router-dom"
// Page components
import { MoviesDetail, MoviesList, Search, PageNotFound } from "../pages"
// Centralized routing component
export const AllRoutes = () => {
    return (
        // Wrapper to apply global background (dark mode support)
        <div className="dark:bg-slate-800">
            {/* Define all application routes */}
            <Routes>
                <Route path="" element={<MoviesList apiPath="movie/now_playing?" title="Home" />}></Route>
                <Route path="movie/:id" element={<MoviesDetail />}></Route>
                <Route path="movies/popular" element={<MoviesList apiPath="movie/popular?" title="Popular" />}></Route>
                <Route path="movies/top" element={<MoviesList apiPath="movie/top_rated?" title="Top Rated" />}></Route>
                <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming?" title="Upcoming" />}></Route>
                <Route path="search" element={<Search apiPath="search/movie?" />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
        </div>
    )
}
