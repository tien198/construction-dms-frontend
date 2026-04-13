import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Link } from "react-router";
import type { ConstructionResDto } from "../api/dto/get-construction-list.dto";

type Props = {
  construction: ConstructionResDto;
};
export function ConstructionCard({ construction }: Props) {
  const { id: conId, name, date, repair_scope } = construction;
  const truncatedScope =
    repair_scope.length > 50
      ? repair_scope.substring(0, 50) + "..."
      : repair_scope;

  return (
    <Link
      to={`/cong-trinh/tv-tt/${conId}`}
      className="block h-full hover:-translate-y-1 shadow-md hover:shadow-lg shadow-black duration-300"
    >
      <Card className="cursor-pointer h-full">
        <CardHeader>
          <CardTitle className="line-clamp-2">{name}</CardTitle>
          <CardDescription>
            Ngày bắt đầu KH: {new Date(date).toLocaleDateString("vi-vn")}
          </CardDescription>
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
