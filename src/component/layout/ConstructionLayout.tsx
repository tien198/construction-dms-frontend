import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router";
import Hero from "./Hero";

export default function Layout() {
  return (
    <div className="bg-color py-4 ">
      <Container maxWidth="lg">
        <Stack spacing={3}>
          {/* Page Header */}
          <Hero />
          <Outlet />
        </Stack>
      </Container>
    </div>
  );
}
