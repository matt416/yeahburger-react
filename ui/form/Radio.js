import Label from "./Label";
import useField from "./useField"
import { useId } from "@react-aria/utils";

export default function Radio({ label, name, value, ...props }){

  const { field, error } = useField({ name, value, type: 'radio' });
  const id = useId()

  return <label htmlFor={ id } className={
    `inline-flex items-center space-x-2 min-h-[3rem] px-4 py-2 focus-within:bg-orange-50
    ${ field.checked ? "bg-gray-50 global-checked" : "bg-gray-100 global-unchecked" }`
  }>


    <input
      type="radio"
      className={ `global-radio ${ error.visible ? "border-red-500" : null }` }
      id={ id }
      {...field}
      {...props}

    />
    <span>{ label }</span>
  </label>
}