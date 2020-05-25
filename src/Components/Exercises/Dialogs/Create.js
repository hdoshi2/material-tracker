import React, {Fragment} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


export default props => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <Fragment>
      <Fab size="small" color="secondary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Create a New Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill out the form below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}

