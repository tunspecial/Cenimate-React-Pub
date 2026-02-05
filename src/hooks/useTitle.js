// React hook for running side effects
import { useEffect } from "react"

// Custom hook to update the browser tab title
export const useTitle = (title) => {
    // Update document title whenever the title changes
    useEffect(() => {
        document.title = `${title} / Cenimate`
    })
    // This hook does not render anything
    return null
}
