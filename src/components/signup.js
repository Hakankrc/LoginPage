import React from 'react';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    FormControlLabel,
    Typography,
    Checkbox
} from '@mui/material';

import { Formik, Field, Form, ErrorMessage } from 'formik';
import {FormHelperText} from '@mui/material';
import * as Yup from 'yup';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import '../style/Style.css';
import axios from 'axios';
const Signup = () => {
    

    const marginTop = { marginTop: 5}
    const marginButton = { marginTop: 5 }
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(4, "çok kısa").required('Kullanıcı adı zorunludur'),
        email: Yup.string().email('Geçersiz e-posta adresi').required('E-posta adresi zorunludur'),
        password: Yup.string().min(6, 'Şifre en az 6 karakter olmalıdır').required('Şifre zorunludur'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor').required('Şifreyi onaylamak zorunludur'),
        termsAndConditions: Yup.boolean().oneOf([true], 'Hizmet şartlarını kabul etmelisiniz')
    })



    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        handleSubmit(values);
        setTimeout(() => {
            props.setSubmitting(false);
            props.resetForm();
            alert("Kayıt işlemi başarılı");
        }, 2000);

    }
    const handleSubmit = async (e) => {
        const { username, email, password } = e;
        // Formdan gelen veriler 
        const newUser = { username, email, password };
    
        try {
          // Veriyi backend'e gönder
          const response = await axios.post('http://localhost:8080/register', newUser);
          console.log(response.data.message); // Başarı mesajını al
        } catch (error) {
          console.log(error.response ? error.response.data.message : 'Bir hata oluştu.');
        }
      };
    return (
        <Grid>
            <Paper className='paperStyle' >
                <Grid align='center'>
                    <Avatar className='avatarStyle'>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5" className="headerStyle">Kayıt Ol</Typography>


                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} style={marginTop} name='username' helperText={<ErrorMessage name='username' />} fullWidth label='Kullanıcı Adı' placeholder="Bir kullanıcı adı girin" required />
                            <Field as={TextField} style={marginTop} name='email' helperText={<ErrorMessage name='email' />} fullWidth label='Mail Adresi' placeholder="Bir mail adresi girin" required
                            />
                            <Field as={TextField} style={marginTop} name='password' helperText={<ErrorMessage name='password' />} type='password' fullWidth label='Şifre' placeholder="Şifrenizi belirleyin" required />
                            <Field as={TextField} style={marginTop} name='confirmPassword' helperText={<ErrorMessage name='confirmPassword' />} type='password' fullWidth label='Şifreyi Onayla' placeholder="Belirlediğiniz şifreyi onaylayın" required />
                            <FormControlLabel style={marginButton} 
                                control={<Field as={Checkbox}  name="termsAndConditions" />}
                                label="Hizmet şartlarını kabul ediyorum."

                            />
                            <FormHelperText error>
                                <ErrorMessage name='termsAndConditions' />
                            </FormHelperText>
                            <Button className='customButton' type='submit' disabled={props.isSubmitting} variant='contained' >{props.isSubmitting? "Gönderiliyor":"Kayıt ol"}</Button>

                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup;