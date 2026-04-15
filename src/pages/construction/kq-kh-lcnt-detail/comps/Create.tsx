import { SaveIcon } from "lucide-react";
import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { ConstructionInfoSnapshotForm } from "../../comps/ConstructionInfoSnapshotForm";
import { AdministrativeDocumentFields } from "../../comps/AdministrativeDocumentFields";
import { useFetcher, useParams } from "react-router";
import { create_bcktkt_store } from "../store/create-store";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../../comps/layout/form-layout";
import { useIsCreating } from "../store/useIsCreating";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDecisionByPer } from "../../api/get-decision-by-per.api";
import { decisionToSubmissionPost } from "../../ultil/decision-to-submision-post";

export function Create() {
  const fetcher = useFetcher();
  const { toggleIsCreating } = useIsCreating();
  const handleSubmit = () => {
    toggleIsCreating();
    return fetcher.submit(null, {
      method: "post",
      encType: "application/json",
      action: "tao-moi",
    });
  };

  const handleCancel = () => {
    toggleIsCreating();
  };

  const conId = useParams()["con-id"] as string;
  const { data } = useQuery({
    queryKey: ["kh-lcnt", conId],
    queryFn: () => getDecisionByPer(conId, "KH_LCNT"),
  });

  const storeApi = create_bcktkt_store;

  useEffect(() => {
    if (data?.result) {
      storeApi
        .getState()
        .reset("BCKTKT", decisionToSubmissionPost(data.result));
    }
  }, [data?.result]);

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle title="Tạo BCKTKT" description="Nhập thông tin BCKTKT." />
        <ActionBtns>
          <Button
            variant="outline"
            className="bg-accent text-accent-foreground hover:bg-destructive hover:text-white"
            onClick={() => handleCancel()}
          >
            Hủy
          </Button>
          <StickyRevealButton onClick={() => handleSubmit()}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu BCKTKT
          </StickyRevealButton>
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Administrative document fields for bcktkt */}
        <div className="flex flex-col gap-6">
          <div className="bg-brand relative rounded-xl border border-border bg-card p-5 shadow-xl shadow-accent-foreground flex flex-col gap-0">
            <p className="mb-6 text-sm font-semibold text-foreground">
              Tờ trình - Quyết định BCKTKT
            </p>
            <AdministrativeDocumentFields type="bcktkt" storeApi={storeApi} />
          </div>
        </div>
        {/* Right: Construction info snapshot */}
        <ConstructionInfoSnapshotForm storeApi={storeApi} />
      </div>
    </FormLayout>
  );
}
