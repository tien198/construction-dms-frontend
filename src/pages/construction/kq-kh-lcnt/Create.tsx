import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../comps/layout/form-layout";
import { Button } from "@/components/ui/button";
import { useCreate } from "./hooks/create-hook";
import { DecisionSection } from "./sections/decision-section";
import {
  create_tt_store,
  create_tv_store,
} from "./store/create-submission-store";
import { SubmissionDetail } from "./sections/detail-section-submision";
import StickyReveal from "@/components/form-ui/sticky-reveal-button";
import { SaveBtn } from "@/components/form-ui/save-btn";

export function Create() {
  const {
    queryResult,
    handleSubmitTv,
    handleSubmitTt,
    handleCancel,
    isTvCreating,
    isTtCreating,
  } = useCreate();
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
            </ActionBtns>
          )}
        />
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <DecisionSection disabled={!isTvCreating || !isTtCreating} />
        <SubmissionDetail
          storeApi={create_tv_store}
          disabled={!isTvCreating}
          editAction={() => (
            <>
              {isTvCreating && (
                <SaveBtn onClick={handleSubmitTv}>Lưu TV</SaveBtn>
              )}
            </>
          )}
        />
        {!isTvCreating ? (
          <SubmissionDetail
            storeApi={create_tt_store}
            disabled={!isTtCreating}
            editAction={() => (
              <>
                {isTtCreating && (
                  <SaveBtn onClick={handleSubmitTt}>Lưu TT</SaveBtn>
                )}
              </>
            )}
          />
        ) : (
          <div className="col-span-2 flex items-center justify-center gap-4 p-8 border border-dashed rounded-4xl border-border ">
            <div className="bg-accent rounded-xl px-20 py-4">
              Lưu TTr. gói TV trước để nhập TTr. gói TT
            </div>
          </div>
        )}
      </div>
    </FormLayout>
  );
}
