// Import Link component for client-side navigation
import { Link } from "react-router-dom"
// Fallback image used when movie poster is not available
import Backup from "../assets/images/backup.png"
// Card component receives a single movie object as prop
export const Card = ({ movie }) => {
    // Destructure required properties from the movie object
    const { id, original_title, overview, poster_path } = movie
    // Build poster image URL if available, otherwise use backup image
    const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : Backup

    return (
        // Card container with Tailwind CSS styling
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
