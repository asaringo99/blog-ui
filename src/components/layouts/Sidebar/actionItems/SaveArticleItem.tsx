import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SaveIcon from '@mui/icons-material/Save';
import { Button, ListItem } from '@mui/material';
import { useArticleActions } from '@/state/slice/article/hook';


export const SaveArticleListItems = () => {
  const { article, startEditingArticle } = useArticleActions();
  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <SaveIcon />
        </ListItemIcon>
        <Button
          variant='contained'
          color='primary'
          startIcon={<ArrowCircleDownIcon/>}
          size='large'
          sx={{ height: '40px' }}
        >
          保存する
        </Button>
      </ListItem>
    </React.Fragment>
  );
};