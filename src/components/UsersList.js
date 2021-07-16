import React from 'react'
import UserRow from './UserRow'

export default function UsersList({data}) {
    return (
        <div>
            {data.map((user, i) => (
                <div key={i}>
                    <UserRow user={user}/>
                </div>
            ))}
        </div>
    )
}
