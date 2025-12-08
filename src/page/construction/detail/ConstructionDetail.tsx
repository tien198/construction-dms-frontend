import { Box, Container, Stack } from "@mui/material";
import type { Construction } from "../type/construction";
import Header from "./comp/Header";
import { useLoaderData } from "react-router";
import ConstructionInformation from "./comp/ConstructionInfor";
import PackageList from "./comp/PackageList";
import CreateDocBtn from "./comp/CreateDocBtn";

// --- Main Component ---
export default function ConstructionDetail() {
  const con = useLoaderData<Construction>();
  return (
    <Box sx={{ bgcolor: "#f4f6f8", pb: 15 }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Stack spacing={5}>
          {/* 1. Header Section */}
          <Header con={con} />
          {/* 2.  Thông tin chi tiết */}
          <ConstructionInformation con={con} />
          {/* 4. Bottom Section: Danh sách gói thầu */}
          <PackageList con={con} />
          <CreateDocBtn />
        </Stack>
      </Container>
    </Box>
  );
}
