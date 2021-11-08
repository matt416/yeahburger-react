import React, { useEffect } from "react";
import ErrorField from "./ErrorField"
import { useField, useFormikContext } from "formik"
import clsx from "clsx"
import { useId } from "@react-aria/utils";

function AccessibleLegendError({showError, error}){
  return showError ? <span className="sr-only">{ error }</span> : null
}

export default function Fieldset({ label, name, instructions, children, className, type = "checkbox" }){

  const [field, meta] = useField({ name, type });
  const { submitCount } = useFormikContext()

  const totalItems = React.Children.count(children)

  const newChildren = React.Children.map(children, (child, index) => React.cloneElement(child, { ...child.props, index: index+1, totalItems, name } ))

  const showError = !!meta.error && submitCount > 0
  const errorClassList = showError ? "border-red-500" : null

  return (
    <fieldset
      aria-invalid={showError}
      id={ name }
      className={ clsx("flex flex-col", className) }
      >
      <legend className="font-bold text-lg">
        { label }
        <AccessibleLegendError showError={ showError } error={ meta.error } />
      </legend>

      { showError
        ? <ErrorField showError={ showError } error={ meta.error } name={ name } srHidden={ true } className="mt-1" />
        : instructions ? <p className="text-gray-700">{ instructions }</p> : null
      }

      <div className={`border border-gray-200 rounded-xl flex flex-col overflow-hidden mt-2 ${errorClassList}`}>
        { newChildren }
      </div>

    </fieldset>
  )
}