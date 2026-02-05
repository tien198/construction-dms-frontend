// ...existing code...
import { useLoaderData } from "react-router";
import type { Decision } from "../type/decision.type";
import NotFound_AddSubmissionForm from "./comp/Notfound";
import DecisionDetail from "./comp/DecisionDetail";

export default function DetailPage() {
  const decision = useLoaderData<Decision>();

  if (decision == null) 
    return <NotFound_AddSubmissionForm />;

  return <DecisionDetail decision={decision} />;
}
