import React from 'react'
import { registerSchema } from '@/schema/register';
import { useFormik } from 'formik';
import Link from 'next/link';
import Input from '@/components/ui/Input';
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Register = () => {
  const { push } = useRouter();
    const onSubmit = async (values, actions) => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
          values
        );
        if (res.status === 200) {
          toast.success("User created successfully");
          push("/auth/Login");
        }
      } catch (err) {
        toast.error(err.response.data.message);
        console.log(err);
      }
       actions.resetForm(); 
      };

    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        onSubmit,
        validationSchema: registerSchema,
      });
      const inputs =[
        {
            id: 1,
            name: "fullName",
            type: "text",
            placeholder: "Your Full Name",
            value: values.fullName,
            errorMessage: errors.fullName,
            touched: touched.fullName,
          },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'email',
            value: values.email,
            errorMessage: errors.email,
            touched: touched.email,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'password',
            value: values.password,
            errorMessage: errors.password,
            touched: touched.password,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Your Password Again",
            value: values.confirmPassword,
            errorMessage: errors.confirmPassword,
            touched: touched.confirmPassword,
          },
      ]
      console.log(values)
  return (
    <div>
        <div className='container mx-auto sm:w-[50%] my-12'>
        <h1 className='font-title text-3xl p-6'>Register</h1>
        <form action=""  onSubmit={handleSubmit} className=''>       
        <div className='flex flex-col gap-4'> 
         {inputs.map((input)=> ( 
         <Input 
            key={input.id}
            {...input}
            onChange={handleChange}
            onBlur={handleBlur}
         />))}  
        </div>   
        <button className='btn my-6 ' type='submit'>SIGN UP</button>
        <div>
        <Link href="/auth/Login" className='hover:opacity-50 cursor-pointer underline'>Already have an account? Login now.</Link>    
        </div>
        </form>
        </div>
    </div>
  )
}

export default Register