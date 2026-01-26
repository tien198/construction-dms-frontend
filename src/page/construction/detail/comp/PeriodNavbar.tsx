import { Paper, Box } from "@mui/material";
import { NavLink, useParams } from "react-router";

interface NavItem {
  label: string;
  to: string;
}

function gentItemList(conId: string) {
  const itemsList: NavItem[] = [
    { label: "KH", to: `/cong-trinh/${conId}/KH` },
    { label: "LCNT TV", to: `/cong-trinh/${conId}/TV` },
    { label: "LCNT TT", to: `/cong-trinh/${conId}/TT` },
    { label: "BCKTKT", to: `/cong-trinh/${conId}/BCKTKT` },
  ];
  return itemsList;
}

export default function PeriodNavigator() {
  const conId = useParams()["construction-id"]!;
  const items = gentItemList(conId);
  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {items.map((item, id) => (
        <NavLink className="flex-1" key={id} to={item.to} end>
          {({ isActive }) => (
            <Paper
              elevation={isActive ? 8 : 1}
              sx={{
                p: 2.5,
                borderRadius: 2,
                cursor: "pointer",
                textAlign: "center",
                backgroundColor: "hsl(var(--primary-foreground))",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: isActive ? "translateY(-2px)" : "translateY(0)",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: isActive
                    ? "0px 8px 16px rgba(0,0,0,0.2)"
                    : "0px 4px 8px rgba(0,0,0,0.15)",
                },
              }}
            >
              <Box
                sx={{
                  fontSize: "1rem",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "primary.main" : "text.primary",
                  transition: "all 0.3s ease",
                }}
              >
                {item.label}
              </Box>
            </Paper>
          )}
        </NavLink>
      ))}
    </Box>
  );
}
