import { SaveIcon } from "lucide-react";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { Button } from "@/components/ui/button";
import { useCreate } from "./hooks/create-hook";
import { DecisionSection } from "./sections/decision-section";
import { tv_store, tt_store } from "./store/create-submission-store";
import { SubmissionDetail } from "./sections/submission-detail";
import StickyReveal from "@/components/form-ui/sticky-reveal-button";

export function Create() {
  const { queryResult, handleSubmit, handleCancel } = useCreate();

  if (queryResult.isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Đang tải ...
      </div>
    );
  }

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle
          title="Tạo KQ KH LCNT"
          description="Nhập thông tin KQ KH LCNT."
        />
        <StickyReveal
          stickyEl={() => (
            <ActionBtns>
              <Button
                variant="outline"
                className="bg-accent text-accent-foreground hover:bg-destructive hover:text-white"
                onClick={() => handleCancel()}
              >
                Hủy
              </Button>

              <Button onClick={() => handleSubmit()}>
                <SaveIcon className="mr-2 h-4 w-4" />
                Lưu KQ KH LCNT
              </Button>
            </ActionBtns>
          )}
        />
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <DecisionSection />
        <SubmissionDetail storeApi={tv_store} />
        <SubmissionDetail storeApi={tt_store} />
      </div>
    </FormLayout>
  );
}
