import * as React from 'react';
import { useState } from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddIcon from '@mui/icons-material/Add';
import TopicIcon from '@mui/icons-material/Topic';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import { TransitionProps } from '@mui/material/transitions';
import { useRouter } from 'next/navigation';
import { useTopicActions } from '@/state/slice/topic/hook';
import { useDashboardActions } from '@/state/slice/dashboard/hook';


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CreateTopicListItems = () => {
  const [ open, setOpen ] = useState(false);
  const [ title, setTitle ] = useState("");
  const { addTopic } = useDashboardActions();
  const router = useRouter();
  const handleClick = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleAgreeClick = () => {
    setTitle("");
    handleClose();
    addTopic({title: title, releaseDate: "", updatedDate: "", url: "", isPrivate: true});
  }
  return (
    <React.Fragment>
      <ListItem>
        <ListItemIcon>
          <TopicIcon />
        </ListItemIcon>
        <Button
          variant='contained'
          color='success'
          startIcon={<AddIcon/>}
          size='large'
          sx={{ height: '80px' }}
          onClick={handleClick}
        >
          トピック作成
        </Button>
      </ListItem>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Topic Title"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgreeClick}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};