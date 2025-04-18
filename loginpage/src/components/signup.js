import React from 'react';
import { 
  Grid, 
  Paper, 
  Avatar, 
  TextField, 
  Button, 
  FormControlLabel, 
  Checkbox 
} from '@mui/material';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../style/Style.css';

const Signup = () => {

    const marginTop = { marginTop: 7 }
    return (
        <Grid>
            <Paper className='paperStyle' >
                <Grid align='center'>
                    <Avatar className='avatarStyle'>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 class='headerStyle'>Kayıt Ol</h2>
                    
                </Grid>
                <form>
                    <TextField style={marginTop} fullWidth label='Kullanıcı Adı' placeholder="Bir kullanıcı adı girin" required />
                    <TextField style={marginTop} fullWidth label='Mail Adresi' placeholder="Bir mail adresi girin" required 
                    />                   
                    <TextField style={marginTop} type='password' fullWidth label='Şifre' placeholder="Şifrenizi belirleyin" required/>
                    <TextField style={marginTop} type='password' fullWidth label='Şifreyi Onayla' placeholder="Belirlediğiniz şifreyi onaylayın" required />
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="Hizmet şartlarını kabul ediyorum."
                        
                    />
                    <Button className='customButton'style={marginTop} type='submit' variant='contained' >Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;