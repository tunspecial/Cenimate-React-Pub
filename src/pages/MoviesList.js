import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useTitle } from "../hooks/useTitle"

export const MoviesList = ({ apiPath, title }) => {

    const { data: movies } = useFetch(apiPath)

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
