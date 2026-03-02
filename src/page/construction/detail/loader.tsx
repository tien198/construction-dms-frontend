/*
import consList from "../../../assets/danh-sach-cong-trinh.json";

export async function loader(args: LoaderFunctionArgs) {
  return consList[0];
  }
*/

import type { LoaderFunctionArgs } from "react-router";
import type {
  Construction,
  ConstructionPeriod,
} from "../type/construction.type";
import { getStoreByPeriod } from "./store/submission.store";

export async function decisionLoader(args: LoaderFunctionArgs) {
  const conId = args.params["constructionId"];
  const per = args.params["period"] as ConstructionPeriod;
  try {
    const res = await fetch(
      import.meta.env.VITE_API_URL +
        `/construction/find-dec-by-per/${conId}/${per}`,
    );

    if (!res.ok) alert("Lỗi");
    const result = await res.json();
    getStoreByPeriod(per)
      .getState()
      .setNestedField("directlyDecision.id", result.id);

    return result;
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
