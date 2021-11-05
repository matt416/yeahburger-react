import React from "react"
import FieldError from "./FieldError"
import Label from "./Label"

export default function Field({ label, meta, children, ...props }) {

  return (
    <div className="flex flex-col py-4">
      <Label {...props} className="mb-2">{ label }</Label>

      { children }
      <FieldError {...meta} {...props} className="mt-1" />
    </div>
  )
}