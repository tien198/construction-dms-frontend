import { useEffect, useState, type FormEvent } from "react";
import DocumentSelectorPopup from "../../../../component/Dialog";
import { useSubmit } from "react-router";

export default function DocListDialog() {
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
