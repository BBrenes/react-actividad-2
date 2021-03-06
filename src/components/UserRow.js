import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete'

export default function UserRow({user, toggleActivo, deleteUser}) {

    const useStyles = makeStyles({
        root: {
          height: 50,
          width: 50,
          border: 3,
          borderStyle: 'solid',
          borderRadius: '50%',
          marginLeft: 18
        }
      })

    const classes = useStyles()

    return (
        <Paper elevation={3} style={{ height:75, width:500, marginBottom:20 }}>
            <Grid container spacing={2} justifyContent="space-between" alignItems="center" style={{ height:'100%', width: '100%'}} >
                <Grid container xs={9} item spacing={2} justifyContent="flex-start" alignItems="center">
                    <Grid item>
                        <img src={user.imagen} alt={user.nombre} className={classes.root} style={{borderColor: user.activo ? 'rgb(65, 214, 121)' : '#F66060'}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{ fontSize:14 }}>
                            {user.nombre} {user.apellido} ({user.email})
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={3} spacing={2} justifyContent="flex-end" alignItems="center">
                    <Grid item>
                        {
                            user.activo ? 
                            <ClearIcon onClick={() => toggleActivo(user.id)}/> :
                            <CheckIcon onClick={() => toggleActivo(user.id)}/>
                        }
                    </Grid>
                    <Grid item>
                        <DeleteIcon onClick={() => deleteUser(user.id)}/>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}
