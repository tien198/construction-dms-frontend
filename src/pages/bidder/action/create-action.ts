import { type ActionFunctionArgs } from "react-router";
import { createBidderStore } from "../store/create-bidder-store";

export async function createAction(args: ActionFunctionArgs) {
  //   const entries = (await args.request.formData()).entries();
  //   const data = Object.fromEntries(entries);
  const bidder = createBidderStore.getState().bidder;
  console.log(bidder);
}
