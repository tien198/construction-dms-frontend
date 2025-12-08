// --- Helper Functions ---
export const formatDate = (dateInput: Date | string | null) => {
  if (!dateInput) return "Chưa xác định";
  const date = new Date(dateInput);
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
};
