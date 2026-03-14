import { useCallback, useMemo, useReducer, useState } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { favouritesReducer, initialState } from "../reducer/favouritesReducer";
import PhotoCard from "./PhotoCard";
import SearchBar from "./SearchBar";

export default function Gallery() {
  const { photos, loading, loadingMore, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const [favourites, dispatch] = useReducer(favouritesReducer, initialState);

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (!search.trim()) return photos;

    console.log(photos.length);

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading)
    return (
      <div className="flex justify-center mt-32">
        <div className="h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center mt-16">
        <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-5 rounded-xl shadow-sm max-w-md w-full text-center">
          <div className="text-3xl mb-2">⚠️</div>

          <h2 className="text-lg font-semibold mb-1">Failed to load photos</h2>

          <p className="text-sm text-red-500">
            Something went wrong while fetching images. Please refresh the page.
          </p>
        </div>
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-6">
      <SearchBar value={search} onChange={handleSearch} />

      <>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPhotos.map((photo, index) => (
            <PhotoCard
              key={`${photo.id}-${index}`}
              photo={photo}
              dispatch={dispatch}
              isFav={favourites.some((p) => p.id === photo.id)}
            />
          ))}
        </div>

        {loadingMore && (
          <div className="flex justify-center py-10">
            <div className="h-12 w-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </>
    </div>
  );
}
