import type { Construction } from "../../../type/construction";
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

export const initialFormData: Construction = {
  id: "1764347797538-fa",
  documentNo: "1072",
  name: "Sửa chữa mái tôn khu tập thể độc thân kỹ thuật",
  dateOfSigning: new Date("2025-10-31T17:00:00.000Z"),
  budget: 1000000000,
  stringBudget: "Một tỷ đồng",
  sourceOfFunds: "2025",
  constructionImplementationTime: {
    startDate: new Date("2025-11-08T17:00:00.000Z"),
    endDate: new Date("2025-11-28T17:00:00.000Z"),
  },
  existingConditionOfTheStructure:
    "Mái tôn khu tập thể độc thân kỹ thuật nhiều vị trí rỉ sét, thủng dột khi mưa, xà gồ rỉ sét bị ăn mòn, nhiều vị trí bật đinh vít liên kết với mái tôn",
  repairScope:
    "Thay xà gồ mới, thay thế mái tôn mới, sơn dặm vá tường trần, chống thấm mái",
  decision: {
    number: "3052/QĐ – TCT",
    date: new Date("2024-12-29T17:00:00.000Z"),
  },

  packages: [designPackage, verificationPackage],
};
