import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

interface Props {
  window?: () => Window;
}

const navItems = [
  { label: "Home", route: "/" },
  { label: "Register", route: "/dashboard/register" },
  { label: "Login", route: "/dashboard/login" },
];

export default function DrawerAppBar(props: Props) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <div>
      <AppBar
        component="nav"
        sx={{ backgroundColor: " rgba(21, 21, 21, 0.78);" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img src="https://iili.io/JdDvjIV.png" alt="Logo do Blog" />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link href={item.route} key={item.label}>
                <Button sx={{ color: "#fff" }}>{item.label}</Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </div>
    </Box>
  );
}
