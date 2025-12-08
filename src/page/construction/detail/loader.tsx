/*
import consList from "../../../assets/danh-sach-cong-trinh.json";

export async function loader(args: LoaderFunctionArgs) {
  return consList[0];
  }
*/

import type { LoaderFunctionArgs } from "react-router";

export async function loader(args: LoaderFunctionArgs) {
  try {
    const res = await fetch(
      import.meta.env.VITE_API_URL + `/construction/${args.params.id}`
    );
    if (!res.ok) alert("Lỗi");
    return await res.json();
  } catch {
    alert("Lỗi tải dữ liệu công trình");
    return null;
  }
}
