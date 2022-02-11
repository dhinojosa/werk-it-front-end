import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Exercises from "./pages/Exercises"
import Nutrition from "./pages/Nutrition"
import Profile from "./pages/Profile"
import ErrorPage from "./pages/ErrorPage"

function App() {
  return (
    <body className="flex flex-col h-screen">
      <Router>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
      <footer className="flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500">
        <Footer />
      </footer>
    </body>
  );
}

export default App
