import React from 'react'
import AddUserModal from './AddUserModal'
import Grid from '@material-ui/core/Grid'

export default function Header({data, ...rest}) {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item>
            <h3 style={{ marginRight: 16 }}>User Manager: {data.length}</h3>
            </Grid>
            <Grid item >
            <AddUserModal {...rest} />
            </Grid>
        </Grid>
    )
}
