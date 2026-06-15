import { GEN_DOCUMENT } from "@/lib/api-list/document-api-list";

export async function genDocument(
  subId: string,
  type: "submission" | "decision" = "submission",
) {
  const res = await fetch(
    `${GEN_DOCUMENT}/${subId}?type=${type}&is-preview=true`,
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch document ${subId}`);
  }

  const content = res.headers.get("Content-Disposition");
  const filename =
    content?.split("filename*=UTF-8''")[1] || `document-${subId}.docx`;
  const blob = await res.blob();

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = decodeURIComponent(filename);
  link.click();
  URL.revokeObjectURL(url);
}
