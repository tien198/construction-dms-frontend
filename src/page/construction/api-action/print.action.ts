import type { ActionFunctionArgs } from "react-router";

export async function printAction(args: ActionFunctionArgs) {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/construction`, {
      method: args.request.method,
    });

    if (!res.ok) {
      alert("Lỗi");
      return await res.json();
    }
    const result = await res.json();
    return result;
  } catch {
    alert("Lỗi kết nối đến server");
    return null;
  }
}
