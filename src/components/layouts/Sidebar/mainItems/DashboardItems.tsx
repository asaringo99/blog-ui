'use client'
import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

interface IProps {
  handleClick: () => void;
}

export const DashboardListItems = ({ handleClick }: IProps) => {
  return (
    <React.Fragment>
      <ListItemButton
        onClick={handleClick}
      >
        <ListItemIcon>
          <DashboardIcon/>
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </React.Fragment>
  )
};