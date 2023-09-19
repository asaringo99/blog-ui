import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import UploadIcon from '@mui/icons-material/Upload';
import PublicIcon from '@mui/icons-material/Public';
import { Button, IconButton, ListItem } from '@mui/material';

interface IProps {
  handleClick: () => void;
}

export const PostArticleListItems = ({ handleClick }: IProps) => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <PublicIcon />
        </ListItemIcon>
        <Button
          variant='contained'
          color='primary'
          startIcon={<UploadIcon/>}
          size='large'
          sx={{ height: '40px' }}
          onClick={handleClick}
        >
          投稿する
        </Button>
      </ListItem>
    </React.Fragment>
  );
};