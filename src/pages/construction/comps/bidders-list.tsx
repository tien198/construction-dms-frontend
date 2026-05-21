import { DialogClose } from "@/components/ui/dialog";
import type { Bidder } from "@/types/domain";

type Props = {
  biddersList: Bidder[];
  handleSetBidder: (bidder: Bidder) => void;
};

export function BiddersList({ biddersList, handleSetBidder }: Props) {
  return (
    <ul className="flex flex-col gap-2 mt-2">
      {biddersList.map((bidder) => (
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
