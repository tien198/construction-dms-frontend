import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "2rem",
          padding: "1rem",
          boxShadow: theme.shadows[3],
          "&:hover": {
            boxShadow: theme.shadows[10],
          },
        }),
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "1rem",
        },
      },
    },
  },
});
