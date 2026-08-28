import { TApiListResponse } from "@/types/common/api-list-response";
import { useQuery } from "@tanstack/react-query";

type TUseGetListQuery<T> = {
  queryKey: (string | number)[];
  queryFn: () => Promise<TApiListResponse<T>>;
  staleTime?: number;
  enabled?: boolean;
};

export function useGetListQuery<T>(props: TUseGetListQuery<T>) {
  const {
    queryKey,
    queryFn,
    staleTime = 5 * 60 * 1000,
    enabled = true,
  } = props;
  return useQuery({
    queryKey,
    queryFn,
    staleTime,
    enabled,
  });
}
