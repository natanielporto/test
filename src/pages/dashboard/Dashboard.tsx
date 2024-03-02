import { useState, useContext, useCallback } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { LockOpen, Lock } from "@mui/icons-material";
import { SecretContext } from "../../GlobalContext/SecretContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { secretRoomOpen } = useContext(SecretContext);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleSecretRoomEntrance = useCallback(() => {
    if (secretRoomOpen) {
      navigate("/secretRoom");
    }
  }, [navigate, secretRoomOpen]);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={handleSecretRoomEntrance}>
            <ListItemIcon>
              {secretRoomOpen ? <LockOpen /> : <Lock />}
            </ListItemIcon>
            <ListItemText primary={"Secret Room"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="flex items-center justify-center mt-56 flex-col">
      This is your dashboard.
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Dashboard;
