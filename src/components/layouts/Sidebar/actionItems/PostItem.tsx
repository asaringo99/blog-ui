import * as React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import UploadIcon from '@mui/icons-material/Upload';
import PublicIcon from '@mui/icons-material/Public';
import { Button, IconButton, ListItem } from '@mui/material';
import { useArticleActions } from '@/state/slice/article/hook';
import { useRouter } from 'next/navigation';
import { routes } from '@/app/routes';


export const PostArticleListItems = () => {
  const router = useRouter();
  const { article, addArticles } = useArticleActions();
  const handleClick = () => {
    addArticles(article);
    router.push(routes.articles);
  }
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