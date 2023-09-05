import React, { useState } from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Drawer } from './Style';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          open={open}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              // px: [1],
            }}
            >
              <Typography>
                メニュー
              </Typography>
            </Toolbar>
            <List component="nav">
              <ListItem>
                <ListItemText primary="Menu item 1" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Menu item 2" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Menu item 3" />
              </ListItem>
            </List>
        </Drawer>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box>
          <IconButton
            onClick={toggleDrawer}
          >
            {open ?
              <ChevronLeftIcon fontSize='large'/>
              :
              <ChevronRightIcon fontSize='large'/> 
            }
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
