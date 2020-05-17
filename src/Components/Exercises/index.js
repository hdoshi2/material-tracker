import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';


const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
}

export default ({ exercises }) => {
  console.log(exercises)
  return (
    <Grid container>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercise]) => {
            return (
              <Fragment>
                <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="nav" aria-label="main mailbox folders">
                  {exercise.map(({ title }) => {
                    return (
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
          <Typography variant="h6">
            Welcome!
          </Typography>
          <Typography>
            Please select an exercise from the list on the left.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}


