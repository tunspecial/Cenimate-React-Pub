import { Routes, Route } from "react-router-dom"
import { MoviesDetail, MoviesList, Search, PageNotFound } from "../pages"

export const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
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
