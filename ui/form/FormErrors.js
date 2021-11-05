import { forwardRef, useEffect, useRef, useState } from "react"
import { useFormikContext } from "formik";
import AccessibleSvg from "ui/components/AccessibleSvg";
import ErrorIcon  from "public/icon/error.svg"

export default function FormErrors() {

  const context = useFormikContext()
  const ref = useRef()

  const [errorList, setErrorList] = useState([])
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!context.isValid && context.submitCount > 0) {

      if (context.submitCount !== count) {
        ref.current.focus()
      }
      setErrorList(Object.values(context.errors))
      // errorList.current.scrollIntoView({ behavior: 'smooth' })
      setCount(context.submitCount)
    }

  }, [context, count])

  return !context.isValid && context.submitCount > 0
    ? <div tabIndex="-1" ref={ ref } style={{ scrollMarginTop: '2rem' }} className="bg-red-500 text-white p-4 rounded-xl flex items-center">
        <AccessibleSvg alt="" className="mr-2"><ErrorIcon className="text-white "/></AccessibleSvg>
        { errorList.length > 1 ? `There are ${ errorList.length } errors` : 'There is 1 error' } on the combo order form
        {/* { errorList.map(item => item) } */}
      </div>
    : null
}
