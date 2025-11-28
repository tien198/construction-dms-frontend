export interface Construction {
  id?: string;
  documentNo: string;
  name: string;
  dateOfSigning: Date | null; // Cho phép null khi khởi tạo
  budget: number;
  stringBudget: string;
  constructionExecutionTime: {
    startDate: Date | null;
    endDate: Date | null;
  };
  existingConditionOfTheStructure: string;
  repairScope: string;
  decision: {
    decisionNumber: string;
    decisionDate: Date | null;
  };
}
