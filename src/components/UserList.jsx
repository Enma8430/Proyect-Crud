import axios from 'axios';
import React from 'react';
import './user.css'

const UserList = ({userList, selectuser,deleteUser}) => {

    
    return (
        <div>
            <ul className='target-general'>
            {
                userList.map(user => (
                    <li key={user.id}>
                        <strong>
                            <h3>{user.first_name} {user.last_name}</h3>
                        </strong>
                        <div className='target-email'> {user.email}</div>
                        <div>{user.birthday}</div>
                        <button onClick={() => selectuser(user)}>Select</button>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                        
                    </li>
                ))
            }
            </ul>
        </div>
    );
};

export default UserList;