import { lazy, Suspense, useState } from "react";
import { useLoaderData, useSearchParams } from "react-router";
import type { Decision } from "../type/decision.type";
import type { ConstructionPeriod } from "../type/construction.type";
import DecisionDetail from "./comp/DecisionDetail";

const AddSubmissionForm = lazy(
  () => import("./comp/composition/AddSubmissionForm"),
);
const EditSubmissionForm = lazy(
  () => import("./comp/composition/EditSubmissionForm"),
);

export default function DetailPage() {
  const decision = useLoaderData<Decision>();
  const [formOpenList, setFormOpenList] = useState<ConstructionPeriod[]>([]);
  const [searchParams] = useSearchParams();
  const isEdit = searchParams.get("edit") === "true";

  if (isEdit)
    return (
      <Suspense fallback={<span>Loading ... </span>}>
        <EditSubmissionForm />
      </Suspense>
    );
  else if (decision == null)
    return (
      <Suspense fallback={<span>Loading ... </span>}>
        <AddSubmissionForm
          formOpenList={formOpenList}
          setFormOpenList={setFormOpenList}
        />
      </Suspense>
    );
  return <DecisionDetail decision={decision} />;
}
