import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';

const useStyles = makeStyles({
  avatar: {
    height: 32,
    width: 32,
    borderRadius: '50%',
  },
});

type User = {
  gender: string; // "male"
  name: {
    title: string; // "Mr",
    first: string; // "Duane",
    last: string; // "Reed"
  };
  email: string; // "duane.reed@example.com"
  picture: string; // "https://api.dicebear.com/6.x/open-peeps/svg?seed=Duane"
  nat: string; // "AU"
};

type DenseTableProps = {
  users: User[];
};

export const DenseTable = ({ users }: DenseTableProps) => {
  const classes = useStyles();

  const columns: TableColumn[] = [
    { title: 'Avatar', field: 'avatar' },
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Nationality', field: 'nationality' },
  ];

  const data = users.map(user => {
    return {
      avatar: (
        <img
          src={user.picture}
          className={classes.avatar}
          alt={user.name.first}
        />
      ),
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      nationality: user.nat,
    };
  });

  return (
    <Table
      title="Example User List"
      options={{ search: false, paging: false }}
      columns={columns}
      data={data}
    />
  );
};

export const ExampleFetchComponent = () => {
  const { value, loading, error } = useAsync(async (): Promise<User[]> => {
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

  return <DenseTable users={value || []} />;
};