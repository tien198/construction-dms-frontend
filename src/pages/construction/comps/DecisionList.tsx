import { DialogClose } from "@/components/ui/dialog";
import { useQuery } from "@tanstack/react-query";
import type { DecisionResponse } from "./decision-selection-dialog";
import { GET_DECISIONS_LIST_OF_CONSTRUCTION } from "@/lib/api-list/document-api-list";
import { useParams } from "react-router";

type Props = {
  handleSetDec: (decision: DecisionResponse) => void;
};

export function DecisionList({ handleSetDec }: Props) {
  const params = useParams();
  const conId = params["con-id"] as string;
  console.log(conId);

  const query = useQuery({
    queryKey: ["decision-list", conId],
    queryFn: () => getDecisionsLisOfConstruction(conId),
  });

  if (query.isError)
    return (
      <div className="h-full flex items-center justify-center text-red-500">
        Lỗi khi tải danh sách quyết định
      </div>
    );

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

async function getDecisionsLisOfConstruction(
  conId: string,
): Promise<DecisionResponse[]> {
  // Replace with actual API call
  const response = await fetch(
    GET_DECISIONS_LIST_OF_CONSTRUCTION + "/" + conId,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch decisions");
  }
  return response.json();
}
