import type { DecisionResponse } from "@/pages/construction/comps/decision-selection-dialog";

export async function getDecisions(
  level?: string,
  year?: string,
): Promise<DecisionResponse[]> {
  console.log("is calling", level, year);
  return [
    {
      id: "1",
      no: "01/QĐ-BXD",
      date: "2024-01-10",
    },
    {
      id: "2",
      no: "02/QĐ-BXD",
      date: "2024-02-15",
    },
    {
      id: "3",
      no: "03/QĐ-BXD",
      date: "2024-03-20",
    },
    {
      id: "4",
      no: "04/QĐ-BXD",
      date: "2024-04-25",
    },
    {
      id: "5",
      no: "05/QĐ-BXD",
      date: "2024-05-30",
    },
  ];
}
