import React from 'react'
import {Chat} from './index'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  }
}));

const Chats = () => {
  const classes = useStyles();
  return(
    <List className={classes.root}>
      <Chat />
    </List>
  )

}

export default Chats