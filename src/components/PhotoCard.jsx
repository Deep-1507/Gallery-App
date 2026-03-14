export default function PhotoCard({ photo, isFav, dispatch }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute bottom-0 w-full p-4 flex justify-between items-center text-white">
        <p className="font-semibold text-sm truncate">{photo.author}</p>

        <button
          onClick={() => dispatch({ type: "TOGGLE_FAV", payload: photo })}
          className="text-2xl hover:scale-125 transition"
        >
          {isFav ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}