import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import { Button, ListItem } from '@mui/material';
import { useArticleActions } from '@/state/slice/article/hook';
import { routes } from '@/app/routes';
import { useRouter } from 'next/navigation';


export const CreateArticleListItems = () => {
  const { startEditingArticle } = useArticleActions();
  const router = useRouter();
  const handleClick = () => {
    startEditingArticle();
    router.push(routes.edit);
  }
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