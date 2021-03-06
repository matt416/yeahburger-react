import useField from "./useField"
import { useId } from "@react-aria/utils";

export default function Checkbox({ id, label, describedby, name, value, ...props }){

  const { field, error } = useField({ name, value, type: 'checkbox' });

  const uid =  useId()

  id = id ?? uid

  return <label htmlFor={ id } className={
    `inline-flex items-center space-x-2 min-h-[3rem] px-4 py-2 focus-within:bg-orange-50
    ${ field.checked ? "bg-gray-50 global-checked" : "bg-gray-100 global-unchecked" }`
  }>
    <input
      type="checkbox"
      className={ `global-checkbox mr-2 ${error.visible ? "border-red-500" : null }` }
      id={ id }
      aria-describedby={ error.visible && error.message ? undefined : describedby }
      {...field}
      {...props}
    />
    { label }
  </label>
}
// Total item count is not reading properly in VoiceOver
// aria-label={ `${label} (${index} of ${totalItems})` }