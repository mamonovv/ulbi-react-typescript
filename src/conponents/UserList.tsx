import React, {FC} from 'react';
import {IUser} from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
    users: IUser[];
}

const UserList: FC<UserListProps> = ({users}) => {

    return (
        <div>
            {/*{users.map((user) => (*/}
            {/*    <UserItem onClick={} user={user} key={user.id}/>*/}
            {/*))}*/}
        </div>
    );
};

export default UserList
