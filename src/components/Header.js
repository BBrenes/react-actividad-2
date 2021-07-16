import React from 'react'
import AddUserModal from './AddUserModal'
import Grid from '@material-ui/core/Grid'

export default function Header({data, ...rest}) {
    return (
        <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
            <h3>User Manager: {data.length}</h3>
            </Grid>
            <Grid item >
            <AddUserModal {...rest} />
            </Grid>
        </Grid>
    )
}
