import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UserDataTable from './UserDataTable';

const HomeComponents = () => {
    const users = useSelector(state=>state.users);
    return (
        <div>
            <Button variant="primary">Create User</Button>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=><UserDataTable key={user.id} user={user} />)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default HomeComponents;