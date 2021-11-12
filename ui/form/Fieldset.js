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

  const { error } = useField({ name, value, type });

  // const totalItems = React.Children.count(children)

  const newChildren = React.Children.map(children, (child, index) => {
    const id = index === 0 ? name : null // Give the first child element a focusable id

    return React.cloneElement(child, { ...child.props, id, name } )

  })

  const errorClassList = error.visible ? "border-red-500" : null

  return (
    <fieldset
      aria-invalid={ error.visible }
      id={ `${name}-fieldset` }
      className={ clsx("flex flex-col", className) }
      >
      <legend className="font-bold text-lg w-full">
        <div className="inline-flex w-full items-center">
        { label }
        {/* <Required required={ required } srOnly={ true } /> */}
        <Required required={ required } className="ml-auto mr-0" />
        <AccessibleLegendError error={ error } />
        </div>
      </legend>

      <div className="text-gray-700 inline-flex items-center w-full justify-between">
      { error.visible
        ? <ErrorField error={ error } name={ name } srHidden={ true } />
        : instructions ? <p className="inline-flex items-center" id={ `${name}-instructions` }> { instructions }</p> : null
      }
      </div>

      <div className={`border border-gray-200 rounded-xl flex flex-col overflow-hidden mt-2 ${errorClassList}`}>
        { newChildren }
      </div>

    </fieldset>
  )
}
//<Valid show={ valid }/>