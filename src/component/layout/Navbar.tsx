import { Paper, Box } from "@mui/material";
import { NavLink } from "react-router";

interface NavItem {
  id: string;
  label: string;
  to: string;
}

interface NavigationCardProps {
  items?: NavItem[];
}

const itemsList: NavItem[] = [
  { id: "1", label: "Tạo công trình", to: "/cong-trinh/them" },
  { id: "2", label: "KH LCNT", to: "/cong-trinh/" },
  { id: "3", label: "BCKTKT", to: "/settings" },
];

export default function NavigationCard({
  items = itemsList,
}: NavigationCardProps) {
  return (
    <Box
      className="card"
      sx={{
        display: "flex",
        gap: 2,
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <NavLink className="flex-1" key={item.id} to={item.to} end>
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
