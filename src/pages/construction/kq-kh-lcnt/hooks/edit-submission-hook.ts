import { useFetcher } from "react-router";
import type { ToggleEditingProps } from "./detail-is-editing-toggle";

export function useEditSubmission(
  handleToggleTvEditing: (isCascadingDec?: ToggleEditingProps) => void,
  handleToggleTtEditing: (isCascadingDec?: ToggleEditingProps) => void,
) {
  const fetcher = useFetcher();

  const handleSubmitTv = () => {
    handleToggleTvEditing({ isNeedConfirm: false });
    // toggleIsDecEditing();
    fetcher.submit(null, {
      method: "PUT",
      encType: "application/json",
      action: "chinh-sua/tv",
    });
  };

  const handleSubmitTt = () => {
    handleToggleTtEditing({ isNeedConfirm: false });
    // toggleIsDecEditing();
    fetcher.submit(null, {
      method: "PUT",
      encType: "application/json",
      action: "chinh-sua/tt",
    });
  };

  return {
    handleSubmitTv,
    handleSubmitTt,
  };
}
