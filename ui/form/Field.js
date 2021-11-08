import { useFormikContext } from "formik"
import React from "react"
import ErrorField from "./ErrorField"
import Label from "./Label"

export default function Field({ label, meta, children, ...props }) {

  const { submitCount } = useFormikContext

  const showError = !!meta.error && !!meta.touched && submitCount > 0



  return (
    <div className="flex flex-col py-4">
      <Label {...props} className="mb-2">{ label }</Label>

      { children }
      <ErrorField showError={ showError } error={ meta.error } {...props} className="mt-1" />
    </div>
  )
}