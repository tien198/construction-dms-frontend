import { type ActionFunctionArgs } from "react-router";
import { editBidderStore } from "../store/edit-bidder-store";

export async function editAction(args: ActionFunctionArgs) {
  const biider = editBidderStore.getState().bidder;
  console.log(biider);
}
