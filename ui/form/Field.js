import React from "react"
import { useField } from 'formik';
import FieldError from "./FieldError"
import Label from "./Label"

export default function Field({ label, children, ...props }) {
  const [field, meta] = useField(props);

  const newChildren = React.Children.map(children, (child) => {
    if (child?.type?.name === "Label") return child;

    if (!React.isValidElement(child)) return child;

    return React.cloneElement(child, { field, meta, ...props })

  })

  return (
    <div className="flex flex-col py-4">
      <Label {...props}>{ label }</Label>
      { newChildren }
      <FieldError {...meta} {...props} className="mt-1" />
    </div>
  )
}