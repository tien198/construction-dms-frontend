import type { ActionFunctionArgs } from "react-router";

export async function addConstruction(args: ActionFunctionArgs) {
  const formData = await args.request.formData();
  const data = Object.fromEntries(formData);
  console.log("--------------");

  console.log(data);
}
