import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useStore } from "zustand";
import { constructionStore } from "../store/zustandStore";
import { initialBidPackage } from "../constant/initalData/initialFormData";
import BidPackage from "./BidPackage";

// Gợi ý cấu trúc Grid cho item của gói thầu (để bạn implement vào BidPackagesList)
export default function BidPackagesList() {
  const packages = useStore(
    constructionStore,
    (state) => state.formData.packages
  );
  const setField = useStore(constructionStore, (state) => state.setField);

  /*
  const setDateField = useStore(
    constructionStore,
    (state) => state.setDateField
  );
  const setNestedField = useStore(
    constructionStore,
    (state) => state.setNestedField
  );
  const setNestedDateField = useStore(
    constructionStore,
    (state) => state.setNestedDateField
  );

  // --- Handlers ---
  // 1. Xử lý các trường cấp 1 (name, budget...)
  const handleChange =
    (prop: keyof Construction) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        event.target.type === "number"
          ? parseFloat(event.target.value)
          : event.target.value;
      setField(prop, value);
    };

  // 2. Xử lý trường Date cấp 1
  const handleDateChange = (prop: keyof Construction) => (val: PickerValue) => {
    setDateField(prop, val);
  };

  // 3. Xử lý Nested Object (decision, constructionExecutionTime)
  const handleNestedChange =
    (parent: "decision" | "constructionExecutionTime", child: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setNestedField(parent, child, value);
    };

  const handleNestedDateChange =
    (parent: keyof Construction, child: string) => (val: PickerValue) => {
      setNestedDateField(parent, child, val);
    };
*/
  const handleAddPackage = () => {
    setField("packages", [...packages, { ...initialBidPackage }]);
  };

  const handleRemovePackage = (index: number) => {
    const newPackages = [...packages];
    newPackages.splice(index, 1);
    setField("packages", newPackages);
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
