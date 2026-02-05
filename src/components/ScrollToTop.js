// React hook for running side effects
import { useEffect } from "react"
// Hook to access the current route location
import { useLocation } from "react-router-dom"
// Component that scrolls the page to the top on route change
export const ScrollToTop = () => {
    // Get current pathname from the router
    const { pathname } = useLocation()
    // Run effect whenever the route changes
    useEffect(() => {
        // Scroll window to the top-left corner
        window.scrollTo(0, 0)
    }, [pathname])
    // This component does not render any UI
    return null
}
