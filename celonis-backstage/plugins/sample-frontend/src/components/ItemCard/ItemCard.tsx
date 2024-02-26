import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { TUser } from '../ExampleFetchComponent/ExampleFetchComponent';
import * as crypto from 'crypto';
import { Tooltip } from '@material-ui/core';
import { WarningPanel } from '@backstage/core-components';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ErrorIcon from '@material-ui/icons/Error';

const isValidEmail = (email: string, hash: string): boolean => {
  const iconFromEmail = crypto.createHash('md5').update(email).digest('hex');
  return iconFromEmail == hash;
};

export default function ItemCard(user: TUser) {
  const isEmailValid: boolean = isValidEmail(user.email, user.emailHash);
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
          <Tooltip
            title={
              isEmailValid ? 'Email is authentic.' : 'Email might be tampered.'
            }
          >
            <Box display="flex" flexDirection="row">
              <Typography
                color="textSecondary"
                marginBottom={1}
                marginRight={2}
                display="flex"
                alignItems="center"
              >
                Email: {user.email}
              </Typography>
              {isEmailValid ? <VerifiedUserIcon /> : <ErrorIcon />}
            </Box>
          </Tooltip>

          <Typography color="textSecondary"> Nationality:{user.nat}</Typography>
        </Box>
        {!isEmailValid ? (
          <WarningPanel title="Email might be tampered." />
        ) : null}
      </CardContent>
    </Card>
  );
}
