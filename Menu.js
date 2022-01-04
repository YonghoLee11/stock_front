import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function Menu() {
  return (
    <Box sx={{ width: '20%', maxWidth: 360, bgcolor: 'background.paper' , height:'100%' , float: 'left'}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemText primary="테마" />
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary=' - 테마 정보 조회'></ListItemText>
            </ListItemButton>
          </ListItem>  
          <ListItem>
            <ListItemButton>
              <ListItemText primary=' - 테마 관련 종목 조회'></ListItemText>
            </ListItemButton>
          </ListItem>  
          <ListItem disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon> */}
              <ListItemText primary="종목" />
            </ListItemButton>
          </ListItem>
        {/* </List> */}
      {/* </nav> */}
      {/* <Divider /> */}
      {/* <nav aria-label="secondary mailbox folders"> */}
        {/* <List> */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
