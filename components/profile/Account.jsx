import React from "react";
import Input from "@/components/ui/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profile";
import axios from "axios";

const Account = ({ user }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`,
        values
      );
    } catch (err) {
      console.log(err);
    }
    actions.resetForm();
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        fullName: user?.fullName,
        phoneNumber: user?.phoneNumber,
        email: user?.email,
        field: user?.field,
        country: user?.country,
        bio: user?.bio,
      },
      onSubmit,
      validationSchema: profileSchema,
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
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Your Email Address",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 4,
      name: "field",
      type: "text",
      placeholder: "Your field of study",
      value: values.field,
      errorMessage: errors.field,
      touched: touched.field,
    },
    {
      id: 5,
      name: "country",
      type: "text",
      placeholder: "Your Country",
      value: values.country,
      errorMessage: errors.country,
      touched: touched.country,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: values.bio,
      errorMessage: errors.bio,
      touched: touched.bio,
    },
  ];

  return (
    <form className="lg:p-8 flex-1 lg:mt-0 mt-5" onSubmit={handleSubmit}>
      <h1 className="font-title text-2xl text-secondary ">Profile Details</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
      </div>
      <button className="btn mt-4" type="submit">
        Update
      </button>
    </form>
  );
};
export default Account;