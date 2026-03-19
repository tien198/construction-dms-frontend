import { Button } from "@/components/ui/button";
import type { ConstructionPeriod } from "@/types/construction.type";
import { PlusIcon } from "lucide-react";
import { Create } from "../../bcktkt-detail/comps/Create";
import { useIsCreating } from "../../bcktkt-detail/store/useIsCreating";

type Props = {
  constructionId?: string;
  period: ConstructionPeriod;
};

export function NotfoundDecicion({ constructionId, period }: Props) {
  const { isCreating, toggleIsCreating } = useIsCreating();

  if (!isCreating)
    return (
      <div className="flex flex-col items-center justify-center gap-4 p-8 min-h-96 border border-dashed rounded-lg border-border">
        <div className="text-center text-muted leading-8 ">
          <div className="text-2xl font-semibold">
            Không tìm thấy QĐ {period}{" "}
          </div>
          <div>của công trình {constructionId} </div>
        </div>
        <Button onClick={toggleIsCreating}>
          <PlusIcon className="w-4 h-4 mr-2" />
          Tạo mới
        </Button>
      </div>
    );

  return <Create />;
}
