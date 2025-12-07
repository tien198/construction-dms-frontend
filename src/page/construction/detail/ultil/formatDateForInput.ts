export const formatDateForInput = (date: Date | null | undefined): string => {
  if (!date) return "";
  return date instanceof Date ? date.toISOString().split("T")[0] : "";
};
