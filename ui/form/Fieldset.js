import React, { useEffect } from "react";
import FieldError from "./FieldError"
import { useField } from "formik"
import clsx from "clsx"
import { useId } from "@react-aria/utils";

function LegendError(meta){
  const { touched, error }  = meta
  return touched && error ? <span className="sr-only">{ error }</span> : null
}

export default function Fieldset({ label, name, instructions, children, className, type = "checkbox" }){

  const [field, meta] = useField({ name, type });
  const totalItems = React.Children.count(children)

  const newChildren = React.Children.map(children, (child, index) => React.cloneElement(child, { ...child.props, index: index+1, totalItems, name } ))

  return (
    <fieldset
      aria-invalid={!!meta.touched && !!meta.error}
      className={ clsx("flex flex-col", className) }
      >
      <legend className="font-bold text-lg">
        { label }
        <LegendError meta={ meta } />
      </legend>

      { !!meta.error && !!meta.touched
        ? <FieldError {...meta} name={ name } srHidden={ true } className="mt-1" />
        : instructions ? <p className="text-gray-700">{ instructions }</p> : null
      }

      <div className="border border-gray-200 rounded-xl flex flex-col overflow-hidden mt-2">
        { newChildren }
      </div>

    </fieldset>
  )
}