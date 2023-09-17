import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { routes } from '@/app/routes';
import { useRouter } from 'next/navigation';

export const HomeListItems = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push(routes.home);
  }
  return (
    <React.Fragment>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HomeIcon/>
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </React.Fragment>
  )
};