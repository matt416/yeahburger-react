import Label from "./Label";
import { useId } from "@react-aria/utils";
import { useField } from "formik";
export default function Radio({ label, totalItems, index, ...props }){
  const [field, meta] = useField({ ...props, type: 'radio' });

  const id = useId()

  return <Label className={
    `inline-flex items-center space-x-2 min-h-[3rem] px-4 py-2 focus-within:bg-orange-50
    ${ field.checked ? "bg-white global-checked" : "bg-gray-50 global-unchecked" }`
  }>
    <input
      type="radio"
      className="global-radio"
      id={ id }
      {...field}
      {...props}
    />
    <span>{ label }</span>
  </Label>
}