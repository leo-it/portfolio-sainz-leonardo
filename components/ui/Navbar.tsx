import * as React from "react";

import { NativeSelect, Tooltip } from "@mui/material";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import en from "@/locales/en";
import es from "@/locales/es";
import { useRouter } from "next/router";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /* i18n */
  const router = useRouter();
  const { locale } = router;
  const t = locale === "es" ? es : en;
  console.log(router.pathname, router.asPath, locale);

  const changeLanguage = (e: any) => {
    const locale2 = e.target.value;
    router.push(router.pathname, router.asPath, { locale: locale2 });
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href={"/"}>
        <Typography variant="h6" sx={{ my: 2 }}>
          Leonardo Sainz
        </Typography>
      </Link>
      <Divider />
      <List>
        <ListItem key={"1"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <Link href="#footer">
              <Box display="flex">
                <Typography align="center" justifyContent={"center"} my="auto">
                  {t.contact}
                </Typography>
              </Box>
            </Link>
          </ListItemButton>
        </ListItem>
        <ListItemButton sx={{ textAlign: "center" }}>
          <Button onClick={(e) => changeLanguage(e)} value="es">
            {" "}
            Español
          </Button>{" "}
        </ListItemButton>
        <ListItemButton sx={{ textAlign: "center" }}>
          <Button onClick={(e) => changeLanguage(e)} value="en">
            {" "}
            English
          </Button>
        </ListItemButton>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>{" "}
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link href={"/"}>
              {" "}
              <Typography variant="h6" component="div" color={"white"}>
                Leonardo Sainz
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Tooltip title="lsainzveron@gmail.com">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            <Button key={"item"} sx={{ color: "#fff" }}>
              <Link href="#footer">
                <Box display="flex">
                  <Typography
                    align="center"
                    justifyContent={"center"}
                    my="auto"
                    color="white"
                  >
                    {t.contact}
                  </Typography>
                </Box>
              </Link>
            </Button>
            <NativeSelect
              onChange={changeLanguage}
              defaultValue={"en"}
              inputProps={{
                name: "en",
                id: "language",
              }}
            >
              <option value={"es"}>es</option>
              <option value={"en"}>en</option>
            </NativeSelect>
   
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
