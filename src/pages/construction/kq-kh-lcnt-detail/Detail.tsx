import { useDetailFunc } from "./hooks/detail-hook";
import { NotfoundDecicion } from "../comps/layout/notfound-decision";
import { DetailComp } from "./comps/Detail";

export namespace KqKhLcnt {
  export function Detail() {
    const { data, isLoading, storeApi, constructionId } = useDetailFunc();

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
        <NotfoundDecicion constructionId={constructionId} period="KQ_KH_LCNT" />
      );
    }

    // Detail also Edit form if `isEdit` is true
    return <DetailComp storeApi={storeApi} data={data.result} />;
  }
}
