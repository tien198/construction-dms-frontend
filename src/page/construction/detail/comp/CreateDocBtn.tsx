import { useEffect, useState, type FormEvent } from "react";
import { useSubmit } from "react-router";
import DocumentSelectorPopup from "./Dialog";

export default function CreateDocBtn() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  // Dữ liệu mẫu
  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/construction/doc-list")
      .then((response) => response.json())
      .then((data) => {
        setSelectedItems(data);
      });
  }, []);

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
      <DocumentSelectorPopup docNames={selectedItems} onSave={handleSave} />
    </form>
  );
}
