export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full flex justify-center mb-10">
      <div className="relative w-full max-w-2xl">
        <input
          value={value}
          onChange={onChange}
          placeholder="Search photos by author..."
          className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
        />

        <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>
      </div>
    </div>
  );
}