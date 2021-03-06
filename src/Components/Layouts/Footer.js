import React from 'react'
import {Paper, Tabs, Tab} from '@material-ui/core/';


export default ({muscles, category, onSelect}) => {

  const index = category
    ? muscles.findIndex(group => group === category) + 1
    : 0;

  const onIndexSelect = (e, index) => {
      onSelect(index === 0 ? '' : muscles[index - 1])};

  console.log(index, category, muscles)
  return(
    <Paper>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={onIndexSelect}
        centered
      >

        <Tab label={"All"} />
        {muscles.map((group, index) =>
        <Tab label={group} key={index}/>)}

      </Tabs>
    </Paper>
  )
}
