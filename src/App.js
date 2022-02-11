import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <body className="flex flex-col h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <h1 className="text-6xl font-bold underline ">
          Hello world!
        </h1>
      </main>
      <footer className="flex flex-wrap items-center justify-between px-2 py-3 bg-amber-500">
        <Footer />
      </footer>
    </body>
  );
}

export default App;
