import React from 'react';
import Input from '@/components/ui/Input';
import { useFormik } from 'formik';
import { loginSchema } from '@/schema/login';
import Link from 'next/link';
import { signIn, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
const Login = () => {
  const { data: session } = useSession();
  const { push } = useRouter();
  const [currentUser, setCurrentUser] = useState();
    const onSubmit = async (values, actions) => {
      const { email, password } = values;
      let options = { redirect: false, email, password };
      try {
        const res = await signIn("credentials", options);
        actions.resetForm();
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      const getUser = async () => {
        try {
          const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
          setCurrentUser(
            res.data?.find((user) => user.email === session?.user?.email)
          );
          push("/profile/" + currentUser?._id);
        } catch (err) {
          console.log(err);
        }
      };
      getUser();
    }, [session, push, currentUser]);
    
    const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
      initialValues: {
        email: '',
        password: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
      onSubmit,
      validationSchema: loginSchema,
    });
    const inputs =[
      {
          id: 1,
          name: 'email',
          type: 'email',
          placeholder: 'email',
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
      },
      {
          id: 2,
          name: 'password',
          type: 'password',
          placeholder: 'password',
          value: values.password,
          errorMessage: errors.password,
          touched: touched.password,
      },
    ];
    console.log(values);
  return (
    <div>
        <div className='container mx-auto sm:w-[50%] my-20'>
        <h1 className='font-title text-3xl p-6'>Login</h1>
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
        <button className='btn my-6 ' type="submit">SIGN IN</button>
        <div>
        <Link href="/auth/Register" className='hover:opacity-50 cursor-pointer underline'>You don`t have an account? Register now.</Link>    
        </div>
        </form>
        </div>
    </div>
  )
}
export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
  const user = res.data?.find((user) => user.email === session?.user.email);
  if (session && user) {
    return {
      redirect: {
        destination: "/profile/" + user._id,
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
export default Login;