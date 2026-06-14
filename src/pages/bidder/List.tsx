import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Phone, Receipt, UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { AddButton } from "../../components/shared/add-btn";
import type { Bidder } from "@/types/domain";
import { getBiddersList } from "@/api/get-bidder";

export function List() {
  const {
    data: bidders,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bidders"],
    queryFn: getBiddersList,
  });

  const nav = useNavigate();

  if (isLoading) {
    return <div className="p-4">Loading bidders...</div>;
  }

  if (error) {
    return <div className="p-4 text-destructive">Error loading bidders</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold tracking-tight mb-6"> */}
      <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground mb-4">
        Danh sách nhà thầu
      </h1>

      {bidders?.length === 0 ? (
        <div className="flex flex-col gap-2 justify-between items-center ">
          <div className="py-8 w-full text-center text-muted-foreground border rounded-md bg-muted">
            Không có nhà thầu nào
          </div>
          <AddButton
            title="Thêm nhà thầu"
            onClick={() => nav("/nha-thau/tao-moi")}
            className="w-lg"
          />
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
