import { DialogClose } from "@/components/ui/dialog";
import { getDecisions } from "@/mock-apis/get-decisions";
import { useQuery } from "@tanstack/react-query";
import type { DecisionResponse } from "./decision-selection-dialog";

type Props = {
  handleSetDec: (decision: DecisionResponse) => void;
};

export function DecisionList({ handleSetDec }: Props) {
  const query = useQuery({
    queryKey: ["decision-list"],
    queryFn: () => getDecisions(),
  });

  return (
    <ul className="flex flex-col gap-2 mt-2">
      {query.data?.map((d) => (
        <li key={d.id}>
          <DialogClose asChild>
            <div
              onClick={() => handleSetDec(d)}
              className="flex justify-between w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-1"
            >
              <span className="font-semibold">{d.no}</span>
              <span>
                <span className="text-gray-500">ngày:</span> {d.date}
              </span>
            </div>
          </DialogClose>
        </li>
      ))}
    </ul>
  );
}
