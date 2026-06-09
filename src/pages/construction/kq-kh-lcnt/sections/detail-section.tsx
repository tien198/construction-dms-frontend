import { EditIcon, Printer, SaveIcon } from "lucide-react";
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
import StickyReveal from "@/components/form-ui/sticky-reveal-button";
import { exportDocx } from "@/ultil/export-file";
import { useDetailIsEditingToggle } from "../hooks/detail-is-editing-toggle";
import { SaveBtn } from "@/components/form-ui/save-btn";

// Detail also Edit form if `isEdit` is true
export function DetailSection() {
  const { disabled, isDecEditingToggle, handleSubmit, decision } = useEdit();

  const {
    isTvEditing,
    isTtEditing,
    handleToggleTvEditing,
    handleToggleTtEditing,
  } = useDetailIsEditingToggle(isDecEditingToggle, decision);

  return (
    <FormLayout>
      <FormHeader>
        <FormTitle
          title="Tạo KQ KH LCNT"
          description="Nhập thông tin KQ KH LCNT."
        />
        <StickyRevealActions
          isEditingToggle={isDecEditingToggle}
          disabled={disabled}
          handleSubmit={handleSubmit}
          decision={decision}
        />
      </FormHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <DecisionSection disabled={disabled} />
        <SubmissionDetail
          storeApi={edit_tv_store}
          disabled={disabled}
          isEditing={isTvEditing}
          onToggleEditing={handleToggleTvEditing}
          editAction={() => (
            <SaveBtn onClick={() => alert("OK")}>Lưu TV</SaveBtn>
          )}
        />
        <SubmissionDetail
          storeApi={edit_tt_store}
          disabled={disabled}
          isEditing={isTtEditing}
          onToggleEditing={handleToggleTtEditing}
          editAction={() => (
            <SaveBtn onClick={() => alert("OK")}>Lưu TT</SaveBtn>
          )}
        />
      </div>
    </FormLayout>
  );
}

type StickyProps = {
  isEditingToggle: () => void;
  disabled: boolean;
  handleSubmit: () => void;
  decision: any;
};

function StickyRevealActions({
  isEditingToggle,
  disabled,
  handleSubmit,
  decision,
}: StickyProps) {
  return (
    <StickyReveal
      stickyEl={() => (
        <ActionBtns>
          <Button
            variant="outline"
            className={`bg-accent text-accent-foreground ${
              !disabled
                ? "text-destructive hover:bg-destructive! hover:text-white"
                : "hover:text-primary"
            }`}
            onClick={() => isEditingToggle()}
          >
            <EditIcon className="mr-2 h-4 w-4" />
            {disabled ? "Chỉnh sửa" : "Hủy"}
          </Button>
          {!disabled && (
            <Button onClick={() => handleSubmit()}>
              <SaveIcon className="mr-2 h-4 w-4" />
              Lưu KQ KH LCNT
            </Button>
          )}
          {disabled && (
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-white"
              onClick={() => exportDocx(decision!)}
            >
              <Printer className="mr-2 h-4 w-4" />
              Xuất file
            </Button>
          )}
        </ActionBtns>
      )}
    />
  );
}
