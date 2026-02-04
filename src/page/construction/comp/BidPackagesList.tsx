import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useStore } from "zustand";
import BidPackage from "./BidPackage";
import { initialBidPackage } from "../create/constant/initalData/initialPackageData.const";
import type { StoreApiInject } from "../store-factory/store.type";

// Gợi ý cấu trúc Grid cho item của gói thầu (để bạn implement vào BidPackagesList)
export default function BidPackagesList({ storeApi }: StoreApiInject) {
  const packages = useStore(
    storeApi,
    (state) => state.formData.constructionInfor!.bidPackages,
  );
  const setNestdField = useStore(storeApi, (state) => state.setNestedField);

  const handleAddPackage = () => {
    setNestdField("constructionInfor.bidPackages", [
      ...packages,
      { ...initialBidPackage },
    ]);
  };

  const handleRemovePackage = (index: number) => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setNestdField("constructionInfor.bidPackages", newPackages);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">
          Danh sách gói thầu ({packages.length})
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddPackage}
          color="secondary"
        >
          Thêm gói thầu
        </Button>
      </Stack>

      {packages.map((pkg, index) => {
        if (!pkg) return null; // Safety check
        return (
          <BidPackage
            key={index}
            index={index}
            onRemove={handleRemovePackage}
          />
        );
      })}

      {packages.length === 0 && (
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          py={3}
        >
          Chưa có gói thầu nào. Nhấn "Thêm gói thầu" để bắt đầu.
        </Typography>
      )}
    </>
  );
}
