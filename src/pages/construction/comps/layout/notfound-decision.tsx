import type { ConstructionPeriod } from "@/types/construction.type";
import { Create } from "../../bcktkt-detail/comps/Create";
import { useIsCreating } from "../../bcktkt-detail/store/useIsCreating";
import { AddButton } from "./add-btn";

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
        {/* <Button onClick={toggleIsCreating}>
          <PlusIcon className="w-4 h-4 mr-2" />
          Tạo mới
        </Button> */}
        <AddButton
          title="Tạo mới"
          border={false}
          onClick={toggleIsCreating}
          className="px-12"
        />
      </div>
    );

  return <Create />;
}
