import Label from "./Label";
import { useId } from "@react-aria/utils";
import { useField, useFormikContext } from "formik";
export default function Radio({ label, totalItems, index, ...props }){
  const [field, meta] = useField({ ...props, type: 'radio' });

  const id = useId()
  const { submitCount } = useFormikContext()
  const hasError = !!meta.error && submitCount > 0

  return <Label className={
    `inline-flex items-center space-x-2 min-h-[3rem] px-4 py-2 focus-within:bg-orange-50
    ${ field.checked ? "bg-gray-50 global-checked" : "bg-gray-100 global-unchecked" }`
  }>
    <input
      type="radio"
      className={ `global-radio ${hasError ? "border-red-500" : null }` }
      id={ id }
      {...field}
      {...props}
    />
    <span>{ label }</span>
  </Label>
}