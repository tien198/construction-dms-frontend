import { redirect, type ActionFunctionArgs } from "react-router";
import { getStoreByPeriod } from "./store/submission.store";
import type { ConstructionPeriod } from "../type/construction.type";

export async function addSubmissionAction(args: ActionFunctionArgs) {
  const period = args.params.period?.toUpperCase() as ConstructionPeriod;
  const store = getStoreByPeriod(period);
  const data = store.getState().formData;

  const conId = args.params["constructionId"];
  const apiUri = `${import.meta.env.VITE_API_URL}/construction/add-submission/${conId}`;

  try {
    const res = await fetch(apiUri, {
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
    return redirect("/cong-trinh/" + result.id + "/" + period);
  } catch {
    alert("Lỗi kết nối đến server");
    return null;
  }
}
