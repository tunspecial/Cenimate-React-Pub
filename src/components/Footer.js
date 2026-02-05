// Import Link for internal navigation (SPA routing)
import { Link } from "react-router-dom"
// Footer component displayed at the bottom of the app
export const Footer = () => {

    return (
        // Footer wrapper with background, border, and padding
        <footer className="w-full bg-neutral-primary-soft dark:bg-slate-900 border-t border-default dark:border-slate-800 p-4">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-body sm:text-center dark:text-gray-500">© 2030 <Link to="/" className="hover:none">Cinemate™</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6 dark:text-gray-500">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6 dark:text-gray-500">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6 dark:text-gray-500">YouTube</a>
                    </li>
                    <li>
                        <a href="https://github.com/tunspecial" target="_blank" rel="noreferrer" className="hover:underline dark:text-gray-500">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
