import React, {Fragment, useEffect, useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


export default props => {

  const [open, setOpen] = React.useState(false);

  const [values, setValues] = useState({name: '', quantity: 0, unitCost: 0})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = e => {
    const {name, value} = e.target
    setValues({...values, [name]: value})
  }

  // useEffect(() => console.log(values), [values]);
  console.log(values)
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

          <form>
            <TextField
              autoFocus
              margin="dense"
              label="name"
              type="name"
              name='name'
              fullWidth
              onChange={handleInputChange}
              value={values.name}
            />
          </form>

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

