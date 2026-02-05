// Reusable Button component
// Accepts `children` so any text or elements can be passed inside the button
export const Button = ({ children }) => {
    return (
        // Button element styled using Tailwind CSS utility classes
        <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">{children}</button>
    )
}
