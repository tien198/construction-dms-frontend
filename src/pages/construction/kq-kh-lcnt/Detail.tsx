import { useDetail } from "./hooks/detail-hook";
import { NotfoundDecicion } from "../comps/layout/notfound-decision";
import { DetailSection } from "./sections/detail-section";
import { isCreatingStoreFactory } from "../../../store-factory/is-creating-store-factory";
import { useStore } from "zustand";
import { Navigate } from "react-router";

const isCreatingStore = isCreatingStoreFactory(false);

export function Detail() {
  const { data, isLoading, storeApi, constructionId } = useDetail();
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

  if (isCreating) {
    return <Navigate to="tao-moi" replace />;
  }

  if (!data || !data.result) {
    // Notfound include Create KQ_KH_LCNT form component
    return (
      <NotfoundDecicion
        constructionId={constructionId}
        period="KQ_KH_LCNT"
        toggleCreating={toggleIsCreating}
      />
    );
  }

  // Detail also Edit form if `isEdit` is true
  return <DetailSection storeApi={storeApi} data={data.result} />;
}
