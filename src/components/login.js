import React, { useState } from 'react';
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
import {Form, Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const Login = ({ handleChange }) => {

    const marginTop = { marginTop: 30 }
    const marginButton = { marginBottom: 40}

    

    const initialValues = {
        email: '',
        password: '',
        // rememberMe: false
    }

    const onSubmit = (values, props) => {

            console.log(values);
            props.setSubmitting(true);

            handleLogin(values);

            props.setSubmitting(false);
            props.resetForm();
       
    }
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/components");
    };

    const handleLogin = async (e) => {
        try {
          const response = await axios.post('http://localhost:8080/login', e);
          
          console.log('Giriş başarılı:', response.data.user);
          handleClick();
        } catch (error) {
          console.log(error.response ? error.response.data.message : 'Bir hata oluştu.');
        }
      };

    const validationSchema = Yup.object().shape({
        email: Yup.string().min(4, "Kullanıcı adı çok kısa").required('Kullanıcı adı zorunludur'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
        // rememberMe: Yup.boolean()
    })

    
    return (
        <Grid>
            <Paper className='paperStyle'>
                <Grid align='center'>
                    <Avatar className='avatarStyle'><LockOutlinedIcon /></Avatar>
                    <Typography variant="h5" className="headerStyle">Giriş Yap</Typography>

                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit}  validationSchema={validationSchema} >
                    {(props)=>( 
                    <Form> 
                        <Field as={TextField} style={marginTop} name = 'email' helperText={<ErrorMessage name='email'/>} label='Kullanıcı Adı' placeholder='Kullanıcı adınızı girin' fullWidth required />
                        <Field as={TextField} style={marginTop} name = 'password' helperText={<ErrorMessage name='password'/>} label='Parola' placeholder='Parolanızı girin' type='password' fullWidth required />
                        {/* <Field as={FormControlLabel} style={marginTop}
                            name='rememberMe' helperText={<ErrorMessage name='rememberMe'/>}
                            control={
                        <Checkbox
                            color="primary"
                        />
                        }
                        label="Beni Hatırla"
                        /> */}
                        <Button className='customButton' type='submit' variant="contained" disabled={props.isSubmitting} style={marginButton} fullWidth>{props.isSubmitting? "Gönderiliyor" : "Giriş Yap"} </Button>

                    </Form>
                        
                    )}
                </Formik>
                <Typography >
                    <Link href="#"  >
                        Parolanızı mı unuttunuz ?
                    </Link>
                </Typography>
                <Typography > Hesap Oluşturmak için
                    <Link href="#" margin={1} onClick={() => { handleChange("event", 1) }} >
                        tıklayınız
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login