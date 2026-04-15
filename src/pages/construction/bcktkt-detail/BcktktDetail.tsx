import { useDetailFunc } from "./hooks/detail-hook";
import { NotfoundDecicion } from "../comps/layout/notfound-decision";
import { Detail } from "./comps/Detail";

export default function BcktktDetail() {
  const { data, isLoading, storeApi, constructionId } = useDetailFunc();

  if (isLoading) {
    return (
      <div className="p-8 text-center text-muted-foreground w-full">
        Đang tải dữ liệu...
      </div>
    );
  }

  if (!data || !data.result) {
    // Notfound include Create BCKTKT form component
    return <NotfoundDecicion constructionId={constructionId} period="BCKTKT" />;
  }

  // Detail also Edit form if `isEdit` is true
  return <Detail storeApi={storeApi} data={data.result} />;
}
