import type {
  Construction,
  ConstructionPeriod,
} from "../../../type/construction.type";
import type { CreateSubmission } from "../../type/submission.create.type";
import { initialBidPackage } from "./initialPackageData.const";

export const generateState = (
  period: ConstructionPeriod,
  con: Construction,
): CreateSubmission => ({
  no: "1072/TTr - LCQ",
  level: "LCQ",
  date: new Date(),
  pursuantToDec_TCT: { ...con.pursuantToDec_TCT },
  period: period,
  constructionInfor: { ...con.constructionInfor },
  isApproved: false,
  directlyDecision: {
    no: "21/QĐ - TTMN",
    level: "TTMN",
    date: new Date(),
  },
});

// export const generateInitialState = (period: ConstructionPeriod) => ({
//   ...iniitialState,
//   period: period,
// });

export const iniitialState: CreateSubmission = {
  no: "1072/TTr - LCQ",
  level: "LCQ",
  date: new Date(),
  pursuantToDec_TCT: {
    no: "QĐ-TCT",
    date: new Date(),
    level: "TCT",
  },
  period: "KH",
  constructionInfor: {
    name: "",
    cost: 0,
    costString: "",
    sourceOfFunds: "",
    constructionImplementationTime: {
      startDate: new Date(),
      endDate: new Date(),
    },
    existingConditionOfTheStructure: "",
    repairScope: "",
    bidPackages: [initialBidPackage],
    packagesAmount: 0,
    period: "TV",
  },
  isApproved: false,
  directlyDecision: {
    no: "21/QĐ - TTMN",
    level: "TTMN",
    date: new Date(),
  },
};
