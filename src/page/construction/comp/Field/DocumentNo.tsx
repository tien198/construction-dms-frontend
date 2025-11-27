import { TextField } from "@mui/material";
import { constructionStore } from "../../store/zustandStore";
import { useStore } from "zustand";

export default function DocumentNo() {
  const documentNo = useStore(constructionStore, (s) => s.formData.documentNo);
  const setField = useStore(constructionStore, (s) => s.setField);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setField(name as any, Number(value));
  };
  return (
    <TextField
      fullWidth
      label="Số hiệu"
      name="documentNo"
      type="number"
      value={documentNo}
      onChange={handleChange}
    />
  );
}
