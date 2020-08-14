import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png'
import Torahack from '../assets/img/torahack.png'

const Chat = (props) => {
  const isQuestion = (props.type === 'question');
  const classes = isQuestion ? 'p-cchat_row' : 'p-chat_reverse';

  return(
    <ListItem>
    <ListItemAvatar>
      {isQuestion ? (
        <Avatar alt="icon" src={Torahack} />
      ) : (
        <Avatar alt="icon" src={NoProfile} />
      )}
    </ListItemAvatar>
  <div className="p-chat__bubble">{props.text}</div>
  </ListItem>

  )
}

export default Chat