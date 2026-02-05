// ...existing code...
import { useLoaderData } from "react-router";
import type { Decision } from "../type/decision.type";
import NotFound_AddSubmissionForm from "./comp/Notfound";
import DecisionDetail from "./comp/DecisionDetail";
import { useState } from "react";
import type { ConstructionPeriod } from "../type/construction.type";

export default function DetailPage() {
  const decision = useLoaderData<Decision>();
  const [formOpenList, setFormOpenList] = useState<ConstructionPeriod[]>([]);
  if (decision == null)
    return (
      <NotFound_AddSubmissionForm
        formOpenList={formOpenList}
        setFormOpenList={setFormOpenList}
      />
    );

  return <DecisionDetail decision={decision} />;
}
