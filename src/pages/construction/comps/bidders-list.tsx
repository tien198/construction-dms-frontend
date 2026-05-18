import { getBiddersList } from "@/api/get-bidder";
import { DialogClose } from "@/components/ui/dialog";
import type { Bidder } from "@/types/domain";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

type Props = {
  handleSetBidder: (bidder: Bidder) => void;
  selectedBidderId: string | null;
};

export function BiddersList({ handleSetBidder, selectedBidderId }: Props) {
  const query = useQuery({
    queryKey: ["bidders"],
    queryFn: () => getBiddersList(),
  });

  useEffect(() => {
    const bidder = query.data?.find((bidder) => bidder.id === selectedBidderId);
    if (bidder) {
      handleSetBidder(bidder);
    }
  }, [query.data, selectedBidderId]);

  if (query.isLoading || query.isFetching) {
    return (
      <div className="h-full flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (query.isError) {
    return (
      <div className="h-full flex items-center justify-center text-red-500">
        Lỗi khi tải danh sách nhà thầu
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-2 mt-2">
      {query.data?.map((bidder) => (
        <li key={bidder.id}>
          <DialogClose asChild>
            <div
              onClick={() => handleSetBidder(bidder)}
              className="flex justify-between w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1"
            >
              <span className="font-semibold">{bidder.name}</span>
              <span>
                <span className="text-gray-500">Đại diện:</span>{" "}
                {bidder.representative_name}
              </span>
            </div>
          </DialogClose>
        </li>
      ))}
    </ul>
  );
}
