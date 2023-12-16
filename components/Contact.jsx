import React from 'react'
import Input from './ui/Input';
import { useFormik } from "formik";
import { contactSchema } from '@/schema/contact';
import Textarea from './ui/Textarea';
const Contact = () => {
      const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        actions.resetForm();
      };
      const { values, errors, touched, handleSubmit, handleChange, handleBlur } = useFormik({
        initialValues: {
          fullName: '',
          email: '',
          textarea: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        onSubmit,
        validationSchema: contactSchema,
      });
      const inputs = [
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
          name: "email",
          type: "email",
          placeholder: "Your Email Address",
          value: values.email,
          errorMessage: errors.email,
          touched: touched.email,
        },
      ];
      const inputTextarea = [{
        id: 3,
        name: "textarea",
        type: "textarea",
        placeholder: "Message Us",
        value: values.textarea,
        errorMessage: errors.textarea,
        touched: touched.textarea,
      }]
      console.log(values)
  return (
    <div className='container mx-auto py-16'>
      <h1 className='font-title text-3xl text-center my-10'>CONTACT US</h1>
      <div className='flex justify-between flex-wrap-reverse gap-10 pb-10'>
            <form action=""  onSubmit={handleSubmit} className='w-[500px]'>
            <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            ))}
            {
              inputTextarea.map((input)=>(
                <Textarea
                key={input.id}
                {...input}
                onChange={handleChange}
                onBlur={handleBlur}
                />
              ))
            }
          </div>
          <button className=" mt-6 btn" type="submit">
            SEND
          </button>
           </form>

        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.4665693746!2d20.896389535665502!3d52.23303347778518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2zVmFyxZ9vdmE!5e0!3m2!1str!2spl!4v1694784271025!5m2!1str!2sp"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
        </div>    
    </div>
  )
}

export default 
Contact