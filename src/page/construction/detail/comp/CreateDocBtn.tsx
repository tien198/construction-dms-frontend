import type { FormEvent } from "react";
import { useSubmit } from "react-router";
import DocumentSelectorPopup from "./Dialog";

export default function CreateDocBtn() {
  const submit = useSubmit();
  async function handleSave(selected: string[]) {
    await submit(
      { list: selected },
      {
        method: "post",
        encType: "application/json",
      }
    );
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <DocumentSelectorPopup onSave={handleSave} />
    </form>
  );
}
