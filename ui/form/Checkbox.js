import Label from "./Label";
import { useId } from "@react-aria/utils";
import { useField } from "formik";
export default function Checkbox({ label, totalItems, index, ...props }){
  const [field, meta] = useField({ ...props, type: 'checkbox' });

  const id = useId()

  return <Label className={
    `inline-flex items-center space-x-2 min-h-[3rem] px-4 py-2 focus-within:bg-orange-50
    ${ field.checked ? "bg-white global-checked" : "bg-gray-50 global-unchecked" }`
  }>
    <input
      type="checkbox"
      className="global-checkbox mr-2"
      id={ id }
      {...field}
      {...props}
    />
    { label }
  </Label>
}
// Total item count is not reading properly in VoiceOver
// aria-label={ `${label} (${index} of ${totalItems})` }