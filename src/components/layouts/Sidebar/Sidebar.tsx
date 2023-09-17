import React, { useContext, useState } from 'react';
import {
  Box,
  Divider,
  IconButton,
  List,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Drawer } from './Style';
import { mainListItems } from './listItems';
import { CreateArticleListItems } from './actionItems/CreateItem';
import { SaveArticleListItems } from './actionItems/SaveItem';
import { PostArticleListItems } from './actionItems/PostItem';
import { PrivatePostListItems } from './actionItems/PrivatePostItem';
import { usePathname } from 'next/navigation';
import { routes } from '@/app/routes';
import { CreateTopicListItems } from './actionItems/Dashboard';

const Sidebar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
      <List component="nav">
        {pathname === routes.edit &&
          <React.Fragment>
            <SaveArticleListItems/>
            <PostArticleListItems/>
            <PrivatePostListItems/>
          </React.Fragment>
        }
        {pathname === routes.articles && <CreateArticleListItems/>}
        {pathname === routes.dashboard && <CreateTopicListItems/>}
        <Divider/>
        {mainListItems}
      </List>
      </Drawer>
      <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <Box sx={{ position: 'absolute' }}>
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
