import React from 'react'
import UserRow from './UserRow'

export default function UsersList({data, ...rest}) {
    return (
        <div>
            {data.map((user) => (
                <div key={user.id}>
                    <UserRow user={user} {...rest} />
                </div>
            ))}
        </div>
    )
}
