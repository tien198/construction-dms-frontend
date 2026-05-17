import { useQuery } from "@tanstack/react-query";
import { getBiddersListMock } from "@/mock-apis/bidder/bidder.api.mock";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Phone, Receipt, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AddButton } from "../construction/comps/layout/add-btn";
import type { Bidder } from "@/types/domain";

export function List() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["bidders"],
    queryFn: getBiddersListMock,
  });

  const nav = useNavigate();

  if (isLoading) {
    return <div className="p-4">Loading bidders...</div>;
  }

  if (error) {
    return <div className="p-4 text-destructive">Error loading bidders</div>;
  }

  const bidders = data?.result;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold tracking-tight mb-6">
        Danh sách nhà thầu
      </h1>

      {bidders?.length === 0 ? (
        <div className="py-8 text-center text-muted-foreground border rounded-md bg-muted/20">
          Không có dữ liệu
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bidders?.map((bidder) => (
            <BidderCard key={bidder.id} bidder={bidder} />
          ))}
          <AddButton
            title="Thêm nhà thầu"
            onClick={() => nav("/nha-thau/tao-moi")}
          />
        </div>
      )}
    </div>
  );
}

type BidderCardProps = {
  bidder: Bidder;
};
function BidderCard({ bidder }: BidderCardProps) {
  return (
    <Link to={`/nha-thau/${bidder.id}`}>
      <Card className="transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <CardHeader className="border-b border-border/40">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary shrink-0" />
            <span className="truncate" title={bidder.name}>
              {bidder.name}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <div className="flex items-start gap-2 text-sm">
            <UserRound className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
            <div className="truncate">
              <span className="font-medium text-muted-foreground">
                Người đại diện:
              </span>{" "}
              <span>{bidder.representative_name}</span>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Receipt className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
            <div className="truncate">
              <span className="font-medium text-muted-foreground">
                Mã số thuế:
              </span>{" "}
              <span>{bidder.tax_id}</span>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Phone className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
            <div className="truncate">
              <span className="font-medium text-muted-foreground">
                Số điện thoại:
              </span>{" "}
              <span>{bidder.phone_number}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
