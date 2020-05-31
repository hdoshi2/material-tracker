import React, {Fragment, useEffect, useState} from 'react';
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, MenuItem} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';


export default ({muscles}) => {

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = useState({title: '', description: "", muscles: ""})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = e => {
    const {name, value} = e.target
    setInput({...input, [name]: value})
  }

  // useEffect(() => console.log(values), [values]);
  console.log("values", input)
  console.log("TEST111", muscles)

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
              label="Title"
              type="title"
              name='title'
              fullWidth
              onChange={handleInputChange}
              value={input.title}
            />
            <TextField
              autoFocus
              label="Description"
              multiline
              type="description"
              name='description'
              rows={4}
              placeholder="Add info here..."
              fullWidth
              onChange={handleInputChange}
              value={input.description}
            />
            <TextField
              select
              fullWidth
              label="Muscles Group"
              value={input.muscles}
              type="muscles"
              name='muscles'
              onChange={handleInputChange}
              helperText="Select muscles category"
            >
              {muscles.map((option, id) => (
                <MenuItem key={id} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
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

