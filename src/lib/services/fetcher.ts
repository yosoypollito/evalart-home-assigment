const API_URL = import.meta.env.VITE_API_URL || "http://localhost";

const fetcher = async <R>(endpoint: string, init?: RequestInit): Promise<{ data: R; res: Response; }> => {

  if (!endpoint || endpoint.length === 0) {
    throw new Error("Endpoint must not be empty")
  }

  const res = await fetch(API_URL + endpoint, {
    ...init
  });

  const body = await res.json();

  return {
    data: body,
    res
  }
}

export default fetcher;