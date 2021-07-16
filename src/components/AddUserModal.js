import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddUserModal({agregarUser}) {
  const [open, setOpen] = React.useState(false);
  const [user, setUser]= useState({
    nombre: '',
    apellido:'',
    email: '',
    imagen: '',
    activo: false
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange= e => {
    const {name, value} = e.target;
    setUser(prevState=>({
      ...prevState,
      [name]: value
    }))
    console.log(user);
  }

  const handleChangeCheckbox= e => {
    const {name, checked} = e.target;
    setUser(prevState=>({
      ...prevState,
      [name]: checked
    }))
    console.log(user);
  }

  const agregar = () => {
    agregarUser(user)
    setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Agregar
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Inserta la información del nuevo usuario
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="nombre"
            id="nombre"
            label="Nombre"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="apellido"
            id="apellido"
            label="Apellido"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="email"
            id="email"
            label="Email"
            type="email"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            name="imagen"
            id="imagen"
            label="Imagen URL"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox checked={user.activo} onChange={handleChangeCheckbox} name="activo" />}
            label="Activo"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={agregar} color="primary">
            Agregar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
