import { forwardRef, useEffect, useRef, useState } from "react"
import { useFormikContext } from "formik";
import AccessibleSvg from "ui/components/AccessibleSvg";
import ErrorIcon  from "public/icon/error.svg"
import Head from "next/head"
export default function ErrorSummary() {

  const { isValid, errors, submitCount } = useFormikContext()
  const ref = useRef()

  const [count, setCount] = useState(0)

  useEffect(() => {

    if (!isValid && submitCount > 0) {

      if (submitCount !== count) {
        // Submit was attempted and there are errors
        ref.current.focus()

      }
      setCount(submitCount)

    }

  }, [isValid, submitCount, errors, count])

  const errorCount = Object.keys(errors).length

  return !isValid && submitCount > 0
    ? <div tabIndex="-1" ref={ ref } style={{ scrollMarginTop: '2rem' }} role="alert" className="bg-red-600 text-white p-4 rounded-xl" aria-relevant="additions">

      <h2 className="flex items-center font-bold text-md mb-2">
        <AccessibleSvg alt="Error message" aria-hidden="true" className="mr-2"><ErrorIcon className="text-white "/></AccessibleSvg>
        { errorCount > 1 ? `There are ${errorCount} errors` : 'There is 1 error' }
      </h2>
      <ol>
        { Object.keys(errors).map(key => <li key={ `error-${key}` }><a href={`#${key}`} className="underline">{ errors[key] }</a></li>) }
      </ol>
      </div>
    : null
}
