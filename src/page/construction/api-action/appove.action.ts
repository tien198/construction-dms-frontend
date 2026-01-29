import type { ActionFunctionArgs } from "react-router";

export async function appoveAction(args: ActionFunctionArgs) {
  try {
    const formData = await args.request.formData();
    const conId = formData.get("conId");
    const decId = formData.get("decId");

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/construction/approve/${conId}/${decId}`,
      {
        method: args.request.method,
      },
    );

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
