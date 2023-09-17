import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SettingsIcon from '@mui/icons-material/Settings';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from "@mui/material/IconButton";
import { Topic } from "@/state/type";
import { useDashboardActions } from "@/state/slice/dashboard/hook";

interface IProps {
  index: number;
  topic: Topic;
  selected: number;
  setSelected: (value: number) => void;
}

export const TopicsPreview = ({ index, topic, selected, setSelected }: IProps) => {
  const [ open, setOpen ] = useState(false);
  const [ isPrivate, setIsPrivate ] = useState(topic.isPrivate)
  const [ title, setTitle ] = useState(topic.title)
  const { editDashboardTopic } = useDashboardActions();
  const isSelected = selected === index;
  const handleSettingClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setTitle(topic.title);
    setIsPrivate(topic.isPrivate);
  }
  const handleAgree = () => {
    setOpen(false);
    editDashboardTopic(index, {...topic, title: title, isPrivate: isPrivate});
  }
  return (
    <React.Fragment>
      <ListItemButton
        key={index}
        divider
        sx={{ position: 'relative' }}
        onClick={() => setSelected(index)} selected={isSelected}
        onDoubleClick={() => alert("hello")}
      >
        <ListItemIcon>
          {topic.isPrivate ? <LockIcon/> : <LockOpenIcon/>}
        </ListItemIcon>
        <ListItemText primary={topic.title}/>
        <ListItemText primary={"作成日"} sx={{ position: 'absolute', left: '60%' }}/>
        <ListItemText primary={"最終更新日"} sx={{ position: 'absolute', left: '75%' }}/>
        <ListItemIcon>
          <IconButton onClick={(e) => handleSettingClick(e)}>
            <SettingsIcon/>
          </IconButton>
        </ListItemIcon>
      </ListItemButton>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"トピックを変更する"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Edit Topic Title"
            fullWidth
            variant="standard"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel checked={isPrivate} control={<Radio />} label="Private" onClick={() => setIsPrivate(true)}/>
              <FormControlLabel checked={!isPrivate} control={<Radio />} label="Public" onClick={() => setIsPrivate(false)}/>
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}