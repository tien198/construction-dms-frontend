import type { CreateSubmission } from "../../type/submission.type";
import { designPackage, verificationPackage } from "./initialPackageData.const";
/*
export const initialFormData: Construction = {
  documentNo: "",
  name: "",
  dateOfSigning: null,
  budget: 0,
  stringBudget: "",
  sourceOfFunds: new Date(Date.now()).getFullYear().toString(),
  constructionExecutionTime: {
    startDate: null,
    endDate: null,
  },
  existingConditionOfTheStructure: "",
  repairScope: "",
  decision: {
    number: "",
    date: null,
  },
  packages: [designPackage, verificationPackage],
};
*/

export const initialFormData: CreateSubmission = {
  no: "1072/TTr - LCQ",
  level: "LCQ",
  date: new Date("2025-10-31T17:00:00.000Z"),
  pursuantToDec_TCT: {
    id: "",
    no: "3052/QĐ – TCT",
    level: "TCT",
    date: new Date("2024-12-29T17:00:00.000Z"),
  },
  pursuantToDec_TTMN: {
    id: "",
    no: "3052/QĐ – TCT",
    level: "TCT",
    date: new Date(""),
  },
  period: "KH",
  constructionInfor: {
    name: "Sửa chữa mái tôn khu tập thể độc thân kỹ thuật",
    cost: 1000000000,
    costString: "Một tỷ đồng",
    sourceOfFunds: "2025",
    repairScope: "",
    existingConditionOfTheStructure: "",
    period: "KH",
    constructionImplementationTime: {
      startDate: new Date("2025-11-08T17:00:00.000Z"),
      endDate: new Date("2025-11-28T17:00:00.000Z"),
    },

    bidPackages: [designPackage, verificationPackage],
    packagesAmount: 200000000000,
  },
  isApproved: false,
  directlyDecision: {
    no: "21/QĐ - TTMN",
    level: "TTMN",
    date: new Date("2025-10-31T17:00:00.000Z"),
  },
};
