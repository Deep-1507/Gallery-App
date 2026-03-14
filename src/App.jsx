import Gallery from "./components/Gallery";

export default function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">

      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/60 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Photo Gallery
          </h1>

          <p className="text-gray-500 mt-1 text-sm max-w-lg">
            Explore beautiful photography from talented creators around the world.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Gallery />
      </div>

    </div>
  );
}