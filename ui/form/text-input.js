//Implemented from https://github.com/matt416/sayyeah-sanity/blob/main/components/form.js

import React from 'react';
import clsx from 'clsx'
import { useField, useFormikContext } from 'formik';
//      <FieldError {...meta} {...props} key={`uuid-${props.name}`} />

const AccessibleBroadcast = ({ mode = "polite" }) => (
  <span aria-live={ mode }>{ children }</span>
)

// const FieldError = ({ touched, error, ...props }) => (
//   <span
//     className={ clsx('text-red-500', props.className) }
//     // aria-live="polite"
//     id={`error-${props.name}`}
//   >
//     { touched && error ? error : "" }
//   </span>
// )

// export const SubmitButton = ({ label, isLoading, className, ...props }) => {
//   const classnames = {
//     base:'h-12 px-6 py-3 bg-primary-2 text-white bg-black rounded-lg flex font-bold text-18',
//   }
//   return (
//     <button type="submit" className={ clsx(classnames.base, className)} disabled={ isLoading }>
//       { isLoading ? 'Loading' : label }
//       { isLoading && <img src="/_public/loading.png" className="animate-spin ml-3" alt="" width="24" height="24" /> }
//     </button>
//   )
// }




export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col py-4">
      <label htmlFor={props.id || props.name} className="text-lg mb-1">{label}</label>
      <input
        className={ clsx("border border-gray-300 rounded-md px-3 py-2") }
        {...field}
        {...props}
        id={props.name}
        required=""
        aria-required={props.required}
        aria-describedby={`error-${props.name}`} // Should become {aria-errormessage} when better supported
        aria-invalid={!!meta.touched && !!meta.error}
        />
      <FieldError {...meta} {...props} className="mt-1" />
    </div>
  );
};

export const Hidden = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
      <input
        type="hidden"
        {...field}
        {...props}
        id={props.name}
      />
  );
};


export const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const classnames = {
    base: "border border-gray-300 rounded-md outline-transparent p-1",
    focus: "focus:form-field"
  }

  return (
    <div className="flex flex-col py-4">
      <label htmlFor={props.id || props.name} className="text-lg mb-1">{label}</label>
      <textarea className={clsx(classnames.base, classnames.focus)} {...field} {...props} />
      <FieldError {...meta} />
    </div>
  );
};

export const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div className="py-4">
      <label className="checkbox-input flex">
        <input type="checkbox" {...field} {...props}
          className="appearance-none border-gray-300 w-[1.25rem] h-[1.25rem] border rounded-md checked:bg-black checked:border-transparent mr-2 flex-shrink-0 custom:bg-image-checkmark" />
        <span>{children}</span>
      </label>
      <FieldError {...meta} />
    </div>
  );
};

export const Select = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <FieldError {...meta}/>
    </div>
  );
};

export const FormErrors = ({ message, ...props }) => {
  const { isValid } = useFormikContext()

  const classes = clsx({
    "bg-red-500 text-white rounded p-2" : true,
    "invisible" : isValid
  })

  return (
    <div className={classes}>
      { !isValid && "Not valid" }
    </div>
  )
}