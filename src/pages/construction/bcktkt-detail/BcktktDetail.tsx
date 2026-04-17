import { useDetailFunc } from "./hooks/detail-hook";
import { NotfoundDecicion } from "../comps/layout/notfound-decision";
import { DetailComp } from "./comps/Detail";
import { createIsCreatingStore } from "../store-factory/create-is-creating-store";
import { useStore } from "zustand";
import { Create } from "./comps/Create";

const isCreatingStore = createIsCreatingStore();

export namespace Bcktkt {
  export function Detail() {
    const { data, isLoading, storeApi, constructionId } = useDetailFunc();

    const { isCreating, toggleIsCreating } = useStore(
      isCreatingStore,
      (state) => state,
    );

    if (isLoading) {
      return (
        <div className="p-8 text-center text-muted-foreground w-full">
          Đang tải dữ liệu...
        </div>
      );
    }

    if (!data || !data.result) {
      // Notfound include Create BCKTKT form component
      return (
        <NotfoundDecicion
          isCreating={isCreating}
          toggleIsCreating={toggleIsCreating}
          constructionId={constructionId}
          period="BCKTKT"
          createComp={<Create toggleIsCreating={toggleIsCreating} />}
        />
      );
    }

    // Detail also Edit form if `isEdit` is true
    return <DetailComp storeApi={storeApi} data={data.result} />;
  }
}
