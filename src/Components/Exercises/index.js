import React, {Fragment} from 'react'
import {Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';


const styles = {
  Paper:{padding: 20, marginTop: 10, marginBottom: 10}
}

export default ( {exercises} ) =>{
  console.log(exercises)
  return(
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercise])=> {
            return (
              <Fragment>
                <Typography variant="h6" style={{textTransform: 'capitalize'}}>
                  {group}
                </Typography>
                <List component="nav" aria-label="main mailbox folders">
                      {exercise.map(({title})=>{
                        return(
                          <ListItem button>
                            <ListItemIcon>
                              <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={title} />
                          </ListItem>
                        )
                      })}
                </List>
              </Fragment>
            )
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          Right Panes
        </Paper>
      </Grid>
    </Grid>
  )
}


