import Field from "./Field"
import useField from './useField';
import camelcase from "camelcase";
import Label from "./Label";

export default function Select({ label, children, required, name, value, ...props }) {
  const { field, meta, error } = useField({ name, value });

return <Field label={ label} error={ error } name={ name }>
    <Label htmlFor={ name } required={ required } className="mb-2">{ label }</Label>

    <select
      className="global-select"
      {...field}
      {...props}
      id={name}
      required={ required }
      // autoComplete={ props.autoComplete }
      // aria-required={required}
      /* Handle errors */
      aria-describedby={ error.visible && error.message ? camelcase(`error-${name}`) : undefined } // Should become {aria-errormessage} when better supported
      aria-invalid={!!meta.touched && !!meta.error}
    >
      { children }
    </select>


  </Field>
}