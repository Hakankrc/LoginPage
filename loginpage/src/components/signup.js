import React from 'react';
import { 
  Grid, 
  Paper, 
  Avatar, 
  Typography, 
  TextField, 
  Button, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  FormControl, 
  FormLabel, 
  Checkbox 
} from '@mui/material';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../style/Style.css';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 6 }
    return (
        <Grid>
            <Paper className='paperStyle' elevation={24}>
                <Grid align='center'>
                    <Avatar className='avatarStyle'>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 class='headerStyle'>Kayıt Ol</h2>
                    <Typography variant='caption' gutterBottom>Hesap oluşturmak için formu doldurunuz.</Typography>
                </Grid>
                <form>
                    <TextField style={marginTop} fullWidth label='Name' placeholder="Enter your name" />
                    <TextField style={marginTop} fullWidth label='Email' placeholder="Enter your email" />                   
                    <TextField style={marginTop} fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField style={marginTop} fullWidth label='Confirm Password' placeholder="Confirm your password"/>
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