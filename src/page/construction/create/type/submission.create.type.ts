import type z from "zod";
import type { CreateSubmissionSchema } from "../schema/submission.zod";
import type { NestedAdministrativeDocumentDto } from "../../type/nested-administrative-document.type";
import type { ConstructionInfor } from "../../type/construction-infor.type";
import type { ConstructionPeriod } from "../../type/construction.type";

export interface CreateSubmission
  extends z.infer<typeof CreateSubmissionSchema> {
  no: string;
  level: string;
  date: Date | null;
  pursuantToDec_TCT: NestedAdministrativeDocumentDto;
  pursuantToDec_TTMN?: NestedAdministrativeDocumentDto;
  period: ConstructionPeriod;
  constructionInfor?: ConstructionInfor;
  // decision directly for this submission
  isApproved?: boolean;
  directlyDecision?: NestedAdministrativeDocumentDto;
}
