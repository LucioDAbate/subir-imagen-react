import { Tabs, Tab, Box } from "@mui/material";
import { Link, useLocation } from "react-router";

function NavTabs() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginY: 2 }}>
      <Tabs
        value={currentPath}
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab label="HOME" value="/" component={Link} to="/" />
        <Tab label="Servicios" value="/servicios" component={Link} to="/servicios" />
        <Tab label="Contactos" value="/contactos" component={Link} to="/contactos" />
      </Tabs>
    </Box>
  );
}
export default NavTabs;