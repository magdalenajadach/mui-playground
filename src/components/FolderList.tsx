import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CircularProgress from '@mui/material/CircularProgress';

import { useEffect } from 'react';
import { useState } from 'react'
import AppleIcon from '@mui/icons-material/Apple'; 
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

type Phone = {
  id: string;
  name: string;
  data?: {
    Description?: string;
  };
};

export default function FolderList() {

  const [phones, setPhone] = useState<Phone[]>([]);

  useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhone(data);
      });
  }, []);

  if(phones.length === 0) {
    return <CircularProgress />
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {phones.map((phone) => (
        <ListItem key={phone.id}>
          <ListItemAvatar>
              <Avatar>
                {(phone.name.toLowerCase().includes('apple')) ? <AppleIcon/> : <PhoneAndroidIcon />}
              </Avatar>
            </ListItemAvatar>
          <ListItemText  primary={phone.name} secondary={phone.data?.Description}/>
        </ListItem>
      ))}
    </List>
    )
}



