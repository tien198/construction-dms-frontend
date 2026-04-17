import type { ConstructionPeriod } from "@/types/construction.type";
import { AddButton } from "./add-btn";

type Props = {
  isCreating: boolean;
  toggleIsCreating: () => void;
  constructionId?: string;
  period: ConstructionPeriod;
  // createComp is passed as HOC
  createComp: React.ReactNode;
};

export function NotfoundDecicion({
  constructionId,
  period,
  isCreating,
  toggleIsCreating,
  createComp,
}: Props) {
  if (!isCreating)
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 min-h-96 border border-dashed rounded-lg border-border">
        <div className="text-center text-muted leading-8 ">
          <div className="text-2xl font-semibold">
            Không tìm thấy QĐ {period}{" "}
          </div>
          <div>
            của công trình có id: <i>"{constructionId}"</i>
          </div>
        </div>
        <AddButton
          title="Tạo mới"
          border={false}
          onClick={toggleIsCreating}
          className="px-12"
        />
      </div>
    );

  return createComp;
}
