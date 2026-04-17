import { useDetailFunc } from "./hooks/detail-hook";
import { NotfoundDecicion } from "../comps/layout/notfound-decision";
import { DetailComp } from "./comps/Detail";
import { useStore } from "zustand";
import { createIsCreatingStore } from "../store-factory/create-is-creating-store";
import { Create } from "./comps/Create";

const isCreatingStore = createIsCreatingStore();

export namespace KqKhLcnt {
  export function Detail() {
    const { data, isLoading, storeApi, constructionId } = useDetailFunc();

    const { isCreate, toggleIsCreate } = useStore(
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
      // Notfound include Create KQ_KH_LCNT form component
      return (
        <NotfoundDecicion
          isCreating={isCreate}
          toggleIsCreating={toggleIsCreate}
          constructionId={constructionId}
          period="KQ_KH_LCNT"
          createComp={() => <Create toggleIsCreating={toggleIsCreate} />}
        />
      );
    }

    // Detail also Edit form if `isEdit` is true
    return <DetailComp storeApi={storeApi} data={data.result} />;
  }
}
