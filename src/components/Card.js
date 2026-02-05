import { Link } from "react-router-dom"
import Backup from "../assets/images/backup.png"

export const Card = ({ movie }) => {

    const { id, original_title, overview, poster_path } = movie
    const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : Backup

    return (

        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md m-3 dark:bg-gray-800">
            <Link to={`/movie/${id}`}>
                <img className="rounded-base" src={image} alt="" />
            </Link>
            <Link to={`/movie/${id}`}>
                <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading dark:text-white">{original_title}</h5>
            </Link>
            <p className="mb-6 text-[#9C9988] dark:text-gray-300">{overview}</p>
        </div>

    )
}
