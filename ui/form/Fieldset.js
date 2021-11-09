import React from "react";
import ErrorField from "./ErrorField"
import useField  from "./useField"
import clsx from "clsx"
import Required from "./Required";
import Valid from "./Valid";

function AccessibleLegendError({ error }){
  return error.visible ? <span className="sr-only">{ error.message }</span> : null
}

export default function Fieldset({ label, name, value, instructions, required = false, children, className, type = "checkbox" }){

  const { field, error, valid } = useField({ name, value, type });

  const totalItems = React.Children.count(children)

  const newChildren = React.Children.map(children, (child, index) => React.cloneElement(child, { ...child.props, index: index+1, totalItems, name } ))

  const errorClassList = error.visible ? "border-red-500" : null

  return (
    <fieldset
      aria-invalid={ error.visible }
      id={ name }
      className={ clsx("flex flex-col", className) }
      >
      <legend className="font-bold text-lg flex items-center">
        { label }
        <AccessibleLegendError error={ error } />
        <Required required={ required } srOnly={ true } />
      </legend>

      <div className="text-gray-700 inline-flex items-center w-full justify-between">
      { error.visible
        ? <ErrorField error={ error } name={ name } srHidden={ true } />
        : instructions ? <p className="inline-flex items-center"><Valid show={ valid }/> { instructions }</p> : null
      }
      <Required required={ required } className="ml-2" aria-hidden="true" />
      </div>

      <div className={`border border-gray-200 rounded-xl flex flex-col overflow-hidden mt-2 ${errorClassList}`}>
        { newChildren }
      </div>

    </fieldset>
  )
}