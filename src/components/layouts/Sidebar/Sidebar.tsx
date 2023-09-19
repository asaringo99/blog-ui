import React, { useState } from 'react';
import { Drawer } from './Style';
import { CreateArticleListItems } from './actionItems/CreateArticleItem';
import { CreateTopicListItems } from './actionItems/CreateTopicItem';
import { RegisterArticleListItems } from './actionItems/RegisterArticleItem';
import { useAuth } from './hook';
import { useArticleActions } from '@/state/slice/article/hook';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/routes';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { HomeListItems } from './mainItems/HomeItems';
import { DashboardListItems } from './mainItems/DashboardItems';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
      <List component="nav">
        {renderActionButton()}
        <Divider/>
        {renderMainListItems()}
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

const renderActionButton = () => {
  const router = useRouter();

  const {
    isAuthenticated,
    authenticatedUsername,
    currentTopic,
    isAuthenticatedArticlePage,
    isAuthenticatedDashboardPage,
    isAuthenticatedEditPage,
    hasTopic,
  } = useAuth();

  const {
    article,
    addArticle,
    createArticle,
  } = useArticleActions()

  const handleClickForCreate = () => {
    console.log(currentTopic)
    createArticle(currentTopic);
    router.push(routes.edit(authenticatedUsername!, currentTopic));
  }

  const handleClickForPost = () => {
    addArticle(article);
    router.push(routes.articles(authenticatedUsername!, currentTopic));
  }

  return (
    <React.Fragment>
      {isAuthenticated && isAuthenticatedEditPage() && hasTopic() && <RegisterArticleListItems handleClickForPost={handleClickForPost}/>}
      {isAuthenticated && isAuthenticatedArticlePage() && hasTopic() && <CreateArticleListItems handleClick={handleClickForCreate}/>}
      {isAuthenticated && isAuthenticatedDashboardPage() && <CreateTopicListItems />}
    </React.Fragment>
  )
}

const renderMainListItems = () => {
  const router = useRouter();

  const {
    isAuthenticated,
    authenticatedUsername,
    currentUseername,
    currentTopic,
    isAuthenticatedArticlePage,
    isAuthenticatedDashboardPage,
    isAuthenticatedEditPage,
    hasTopic,
  } = useAuth();

  const handleClickForDashboard = () => {
    if (currentUseername !== undefined && currentUseername !== null && currentUseername.length !== 0) {
      router.push(routes.dashboard(currentUseername));
      return;
    }
    if (isAuthenticated) {
      console.log(isAuthenticated, authenticatedUsername, currentUseername)
      router.push(routes.dashboard(authenticatedUsername));
      return;
    }
    router.push(routes.root);
  }
  
  return (
    <React.Fragment>
      <HomeListItems/>
      <DashboardListItems handleClick={handleClickForDashboard}/>
      <ListItemButton>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItemButton>
    </React.Fragment>
  );
}

const renderSubListItems = () => {
  return (
    <React.Fragment>
      <ListSubheader component="div" inset>
        Saved reports
      </ListSubheader>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItemButton>
    </React.Fragment>
  );
}

export default Sidebar;