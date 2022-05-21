import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function RestTypes() {
  return (
    <List sx={{borderRight:'1px solid black', width: '100%', maxWidth: 250, bgcolor: 'background.paper' }}>
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar style={{
              width:'100px',
              height:'100px'
          }} alt="Remy Sharp" src="restPhotos/rest_genac Vale_1.jpg" />
        </ListItemAvatar>
        <ListItemText
        style={{
            textAlign:'center'
        }}
          primary="Bur & Pub"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar style={{
              width:'100px',
              height:'100px'
          }} alt="Travis Howard" src="restPhotos/rest_genac Vale_1.jpg" />
        </ListItemAvatar>
        <ListItemText
         style={{
            textAlign:'center'
        }}
          primary="Haykakan"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar style={{
              width:'100px',
              height:'100px'
          }} alt="Travis Howard" src="restPhotos/rest_genac Vale_1.jpg" />
        </ListItemAvatar>
        <ListItemText
         style={{
            textAlign:'center'
        }}
          primary="Chinakan"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar style={{
              width:'100px',
              height:'100px'
          }} alt="Travis Howard" src="restPhotos/rest_genac Vale_1.jpg" />
        </ListItemAvatar>
        <ListItemText
         style={{
            textAlign:'center'
        }}
          primary="Knunq"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar style={{
              width:'100px',
              height:'100px'
          }} alt="Travis Howard" src="restPhotos/rest_genac Vale_1.jpg" />
        </ListItemAvatar>
        <ListItemText
         style={{
            textAlign:'center'
        }}
          primary="Harsaniq"
         
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="center">
        <ListItemAvatar>
          <Avatar style={{
              width:'100px',
              height:'100px'
          }} alt="Cindy Baker" src="restPhotos/rest_genac Vale_1.jpg" />
        </ListItemAvatar>
        <ListItemText
         style={{
            textAlign:'center'
        }}
          primary="Married"
         
        />
      </ListItem>
      
    </List>
  );
}
