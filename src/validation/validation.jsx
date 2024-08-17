import * as Yup from 'yup';

export const  signUp =Yup.object({
    fullName:Yup.string().min(3,'Full Name must be at least 3 Charecter') .max(15)
    .required('Plese Enter Your Full Name'),
    email:Yup.string().email('Invalid email address').required('Plese Enter Your Email'),
    password:Yup.string().min(8).required('Plese Enter Your Password')
})

export const  login =Yup.object({
    email:Yup.string().email('Invalid email address').required('Plese Enter Your Email'),
    password:Yup.string().min(8,'Password must be at least 8 Charecter').required('Plese Enter Your Password')
})

// .matches('/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/',"Please Enter atleast one Spcial Character")