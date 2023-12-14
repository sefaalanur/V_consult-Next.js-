import React from 'react'

const Textarea = (props) => {
    const { name, errorMessage, touched, placeholder, ...inputProps } = props;
    console.log(errorMessage);
  return (
    <div className="w-full">
        <label htmlFor="" className="relative block cursor-text w-full">
            <textarea name={name} 
            cols="" 
            rows="4"
            className={`h-24 w-full border outline-none px-4 peer pt-2
            ${touched && errorMessage ? "border-red-500" : "border-primary"}`}
            required
            {...inputProps}            
            />
             <span className="absolute top-0 left-0 px-4 text-sm flex items-center 
          h-full peer-focus:hidden peer-valid:hidden
          ">
            {placeholder}
          </span>
        </label>
        {touched && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  )
}

export default Textarea