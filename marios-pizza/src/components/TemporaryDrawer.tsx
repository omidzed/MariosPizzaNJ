import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const links = ["Home", "About Us", "Our Menu", "Catering", "Contact Us"];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {links.map((text) => (
          <ListItem key={text} disablePadding>
            <Link
              to={
                text === "Home"
                  ? "/"
                  : text === "About Us"
                  ? "/about-us"
                  : text === "Our Menu"
                  ? "/menu"
                  : text === "Catering"
                  ? "/catering"
                  : "/contact-us"
              }
            >
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <GiHamburgerMenu onClick={toggleDrawer(true)} className="text-primary">
        Open drawer
      </GiHamburgerMenu>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
