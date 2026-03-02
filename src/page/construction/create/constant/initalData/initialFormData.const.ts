import type {
  Construction,
  ConstructionPeriod,
} from "../../../type/construction.type";
import type { CreateSubmission } from "../../type/submission.create.type";
import { initialBidPackage } from "./initialPackageData.const";

export const generateState = (
  period: ConstructionPeriod,
  con: Construction,
): CreateSubmission => {
  const dec = con.decisions.find((d) => d.period === period);

  return {
    no: dec?.no ?? "___/TTr - LCQ",
    level: dec?.submission?.level ?? "LCQ",
    date: dec?.date ?? new Date(""),
    pursuantToDec_TCT: dec?.pursuantToDec_TCT ?? { ...con.pursuantToDec_TCT },
    pursuantToDec_TTMN: dec?.pursuantToDec_TTMN,
    period: period,
    constructionInfor:
      dec?.submission?.constructionInfor ?? con.constructionInfor,
    isApproved: dec?.isApproved ?? false,
    directlyDecision: {
      id: dec?.id,
      no: dec?.no ?? "___/QĐ - TTMN",
      level: dec?.level ?? "TTMN",
      date: dec?.date ?? new Date(""),
    },
  };
};
// export const generateInitialState = (period: ConstructionPeriod) => ({
//   ...iniitialState,
//   period: period,
// });

export const iniitialState: CreateSubmission = {
  no: "___/TTr - LCQ",
  level: "LCQ",
  date: new Date(""),
  pursuantToDec_TCT: {
    no: "___/QĐ-TCT",
    date: new Date(""),
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
    period: "KH",
  },
  isApproved: false,
  directlyDecision: {
    no: "___/QĐ-TTMN",
    level: "TTMN",
    date: new Date(""),
  },
};
