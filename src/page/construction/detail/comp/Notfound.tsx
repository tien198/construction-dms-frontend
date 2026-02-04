import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { lazy, Suspense, useState, type FormEvent } from "react";
import { useParams, useSubmit } from "react-router";
import { createConstructionStore } from "../../create/store/create-store";
import type { ConstructionPeriod } from "../../type/construction.type";

const ConstructionForm = lazy(() => import("../../comp/ConstructionForm"));

export default function NotFound_AddSubmissionForm() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { period } = useParams();
  const submit = useSubmit();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    submit(null, { method: "post" });
  };

  const openForm = () => setIsFormOpen(true);
  if (!isFormOpen)
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-96 ">
        <span className="text-3xl font-semibold">Chưa có TTr cho QĐ này</span>
        <Button className="text-2xl flex items-center gap-2" onClick={openForm}>
          <AddCircleIcon fontSize="large" className="ml-3" color="primary" />
          Tạo tờ trình{" "}
        </Button>
      </div>
    );
  else
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ConstructionForm
          period={(period as ConstructionPeriod) || "KH"}
          handleSubmit={handelSubmit}
          storeApi={storeApi}
        />
      </Suspense>
    );
}
