// React hooks for state management and side effects
import { useState, useEffect } from 'react'

// Custom hook for fetching movie data from TMDB API
export const useFetch = (apiPath, queryTerm = "") => {
    // State to store fetched data
    const [data, setData] = useState([])
    // Build the API URL dynamically using path and query
    const url = `https://api.themoviedb.org/3/${apiPath}api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
    // Fetch data whenever the URL changes
    useEffect(() => {
        // Async function to fetch movies
        const fetchMovies = async () => {
            const respond = await fetch(url) // Call API
            const json = await respond.json() // Convert response to JSON
            setData(json.results) // Store results in state
        }
        fetchMovies()
    }, [url])
    // Return fetched data to be used by components
    return { data }
}
