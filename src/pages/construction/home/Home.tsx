import { useQuery } from "@tanstack/react-query";
// import { getConstructions } from "@/mock-apis/get-constructions-list.mock";
import { ConstructionCard } from "./comps/ConstructionCard";
import { FloatingAddButton } from "./comps/FloatingAddButton";
import { AddButton } from "../comps/layout/add-btn";
import { useNavigate } from "react-router";
import { getConstructions } from "./api/get-constructions-list.api";

export function Home() {
  const {
    data: constructions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["constructions"],
    queryFn: getConstructions,
  });

  const nav = useNavigate();

  const handleAddConstruction = () => {
    nav("/cong-trinh/tao-moi");
  };

  if (isLoading) return <div className="p-4">Loading constructions...</div>;
  if (error)
    return (
      <div className="p-4 text-destructive">Error loading constructions</div>
    );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold tracking-tight text-primary text-shadow-md text-shadow-accent-foreground mb-4">
        Danh sách công trình
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {constructions?.map((construction) => (
          <ConstructionCard key={construction.id} construction={construction} />
        ))}
        <AddButton title="Thêm công trình" onClick={handleAddConstruction} />
      </div>
      <FloatingAddButton onClick={handleAddConstruction} />
    </div>
  );
}
