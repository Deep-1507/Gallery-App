import { useEffect, useState, useCallback } from "react";

export function useFetchPhotos() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchPhotos = useCallback(async (pageNum) => {
    try {
      if (pageNum === 1) setLoading(true);
      else setLoadingMore(true);

      const res = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=30`
      );

      if (!res.ok) throw new Error("Failed to fetch photos");

      const data = await res.json();

      setPhotos((prev) => [...prev, ...data]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  useEffect(() => {
    fetchPhotos(page);
  }, [page, fetchPhotos]);

  useEffect(() => {
    function handleScroll() {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200;

      if (nearBottom && !loadingMore) {
        setPage((prev) => prev + 1);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadingMore]);

  return { photos, loading, loadingMore, error };
}