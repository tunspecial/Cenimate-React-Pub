
// Application routing component
import { AllRoutes } from "./routes/AllRoutes"
// Layout components
import { Header, Footer } from "./components"
// Global application styles
import './App.css';

function App() {
  return (
    // Root wrapper for the entire application
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}
// Export App component as default entry point
export default App;
