import React from 'react';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
    FormControlLabel,
    Checkbox
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import '../style/Style.css';

const Login = ({handleChange}) => {

    const marginTop = { marginTop: 7 }
    return (
        <Grid>
            <Paper  className='paperStyle'>
                <Grid align='center'>
                    <Avatar className='avatarStyle'><LockOutlinedIcon /></Avatar>
                    <h2 class='headerStyle'>Giriş Yap</h2>
                </Grid>
                <TextField style={marginTop} label='Kullanıcı Adı' placeholder='Kullanıcı adınızı girin' fullWidth required />
                <TextField style={marginTop} label='Parola' placeholder='Parolanızı girin' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Beni Hatırla"
                />
                <Button className='customButton'type='submit' variant="contained"  fullWidth> Giriş Yap </Button>
                <Typography >
                    <Link href="#"  >
                        Parolanızı mı unuttunuz ?
                    </Link>
                </Typography>
                <Typography > Hesap Oluşturmak için 
                    <Link href="#" margin={1} onClick={() => {handleChange("event" , 1)}} >
                        tıklayınız
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login