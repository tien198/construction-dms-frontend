export function monthFormat(date: string): string {
  if (!date) {
    return "";
  }
  const formater = new Intl.DateTimeFormat("vi-VN", {
    month: "long",
  });
  return formater.format(new Date(date));
}
