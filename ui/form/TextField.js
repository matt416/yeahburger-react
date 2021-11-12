import Field from "./Field"
import camelcase from "camelcase"
import Label from "./Label"
import useField from "./useField"
import ErrorField from "./ErrorField"

export default function TextField({ label, name, value, instructions, required, ...props }) {

  const { field, error } = useField({ name, value });

return <Field label={ label } error={ error } name={ name }>
    <Label htmlFor={ name }  required={ required }>{ label }</Label>
    <div className="text-gray-700 inline-flex items-center w-full justify-between mb-2">
      { error.visible
        ? <ErrorField error={ error } name={ name } srHidden={ true } />
        : instructions ? <p className="inline-flex items-center"> { instructions }</p> : null
      }
      </div>
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