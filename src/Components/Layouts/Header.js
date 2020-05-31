import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import Create from '../Exercises/Dialogs/Create'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

export default ({muscles}) =>{
  // const classes = useStyles();
  // console.log("TEST", exercises)
  return(
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" style={{flex: 1}}>
        News
      </Typography>
      <Create muscles={muscles}/>
    </Toolbar>
  </AppBar>

  )
}

