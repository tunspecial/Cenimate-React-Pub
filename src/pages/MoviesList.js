// Reusable movie card component
import { Card } from "../components"
// Custom hook to fetch movie data from the API
import { useFetch } from "../hooks/useFetch"
// Custom hook to update the page title
import { useTitle } from "../hooks/useTitle"

// MoviesList component displays a list of movies
// Props:
// - apiPath: API endpoint path (popular, top-rated, etc.)
// - title: Page title for the browser tab
export const MoviesList = ({ apiPath, title }) => {
    // Fetch movies using custom hook
    // Rename `data` to `movies` for better readability
    const { data: movies } = useFetch(apiPath)
    // Set browser tab title
    useTitle(title)

    return (

        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex flex-wrap justify-evenly xl:justify-start gap-y-10">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>

    )
}
