import Field from "./Field"
import camelcase from "camelcase"
import Label from "./Label"
import useField from "./useField"

export default function TextField({ label, name, value, required, ...props }) {

  const { field, error } = useField({ name, value });

return <Field label={ label } error={ error } name={ name }>
    <Label htmlFor={ name } className="mb-2" required={ required }>{ label }</Label>
    <input
      className="border border-gray-300 rounded-md px-3 py-2 global-textfield"
      {...field}
      {...props}
      id={ name }
      required={ required }
      autoComplete={ props.autoComplete }
      // aria-required={props.required}
      /* Handle errors */
      aria-describedby={ camelcase(`error-${name}`) } // Should become {aria-errormessage} when better supported
      aria-invalid={ error.visible }
    />
  </Field>
}