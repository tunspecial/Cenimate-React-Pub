// Image displayed on 404 page
import PageNotFoundImage from "../assets/images/pagenotfound.png"
// Link for client-side navigation
import { Link } from "react-router-dom"
// Reusable Button component
import { Button } from "../components/Button"
// Custom hook to update browser tab title
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = () => {
     // Set page title to "Page Not Found"
    useTitle("Page Not Found")

    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center my-4">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
                    <div className="max-w-lg">
                        <img className="rounded" src={PageNotFoundImage} alt="404 Page Not Found" />
                    </div>
                </div>
                <div className="flex justify-center my-4">
                    <Link to="/">
                        <Button>Back To Cinemate</Button>
                    </Link>
                </div>
            </section>
        </main>

    )
}
