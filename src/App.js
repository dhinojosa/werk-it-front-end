import React from "react"
import Footer from "./components/footer"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Exercises from "./pages/Exercises"
import Nutrition from "./pages/Nutrition"
import Profile from "./pages/Profile"
import ErrorPage from "./pages/ErrorPage"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faFire, faDumbbell, faUtensils, faUser } from '@fortawesome/fontawesome-free-solid'

function App() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <body className="flex flex-col h-screen">
      <Router>
        <header>
          <nav className="items-center justify-between px-2 py-3 bg-amber-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                <Link to="/">
                  <a
                    className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                  >
                    <FontAwesomeIcon icon={faFire} />
                    {'  '}Werk-it
                  </a>
                </Link>
                <button
                  className="text-white cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link to="/exercises">
                      <a
                        className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                      >
                        <FontAwesomeIcon icon={faDumbbell} />
                        <span className="ml-2">Exercise</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/nutrition">
                      <a
                        className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                      >
                        <FontAwesomeIcon icon={faUtensils} />
                        <span className="ml-2">Nutrition</span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile">
                      <a
                        className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-white hover:opacity-75"
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <span className="ml-2">Profile</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
