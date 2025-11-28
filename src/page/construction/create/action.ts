import { redirect, type ActionFunctionArgs } from "react-router";
import { constructionStore } from "./store/zustandStore";

export async function addConstruction(args: ActionFunctionArgs) {
  // const formData = await args.request.formData();
  const data = constructionStore.getState().formData;

  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/construction`, {
      method: args.request.method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("Lỗi");
      return await res.json();
    }
    const result = await res.json();
    return redirect("/cong-trinh/" + result.id);
  } catch {
    alert("Lỗi kết nối đến server");
  }
  return null;
}
