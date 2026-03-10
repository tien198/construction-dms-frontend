import type { AdministrativeDocument } from "./administrative-document.type";
import type { ConstructionInfoSnapshot } from "./construction-info-snapshot.type";

export interface Submission extends AdministrativeDocument {
  id: string;
  construction_infor_snapshot?: ConstructionInfoSnapshot | null;
}
