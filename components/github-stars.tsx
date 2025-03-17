"use client";

import { LoaderCircleIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function GitHubStars() {
  const [stars, setStars] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStars() {
      try {
        const response = await fetch("/api/github-stars");
        const data: { stars?: number; error?: string } = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setStars(data.stars ?? 0);
      } catch (error) {
        setError((error as Error).message);
      }
    }
    fetchStars();
  }, []);

  return (
    <>
      {error ? (
        <>😕</>
      ) : (
        <>
          {stars ?? (
            <LoaderCircleIcon className="animate-spin text-gray-500 w-5 h-5" />
          )}
        </>
      )}
    </>
  );
}
