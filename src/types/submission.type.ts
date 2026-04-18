import type { AdministrativeDocument } from "./administrative-document.type";
import type { ConstructionInfoSnapshot } from "./construction-info-snapshot.type";

export interface Submission extends AdministrativeDocument {
  construction_info_snapshot?: ConstructionInfoSnapshot | null;
  is_changed_construction_info: boolean | null;
}
