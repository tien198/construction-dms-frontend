import { lazy, Suspense, useEffect, type FormEvent } from "react";
import { useParams, useSubmit } from "react-router";
import type { ConstructionPeriod } from "../../../type/construction.type";
import {
  getStoreByPeriod,
  setStoreByPeriod,
} from "../../store/submission.store";
import { constructionFetcher } from "../../loader";
const ConstructionForm = lazy(() => import("../../../comp/ConstructionForm"));

export default function EditSubmissionForm() {
  const params = useParams();
  const conId = params["constructionId"] as string;
  const period = params.period as ConstructionPeriod;
  const submit = useSubmit();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(null, { method: "post" });
  };

  const store = getStoreByPeriod(period);

  useEffect(() => {
    constructionFetcher(conId)
      .then((con) => setStoreByPeriod(period, con!))
      .catch((err) => alert(err));
  }, [conId, period]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConstructionForm
        title="Cập nhật Tờ Trình"
        subTitle={`giai đoạn ${period}`}
        period={period}
        handleSubmit={handelSubmit}
        storeApi={store}
      />
    </Suspense>
  );
}
