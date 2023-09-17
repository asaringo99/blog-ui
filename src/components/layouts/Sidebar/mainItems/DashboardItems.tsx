import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { routes } from '@/app/routes';
import { useRouter } from 'next/navigation';

export const DashboardListItems = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(routes.dashboard);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </React.Fragment>
  )
};