import { AdministrativeDocumentFields } from "./AdministrativeDocumentFields";
import type { StoreApiInject } from "../store-factory/store-api-inject.type";
import type { Decision } from "@/types";

type Props = { decision?: Decision } & StoreApiInject;

export function DocumentSide({ storeApi, disabled = false, decision }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {/* Submission's own AdministrativeDocument fields */}
      <AdministrativeDocumentFields
        title="KH LCNT"
        type="kh_lcnt"
        storeApi={storeApi}
        disabled={disabled}
        decision={decision}
      />

      {/* Submission's own AdministrativeDocument fields */}
      {/* <AdministrativeDocumentFields
        title="Tờ trình - Quyết định TT"
        type="tt"
        storeApi={storeApi}
        disabled={disabled}
        decision={ttDec}
      /> */}
    </div>
  );
}
