import { useSearch } from "@/context/useSearchContext";
import type { ICustomer } from "@/types/customer.types";
import { useQuery } from "@tanstack/react-query";

const apiUrl = `${import.meta.env.VITE_API_URL}/customers`;

interface ISearchResponse {
  msg: string;
  success: boolean;
  data: ICustomer[];
}

const useSearchQuery = () => {
  const { search, shouldSearch, setShouldSearch } = useSearch();

  const searchQuery = useQuery<ISearchResponse, Error>({
    queryKey: ["customers", search],
    queryFn: async () => {
      try {
        const response = await fetch(`${apiUrl}/search?search=${search}`);

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        return await response.json();
      } catch (err) {
        console.error("Search fetch error:", err);
        throw err;
      }
    },
    enabled: shouldSearch && search.trim().length > 0,
    meta: {
      onSuccess: () => {
        setShouldSearch(false);
      },
    },
  });

  return searchQuery;
};

export default useSearchQuery;
