// Helper format ngày tháng VN
export const formatDate = (date: Date | null) => {
  if (!date) return "---";
  return new Intl.DateTimeFormat("vi-VN").format(new Date(date));
};
