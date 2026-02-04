import { useSubmit } from "react-router";
import ConstructionForm from "../comp/ConstructionForm";
import type { FormEvent } from "react";

export default function CreateConstruction() {
  const submit = useSubmit();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // submit(JSON.stringify(formData), { method: "post" });
    submit(null, { method: "post" });
  };

  return (
    <>
      <ConstructionForm handleSubmit={handleSubmit} />
    </>
  );
}
