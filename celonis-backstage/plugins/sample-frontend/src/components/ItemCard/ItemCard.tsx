import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { TUser } from '../ExampleFetchComponent/ExampleFetchComponent';

export default function ItemCard(user: TUser) {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar src={user.picture} sx={{ width: 56, height: 56 }} />
          <Typography variant="h6" sx={{ marginLeft: 2 }}>
            {`${user.name.first} ${user.name.last}`}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" marginTop={2}>
          <Typography color="textSecondary" marginBottom={1}>
            Email: {user.email}
          </Typography>
          <Typography color="textSecondary"> Nationality:{user.nat}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
