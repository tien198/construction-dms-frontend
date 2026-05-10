import StickyRevealButton from "@/components/form-ui/sticky-reveal-button";
import { SaveIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FormLayout,
  FormHeader,
  FormTitle,
  ActionBtns,
} from "../../comps/layout/form-layout";
import { useEdit } from "../hooks/edit-hook";
import { DecisionSection } from "./decision-section";
import { SubmissionDetail } from "./submission-detail";
import { edit_tt_store, edit_tv_store } from "../store/edit-store";

// Detail also Edit form if `isEdit` is true
export function DetailSection() {
  const { disabled, isEditingToggle, handleSubmit } = useEdit();
  return (
    <FormLayout>
      <FormHeader>
        <FormTitle
          title="Tạo KQ KH LCNT"
          description="Nhập thông tin KQ KH LCNT."
        />
        <ActionBtns>
          <Button
            variant="outline"
            className="bg-accent text-accent-foreground hover:bg-destructive hover:text-white"
            onClick={() => isEditingToggle()}
          >
            {disabled ? "Chỉnh sửa" : "Hủy"}
          </Button>
          <StickyRevealButton onClick={() => handleSubmit()}>
            <SaveIcon className="mr-2 h-4 w-4" />
            Lưu KQ KH LCNT
          </StickyRevealButton>
        </ActionBtns>
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <DecisionSection disabled />
        <SubmissionDetail storeApi={edit_tv_store} disabled={disabled} />
        <SubmissionDetail storeApi={edit_tt_store} disabled={disabled} />
      </div>
    </FormLayout>
  );
}
