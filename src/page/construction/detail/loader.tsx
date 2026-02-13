/*
import consList from "../../../assets/danh-sach-cong-trinh.json";

export async function loader(args: LoaderFunctionArgs) {
  return consList[0];
  }
*/

import type { LoaderFunctionArgs } from "react-router";
import type { Construction } from "../type/construction.type";

export async function decisionLoader(args: LoaderFunctionArgs) {
  const conId = args.params["construction-id"];
  const per = args.params["period"];
  try {
    const res = await fetch(
      import.meta.env.VITE_API_URL +
        `/construction/find-dec-by-per/${conId}/${per}`,
    );

    if (!res.ok) alert("Lỗi");
    return await res.json();
  } catch {
    return null;
  }
}

export async function constructionFetcher(conId: string) {
  try {
    const res = await fetch(
      import.meta.env.VITE_API_URL + `/construction/${conId}`,
    );

    if (!res.ok) alert("Lỗi");

    return (await res.json()) as Construction;
  } catch {
    return null;
  }
}
