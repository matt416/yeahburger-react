import Field from "./Field"
import { useField } from 'formik';
import camelcase from "camelcase";

export default function TextField({ label, ...props }) {
  const [field, meta] = useField(props);

return <Field { ...{ label, meta, ...props }}>

    <input
      className="border border-gray-300 rounded-md px-3 py-2 global-textfield"
      {...field}
      {...props}
      id={props.name}
      required={ props.required }
      autoComplete={ props.autoComplete }
      // aria-required={props.required}
      /* Handle errors */
      aria-describedby={camelcase(`error-${props.name}`)} // Should become {aria-errormessage} when better supported
      aria-invalid={!!meta.touched && !!meta.error}
    />

  </Field>
}