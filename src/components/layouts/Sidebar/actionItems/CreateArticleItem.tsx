import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import { Button, ListItem } from '@mui/material';

interface IProps {
  handleClick: () => void;
}

export const CreateArticleListItems = ({ handleClick }: IProps) => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <Button
          variant='contained'
          color='success'
          startIcon={<AddIcon/>}
          size='large'
          sx={{ height: '80px' }}
          onClick={handleClick}
        >
          作成する
        </Button>
      </ListItem>
    </React.Fragment>
  );
};