import type z from "zod";
import type { SubmissionSchema } from "../schema/submission.zod";
import type { ConstructionInfor } from "./construction-infor.type";
import type { ConstructionPeriod } from "./construction.type";
import type { NestedAdministrativeDocument } from "./nested-administrative-document.type";

export interface Submission extends z.infer<typeof SubmissionSchema> {
  no: string;
  level: string;
  date: Date;
  isApproved?: boolean;
  pursuantToDec_TCT: NestedAdministrativeDocument;
  pursuantToDec_TTMN?: NestedAdministrativeDocument;
  period: ConstructionPeriod;
  constructionInfor?: ConstructionInfor;
}
