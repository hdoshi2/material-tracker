import React, { Fragment } from 'react'
import { Grid, Paper, Typography, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import InboxIcon from '@material-ui/icons/Inbox';


const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10, height: 500, overflowY: 'auto' }
}

export default ({
  exercises,
  category,
  onSelect,
  exercise:
    {id,
      title = 'Welcome!',
      description = 'Please select an exercise from the list on the left.'
    }
  }) => {

  console.log("TEST", exercises)

  return (
    <Grid container>
      <Grid item sm>

        <Paper style={styles.Paper}>

          {exercises.map(([group, exercise], id) => {
            return (
              !category || category === group
                ?<Fragment key={id}>

                  <Typography variant="h6" style={{ textTransform: 'capitalize' }}>
                    {group}
                  </Typography>

                  <List component="nav" aria-label="main mailbox folders">
                    {exercise.map(({ id, title }) => {
                      return (
                        <ListItem key={id} button onClick={() => onSelect(id)}>
                          <ListItemIcon>
                            <InboxIcon />
                          </ListItemIcon>
                          <ListItemText primary={title}/>
                        </ListItem>
                      )
                    })}
                  </List>

                </Fragment>
                : null
            )
          })}

        </Paper>

      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography variant="h6">
            {title}
          </Typography>
          <Typography>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}


