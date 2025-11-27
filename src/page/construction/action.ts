import { constructionStore } from "./store/zustandStore";

export async function addConstruction() {
  // const formData = await args.request.formData();
  console.log("--------------");
  const data = constructionStore.getState().formData;
  console.log(data);
}
