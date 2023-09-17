import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useArticleActions } from '@/state/slice/article/hook';
import { Tooltip } from '@mui/material';


export const PrivatePostListItems = () => {
  const { updateIsPrivate } = useArticleActions();
  const [isPrivate, setIsPravate] = React.useState(true);
  const text = isPrivate ? "記事の投稿をプライベートに公開します" : "記事の投稿をパブリックに公開します";
  const handleToggle = () => () => {
    setIsPravate(!isPrivate);
    updateIsPrivate(!isPrivate);
  };
  return (
    <React.Fragment>
      <Tooltip title={text}>
        <ListItem>
          <ListItemIcon>
            {isPrivate ? <LockIcon/> : <LockOpenIcon/>}
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary={"Private"} />
          <Switch
            edge="end"
            onChange={handleToggle()}
            checked={isPrivate}
            inputProps={{
              'aria-labelledby': 'switch-list-label-wifi',
            }}
          />
        </ListItem>
      </Tooltip>
    </React.Fragment>
  );
};