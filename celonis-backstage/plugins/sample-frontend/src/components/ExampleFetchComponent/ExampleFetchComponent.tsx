import React from 'react';
import { Progress, ResponseErrorPanel } from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import Grid from '@mui/material/Grid';
import ItemCard from '../ItemCard/ItemCard';

export type TUser = {
  gender: string; // "male"
  name: {
    title: string; // "Mr",
    first: string; // "Duane",
    last: string; // "Reed"
  };
  email: string; // "duane.reed@example.com"
  picture: string; // "https://api.dicebear.com/6.x/open-peeps/svg?seed=Duane"
  nat: string; // "AU"
  emailHash: string;
};

type DenseCardProps = {
  users: TUser[];
};

export const DenseCards = ({ users }: DenseCardProps) => {
  return (
    <Grid container spacing={2}>
      {users.map((user: TUser, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <ItemCard
            gender={user.gender}
            name={user.name}
            email={user.email}
            picture={user.picture}
            nat={user.nat}
            emailHash={user.emailHash}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export const ExampleFetchComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<TUser[]> => {
    const response = await fetch(
      'http://localhost:7007/api/sample-backend/users',
    );
    if (!response.ok) throw new Error('Failed to fetch users');
    const data = await response.json();
    return data.results;
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  return <DenseCards users={value || []} />;
};
