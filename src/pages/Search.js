// Reusable Card component to display movie ite
import { Card } from "../components"
// Custom hook to fetch data from TMDB API
import { useFetch } from "../hooks/useFetch"
// Hook to read query parameters from the URL
import { useSearchParams } from "react-router-dom"
// Custom hook to update the browser tab title
import { useTitle } from "../hooks/useTitle"

// Search page component
// Props:
// - apiPath: API endpoint used for searching movies
export const Search = ({ apiPath }) => {
    // Access URL search parameters
    const [searchParams] = useSearchParams()
    // Get the search query value (?q=...)
    const queryTerm = searchParams.get("q")
    // Fetch movies based on search query
    const { data: movies } = useFetch(apiPath, queryTerm)
    // Update page title dynamically
    useTitle(`Search result for ${queryTerm}`)

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700 dark:text-white" >{movies.length === 0 ? `Result Not Found For '${queryTerm}'` : `Result Found For '${queryTerm}'`}</p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap">
                    {movies.map((movie) => (
                        <Card key={movie.id} movie={movie} />
                    ))}
                </div>
            </section>
        </main>

    )
}
