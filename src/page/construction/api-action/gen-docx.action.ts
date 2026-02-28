import type { ActionFunctionArgs } from "react-router";

export type FormDataType = {
  decId: string;
  conId: string;
  period: string;
};

async function downloadFile(response: Response, defaultFilename: string) {
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;

  const contentDisposition = response.headers.get("Content-Disposition");
  console.log(response.headers);

  let filename = defaultFilename;
  if (contentDisposition) {
    const filenameStarMatch = contentDisposition.match(
      /filename\*=UTF-8''([^;]*)/i,
    );
    const filenameMatch = contentDisposition.match(/filename="?([^";]+)"?/i);
    console.log(filenameStarMatch);

    if (filenameStarMatch && filenameStarMatch.length > 1) {
      filename = decodeURIComponent(filenameStarMatch[1]);
    } else if (filenameMatch && filenameMatch.length > 1) {
      filename = decodeURIComponent(filenameMatch[1]);
    }
  }

  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

export async function genDocXxAction(args: ActionFunctionArgs) {
  try {
    const entries = (await args.request.formData()).entries();
    const formData = Object.fromEntries(entries) as FormDataType;
    console.log(formData);

    const baseUrl = `${import.meta.env.VITE_API_URL}/construction`;
    const requestOptions: RequestInit = {
      method: args.request.method,
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    };

    const [decRes, subRes] = await Promise.all([
      fetch(`${baseUrl}/gen-decision`, requestOptions),
      fetch(`${baseUrl}/gen-submission`, requestOptions),
    ]);

    if (!subRes.ok) {
      alert("Lỗi tạo tờ trình");
    } else {
      await downloadFile(subRes, "to_trinh.docx");
    }
    if (!decRes.ok) {
      alert("Lỗi tạo quyết định");
    } else {
      await downloadFile(decRes, "quyet_dinh.docx");
    }

    return null;
  } catch {
    alert("Lỗi kết nối đến server");
    return null;
  }
}
