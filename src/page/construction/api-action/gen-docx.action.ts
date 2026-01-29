import type { ActionFunctionArgs } from "react-router";

export type FormDataType = {
  decId: string;
  conId: string;
  period: string;
};

export async function genDocXxAction(args: ActionFunctionArgs) {
  try {
    const entries = (await args.request.formData()).entries();
    const formData = Object.fromEntries(entries) as FormDataType;
    console.log(formData);

    const decRes = await fetch(
      `${import.meta.env.VITE_API_URL}/construction/gen-decision`,
      {
        method: args.request.method,
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      },
    );

    const subRes = await fetch(
      `${import.meta.env.VITE_API_URL}/construction/gen-submission`,
      {
        method: args.request.method,
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      },
    );

    if (!subRes.ok) {
      alert("Lỗi tạo tờ trình");
    }
    if (!decRes.ok) {
      alert("Lỗi tạo quyết định");
    }

    return null;
  } catch {
    alert("Lỗi kết nối đến server");
    return null;
  }
}
