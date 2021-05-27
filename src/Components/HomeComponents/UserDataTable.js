import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteUserData } from '../../redux/actions/user.action';
import './Home.css';

const UserDataTable = ({user}) => {      
    const dispatch = useDispatch();  
    const {id, name, position, salary} = user;

    const handleDelete = id => {
        dispatch(deleteUserData(id))
    }
   
    return (
        <>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{position}</td>
                <td>{salary}</td>
                <td>
                    <Button className="action_btn" variant="success">
                        Read
                    </Button>
                    <Button className="action_btn" variant="info">
                        Edit
                    </Button>
                    <Button onClick={()=>handleDelete(id)} className="action_btn" variant="danger">
                        Delete
                    </Button>
                </td>
            </tr>

        </>
    );
};

export default UserDataTable;