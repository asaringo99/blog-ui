import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IProps {
  onAgree: () => void;
}

export default function AlertDialog({ ...props }: IProps) {
  const { onAgree } = props
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    handleClose();
    onAgree();
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"作成中の記事を破棄して新しい記事を作成しますか?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            記事を破棄した場合、現在作成中の記事が完全に消去されます。よろしいですか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>キャンセル</Button>
          <Button onClick={handleAgree} autoFocus>了解しました</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}