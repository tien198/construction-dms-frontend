import type { Construction } from "@/types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link } from "react-router";

type Props = {
  construction: Construction;
};
export function ConstructionCard({ construction }: Props) {
  const firstDecision = construction.decisions?.[0];
  const infoSnapshot = firstDecision?.submission?.construction_infor_snapshot;

  const name = infoSnapshot?.name || "Unnamed Construction";
  const date = firstDecision?.date || "No date defined";
  const repairScope = infoSnapshot?.repair_scope || "No repair scope specified";
  const truncatedScope =
    repairScope.length > 50
      ? repairScope.substring(0, 50) + "..."
      : repairScope;

  return (
    <Link
      to={`/cong-trinh/tv-tt/${construction.id}`}
      key={construction.id}
      className="block h-full"
    >
      <Card className="cursor-pointer hover:shadow-lg shadow-black duration-300 h-full">
        <CardHeader>
          <CardTitle className="line-clamp-2">{name}</CardTitle>
          <CardDescription>Ngày bắt đầu KH: {date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground wrap-break-word">
            <span className="font-semibold text-foreground">
              Phạm vi sửa chữa:{" "}
            </span>
            {truncatedScope}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
