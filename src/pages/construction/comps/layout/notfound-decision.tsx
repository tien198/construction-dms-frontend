import type { ConstructionPeriod } from "@/types/domain/construction.type";
import { AddButton } from "../../../../components/shared/add-btn";

type Props = {
  constructionId?: string;
  period: ConstructionPeriod;
  toggleCreating: () => void;
};

export function NotfoundDecicion({
  constructionId,
  period,
  toggleCreating,
}: Props) {
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
        onClick={() => toggleCreating()}
        className="px-12"
      />
    </div>
  );
}
