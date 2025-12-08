import type { ActionFunctionArgs } from "react-router";

export async function action(args: ActionFunctionArgs) {
  const api =
    import.meta.env.VITE_API_URL + "/construction/gen-doc/" + args.params.id;

  const json = await args.request.json();
  console.log("JSON received in action:", json);

  const response = await fetch(api, {
    method: args.request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });

  if (!response.ok) {
    alert(JSON.stringify(await response.json()));
    return;
  }

  alert("Thành công.");

  return response.json();
}
