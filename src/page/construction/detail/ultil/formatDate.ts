// --- Helper Functions ---
/*
export const formatDate = (dateInput: Date | string | null) => {
  if (!dateInput) return "Chưa xác định";
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};
*/
export const formatDate = (
  ISOString: string | Date | null,
  formatTo?: "month" | "year"
) => {
  const decisionDate = new Date(ISOString ?? "");
  const dd = String(decisionDate.getDate()).padStart(2, "0");
  const mm = String(decisionDate.getMonth() + 1).padStart(2, "0");
  const yyyy = decisionDate.getFullYear();
  if (!formatTo) {
    return dd + "/" + mm + "/" + yyyy;
  } else if (formatTo === "month") {
    return "Tháng " + mm + "/" + yyyy;
  } else {
    return "Năm " + String(yyyy);
  }
};
