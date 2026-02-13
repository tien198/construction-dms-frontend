import { lazy, Suspense, useEffect, type FormEvent } from "react";
import { useParams, useSubmit } from "react-router";
import type { ConstructionPeriod } from "../../type/construction.type";
import { getStoreByPeriod, setStoreByPeriod } from "../store/submission.store";
import { constructionFetcher } from "../loader";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ConstructionForm = lazy(() => import("../../comp/ConstructionForm"));

type Props = {
  formOpenList: ConstructionPeriod[];
  setFormOpenList: (
    fn: (prev: ConstructionPeriod[]) => ConstructionPeriod[],
  ) => void;
};

export default function AddSubmissionForm({
  formOpenList,
  setFormOpenList,
}: Props) {
  const params = useParams();
  const conId = params["construction-id"] as string;
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

  const openForm = () => setFormOpenList((prev) => [...prev, period]);
  if (!formOpenList.includes(period))
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-96 ">
        <span className="text-3xl font-semibold">Chưa có TTr cho QĐ này</span>
        <Button className="text-2xl flex items-center gap-2" onClick={openForm}>
          <AddCircleIcon fontSize="large" className="ml-3" color="primary" />
          Tạo tờ trình giai đoạn {period}
        </Button>
      </div>
    );
  else
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ConstructionForm
          title="Tạo Tờ Trình"
          subTitle={`giai đoạn ${period}`}
          period={period}
          handleSubmit={handelSubmit}
          storeApi={store}
        />
      </Suspense>
    );
}
